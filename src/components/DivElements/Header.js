import React, { Component } from "react";
import "./Header.css";
import NavLink from "../DivElements/NavLinks";
import uuidv4 from "uuid/v4";

class Header extends Component {
  handleClick = value => {
    this.props.click(value);
  };

  clickInternalHandler = props => {
    const uniqueFilterLinks = this.props.unique();
    return uniqueFilterLinks;
  };

  componentDidMount() {
    this.clickInternalHandler();
  }

  render() {
    const items = this.clickInternalHandler().map(link => (
      <NavLink unique={link} key={uuidv4()} handleClick={this.handleClick} />
    ));

    return (
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link" onClick={this.props.resetState}>
              Show All
            </a>
          </li>
          {items}
        </ul>
      </div>
    );
  }
}

export default Header;
