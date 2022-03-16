import React from "react";
import CardUI from "./../UI/CardUI";
import ProductCard from "./ProductCard";
import classes from "./ProductCarousel.module.scss";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 3,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 575,
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
