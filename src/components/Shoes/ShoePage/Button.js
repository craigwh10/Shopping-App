import React from "react";

const button = props => {
  return (
    <button
      className="btn btn-success btn-block"
      onClick={() => props.click()}
      // on Click, run the click in the props, and send the shoeData in the same props to the button
      // component, this way you can get the component to generate a button, and run the data thats sent
      // to it's props.
    >
      {props.children}
    </button>
  );
};

export default button;
