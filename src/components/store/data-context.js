import axios from "axios";
import React, { useEffect, useState } from "react";
export const dataContext = React.createContext();
export const setFilterContext = React.createContext();
export const filterContext = React.createContext();
export const loadingContext = React.createContext();
export const errorContext = React.createContext();
const DataProvider = (props) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://assessment-edvora.herokuapp.com/`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <dataContext.Provider value={products}>
      <loadingContext.Provider value={loading}>
        {props.children}
      </loadingContext.Provider>
    </dataContext.Provider>
  );
};

export default DataProvider;
