# [賢く使うStyleDocco導入ガイド](https://app.codegrid.net/entry/styledocco-1)

//シリーズ名とそのシリーズリンクを書きます。

[CodeGrid](http://www.codegrid.net/)の「[賢く使うStyleDocco導入ガイド](https://app.codegrid.net/entry/styledocco-1)」の記事内で使用しているサンプルです。

各サンプルの解説については上記記事をご確認ください。

## 動作環境

// 特に指定があれば書いてください。

Node.js 12.4.0
npm 6.11.3

## サンプルの内容

// ここまで詳しくなくても可。ですが、読者を増やすためには効果的です。

各ディレクトリのサンプルは以下のような仕様です。

- `demo/1`: Node.js から Algolia の API を実行します

## サンプルの使い方

// 記事の中で説明されていれば、必須事項ではありません。

### demo/1

- `.env.example`をコピーし、`.env`ファイルを作成します
- `.env`内に、 Algolia の API 情報を記述します
  - `APP_ID`: Algolia の Application ID を指定します
  - `API_KEY`: Search-Only API key を指定します
  - `INDEX_NAME`: 作成した Index の名前を指定します
- `npm start`を実行すると、検索結果の JSON が、コンソールに表示されます


