import React from "react";
import { Container } from "../components.js";
import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo.jsx";

const navItems = [
  {
    name: "Find a Therapist",
    slug: "/",
    active: true,
  },
  {
    name: "Get Help",
    slug: "/get-help",
    active: true,
  },
  {
    name: "Magazine",
    slug: "#",
    active: true,
  },
  {
    name: "Today",
    slug: "#",
    active: true,
  },
];

const Header = () => {
  return (
    <Container>
      <nav className=" bg-[#009A80] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-28">
          <Logo />
          <ul className=" max-w-screen-xl px-4 py-3 mx-auto flex items-center flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="text-white hover:underline">
                  <NavLink
                    to={item.slug}
                    className={({ isActive, isPending }) =>
                      // isPending ? "pending" : isActive ? "text-[#ADFF2F] " : ""
                      isPending ? "pending" : isActive ? " text-white " : ""
                    }>
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
