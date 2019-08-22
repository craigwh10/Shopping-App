import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  handleClick = value => {
    this.props.click(value);
  };

  render() {
    return (
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link" onClick={this.props.resetState}>
              Show All
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => {
                this.handleClick("run");
              }}
            >
              Run
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => {
                this.handleClick("sport");
              }}
            >
              Sport
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
