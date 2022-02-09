import React, { useContext, useEffect, useState } from "react";
import ProductCarousel from "./ProductCarousel";
import { filterContext, loadingContext } from "./../store/data-context";
const ProductCategory = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const products = useContext(filterContext);
  const productsNames = products.map((product) => {
    return product.product_name;
  });
  const nonRepeatedProductsNames = [...new Set(productsNames)];

  useEffect(() => {
    nonRepeatedProductsNames.map((product) => {
      const x = products.filter((prod) => {
        return prod.product_name === product;
      });
      return setSelectedProducts((pre) => [...pre, x]);
    });
  }, [products]);

  const loading = useContext(loadingContext);

  return (
    <div>
      {/* {console.log(products)} */}
      {/* {console.log(nonRepeatedProductsNames)} */}

      {!loading &&
        products.length > 0 &&
        selectedProducts.map((productList, i) => {
          return (
            <>
              <h3>{productList[i].product_name}</h3>
              <ProductCarousel products={productList} /> 
              {/* use if condition to choose what will display */}
            </>
          );
        })}
      {/* <ProductCarousel products={products} /> */}
    </div>
  );
};

export default ProductCategory;
