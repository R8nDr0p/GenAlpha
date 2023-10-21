import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import { FaBarsStaggered } from "react-icons/fa6";
import Navlinks from "./Navlinks";

import "./MainNav.css";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import { BsFillPinMapFill, BsLink } from "react-icons/bs";

function MainNav(props) {
  const [OpenNav, setOpenNav] = useState(false);

  const showNav = () => {
    setOpenNav(true);
  };

  const hideNav = () => {
    setOpenNav(false);
  };
  return (
    <>
      {OpenNav && <Backdrop onClick={hideNav} />}
      <SideDrawer show={OpenNav} onClick={hideNav}>
        <nav>
          <Navlinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn text-amber-200 text-2xl md:hidden"
          onClick={showNav}
        >
          <FaBarsStaggered />
        </button>
        <h1 className="main-navigation__title text-3xl text-amber-300 p-2">
          <Link
            to={"/"}
            className={"flex flex-row items-center justify-center gap-2"}
          >
            <h1>Ping | Me</h1>
            <BsFillPinMapFill className={"text-red-700"} />
          </Link>
        </h1>
        <nav className="hidden md:block">
          <Navlinks />
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNav;
