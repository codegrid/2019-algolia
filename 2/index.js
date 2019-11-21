const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.APP_ID, process.env.API_KEY);
const index = client.initIndex(process.env.INDEX_NAME);

const createContainer = hits => {
  const containerEl = document.createElement('ul');
  const childEls = hits.map(({name, kana, title, description}) => {
    const childEl = document.createElement('li');
    childEl.insertAdjacentHTML('afterbegin', `	
      <div>${name}</div>	
      <div>${kana}</div>	
      <div>${title}</div>	
      <div>${description}</div>	
    `);
    return childEl;
  });

  containerEl.append(...childEls);
  return containerEl;
};

const render = (resultEl, hits) => {
  const oldContainerEl = resultEl.querySelector('ul');
  const newContainerEl = createContainer(hits);

  if (oldContainerEl !== null) {
    resultEl.removeChild(oldContainerEl);
  }

  resultEl.append(newContainerEl);
};

const search = async query => {
  const { hits } = await index.search({ query });
  return hits;
};

const handleSearch = (searchEl, resultEl) => {
  searchEl.addEventListener('keyup', async (ev) => {
    const searchResult = await search(ev.target.value);
    render(resultEl, searchResult);
  }, false);
};

document.addEventListener('DOMContentLoaded', async () => {
  const searchEl = document.getElementById('searchBox');
  const resultEl = document.getElementById('result');

  handleSearch(searchEl, resultEl);
  render(resultEl, await search(''));
}, false);