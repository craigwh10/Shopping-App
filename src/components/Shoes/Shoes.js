import React, { Component } from "react";
import Shoe from "../Shoes/Shoe/Shoe";

class Shoes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.shoes.map((shoe, index) => {
            return (
              <Shoe
                key={shoe.id}
                name={shoe.name}
                sizes={shoe.sizes}
                purpose={shoe.purpose}
                shoe={shoe}
                pageHandler={() => this.props.pageHandler(shoe)}
                // Sending shoe to pageHandler in App to be sent to PageGenerator
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Shoes;
