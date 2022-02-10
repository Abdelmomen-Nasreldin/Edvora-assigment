import classes from "./App.module.css";
import MainContent from "./components/mainContent/MainContent";
import AsideFilter from "./components/Aside/AsideFilter";
import { useState } from "react";
import { useContext } from "react";
import { groupProductsBy } from "./helpers/utils";
import { dataContext } from './components/store/data-context';

function App() {
  const products = useContext(dataContext);
  const [productName, setProductName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  if (!products) return "loading...";
  let filteredProducts = [...products];
  if (productName) {
     filteredProducts = products.filter((product) => {
      return product.product_name === productName;
    });
    if ( state) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.address.state === state;
      });
    }
     if ( city) {

    filteredProducts = filteredProducts.filter((product) => {
      return product.address.city === city;
    });
  }
 
  }
  
 
  return (
    <div className={`${classes.App}`}>
      <AsideFilter
        products={products}
        productName={productName}
        city={city}
        state={state}
        setProductName={setProductName}
        setCity={setCity}
        setState={setState}
      />
      <MainContent groups={groupProductsBy(filteredProducts, "product_name")} />

    </div>
  );
}

export default App;
