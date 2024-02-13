import React from "react";
import HomePart1 from "./HomePart1";
import HomePart2 from "./HomePart2";
import HomePart3 from "./HomePart3";

const Home = () => {
  return (
    <div className="flex flex-col px-20 pt-20 max-[480px]:px-1 max-[480px]:pt-2 mx-auto bg-gray-300 dark:bg-black">
      <HomePart1 />
      <HomePart2 />
      <HomePart3 />
    </div>
  );
};

export default Home;
