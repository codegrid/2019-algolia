const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.APP_ID, process.env.UPDATE_API_KEY);
const index = client.initIndex(process.env.INDEX_NAME);

const main = async () => {
  const { hits } = await index.browse({
    filters: 'title:フロントエンド・エンジニア',
  })
  const updated = hits.map(v => {
    return {
      ...v,
      title: 'Frontend Engineer',
    };
  });
  await index.addObjects(updated);
  console.log('Update completed');
}

main();
