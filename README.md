# [Algoliaでリアルタイム検索を実装する](https://app.codegrid.net/series/2019-algolia)

[CodeGrid](http://www.codegrid.net/)の「[Algoliaでリアルタイム検索を実装する](https://app.codegrid.net/series/2019-algolia)」の記事内で使用しているサンプルです。

各サンプルの解説については上記記事をご確認ください。

## 動作環境

Node.js 12.4.0
npm 6.11.3

## サンプルの内容

各ディレクトリのサンプルは以下のような仕様です。

- `demo/1`: Node.js から Algolia の API を実行します
- `demo/2`: ブラウザから Algolia の API を実行して検索を行う画面を確認できます

## サンプルの使い方

### 環境変数の設定

- `.env.example`をコピーし、`.env`ファイルを作成します
- `.env`内に、 Algolia の API 情報を記述します
  - `APP_ID`: Algolia の Application ID を指定します
  - `API_KEY`: Search-Only API key を指定します
  - `INDEX_NAME`: 作成した Index の名前を指定します
  
### demo/1

- `npm start`を実行すると、検索結果の JSON が、コンソールに表示されます

### demo/2、demo/3、demo/4

- `npm start`を実行すると、ローカルサーバーが `http://localhost:1234/` で起動します
