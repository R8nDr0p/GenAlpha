import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import { FaBarsStaggered } from "react-icons/fa6";
import Navlinks from "./Navlinks";

import "./MainNav.css";
import SideDrawer from "./SideDrawer";

function MainNav(props) {
  const [OpenNav, setOpenNav] = useState(true);
  return (
    <>
      <SideDrawer>
        <nav>
          <Navlinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn text-amber-200 text-2xl md:hidden">
          <FaBarsStaggered />
        </button>
        <h1 className="main-navigation__title text-3xl text-amber-300">
          <Link to={"/"}>Ping|Me</Link>
        </h1>
        <nav className="hidden md:block">
          <Navlinks />
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNav;
