# [Algoliaでリアルタイム検索を実装する](https://app.codegrid.net/series/2019-algolia)

[CodeGrid](http://www.codegrid.net/)の「[Algoliaでリアルタイム検索を実装する](https://app.codegrid.net/series/2019-algolia)」の記事内で使用しているサンプルです。

各サンプルの解説については上記記事をご確認ください。

## 動作環境

Node.js 12.4.0
npm 6.11.3

## サンプルの内容

各ディレクトリのサンプルは以下のような仕様です。

- `demo/1`: Node.js から Algolia の API を実行します

## サンプルの使い方

### demo/1

- `.env.example`をコピーし、`.env`ファイルを作成します
- `.env`内に、 Algolia の API 情報を記述します
  - `APP_ID`: Algolia の Application ID を指定します
  - `API_KEY`: Search-Only API key を指定します
  - `INDEX_NAME`: 作成した Index の名前を指定します
- `npm start`を実行すると、検索結果の JSON が、コンソールに表示されます
