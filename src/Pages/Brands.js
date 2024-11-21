import React from "react";
import BrandCard from "../Compo/BrandCard";
import Header from "../Compo/Header";
import Footer from "../Compo/Footer";
import brands from "../Data/brands";

const Brands = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">LABELS & BRANDS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {brands.map((brand, index) => (
            <BrandCard key={index} brand={brand} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Brands;
