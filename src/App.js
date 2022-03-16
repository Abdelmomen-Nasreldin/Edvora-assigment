
import MainContent from "./components/mainContent/MainContent";
import AsideFilter from "./components/Aside/AsideFilter";
import { useState } from "react";
import { useContext } from "react";
import { groupProductsBy } from "./helpers/utils";
import { dataContext } from "./components/store/data-context";
import './App.css'
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
        if (state) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.address.state === state;
            });
        }
        if (city) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.address.city === city;
            });
        }
    }

    return (
        <div className={`App `}>
             <div className={` container-fluid`}>
            <div className="row p-3">
                <div className="col-12 col-lg-3 d-flex justify-content-center">
                    <AsideFilter
                        // className="col-md-3"
                        products={products}
                        productName={productName}
                        city={city}
                        state={state}
                        setProductName={setProductName}
                        setCity={setCity}
                        setState={setState}
                    />
                </div>
                <div className="col-12 col-lg-9">
                    <MainContent
                        // className="col-md-9"
                        groups={groupProductsBy(
                            filteredProducts,
                            "product_name"
                        )}
                    />
                </div>
            </div>
            </div>
        </div>
    );
}

export default App;
