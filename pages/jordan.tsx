import React from "react";

export default function Jordan() {
  return (
    <>
      <div className="border-solid border-black hover:border-b-2  peer hover:h-auto w-[100%] hover:h-96">
        <p role="list" className="border-solid border-black hover:border-b-2 w-10 hover:text-red-400">
          Jordan
        </p>
      </div>
      <div
        className="hidden peer-hover:flex hover:flex
         w-[100%] 
         flex-col bg-white drop-shadow-lg bg-opacity-50"
      >
        <a className="px-5 py-3 hover:bg-gray-200" href="#">
          About Us
        </a>
        <a className="px-5 py-3 hover:bg-gray-200" href="#">
          Contact Us
        </a>
        <a className="px-5 py-3 hover:bg-gray-200" href="#">
          Privacy Policy
        </a>
      </div>
    </>
  );
}
