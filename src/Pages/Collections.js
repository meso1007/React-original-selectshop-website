import React from "react";
import Header from "../Compo/Header";
import Footer from "../Compo/Footer";
import { Link } from "react-router-dom";
import ButtonCompo from "../Layout/ButtonCompo";
import Content from "../Compo/Content";

function Collections() {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen overflow-hidden mb-8">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="./assets/videos/hero.gif"
          autoPlay
          muted
          loop
        />
        <div className="logo_font absolute bottom-8 left-8 z-10 text-white text-4xl font-bold">
          SUNPO
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="logo_font text-blue-800 text-5xl sm:text-8xl font-bold">
            COLLECTIONS
          </h1>
        </div>

        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      </div>

      <div className="flex flex-row justify-between w-full text-white bg-blue-800 py-3">
        <h2 className="px-16 font-bold text-3xl">
          Discover the Hottest Styles: Handpicked New Collections from Leading
          Global Brands
        </h2>
      </div>

      <div className="logo_font image-grid flex justify-center gap-4">
        <div className="relative w-[45%]  h-[40rem] my-4 shadow-lg border-2 border-blue-800">
          <a href="mens" className="cursor-pointer">
            <img
              src="./assets/big/men.jpeg"
              alt="Gentle Monster"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-[4rem] transform -translate-x-1/2 text-white text-3xl font-bold px-4 py-2">
              Men's
            </div>
          </a>
        </div>

        <div className="relative w-[45%] h-[40rem] my-4 shadow-lg border-2 border-blue-800">
          <a href="womens" className="cursor-pointer">
            <img
              src="./assets/big/women.jpeg"
              alt="womens"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-[5rem] transform -translate-x-1/2 text-white text-3xl font-bold  px-4 py-2">
              Women's
            </div>
          </a>
        </div>
      </div>

      <div className="logo_font image-grid flex justify-center gap-4">
        <div className="relative w-[45%] h-[40rem] my-4 shadow-lg border-2 border-blue-800">
          <a href="/accessories" className="cursor-pointer">
            <img
              src="./assets/photos/accessories.jpeg"
              alt="accessories"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-[8rem] transform -translate-x-1/2 text-white text-3xl font-bold  px-4 py-2">
              Accessories
            </div>
          </a>
        </div>
        <div className="relative w-[45%]  h-[40rem] my-4 shadow-lg border-2 border-blue-800">
          <a href="/fragrances" className="cursor-pointer">
            <img
              src="./assets/photos/fragrances.jpeg"
              alt="fragrances"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-[7rem] transform -translate-x-1/2 text-white text-3xl font-bold  px-4 py-2">
              Fregrance
            </div>
          </a>
        </div>
      </div>

      <div className="logo_font image-grid flex justify-center gap-4">
        <div className="relative w-[45%] h-[40rem] my-4 shadow-lg border-2 border-blue-800">
          <a href="/shoes" className="cursor-pointer">
            <img
              src="./assets/photos/shoes.jpeg"
              alt="shoes"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-[5rem] transform -translate-x-1/2 text-white text-3xl font-bold  px-4 py-2">
              Shoes
            </div>
          </a>
        </div>
        <div className="relative w-[45%] h-[40rem] my-4 shadow-lg border-2 border-blue-800">
          <a href="/sale" className="cursor-pointer">
            <img
              src="./assets/photos/sale.jpeg"
              alt="accessories"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-[4rem] transform -translate-x-1/2 text-red-600 text-3xl font-bold  px-4 py-2">
              Sale
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Collections;
