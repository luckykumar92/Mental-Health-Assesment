import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-8xl mx-auto px-1 max-[480px]:px-0">
      {children}
    </div>
  );
};

export default Container;
