import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import "./Shoe.css";

class Shoe extends Component {
  render() {
    const items = this.props.sizes.map((item, index) => (
      <fragment>
        <li key={uuidv4()}>{item[0]}</li>
        <li key={uuidv4()}>{item[1]}</li>
      </fragment>
    ));
    return (
      <div className="col-lg-3">
        <h1>{this.props.name}</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Shoe;
