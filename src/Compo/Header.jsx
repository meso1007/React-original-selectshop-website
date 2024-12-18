import React, { useState, useEffect } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FiSearch, FiMenu, FiShoppingCart } from "react-icons/fi";
import ButtonCompo from '../Layout/ButtonCompo';

function Header() {
    const userName = "John";

    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); 
    const [timeoutId, setTimeoutId] = useState(null); // タイマー用のステート

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    useEffect(() => {
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
    }, []);
    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId); // 既存のタイマーをクリア
        }
        setIsSubmenuOpen(true);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setIsSubmenuOpen(false);
        }, 300); // 300ms後にサブメニューを非表示にする
        setTimeoutId(id); // 新しいタイマーを保存
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-full bg-white shadow-md transform transition-transform duration-300 z-30 border border-blue-700 ${
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
                                
                                {/* Hoverでサブメニューが表示される */}
                                <div 
                                    className="relative" 
                                    onMouseEnter={handleMouseEnter} 
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a href='/collections' className="flex items-center space-x-4">
                                        <span>COLLECTIONS</span>
                                    </a>
                                    {/* サブメニュー */}
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
                            <ButtonCompo text="Login" className='w-full' bgColor='blue-800' textColor='white' hoverBgColor='white' hoverTextColor="black"/>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;
