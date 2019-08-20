import React, { Component } from "react";
import uuidv4 from "uuid/v4";

class Shoe extends Component {
  render() {
    const items = this.props.sizes.map((item, index) => (
      <li key={uuidv4()}>{item}</li>
    ));
    console.log(items.props);
    return (
      <div className="module">
        <h1>{this.props.name}</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Shoe;
