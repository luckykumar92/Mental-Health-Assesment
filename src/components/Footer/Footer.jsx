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
        <div className="flex flex-row bg-[#0b7361] pl-24 max-[700px]:p-1 max-[700px]:space-x-3 space-x-6">
          <h1 className="text-white text-center font-bold text-2xl my-auto py-8">
            hugg.co.in
          </h1>
          <span className="flex flex-row my-auto">
            <img
              src={instagram}
              alt=""
              className="bg-white rounded-md w-8 h-min mr-7"
            />
            <img
              src={linkedin}
              alt=""
              className="bg-white rounded-md w-8 h-min"
            />
          </span>
        </div>

        <div className="bg-[#009A80] w-full mx-auto max-[700px]:p-0 max-[700px]:py-4 py-8 pl-24 max-[700px]:pl-4">
          <div>
            <ul className="flex flex-wrap items-center text-white space-x-12 max-[700px]:space-x-0 max-[700px]:grid max-[700px]:grid-cols-2 gap-4">
              {footerItem.map((f) => (
                <div className="">
                  <li key={f.name}>
                    <Link to={f.slug}>{f.name}</Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#009A80] w-full mx-auto max-[700px]:p-0 max-[700px]:pb-4 pb-8 pl-24 max-[700px]:pl-4">
          <hr />
          <span className=" flex flex-row text-center items-center justify-center text-white mt-4">
            <p>© Copyright&nbsp;</p>
            <Link to="https://hugg.co.in" className=" font-semibold">hugg.co.in&nbsp;</Link>
            <p>All Rights Reserved</p>
          </span>
          <h3 className="text-center items-center justify-center text-2xl text-white">
            Designed with ♥
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
