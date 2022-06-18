import React from "react";
import Product from "./Components/Product";

function App() {
  return (
    <div className="bg-slate-200  pt-11">
      <header>
        {/* AppBar - Header */}
        <div className=" flex flex-row-reverse justify-between items-center  px-4 text-slate-800">
          <div className="flex justify-center items-center bg-white shadow-lg rounded-[5px]  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 m-[2px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="font-bold">ساعت هوشمند</div>
          <div>LOGO</div>
        </div>

        {/* Filter section */}
        <section className="flex px-4 gap-2 mt-6">
          <div className="flex items-center justify-evenly  bg-white  rounded-md w-1/2 p-3 shadow-sm">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                />
              </svg>
            </div>
            <div className=" text-sm font-medium  ">محبوب ترین</div>
          </div>
          <div className="flex items-center justify-evenly  bg-white  rounded-md  w-1/2 p-3 shadow-sm">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </div>
            <div className="text-sm font-medium ">فیلتر: اپل</div>
          </div>
        </section>
      </header>
      {/* Products */}
      <section className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
}

export default App;
