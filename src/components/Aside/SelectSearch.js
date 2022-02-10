import React from "react";
import classes from './SelectSearch.module.css'
const SelectSearch = ({ options, onSelect, selected, defaultValue }) => {
  return (
    <div className={`${classes.selectBox}`}>
      <select value={selected} onChange={onSelect}>
      <option value={``}>{defaultValue}</option>
        {
        options && 
          options.map((option) => {
            return (
              <>
                <option value={option}>{option}</option>
              </>
            );
          })}
      </select>
    </div>
  );
};

export default SelectSearch;
