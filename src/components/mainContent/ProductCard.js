import React from "react";
import CardUI from "../UI/CardUI";
import classes from './ProductCard.module.scss';
const ProductCard = ({ name, brand, price, city, state, image, date, discription }) => {
  return (
    <CardUI className={`${classes.container}`}>
        <div className={`${classes.cardFirst}`}>
            <div className={`${classes.cardFirst__image}`}>
                {/* <img src={image} alt="test" style={{width:"100px"}}/> */}
                <img src={image} alt="test" />
            </div>
            <div className={`${classes.cardFirst__secDiv}`}>
                <p className={`${classes.name}`}>{name}</p>
                <p className={`${classes.brand}`}>{brand}</p>
                <p className={`${classes.price}`}>$ {price}</p>
             
            </div>
        </div>
        <div className={`${classes.cardSecond}`}>
            <span>{`${city}, ${state}`}</span>
            <span>date: </span>
        </div>
        <div className={`${classes.cardThird}`}>{discription}</div>
    </CardUI>
  );
};

export default ProductCard;
