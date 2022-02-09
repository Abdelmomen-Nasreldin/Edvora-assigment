import React, { useContext, useEffect, useState } from "react";
import CardUI from "../UI/CardUI";
import classes from "./AsideFilter.module.css";
import SelectSearch from "./SelectSearch";
import { dataContext, setFilterContext } from "./../store/data-context";

const AsideFilter = () => {
  const products = useContext(dataContext);
  const setFilteredProducts = useContext(setFilterContext);

  const [nonRepeatedProductsNames, setNonRepeatedProductsNames] = useState([]);
  const [nonRepeatedProductsCities, setNonRepeatedProductsCities] = useState(
    []
  );
  const [nonRepeatedProductsStates, setNonRepeatedProductsStates] = useState(
    []
  );
  // const [choisedName, setChoisedName] = useState('')
  useEffect(() => {
    const productsNames = products.map((product) => {
      return product.product_name;
    });
    const productsCities = products.map((product) => {
      return product.address.city;
    });

    const productsStates = products.map((product) => {
      return product.address.state;
    });
    setNonRepeatedProductsNames([...new Set(productsNames)]);
    setNonRepeatedProductsCities([...new Set(productsCities)]);
    setNonRepeatedProductsStates([...new Set(productsStates)]);
  }, [products]);
  const nameHandeler = (answeredName) => {
    const productsFiltered = products.filter((product) => {
      return product.product_name === answeredName;
    });
    const cities = productsFiltered.map((product) => {
      return product.address.city;
    });
    const states = productsFiltered.map((product) => {
      return product.address.state;
    });
    setFilteredProducts(productsFiltered)
    setNonRepeatedProductsCities(cities);
    setNonRepeatedProductsStates(states);
  };
  const cityHandeler = (answeredCity) => {
    const productsFiltered = products.filter((product) => {
      return product.address.city === answeredCity;
    });
    const states = productsFiltered.map((product) => {
      return product.address.state;
    });
    setFilteredProducts(productsFiltered)
    setNonRepeatedProductsStates(states);
  };
const stateHandeler = (answeredState) =>{
  const productsFiltered = products.filter((product) => {
    return product.address.state === answeredState;
  });
  setFilteredProducts(productsFiltered)
}
  return (
    <CardUI className={`${classes.filter__container}`}>
      <h2>Filter</h2>
      <div className={classes.select__search}>
        <SelectSearch
          products={nonRepeatedProductsNames}
          onAnswer={nameHandeler}
        />
        <SelectSearch
          products={nonRepeatedProductsCities}
          onAnswer={cityHandeler}
        />
        <SelectSearch products={nonRepeatedProductsStates} onAnswer={stateHandeler}/>
      </div>
    </CardUI>
  );
};

export default AsideFilter;
