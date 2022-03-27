// import React from 'react';
// import {connect} from 'react-redux'
import fetch from '../helpers/fetch';
import FilterBar from '../components/filterbar';
import ProductList from '../components/productlist';

function Collectionpage() {
  return (
    <div className="collection-root">
      <div className="filter-section">
        <FilterBar />
      </div>
      <div className="collection-product-list">
        <ProductList />
      </div>
    </div>
  );
}

export default Collectionpage;

export function getCollection(path) {
  return fetch(`${process.env.HOST}/api/products/index`);
}
