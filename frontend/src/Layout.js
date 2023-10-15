import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "./shared/components/Navigation/MainNav";

function Layout() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
