import React from "react";
import ProductCard from "../Layout/ProductCard";

const Showcase = ({ listFile }) => {
  return (
    <div className="container mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {listFile.slice(0, 12).map((product, index) => (
          <div key={index} className="col-span-1">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
