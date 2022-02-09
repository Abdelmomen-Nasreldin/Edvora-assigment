import React from 'react';
import ProductCategory from './ProductCategory';
import classes from './MainContent.module.css'

const MainContent = () => {
  return <div className={`${classes.main__container}`}>
      <h1>Edvora</h1>
      <h3>Products</h3>
      <ProductCategory />
  </div>;
};

export default MainContent;
