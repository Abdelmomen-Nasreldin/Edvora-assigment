import React, { useContext } from "react";
import CardUI from "./../UI/CardUI";
import ProductCard from "./ProductCard";
import classes from './ProductCarousel.module.scss'
import { filterContext, loadingContext } from "./../store/data-context";

const ProductCarousel = ({products}) => {
  // const products = useContext(filterContext);
  const loading = useContext(loadingContext);
  // const newProducts = products.slice(0, 7)
  return (
    <CardUI className={`${classes.card}`}>
      {!loading &&
        products.length > 0 &&
        products.map((product) => {    
          // console.log(new Date(product.time))
          return (
            <>
              <ProductCard key={new Date(product.time)}
                name={product.product_name}
                brand={product.brand_name}
                price={product.price}
                city={product.address.city}
                state={product.address.state}
                image = {product.image}
                date={product.date}
                discription={product.discription}
              />
            </>
          );
        })}
      {!loading && products.length === 0 && <p>nothing to display</p>}
      {loading && <p>loading...</p>}
    </CardUI>
  );
};

export default ProductCarousel;
