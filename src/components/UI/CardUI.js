import React from "react";
import classes from "./CardUI.module.css";

const CardUI = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default CardUI;
