const { readFile } = require('fs').promises;
const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.APP_ID, process.env.UPDATE_API_KEY);
const index = client.initIndex(process.env.INDEX_NAME);

const main = async () => {
  const object = JSON.parse(await readFile('./sample.json', 'utf8'));
  await index.addObject(object);
  console.log('Upload completed');
}

main();
