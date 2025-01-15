import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaPinterestP, FaTwitter, FaSnapchatGhost, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
        setEmail(''); 
    };

    return (
        <footer className="bg-gray-200 text-gray-800 p-8">
            <div className="container mx-auto">
                <div className='hidden sm:block'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="font-bold mb-4 text-blue-800">Customer Service</h2>
                        <ul className='space-y-2 text-lg'>
                            <li><a href="-" className="hover:underline">Contact us</a></li>
                            <li><a href="-" className="hover:underline">FAQs</a></li>
                            <li><a href="-" className="hover:underline">Orders and delivery</a></li>
                            <li><a href="-" className="hover:underline">Returns and refunds</a></li>
                            <li><a href="-" className="hover:underline">Payment and pricing</a></li>
                            <li><a href="-" className="hover:underline">Cryptocurrency payments</a></li>
                            <li><a href="-" className="hover:underline">Promotion terms and conditions</a></li>
                            <li><a href="-" className="hover:underline">SUNPO Customer Promise</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold mb-4 text-blue-800">About SUNPO</h2>
                        <ul className="space-y-2 text-lg"> 
                            <li><a href="-" className="hover:underline">About us</a></li>
                            <li><a href="-" className="hover:underline">SUNPO partner boutiques</a></li>
                            <li><a href="-" className="hover:underline">Careers</a></li>
                            <li><a href="-" className="hover:underline">SUNPO app</a></li>
                            <li><a href="-" className="hover:underline">Modern slavery statement</a></li>
                            <li><a href="-" className="hover:underline"></a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold mb-4 text-blue-800">Discounts and membership</h2>
                        <ul className="space-y-2 text-lg"> 
                            <li><a href="-" className="hover:underline">Affiliate Program</a></li>
                            <li><a href="-" className="hover:underline">SUNPO membership</a></li>
                            <li><a href="-" className="hover:underline">Student discount UNiDAYS</a></li>
                            <li><a href="-" className="hover:underline">Student Beans and Graduates</a></li>
                            <li><a href="-" className="hover:underline">Student and Youth discount</a></li>
                            <li><a href="-" className="hover:underline">Essential worker discount</a></li>
                            <li><a href="-" className="hover:underline">Donate and save</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold mb-4 text-blue-800">Legal Information</h2>
                        <ul className="space-y-2 text-lg"> 
                            <li><a href="-" className="hover:underline">Terms of Service</a></li>
                            <li><a href="-" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="-" className="hover:underline">Cookie Policy</a></li>
                            <li><a href="-" className="hover:underline">Intellectual Property Rights</a></li>
                            <li><a href="-" className="hover:underline">Dispute Resolution</a></li>
                        </ul>
                    </div>  
                </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100 text-lg">
                    <div className='mb-2 sm:mb-0 sm:flex flex-row justify-between items-center'>
                        <ul className='flex flex-row gap-10 underline mb-5'>
                            <li><a href="-" className="hover:underline hover:text-gray-800 hover:text-shadow">Privacy policy</a></li>
                            <li><a href="-" className="hover:underline hover:text-gray-800 hover:text-shadow">Terms and conditions</a></li>
                            <li><a href="-" className="hover:underline hover:text-gray-800 hover:text-shadow">Accessibility</a></li>
                            <li><a href="-" className="hover:underline hover:text-gray-800 hover:text-shadow">Sitemap</a></li>
                        </ul>
                        <div className=''>
                            <ul className="flex flex-row gap-2 pl-3 mt-3 mb-6 items-center">
                                <h2 className="sm:block md:hidden lg:block font-bold">Follow us</h2>
                                <li>
                                    <a href="-" className="flex items-center group">
                                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-blue-800">
                                            <FaInstagram className="text-xl transition duration-300 ease-in-out group-hover:text-white " />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="-" className="flex items-center group">
                                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-blue-800">
                                            <FaFacebook className="text-xl transition duration-300 ease-in-out group-hover:text-white  " />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="-" className="flex items-center group">
                                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-blue-700">
                                            <FaPinterestP className="text-xl transition duration-300 ease-in-out group-hover:text-white " />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="-" className="flex items-center group">
                                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-blue-800">
                                            <FaTwitter className="text-xl transition duration-300 ease-in-out group-hover:text-white " />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="-" className="flex items-center group">
                                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-blue-800">
                                            <FaSnapchatGhost className="text-xl transition duration-300 ease-in-out group-hover:text-white  " />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="-" className="flex items-center group">
                                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-blue-800">
                                            <FaYoutube className="text-xl transition duration-300 ease-in-out group-hover:text-white " />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>  
                    </div>
                    <p className="text-sm">
                        'SUNPO' and the 'SUNPO' logo are trademarks of SUNPO UK Limited and are registered in numerous jurisdictions around the world.
                    </p>
                    <p className="text-sm">
                        © Copyright 2024 SUNPO UK Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
