import React from 'react';
import { PiCoatHangerBold, PiQuestionBold } from "react-icons/pi";
import { BiMessage } from "react-icons/bi";


function Services() {
    return (
        <div className="px-4 sm:px-8 lg:px-20 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                <div className="relative overflow-hidden">
                    <div className="p-8 px-6 border transition-all border-blue-800 duration-300 text-gray-700 group cursor-pointer">
                        <span className="absolute inset-0 bg-blue-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        <PiCoatHangerBold className='text-2xl mb-2 relative z-10 group-hover:text-white' />
                        <h3 className="text mb-2 relative z-10 group-hover:text-white">HOW TO SHOP</h3>
                        <p className="relative z-10 group-hover:text-white">Your guide to shopping and placing orders</p>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div className="p-8 px-6 border border-blue-800 transition-all duration-300 text-gray-700 group cursor-pointer">
                        <span className="absolute inset-0 bg-blue-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        <PiQuestionBold className='text-2xl mb-2 relative z-10 group-hover:text-white' />
                        <h3 className="text mb-2 relative z-10 group-hover:text-white">FAQS</h3>
                        <p className="relative z-10 group-hover:text-white">Your questions answered</p>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div className="p-8 px-6 border border-blue-800 transition-all duration-300 text-gray-700 group cursor-pointer">
                        <span className="absolute inset-0 bg-blue-800 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        <BiMessage className='text-2xl mb-2 relative z-10 group-hover:text-white' />
                        <h3 className="text mb-2 relative z-10 group-hover:text-white">NEED HELP?</h3>
                        <p className="relative z-10 group-hover:text-white">Contact our global Customer Service team</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;
