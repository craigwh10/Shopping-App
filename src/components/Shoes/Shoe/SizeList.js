import React from "react";
import uuidv4 from "uuid/v4";

const items = props => {
  const classHandler = e => {
    const classes = ["list-group-item"];

    if (e <= 3) {
      classes.push("list-group-item-danger");
      return [e, classes];
    } else {
      classes.push("list-group-item-success");
      return [e, classes];
    }
  };
  return props.sizes.map((item, index) => (
    <ul key={uuidv4()} className="list-group list-group-horizontal">
      <li className="list-group-item" key={uuidv4()}>
        {item[0]}
      </li>
      <li className={classHandler(item[1])[1].join(" ")} key={uuidv4()}>
        {classHandler(item[1])[0]}
      </li>
    </ul>
  ));
};

export default items;
