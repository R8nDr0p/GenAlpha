import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={"border py-1 px-3 rounded hover:text-red-700"}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button className={`${props.inverse && "bg-transparent "}`}>
      {props.children}
    </button>
  );
}

export default Button;
