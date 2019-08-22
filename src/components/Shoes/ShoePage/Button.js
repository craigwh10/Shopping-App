import React from "react";

const button = props => {
  return (
    <button className="btn btn-success btn-block">{props.children}</button>
  );
};

export default button;
