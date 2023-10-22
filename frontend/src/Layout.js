import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "./shared/components/Navigation/MainNav";

function Layout() {
  return (
    <>
      <MainNav />
      <main className={"container mx-auto mt-5"}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
