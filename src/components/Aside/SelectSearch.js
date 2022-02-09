import React, { useState } from "react";
import classes from './SelectSearch.module.css'
const SelectSearch = ({ products, onAnswer }) => {
  const [selected, setSelected] = useState("");
  const choisedAnswer = (e) => {
    setSelected(e.target.value);
    onAnswer(e.target.value);
  };
  return (
    <div className={`${classes.selectBox}`}>
      <select value={selected} onChange={choisedAnswer}>
        {products &&
          products.map((product) => {
            return (
              <>
                <option value={product}>{product}</option>
              </>
            );
          })}
      </select>
    </div>
  );
};

export default SelectSearch;
