import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const messages = [
    "Returns are free within 30 days",
    <span>
        Enjoy CA$70 off your first order | Exclusive member offer |{' '}
        <Link to="/dashboard" className=" underline">
            Redeem in your dashboard now
        </Link>
    </span>,
];

const colors = [
    "bg-gray-200",
    "bg-gray-800",
];

const textColor = [
    "text-gray-600",
    "text-gray-100",
]

function Banner() {
    const [currentMessage, setCurrentMessage] = useState(messages[0]);
    const [currentColor, setCurrentColor] = useState(colors[0]);
    const [currentTextColor, setcurrentTextColor] = useState(textColor[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (currentIndex + 1) % messages.length;
            setCurrentMessage(messages[nextIndex]);
            setCurrentColor(colors[nextIndex]); 
            setcurrentTextColor(textColor[nextIndex])
            setCurrentIndex(nextIndex);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className={`${currentColor} ${currentTextColor} text-sm text-center py-1`}>
            <p>{currentMessage}</p>
        </div>
    );
}

export default Banner;
