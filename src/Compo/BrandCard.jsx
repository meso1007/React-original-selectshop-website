import React from "react";

const BrandCard = ({ brand }) => {
  return (
    <div className="relative group bg-gray-100 border-blue-800 border-2 shadow-md overflow-hidden">
      <img
        src={brand.logo}
        alt={brand.name}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="text-center text-white px-4">
          <h2 className="text-xl font-bold mb-2">{brand.name}</h2>
          <p>{brand.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
