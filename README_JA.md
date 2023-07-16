# ✒️「萩原朔太郎 詩の NFT」 - Sui Move バージョン

[\[English\]](./README.md) [日本語]

https://github.com/avcdsld/sakutaro-poem-move/assets/10495516/7e938096-4996-4e4c-b55f-f74f8fd9785b

## 🔍 これは何？

- 実験的なフルオンチェーン NFT および Dapp
- [「萩原朔太郎 詩の NFT」](https://sakutaro-poem-nft.web.app/en)という複数チェーンで展開しているプロジェクトの Sui バージョン （※ 今回開発したのは Sui の NFT の箇所です。Web サイト全体や他のチェーンの NFT は既存のものです）

## 🌐 ウェブサイト

- https://sakutaro-poem-nft.web.app

  ※今回開発したのは Sui バージョンのところ

## 🎖️ 達成したこと

- Move 言語で Sui のフルオンチェーン NFT を実装し、メインネットにデプロイできた
- 所有者のアドレスによって中身が切り替わる Sui NFT をつくれた
- Move 言語で書かれた [Base64 ライブラリ](https://github.com/movefuns/movefuns/blob/07ff5e27babcc9ffcb8dfd1db446a086ad116cb9/stdlib/sources/base64.move)を初めて Sui 上で動作検証できた
- これらのチャレンジは、今後の Sui NFT プロジェクトの発展に貢献するでしょう

## 👨‍💻 開発したもの

1. フルオンチェーンの NFT コントラクト
    - 仕様:
        - 39 個限定
        - 誰でも mint できる
        - 詩が書かれた SVG 画像は完全にオンチェーンで生成される
        - 所有者のアドレスによって詩が切り替わる
        - SVG 画像は Base64 変換されて Object Display Standard の形式で提供される
    - ソースコード:
        - sakutaro_poem.move: [./contracts/sakutaro_poem/sources/sakutaro_poem.move](./contracts/sakutaro_poem/sources/sakutaro_poem.move)
        - base64.move は [movefuns のコード](https://github.com/movefuns/movefuns/blob/07ff5e27babcc9ffcb8dfd1db446a086ad116cb9/stdlib/sources/base64.move) を検証 / 利用しました
    - Mainnet デプロイ情報:
        - Package: https://suiexplorer.com/object/0x5b7964cf132015d66a79cfa248789204389e7fa7af0b8c4cb75a6b03c5877ea1
        - Shared object for minting: https://suiexplorer.com/object/0xdf35ed2fcc90bc1b1281e43461c9cc0ccad7456d8e9646e6d5de09076e8e5156
2. ウェブアプリ
    - 仕様:
        - ウォレットに接続して NFT を mint できる
        - 所有している NFT の SVG 画像をオンチェーンから取得して表示できる
    - ソースコード:
        - mint 機能 / 画像表示機能: https://github.com/avcdsld/sakutaro-poem-nft/blob/main/packages/react-app/src/components/templates/MintButtonSui.tsx
        - フィージビリティ確認用の実装: [./web](./web)
