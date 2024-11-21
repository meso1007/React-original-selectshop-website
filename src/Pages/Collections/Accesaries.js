import React from "react";
import Header from "../../Compo/Header";
import Footer from "../../Compo/Footer";
import Showcase from "../../Compo/ShowCase";
import { MdSort } from "react-icons/md";
import accessorieslist from "../../Data/accessorieslist";

function Accessories() {
  return (
    <>
      <Header />

      <div className="flex mb-8 border  border-blue-800">
        <img
          src="./assets/headerPic/accessory.jpeg"
          class="w-1/2 h-[37rem] object-cover object-top img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
          alt=""
        />
        <h1 className="flex justify-center items-center w-1/2 text-8xl py-8 text-black font-semibold logo_font">
          ACCESSORIES
        </h1>
      </div>
      <div className="w-full flex flex-row justify-between px-24 font-normal">
        <h4>64 Results</h4>
        <div className="flex items-center">
          <h4>Views</h4>
          <MdSort className="ml-2" />
        </div>
      </div>
      <Showcase listFile={accessorieslist} />
      <Footer />
    </>
  );
}
export default Accessories;
