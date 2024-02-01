import React from "react";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerItem = [
    {
      name: "About",
      slug: "/",
      active: true,
    },
    {
      name: "Editorial  Process",
      slug: "/",
      active: true,
    },
    {
      name: "Privacy",
      slug: "/",
      active: true,
    },
    {
      name: " Terms",
      slug: "/",
      active: true,
    },
    {
      name: " Accessibility",
      slug: "/",
      active: true,
    },
  ];

  return (
    <footer className=" bg-black">
      <div className="flex flex-col">
        <div className="flex flex-row bg-[#0b7361] pl-24 max-[700px]:p-0 max-[700px]:space-x-0 space-x-6">
          <h1 className="text-white text-center font-bold text-2xl my-auto py-8">
            hugg.co.in
          </h1>
          <span className="flex flex-row my-auto">
            <img
              src={instagram}
              alt=""
              className=" bg-white rounded-md w-12 h-min mr-7"
            />
            <img
              src={linkedin}
              alt=""
              className="bg-white rounded-md w-12 h-min"
            />
          </span>
        </div>

        <div className="bg-[#009A80] w-full mx-auto p-4 max-[700px]:p-0 md:flex md:items-center md:justify-between py-10 pl-24 max-[700px]:pl-0">
          <div>
            <hr class="h-px my-8 border-0"></hr>
          </div>
          <div>
            <ul className="flex flex-wrap items-center text-white space-x-12 max-[700px]:space-x-0">
              {footerItem.map((f) => (
                <div>
                  <li key={f.name}>
                    <Link to={f.slug}>{f.name}</Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <hr class="h-px my-8 border-0"></hr>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
