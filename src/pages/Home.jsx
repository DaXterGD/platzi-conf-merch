import React from 'react';
import initialState from '../initialState'
import Products from '@containers/Products';

const Home = () => {
  return (
    <Products products={initialState.products} />
  );
};

export default Home;
