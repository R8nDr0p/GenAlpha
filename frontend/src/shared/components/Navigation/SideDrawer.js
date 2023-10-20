import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

function SideDrawer({ children, show, onClick }) {
  const contentJsx = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames={"slide-in-left"}
      mountOnEnter
      unmountOnExit
    >
      <aside
        className="side-drawer fixed md:hidden left-0 top-0 z-50 h-screen w-[70%] bg-slate-950 flex justify-center items-center"
        onClick={onClick}
      >
        {children}
      </aside>
    </CSSTransition>
  );
  return createPortal(contentJsx, document.getElementById("drawer-hook"));
}

export default SideDrawer;
