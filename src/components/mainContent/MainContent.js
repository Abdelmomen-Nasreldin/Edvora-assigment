import React from 'react';
import ProductCategory from './ProductCategory';
import classes from './MainContent.module.css'

const MainContent = ({groups}) => {
  return <div className={`${classes.main__container}`}>
      <h1>Edvora</h1>
      <h3>Products</h3>
      {
        groups.map(group =>{
          return(
            <>
            <ProductCategory name={group.name} products={group.products}/>
            </>
          )
        })
      }
  </div>;
};

export default MainContent;
