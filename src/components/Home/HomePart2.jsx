import React from "react";
import therapists from "./assets/therapists.webp";

const HomePart2 = () => {
  return (
    <div className=" bg-white dark:bg-black">
      <div className="bg-[#1AC4A7] md:pl-10 pl-2 md:pr-5 pr-0 py-5 w-full mx-auto">
        {/* <!--Find therapist--> */}
        <section className="flex md:flex-row flex-col justify-between">
          <div className="md:px-8 px-2 text-white md:mb-0 mb-5 ">
            <h2 className="text-3xl md:text-3xl lg:text-5xl md:mb-10 mb-5">
              We are here to help!!!!
            </h2>
            <form>
              <h2 className="text-3xl pt-5 mb-6">Find a therapist</h2>
              <label className="mb-2 text-sm font-medium sr-only text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full p-4 ps-10 text-sm rounded-lg placeholder:bg-white text-black"
                  placeholder="Search Therapists..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-[#1AC4A7]  font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* ----------- Image ---------------- */}
          <div>
            <img
              className=" max-w-72 md:w-72 md:h-56 lg:w-96 lg:h-72  rounded-3xl mx-auto md:mx-0"
              src={therapists}
              alt="image description"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePart2;
