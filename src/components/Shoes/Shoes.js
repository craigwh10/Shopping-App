import React, { Component } from "react";
import Shoe from "../Shoes/Shoe/Shoe";

class Shoes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.shoes.map((shoe, index) => {
            return <Shoe name={shoe.name} sizes={shoe.sizes} />;
          })}
        </div>
      </div>
    );
  }
}

export default Shoes;
