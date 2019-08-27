import React, { PureComponent } from "react";
import "./Header.css";
import NavLink from "../DivElements/NavLinks";
import SearchBar from "../DivElements/SearchBar";
import uuidv4 from "uuid/v4";

class Header extends PureComponent {
  state = {
    searchState: "",
    length: 0
  };

  handleClick = value => {
    this.props.click(value);
  };

  clickInternalHandler = props => {
    const uniqueFilterLinks = this.props.unique();
    return uniqueFilterLinks;
  };

  changeHandler = event => {
    this.setState({
      searchState: event.target.value,
      length: event.target.value.length
    });
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
            <SearchBar
              searchState={this.state.searchState}
              length={this.state.length}
              changed={event => this.changeHandler(event)}
              search={this.props.searchChange(this.state.searchState)}
            />
          </li>
          <li className="nav-item">
            <a href={null} className="nav-link" onClick={this.props.resetState}>
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
