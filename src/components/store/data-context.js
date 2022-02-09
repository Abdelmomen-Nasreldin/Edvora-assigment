import axios from "axios";
import React, { useEffect, useState } from "react";
import { groupProductsBy } from './../../helpers/utils';
export const dataContext = React.createContext();
export const setFilterContext = React.createContext();
export const filterContext = React.createContext();
export const loadingContext = React.createContext();
export const errorContext = React.createContext();
const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    // setError(false)
    axios
      .get(`https://assessment-edvora.herokuapp.com/`)
      .then((response) => {
        setProducts(groupProductsBy(response.data, "product_name"));

        // setFilteredProducts(response.data);
        
      })
      .catch((err) => {
          console.log(err)
      })
      .finally(() => {
        setLoading(false);   
      });
  }, []);

  return (
    <dataContext.Provider value={products}>
    {/* <setFilterContext.Provider value={setFilteredProducts}>
    <filterContext.Provider value={filteredProducts}> */}
      <loadingContext.Provider value={loading}>
        {/* <errorContext value={error}> */}
            {props.children}
            {/* </errorContext> */}
      </loadingContext.Provider>
    {/* </filterContext.Provider>
    </setFilterContext.Provider> */}
    </dataContext.Provider>
  );
};

export default DataProvider;
