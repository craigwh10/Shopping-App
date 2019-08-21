import React, { Component } from "react";
import "./App.css";
import Shoes from "../Shoes/Shoes";

class App extends Component {
  state = {
    shoes: [
      { id: "a1", name: "nike react", sizes: [[1, 1], [2, 1], [3, 2]] },
      { id: "a2", name: "nike vaporfly", sizes: [[1, 1], [2, 1], [3, 2]] },
      { id: "a3", name: "adidas ultraboost", sizes: [[1, 1], [2, 1], [3, 2]] },
      { id: "a4", name: "adidas run", sizes: [[1, 1], [2, 4], [3, 8]] }
    ],
    filtered: false
  };
  render() {
    return <Shoes shoes={this.state.shoes} />;
  }
}

export default App;
