import React from "react";
import uuidv4 from "uuid/v4";

const navLinks = props => {
  return (
    <li className="nav-item" key={uuidv4()}>
      <a
        href={null}
        className="nav-link"
        onClick={() => {
          props.handleClick(props.unique);
        }}
      >
        {props.unique.charAt(0).toUpperCase() + props.unique.slice(1)
        //Capitalised first letter of string
        }
      </a>
    </li>
  );
};

export default navLinks;
