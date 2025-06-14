import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import React, { useState, useEffect, useRef } from 'react';
import { FiPlus, FiCheck } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import ButtonCompo from "./ButtonCompo";
import { motion, useAnimation, useInView } from "framer-motion";

function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoverHeart, setIsHoverHeart] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, isInView]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const imageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color); 
        console.log(`Selected color: ${color}`);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        console.log(`Selected size: ${size}`);
    };

    const handleIconToggle = () => {
        setIsChecked(!isChecked);
        setIsPanelOpen(!isPanelOpen);
    };

    const handleHeartClick = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <motion.div 
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="border border-blue-800 transition-all duration-200 w-full cursor-pointer mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-96 overflow-hidden flex items-center justify-center">
                <motion.img 
                    src={product.image} 
                    alt={product.name} 
                    className={`absolute inset-0 w-full h-full object-cover`} 
                    variants={imageVariants}
                    initial="animate"
                    animate={isHovered ? "exit" : "animate"}
                />
                <motion.img 
                    src={product.hoverImage} 
                    alt={product.name} 
                    className={`absolute inset-0 w-full h-full object-cover`} 
                    variants={imageVariants}
                    initial="exit"
                    animate={isHovered ? "animate" : "exit"}
                />
                <div 
                    className="absolute top-3 right-3 text-2xl cursor-pointer text-blue-800" 
                    onClick={handleHeartClick}
                    onMouseEnter={() => setIsHoverHeart(true)}
                    onMouseLeave={() => setIsHoverHeart(false)}
                >
                    {isFavorited || isHoverHeart ? <BsSuitHeartFill /> : <BsSuitHeart />} 
                </div>
            </div>

            <div className="flex flex-col justify-between h-40"> 
                <div className="mt-4 mx-3 flex flex-col flex-grow">
                    <h2 className={product.isNewSeason ? "text-gray-500" : "hidden"}>New Season</h2>
                    <h2 className="text-lg font-bold text-left">{product.brand}</h2> 
                    <p className="text-base text-gray-800">{product.name}</p> 
                </div>

                <div className="flex flex-row justify-between items-end pr-3 pb-2">
                    <div className="mx-3 text-left">
                        {product.isSale ? (
                            <>
                            <div className="flex items-center gap-2">
                                <p className="text-lg font-bold text-gray-800">{product.salePrice}</p>
                                <p className="text-base line-through text-gray-600">{product.price}</p>
                                </div>
                            </>
                        ) : (
                            <p className="text-lg font-bold text-gray-800">{product.price}</p>
                        )}
                    </div>
                    <a 
                        className="border border-blue-800 p-1 cursor-pointer text-blue-800"
                        onClick={handleIconToggle}
                    >
                        {isChecked ? <IoIosArrowDown /> : <FiPlus />} 
                    </a>
                </div>
            </div>

            {isPanelOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white p-4 mt-4 shadow-md border-t border-gray-300"
                >
                    <div className="mb-3">
                        <label className="text-lg text-black mb-1">Color</label>
                        <div className="flex space-x-2">
                            {product.colors.map((color, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleColorSelect(color)} 
                                    className={`w-8 h-8 rounded-full border-2 
                                        ${selectedColor === color ? 'border-blue-800' : 'border-gray-300'} 
                                        hover:border-blue-500 focus:outline-none`}
                                    style={{ backgroundColor: color }}
                                >
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="text-lg text-black mb-1">Size</label>
                        <div className="flex space-x-2">
                            {product.sizes.map((size, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleSizeSelect(size)}
                                    className={`border rounded-lg p-2 px-4 text-sm 
                                        ${selectedSize === size ? 'bg-blue-800 text-white' : 'bg-white text-black'} 
                                        hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <ButtonCompo className="w-full text-lg" text="Add to Bag"/>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

export default ProductCard;
