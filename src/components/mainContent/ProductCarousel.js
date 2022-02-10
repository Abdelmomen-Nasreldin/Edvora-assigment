import React from "react";
import CardUI from "./../UI/CardUI";
import ProductCard from "./ProductCard";
import classes from "./ProductCarousel.module.scss";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const ProductCarousel = ({ products }) => {
  return (
    <CardUI className={`${classes.card}`}>
      <Slider {...settings}>
        
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div>
             
              <ProductCard
                key={new Date(product.time)}
                name={product.product_name}
                brand={product.brand_name}
                price={product.price}
                city={product.address.city}
                state={product.address.state}
                image={product.image}
                date={product.date}
                discription={product.discription}
              />
              
            </div>
          );
        })}
      {products.length === 0 && <p>nothing to display</p>}
      </Slider>
    </CardUI>
  );
};

export default ProductCarousel;
