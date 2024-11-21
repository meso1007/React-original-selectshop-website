import React from 'react';

const images = [
    "./assets/gallery/gallery-buly1.webp",
    "./assets/gallery/gallery-buly2.webp",
    "./assets/gallery/gallery-buly3.webp",
    "./assets/gallery/gallery-buly4.webp",
];

const titles = [
    "L'EAU SUPERFINE",
    "LA POMMADE CONCRETE",
    "L'EAU TRIPLE",
    "LA POMMADE VIRGINALE",
];
const prices = [
    "44.00€",
    "40.00€",
    "150.00€",
    "45.00€",
]

function Gallery() {
    return (
        <div className="px-4 sm:px-8 lg:px-20 py-10">
            <h2 className="text-3xl text-center font mb-8">TRENDING NOW</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="flex flex-col gap-5 overflow-hidden transition-transform duration-300">
                        <img 
                            src={image} 
                            alt={`Gallery Image ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-300"
                        />
                        <di className="flex justify-between">
                            <h3 className="text-lg font-thin">{titles[index]}</h3>
                            <h3 className="text-lg font-thin">~{prices[index]}</h3>

                        </di>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
