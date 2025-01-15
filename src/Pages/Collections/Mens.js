import React from "react";
import Header from "../../Compo/Header";
import Footer from "../../Compo/Footer";
import Showcase from "../../Compo/ShowCase";
import { MdSort } from "react-icons/md";
import menslist from "../../Data/mens";

function Mens() {
  return (
    <>
      <Header />

      <div className="hidden sm:flex mb-8 border  border-blue-800">
        <img
          src="./assets/headerPic/man.jpeg"
          class="w-1/2 h-[37rem] object-cover img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
          alt=""
        />
        <h1 className="flex justify-center items-center w-1/2 text-9xl  py-8 text-black font-semibold logo_font">
          MEN'S
        </h1>
      </div>
      <div className="sm:hidden flex flex-wrap sm:flex-col mb-8">
        <div className="relative w-full sm:w-auto">
          <img
            src="./assets/headerPic/man.jpeg"
            className="w-full sm:w-auto h-[37rem] img-fluid rounded-t-lg"
          />
          <h1 className="absolute inset-0 flex justify-center items-center text-5xl sm:text-9xl text-white font-semibold logo_font">
            MEN'S
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between px-4 sm:px-24 font-normal">
        <h4>{menslist.length} Results</h4>
        <div className="flex items-center">
          <h4>Views</h4>
          <MdSort className="ml-2" />
        </div>
      </div>
      <Showcase listFile={menslist} />
      <Footer />
    </>
  );
}
export default Mens;
