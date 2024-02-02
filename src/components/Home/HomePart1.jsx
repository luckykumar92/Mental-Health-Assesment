import React from "react";
import therapists from "./assets/therapists.webp";

const HomePart1 = () => {
  return (
    <div>
      {/* <!--Hero Section--> */}
      <div class="bg-[url('assets/med.jpg')] bg-fixed bg-no-repeat bg-cover">
        <div class="py-16 text-center px-8 items-center bg-green-500  my-8 rounded-lg text-white">
          <h1 class="py-5 text-7xl">Take a free mental health test today</h1>
          <h2 class="text-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            beatae sapiente fugiat repellendus id asperiores, ex quas aspernatur
            tempore obcaecati, cum doloribus doloremque voluptatem omnis nisi
            repudiandae tempora vero esse?
          </h2>
        </div>
        {/* <!--Take a test--> */}
        <div class="">
          <div class="imgrow1 mx-8 px-8 flex justify-between items-center gap-6 py-8">
            <img src={therapists} class="rounded-full w-48 h-48" alt="" />
            <img src={therapists} class="rounded-full w-48 h-48" alt="" />
            <img src={therapists} class="rounded-full w-48 h-48" alt="" />
            <img src={therapists} class="rounded-full w-48 h-48" alt="" />
          </div>

          <div class="imgrow2 mx-8 px-8 flex justify-between items-center gap-6 py-8">
            <img src={therapists} class="rounded-full w-48 h-48" alt="" />
            <img src={therapists} class="rounded-full w-48 h-48" alt="" />
            <img src={therapists} class="rounded-full w-48 h-48" alt="" />
            <img src={therapists} class="rounded-full w-48 h-48" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
