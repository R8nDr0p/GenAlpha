import React from "react";

import "./MainHeader.css";

function MainHeader(props) {
  return (
    <header className="main-header flex justify-between items-center bg-slate-950 container-css mx-auto">
      {props.children}
    </header>
  );
}

export default MainHeader;
