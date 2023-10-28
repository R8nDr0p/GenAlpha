import React from "react";
import { NavLink } from "react-router-dom";

import "./Navlinks.css";

function Navlinks() {
    const links = [{
        linkName: "Users",
        route: "/"
    },
        {
            linkName: "My Places",
            route:"/u1/places"
        },
        {
            linkName:"Add Place",
            route:'/places/new'
        },
        {
            linkName:"Authenticate",
            route: '/auth'
        },
    ]
  return (
    <ul className="nav-links flex flex-col md:flex-row items-center justify-center gap-4">
        {links.map((link, index)=>{
            return (
                <li key={index}>
                    <NavLink to={`${link.route}`} className={            "text-xl text-amber-200 " +
              // "hover:text-amber-300 hover:bg-slate-700 hover:px-2" +
              "hover:bg-slate-400 hover:px-2 hover:text-slate-950" +
              " rounded transition-all duration-150"}>
                        {link.linkName}
                    </NavLink>
                </li>
            )
        })}
    </ul>
  );
}

export default Navlinks;
