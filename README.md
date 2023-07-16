# ✒️ “Sakutaro Poem NFTs” on Sui

[English] [\[日本語\]](./README_JA.md)

https://github.com/avcdsld/sakutaro-poem-move/assets/10495516/7e938096-4996-4e4c-b55f-f74f8fd9785b

## 🔍 What is this?

- Experimental full-on-chain NFT and Dapp
- Sui version of the project “Sakutaro Poems NFT” deployed on multiple blockchains (Note: This time, I have developed only the Sui NFT part of this project. The overall website and other chains of NFTs are existing.)

## 🌐 Website

- https://sakutaro-poem-nft.web.app/en

  Note: The Sui version was developed for this release.

## 🎖️ Achievements

- Implemented full-on-chain NFT on Sui using Move language and deployed it to Mainnet.
- Created Sui NFTs where the content changes based on the owner's address.
- Successfully tested a Move language-based [Base64 library](https://github.com/movefuns/movefuns/blob/07ff5e27babcc9ffcb8dfd1db446a086ad116cb9/stdlib/sources/base64.move) on the Sui blockchain for the first time.
- These challenges will contribute to the future development of the Sui NFT project!

## 👨‍💻 Development Results

- Full-on-chain NFT contract
    - Specifications:
        - Limited to 39 pieces
        - Anyone can mint them
        - SVG images with poems are generated entirely on-chain
        - The poem changes based on the owner's address
        - SVG images are provided in Base64 format using the Object Display Standard
    - Source code:
        - sakutaro_poem.move: [./contracts/sakutaro_poem/sources/sakutaro_poem.move](./contracts/sakutaro_poem/sources/sakutaro_poem.move)
        - The base64.move code was validated and used from [movefuns' repository](https://github.com/movefuns/movefuns/blob/07ff5e27babcc9ffcb8dfd1db446a086ad116cb9/stdlib/sources/base64.move)
    - Mainnet deployment information:
        - Package: https://suiexplorer.com/object/0x5b7964cf132015d66a79cfa248789204389e7fa7af0b8c4cb75a6b03c5877ea1
        - Shared object for minting: https://suiexplorer.com/object/0xdf35ed2fcc90bc1b1281e43461c9cc0ccad7456d8e9646e6d5de09076e8e5156
- Web application
    - Specifications:
        - Connects to a wallet to mint NFTs
        - Retrieves and displays SVG images of owned NFTs from the blockchain
    - Source code:
        - Minting feature / Image display feature: https://github.com/avcdsld/sakutaro-poem-nft/blob/main/packages/react-app/src/components/templates/MintButtonSui.tsx
        - Feasibility verification implementation: [./web](./web)
