import React from "react";
import { Link } from "react-router-dom";

const resources = [
  {
    name: "resource1",
    slug: "#",
    active: true,
  },
  {
    name: "resource2",
    slug: "#",
    active: true,
  },
];

const resourceLink = [
  {
    name: "resource1",
    slug: "#",
    active: true,
  },
  {
    name: "resource2",
    slug: "#",
    active: true,
  },
];

const followLink = [
  {
    name: "LinkedIn",
    slug: "#",
    active: true,
  },
  {
    name: "Instagram",
    slug: "#",
    active: true,
  },
];

const legalLink = [
  {
    name: "link1",
    slug: "#",
    active: true,
  },
  {
    name: "link2",
    slug: "#",
    active: true,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#009A80] text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Hugg.co.in
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-20 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase underline">
                Resources
              </h2>

              <ul className="font-medium">
                {resourceLink.map((res) => (
                  <li className="mb-4">
                    <Link to={res.slug} className="hover:underline">
                      {res.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase underline">
                Follow us
              </h2>

              <ul className="font-medium">
                {followLink.map((res) => (
                  <li className="mb-4">
                    <Link to={res.slug} className="hover:underline">
                      {res.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase underline">
                Legal
              </h2>

              <ul className="font-medium">
                {legalLink.map((res) => (
                  <li className="mb-4">
                    <Link to={res.slug} className="hover:underline">
                      {res.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center ">
          © 2023
          <Link to="https://hugg.co.in"> Hugg.co.in </Link>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
