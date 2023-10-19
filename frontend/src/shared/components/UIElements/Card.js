import React from "react";

function Card(props) {
  return (
    <div
      className={`card ${props.className} bg-slate-700 rounded-3xl p-2`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

export default Card;
