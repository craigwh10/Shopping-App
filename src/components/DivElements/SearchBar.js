import React from "react";

// Point of this functional component is to take in the state from app as a props
// and to update the filteredState as keys are inputted.

// Possible complications is needing to:
// - empty the search bar if clicked on a feature

const searchBar = props => {
  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        aria-label="SearchBar"
        aria-describedby="basic-addon1"
        onChange={props.changed}
      />
    </div>
  );
};

export default searchBar;
