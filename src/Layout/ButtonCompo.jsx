import React from 'react';
import { motion } from 'framer-motion';

const ButtonCompo = ({ 
    text,              
    onClick, 
    href,
    type = 'button',
    bgColor = "white",
    textColor= "black",
    hoverBgColor = "blue-800",
    hoverTextColor = "white",
    className = '', 
    disabled = false 
}) => {
    const buttonVariants = {
        rest: {
            backgroundColor: bgColor,
            color: textColor,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        hover: {
            scale: 1.05, // わずかに拡大
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const backgroundVariants = {
        rest: {
            x: "-100%",
            transition: { duration: 0.3, ease: "easeOut" }
        },
        hover: {
            x: "0%",
            backgroundColor: hoverBgColor,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const textVariants = {
        rest: {
            color: textColor,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        hover: {
            color: hoverTextColor,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <div>
            <motion.button
                type={type}
                onClick={onClick}
                className={`relative overflow-hidden border border-blue-800 px-4 py-0.5 font-semibold group ${className}`}
                disabled={disabled}
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                <a href={`${href}`}>
                    <motion.div
                        className={`absolute top-0 left-0 w-full h-full`}
                        variants={backgroundVariants}
                    ></motion.div>
                    <motion.span
                        className={`relative z-10`}
                        variants={textVariants}
                    >{text}</motion.span>
                </a>
            </motion.button>
        </div>
    );
};

export default ButtonCompo;
