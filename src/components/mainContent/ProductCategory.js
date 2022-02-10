import React from "react";
import ProductCarousel from "./ProductCarousel";
const ProductCategory = ({name, products}) => {
 
  return (
    <div>
      <h3>{name}</h3>
      <ProductCarousel products={products} /> 
    </div>
  );
};

export default ProductCategory;
