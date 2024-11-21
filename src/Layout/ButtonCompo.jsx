import React from 'react';

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
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                className={`relative overflow-hidden border border-blue-800 text-${textColor} bg-${bgColor} px-4 py-0.5 font-semibold transition-colors duration-300 ease-in-out group ${className}`}
                disabled={disabled}
            >
                <a href={`${href}`}>
                <div className={`absolute top-0 left-0 w-full h-full bg-${hoverBgColor} transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0`}></div>
                
                <span className={`relative z-10 text-${textColor} group-hover:text-${hoverTextColor} transition-colors duration-300 ease-in-out`}>{text}</span>
                </a>
            </button>
        </div>
    );
};

export default ButtonCompo;
