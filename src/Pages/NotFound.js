import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h1 className="text-[6rem] font-bold tracking-wider m-0">
        <span className="text-blue-800 px-2">4</span>
        <span>0</span>
        <span className="text-blue-800 px-2">4</span>
      </h1>
      <p className="text-[1.5rem] mt-5 text-center">
        Sorry, the page you're looking for
        <br />
        doesn't exist.
      </p>
      <a
        href="/"
        className="mt-8 inline-block px-5 py-2 text-lg font-bold text-white bg-blue-800 transition-all duration-300 ease-in-out hover:bg-blue-900 hover:text-white"
      >
        Back to Home
      </a>
    </div>
  );
}

export default NotFound;
