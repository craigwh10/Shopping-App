import React from "react";
import SizeList from "../Shoe/SizeList";
import "./PageGenerator.css";

const generatePage = props => {
  return (
    <div className="shoePage">
      <h1>{props.shoeData.name}</h1>
      <h2>
        {props.shoeData.purpose.charAt(0).toUpperCase() +
          props.shoeData.purpose.slice(1)}
      </h2>
      <SizeList sizes={props.shoeData.sizes} />
    </div>
  );
};

export default generatePage;
