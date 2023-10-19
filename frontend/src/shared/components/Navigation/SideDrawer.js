import React from "react";
import { createPortal } from "react-dom";

function SideDrawer({ children }) {
  const contentJsx = (
    <aside className="side-drawer fixed md:hidden left-0 top-0 z-50 h-screen w-[70%] bg-slate-950">
      {children}
    </aside>
  );
  return createPortal(contentJsx, document.getElementById("drawer-hook"));
}

export default SideDrawer;
