import React from "react";
import { Link, NavLink } from "react-router-dom";
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
    <nav class="bg-[#009A80] border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap">
            <Logo />
          </span>
        </Link>
        <button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden">
          X
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="text-white hover:underline">
                  <NavLink
                    to={item.slug}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " text-white " : ""
                    }>
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
