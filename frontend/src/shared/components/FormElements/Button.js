import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  if (props.href) {
    return (
      <a
        href={props.href}
        className={`${
          props.inverse && "bg-transparent border-2 hover:bg-slate-700"
        } ${props.danger && "bg-red-600 border-b-4 border-b-slate-700"}`}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`border py-1 px-3 rounded hover:text-red-700 ${
          props.danger && "bg-red-600 border-b-4 border-b-slate-700"
        }`}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={`${
        props.inverse && "bg-transparent"
      } py-3 px-6 rounded cursor-pointer bg-[#ff0055] ${
        props.danger && "bg-red-900 border-b-4 border-b-red-400"
      } ${props.classNew}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
