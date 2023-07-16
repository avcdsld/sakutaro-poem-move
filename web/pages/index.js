import Head from 'next/head';
import { useEffect } from 'react';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import { ConnectButton, useWallet } from '@suiet/wallet-kit';
import styles from '../styles/Home.module.css';

export default function Home() {
  const provider = new JsonRpcProvider();
  const { connected, account, signAndExecuteTransactionBlock } = useWallet();

  const sakutaroPoemPackageID = '0x77f06a9155f75e35ac11c5dfae1d6c391eabd326746542757b3ab9b46f9d14e5';
  const sakutaroPoemSupplyID = '0x3d1389a2155b71bf6be4e502efa32c75aa250243421f67ea2b93e94056cc2061';

  const fetchObjects = async () => {
    if (account?.address == null) {
      return;
    }
    const structType = `${sakutaroPoemPackageID}::sakutaro_poem::SakutaroPoem`;
    const objects = await provider.getOwnedObjects({
      owner: account?.address,
      filter: {
        StructType: structType
      },
      options: {
        showType: true,
        showContent: true,
        showDisplay: true,
      }
    })
    console.log(objects);
  }

  const mint = async () => {
    try {
      const tx = new TransactionBlock();
      tx.moveCall({
        target: `${sakutaroPoemPackageID}::sakutaro_poem::mint`,
        arguments: [
          tx.pure(sakutaroPoemSupplyID),
        ]
      });

      const resData = await signAndExecuteTransactionBlock({
        transactionBlock: tx,
      });

      console.log('success', resData);
      if (resData && resData.digest && resData.digest) {
        const module = "sakutaro_poem";
        const NETWORK = "devnet";
        console.log(`https://explorer.sui.io/txblock/${resData.digest}?module=${module}&network=${NETWORK}`);
      }
    } catch (e) {
      console.error('failed', e);
    }
  }

  useEffect(() => {
    (async () => {
      if (connected) {
        fetchObjects();
      }
    })()
  }, [connected]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sakutaro Poems NFT on Sui</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Sakutaro Poems NFT on Sui
        </h1>

        <div style={{ marginTop: 48 }}>
          <ConnectButton />
        </div>

        {connected && <div style={{ marginTop: 72 }}><button onClick={mint}>Mint</button></div>}

        <div className={styles.desc} style={{ marginTop: 72 }}>
          <a href="https://sakutaro-poem-nft.web.app/en" target='_blank'>
            Go to the project page
          </a>
        </div>
      </main >

      <footer>
        Created by Ara @arandoros
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          color: white;
          width: 100%;
          height: 100px;
          border-top: 0.5px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div >
  )
}
