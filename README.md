kayac-html5-starter
====

## 事前に用意するもの
- node.js (version 12以上)

## 環境構築

開発に使うnpmパッケージをインストール
```bash
$ yarn
```

## ファイル構成

- `README.md`
  - このファイルです。
- `package.json`
  - 依存するnpmパッケージに関する設定ファイルです。
- `webpack.config.js`
  - webpackに関する設定ファイルです。
- `dist`
  - Web公開されるファイルの置き場所です。 (`yarn build` 実行までは空の状態です)
- `src/scss`, `src/js`, `src/pug`
  - ビルドに必要な各種ソースコードです。

## 開発手順

開発時に必要なタスクは、npm scriptおよびwebpack.config.jsで管理されています。
shellから以下のコマンドを実行することで、各種ビルド・タスク実行が可能です。

- `yarn dev`
  - 開発用ブラウザを立ち上げ、その後ソースコードに修正があれば自動ビルド・自動ブラウザ更新します
  - 基本的には、このコマンドを実行しておくだけで開発が可能なはずです。
- `yarn build`
  - ファイルをビルドします。`webpack-dev-server`では、ビルドファイルはサーバー側で保持します。
    そのため、ファイルとして出力するには `yarn build` が必要になります。

## 使用言語

- HTMLテンプレート: [pug](https://pugjs.org/api/getting-started.html)
- CSSメタ言語: [Sass(scss)](http://sass-lang.com/)
- Javascript: [TypeScript](https://www.typescriptlang.org/)

## 依存ライブラリ

`yarn`でインストールされるライブラリ（一部）です。
全てを理解していなくても、開発は問題なく行えますが、挙動に問題がある場合・カスタマイズしたい場合などに参照してみてください。

- [Reset CSS](http://meyerweb.com/eric/tools/css/reset/)
- [PostCSS](http://postcss.org/)
- [webpack](https://webpack.js.org/)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [webpack-route-data-mapper](https://github.com/fnobi/webpack-route-data-mapper)
  - 指定したテンプレートをまとめてhtmlとして書き出し対象にする（html-webpack-pluginのラッパー）
  - オプションを組み合わせることで、jsonデータに基いてHTMLを大量生成する、といった使い方も可能。詳しくはリンク先のREADMEにて。
