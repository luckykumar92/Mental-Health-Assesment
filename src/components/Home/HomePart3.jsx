import React from "react";
import therapists from "./assets/therapists.webp";

const imageArray = [
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
];

const HomePart3 = () => {
  return (
    <div className="md:px-16 px-2 bg-white dark:bg-black">
      {/* <!--Blogs--> */}
      <h1 className=" text-2xl md:text-4xl font-semiboldtext-left my-8 text-[#1AC4A7]">
        Learn more about mental health
      </h1>
      <div className="mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 my-8 md:gap-8 gap-2 mx-auto justify-between w-fit">
          {imageArray.map((i, index) => (
            <div key={index} className="relative">
              <img
                src={i.url}
                className="rounded-lg lg:w-72 md:w-60 max-w-full justify-between"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                  Read more
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <img src={therapists} className="rounded-lg w-60" alt="" /> */}
    </div>
  );
};

export default HomePart3;
