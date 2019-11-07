const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.APP_ID, process.env.API_KEY);
const index = client.initIndex(process.env.INDEX_NAME);

const main = async () => {
  const { hits } = await index.search({ query: 'JavaScript' });
  console.log(hits);
}

main();
