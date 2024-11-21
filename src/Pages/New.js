import React from "react";
import Header from "../Compo/Header";
import Footer from "../Compo/Footer";
import Showcase from "../Compo/ShowCase";
import newlist from "../Data/newlist";
import ButtonCompo from "../Layout/ButtonCompo";
import Content from "../Compo/Content";

function New() {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen overflow-hidden mb-8">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="./assets/videos/hero4.gif"
          autoPlay
          muted
          loop
        />
        <div className="logo_font absolute bottom-8 left-8 z-10 text-white text-4xl font-bold">
          SUNPO
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="logo_font text-blue-800 text-8xl font-bold">
            NEW ARRIVALS
          </h1>
        </div>

        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      </div>

      <div className="flex flex-row justify-between w-full text-white bg-blue-800 py-3">
        <h2 className="px-16 font-bold text-3xl">
          Explore the Latest Trends: Carefully Curated New Arrivals from Top
          Global Brands.
        </h2>
      </div>

      <Showcase listFile={newlist} />

      <Footer />
    </>
  );
}

export default New;
