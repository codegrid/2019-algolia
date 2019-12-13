import React from 'react';
import algoliasearch from 'algoliasearch';
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-dom'

const client = algoliasearch(process.env.APP_ID, process.env.API_KEY);

function Hit({ hit: { name, kana, title, description } }){
  return (
    <>
      <div>{name}</div>
      <div>{kana}</div>
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
}

function App() {
  return (
    <InstantSearch
      indexName={process.env.INDEX_NAME}
      searchClient={client}
    >
      <SearchBox/>
      <Hits hitComponent={Hit}/>
    </InstantSearch>
  );
}

export default App;
