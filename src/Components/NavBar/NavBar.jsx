// import { Link } from "lucide-react";
import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [menu, setMenu] = useState(false)
  const links = navLinks.map((link) => (
          <Link key={link.id} link={link}></Link>
        ))
  return (
    <nav className="flex justify-between mx-10">
      <span className="flex" onClick={()=> setMenu(!menu)}>
        {menu ? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu>}

          <ul className={`md:hidden absolute duration-1000 ${menu? "top-8" : "-top-40"}`}>
            {links}
          </ul>
        <h1 className="ml-5">NavBar</h1>
      </span>
      <ul className="md:flex hidden">
        {links}
      </ul>

      <button className="btn btn-accent">Click</button>

      {/* <ul className="flex">
        <li className="mr-10"><a href="/home">Home</a></li>
        <li className="mr-10"><a href="/about">About</a></li>
        <li className="mr-10"><a href="/blog">Blog</a></li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
