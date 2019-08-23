import React, { Component } from "react";
import Button from "../ShoePage/Button";
import SizeList from "./SizeList";
import "./Shoe.css";

class Shoe extends Component {
  render() {
    return (
      <div className="col-lg-3 shoeModule">
        <h1>{this.props.name}</h1>
        <p>{this.props.purpose}</p>
        <SizeList sizes={this.props.sizes} />
        <Button click={() => this.props.pageHandler()}>See more</Button>
      </div>
    );
  }
}

export default Shoe;
