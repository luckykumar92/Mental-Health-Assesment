import React from "react";
import therapists from "./assets/therapists.webp";

const imageArray = [
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
  { name: "therapists", url: therapists },
];

const HomePart1 = () => {
  return (
    <div className=" bg-white dark:bg-black">
      <div className="bg-[#1AC4A7] px-2 sm:px-10 md:px-20 py-5 md:py-20 md:rounded-t-none md:rounded-3xl">
        <h5 className="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Take a free mental health test today
        </h5>
        <p className="my-5 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod beatae
          sapiente fugiat repellendus id asperiores, ex uas aspernatur tempore
          obcaecati, cum doloribus doloremque voluptatem omnis nisi repudiandae
          tempora vero esse? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Quod beatae sapiente fugiat repellendus id asperiores, ex quas
          aspernatur tempore obcaecati, cum doloribus doloremque voluptatem
          omnis nisi repudiandae tempora vero esse?
        </p>
      </div>
      {/* <!--Take a test--> */}
      <div className="mx-auto w-full my-10">
        <div className="overflow-x-auto flex flex-row gap-8">
          {imageArray.map((i, index) => (
            <img
              key={index}
              src={i.url}
              className="rounded-3xl md:w-48 md:h-48 w-36 h-36"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
