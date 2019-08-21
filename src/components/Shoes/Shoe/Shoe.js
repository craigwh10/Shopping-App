import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import "./Shoe.css";

class Shoe extends Component {
  classHandler = e => {
    const classes = ["list-group-item"];

    if (e <= 3) {
      classes.push("list-group-item-danger");
      return [e, classes];
    } else {
      classes.push("list-group-item-success");
      return [e, classes];
    }
  };

  render() {
    const items = this.props.sizes.map((item, index) => (
      <ul key={uuidv4()} className="list-group list-group-horizontal">
        <li className="list-group-item" key={uuidv4()}>
          {item[0]}
        </li>
        <li className={this.classHandler(item[1])[1].join(" ")} key={uuidv4()}>
          {this.classHandler(item[1])[0]}
        </li>
      </ul>
    ));
    return (
      <div className="col-lg-3 shoeModule">
        <h1>{this.props.name}</h1>
        <p>{this.props.type}</p>
        {items}
      </div>
    );
  }
}

export default Shoe;
