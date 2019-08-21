import React, { Component } from "react";
import "./App.css";
import Shoes from "../Shoes/Shoes";
import Header from "../DivElements/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [
        {
          id: "a1",
          name: "nike react",
          sizes: [[1, 2], [2, 1], [3, 2]],
          purpose: "run"
        },
        {
          id: "a2",
          name: "nike vaporfly",
          sizes: [[1, 1], [2, 3], [3, 2]],
          purpose: "sport"
        },
        {
          id: "a3",
          name: "adidas ultraboost",
          sizes: [[1, 1], [2, 2], [3, 2]],
          purpose: "sport"
        },
        {
          id: "a4",
          name: "adidas run",
          sizes: [[1, 1], [2, 4], [3, 8]],
          purpose: "run"
        }
      ],
      filtered: false,
      filteredValue: null
    };
    this.clickFilter = this.clickFilter.bind(this);
    this.baseState = this.state;
  }

  resetState = () => {
    this.setState(this.baseState);
  };

  clickFilter = value => {
    this.setState({
      shoes: this.state.shoes.filter(item => item.purpose === value)
    });
    console.log("called", value);
  };

  render() {
    return (
      <div className="card text-center">
        <Header click={this.clickFilter} resetState={this.resetState} />
        <div className="card-body">
          <Shoes shoes={this.state.shoes} />
        </div>
      </div>
    );
  }
}

export default App;
