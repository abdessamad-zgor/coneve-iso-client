import React from 'react';
import fetch from '../helpers/fetch';

function Collectionpage() {
  return <div></div>;
}

export default Collectionpage;

export function getCollection(path) {
  return fetch(`${process.env.HOST}/api${path}`);
}
