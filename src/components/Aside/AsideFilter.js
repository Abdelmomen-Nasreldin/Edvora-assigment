import React from "react";
import CardUI from "../UI/CardUI";
import classes from "./AsideFilter.module.css";
import SelectSearch from "./SelectSearch";

const AsideFilter = ({
  products,
  productName,
  city,
  state,
  setProductName,
  setCity,
  setState,
}) => {
 

  if (!products) return "loading...";
 
  const productNameOptions = [
    ...new Set(products.map((product) => product.product_name)),
  ];
  const productStateOptions = [
    ...new Set(
      products
        .filter((product) => product.product_name === productName)
        
        .map((product) => product.address.state)
    ),
  ];
  const productCitiesOptions = [
    ...new Set(
      products
        .filter((product) => product.product_name === productName)
        .filter((product) => product.address.state === state)
        .map((product) => product.address.city)
    ),
  ];
  
 

  return (
    <CardUI className={`${classes.filter__container}`}>
      <h2>Filter</h2>
      <div className={classes.select__search}>
        <SelectSearch
          options={productNameOptions}
          onSelect={(e) => {
            setProductName(e.target.value);
            setCity("");
            setState("");
          }}
          selected={productName}
          defaultValue={`Product`}
        />
        <SelectSearch
          options={productStateOptions}
          onSelect={(e) => {
            setState(e.target.value);
            setCity("");
          }}
          selected={state}
          defaultValue={`State`}
        />
        <SelectSearch
          options={productCitiesOptions}
          onSelect={(e) => {
            setCity(e.target.value);
          }}
          selected={city}
          defaultValue={`City`}
        />
        
      </div>
    </CardUI>
  );
};

export default AsideFilter;
