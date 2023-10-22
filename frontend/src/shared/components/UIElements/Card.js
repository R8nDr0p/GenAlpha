import React from "react";

function Card(props) {
  return (
    <div
      className={`card ${props.className} bg-slate-700 rounded-3xl p-4 text-amber-200 hover:text-slate-700 hover:bg-amber-400 transition-all duration-75 shadow-md`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

export default Card;
