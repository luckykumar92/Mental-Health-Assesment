import React from "react";

const AgreeDisagreeBox = () => {
  return (
    <div class="w-full p-4 text-center border-gray-200 shadow sm:p-8">
      <p class="mb-5 text-base ">1. I feel overwhelmed by my emotions.</p>
      <div class="py-24 flex items-center justify-center bg-gray-400 space-x-8">
        <div class="w-28 h-28 border-4 border-black rounded-full flex items-center justify-center ">
          <button class="w-16 h-16 border border-black bg-blue-600 rounded-full"></button>
        </div>
        <div class="w-24 h-24 border-4 border-black rounded-full  flex items-center justify-center">
          <button class="w-14 h-14 bg-blue-600 rounded-full"></button>
        </div>
        <div class="w-20 h-20 border-4 border-black rounded-full  flex items-center justify-center ">
          <button class="w-12 h-12 bg-blue-600 rounded-full"></button>
        </div>
        <div class="w-24 h-24 border-4 border-black rounded-full  flex items-center justify-center">
          <button class="w-14 h-14 bg-blue-600 rounded-full"></button>
        </div>
        <div class="w-28 h-28 border-4 border-black rounded-full  flex items-center justify-center ">
          <button class="w-16 h-16 bg-blue-600 rounded-full"></button>
        </div>
      </div>
    </div>
  );
};

export default AgreeDisagreeBox;
