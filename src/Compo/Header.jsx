import React, { useState, useEffect } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FiSearch, FiMenu, FiShoppingCart } from "react-icons/fi";
import ButtonCompo from '../Layout/ButtonCompo';

function Header() {
    const userName = "John";

    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); 
    const [timeoutId, setTimeoutId] = useState(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };


    // ウィンドウリサイズイベントを監視して状態を更新
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // mousemoveイベントをデスクトップサイズのみに適用
    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseMove = (event) => {
            if (event.clientX < 200) {
                setIsMenuOpen(true);
            } else {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDesktop]);
    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setIsSubmenuOpen(false);
        }, 300);
        setTimeoutId(id);
    };

    return (
        <>
            <div
                className={`hidden md:block fixed top-0 left-0 h-full bg-white shadow-md transform transition-transform duration-300 z-30 border border-blue-700 ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <header className="flex flex-col items-start h-full w-full relative">
                    <a href="/">
                        <h1 className="logo_font text-4xl font-bold mb-10 p-4">SUNPO</h1>
                    </a>
                    <div className=" flex flex-col justify-between items-start w-full h-full">
                        <div className='p-4'>
                            <div className="text-xl flex flex-col space-y-6 items-start cursor-pointer">
                                <a href='/' className="flex items-center space-x-4">
                                    <span>HOME</span>
                                </a>

                                <a href='/new' className="flex items-center space-x-4">
                                    <span>NEW ARRIVALS</span>
                                </a>
                                
                                <div 
                                    className="relative" 
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a href='/collections' className="flex items-center space-x-4">
                                        <span>COLLECTIONS</span>
                                    </a>
                                    {isSubmenuOpen && (
                                        <div className="absolute top-0 left-full ml-4 bg-white shadow-lg p-4 space-y-2 border border-gray-300 z-40">
                                            <a href="/mens" className="block text-gray-700 hover:text-blue-600">Men's</a>
                                            <a href="/womens" className="block text-gray-700 hover:text-blue-600">Women's</a>
                                            <a href="/accessories" className="block text-gray-700 hover:text-blue-600">Accessories</a>
                                            <a href="/fragrances" className="block text-gray-700 hover:text-blue-600">Fragrances</a>
                                            <a href="/shoes" className="block text-gray-700 hover:text-blue-600">Shoes</a>
                                            <a href="/sale" className="block text-red-600 hover:text-red-800">Sale</a>
                                        </div>
                                    )}
                                </div>

                                
                                <a href='/brands' className="flex items-center space-x-4">
                                    <span>LABELS & BRANDS</span>
                                </a>

                                <a href='/sale' className="flex items-center space-x-4 text-red-600">
                                    <span>SALE</span>
                                </a>

                                <a className="flex items-center space-x-4">
                                    <span>CART [0]</span>
                                </a>

                                <div className="flex items-center border border-black rounded-md overflow-hidden w-full">
                                    <FiSearch className="text-gray-600 ml-2 text-2xl" />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="border-none py-2 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-4'>
                            <div className="flex items-center space-x-2 mb-3">
                                <FaRegUser className="text-2xl" />
                                <span>{userName}</span>
                            </div>
                            <ButtonCompo text="Login" href="/login" className='w-full' bgColor='blue-800' textColor='white' hoverBgColor='blue-900' hoverTextColor="white"/>
                        </div>
                    </div>
                </header>
            </div>
            {/* sm size */}
            <div className="md:hidden fixed w-full z-40 bg-white shadow-md border-b border-blue-700">
                <header className="flex justify-between items-center p-4">
                    <a href="/" className="logo_font text-4xl font-bold">SUNPO</a>
                    <button onClick={toggleMenu} className="text-2xl">
                        <FiMenu />
                    </button>
                </header>
                {isMenuOpen && (
                    <div className="bg-white shadow-md border-t border-blue-700">
                        <nav className="flex flex-col space-y-4 p-4">
                            <a href="/" className="text-lg">HOME</a>
                            <a href="/new" className="text-lg">NEW ARRIVALS</a>
                            <a href="/collections" className="text-lg">COLLECTIONS</a>
                            <a href="/brands" className="text-lg">LABELS and BRANDS</a>
                            <a href="/sale" className="text-lg text-red-600">SALE</a>
                            <div className="flex items-center border border-black rounded-md overflow-hidden">
                                <FiSearch className="text-gray-600 ml-2 text-sm" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-none py-2 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaRegUser className="text-2xl" />
                                <span>{userName}</span>
                            </div>
                            <ButtonCompo className='w-full' href="/login" text="Login" bgColor="blue-800" textColor="white" hoverBgColor="white" hoverTextColor="black" />
                        </nav>
                    </div>
            )}
            </div>
        </>
    );
}

export default Header;
