import React, { Component } from "react";
import Shoe from "../Shoes/Shoe/Shoe";

class Shoes extends Component {
  render() {
    return this.props.shoes.map((shoe, index) => {
      return <Shoe name={shoe.name} sizes={shoe.sizes} />;
    });
  }
}

export default Shoes;
