import React, { Component } from "react";
import "./App.css";
import Shoes from "../Shoes/Shoes";
import Header from "../DivElements/Header";

class App extends Component {
  state = {
    shoes: [
      {
        id: "a1",
        name: "nike react",
        sizes: [[1, 2], [2, 1], [3, 2]],
        type: "run"
      },
      {
        id: "a2",
        name: "nike vaporfly",
        sizes: [[1, 1], [2, 3], [3, 2]],
        type: "sport"
      },
      {
        id: "a3",
        name: "adidas ultraboost",
        sizes: [[1, 1], [2, 2], [3, 2]],
        type: "sport"
      },
      {
        id: "a4",
        name: "adidas run",
        sizes: [[1, 1], [2, 4], [3, 8]],
        type: "run"
      }
    ],
    filtered: false
  };
  render() {
    return (
      <div class="card text-center">
        <Header />
        <div class="card-body">
          <Shoes shoes={this.state.shoes} />
        </div>
      </div>
    );
  }
}

export default App;
