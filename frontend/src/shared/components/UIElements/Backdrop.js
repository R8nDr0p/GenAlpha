import React from "react";
import { createPortal } from "react-dom";

function Backdrop({ onClick }) {
  return createPortal(
    <div
      className="backdrop fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.75)] z-10"
      onClick={onClick}
    ></div>,
    document.getElementById("backdrop-hook"),
  );
}

export default Backdrop;
