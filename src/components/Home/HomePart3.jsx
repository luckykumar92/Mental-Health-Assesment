import React from "react";
import therapists from "./assets/therapists.webp";

const HomePart3 = () => {
  return (
    <div>
      {/* <!--Blogs--> */}

      <h1 class="text-center text-7xl my-8 text-white">
        Learn more about mental health
      </h1>
      <div class="mx-8 px-8 flex justify-between items-center gap-6 py-8">
        <img src={therapists} class="rounded-lg w-60" alt="" />
        <img src={therapists} class="rounded-lg w-60" alt="" />
        <img src={therapists} class="rounded-lg w-60" alt="" />
        <img src={therapists} class="rounded-lg w-60" alt="" />
      </div>
    </div>
  );
};

export default HomePart3;
