import React, { useState } from "react";
const Product = () => {
  const [color, setColor] = useState("red");
  return (
    <div className="bg-white rounded-md shadow-md p-2">
      <div className="bg-gray-400 rounded-md px-6 flex justify-center items-center">
        <img src={require("../../src/assets/img/Cart/1.png")} alt="product" />
      </div>
      <div className=" flex justify-between items-center mt-3">
        <span className=" text-sm md:text-base text-slate-400">اپل</span>
        <div className="flex items-center">
          <div
            onClick={() => setColor("red")}
            className="w-5 h-5  md:h-8 md:w-8 rounded-full bg-red-400 border-2 border-gray-50 -ml-1.5 flex justify-center items-center"
          >
            {color === "red" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 md:h-7 md:w-7 font-bold text-white stroke-orange-50 ring-2 ring-red-400 rounded-full ring-offset-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <div
            onClick={() => setColor("blue")}
            className="w-5 h-5  md:h-8 md:w-8 rounded-full bg-blue-400 border-2 border-gray-50 -ml-1.5 flex justify-center items-center"
          >
            {" "}
            {color === "blue" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 md:h-7 md:w-7 font-bold text-white stroke-orange-50 ring-2 ring-blue-400 rounded-full ring-offset-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <div
            onClick={() => setColor("green")}
            className="w-5 h-5  md:h-8 md:w-8 rounded-full bg-green-400 border-2 border-gray-50 flex justify-center items-center"
          >
            {" "}
            {color === "green" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 md:h-7 md:w-7 font-bold text-white stroke-orange-50  ring-2 ring-green-400 rounded-full ring-offset-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col text-xs items-center mt-3 font-medium text-slate-800 md:text-base">
        <span>ساعت هوشمند اپل سری6</span>
      </div>
      <div className="flex flex-col text-xs items-center mt-3 font-medium text-orange-600 md:text-base">
        <span> 48.3210.000 تومان</span>
      </div>
      <hr className="mt-2" />
      <button className="text-sm py-1   mt-2 w-full font-bold text-orange-600 md:text-base ">
        مشاهده و سفارش
      </button>
    </div>
  );
};

export default Product;
