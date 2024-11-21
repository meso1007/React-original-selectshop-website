import React, { useEffect, useState } from 'react';
import "../App.css";

function Hero() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="./assets/videos/Wax.mp4"
                    autoPlay
                    muted
                    loop
                ></video>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h1 className="logo_font text-gray-200 text-8xl font-bold">SUNPO</h1>
                </div>
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
            </div>
        </>
    );
}

export default Hero;
