import React, { useState } from 'react';
import ButtonCompo from '../Layout/ButtonCompo';

function Subscribe() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`An email has been sent to ${email} with the download link.`);
    };

    return (
        <>
            <div className="hidden sm:flex text-white  items-end gap-10 mt-10 px-4 sm:px-8 lg:px-20 py-10 bg-blue-800">
                <div>
                    <h2 className="text-3xl font-bold mb-3">SUBSCRIBE TO SUNPO</h2>
                    <div className="w-full">
                        <p className="leading-tight">
                            Enjoy exclusive content through our subscription, including personalized product edits as well as our Visual Search tool.
                            <br />
                            <a href="#" className="underline hover:text-gray-500">More about the subscription</a>
                        </p>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="mb-8 w-3/4">
                        <h2 className='mb-2'>Join us as a member and we'll send you a link to subscribe!</h2>
                        <form onSubmit={handleSubmit} className="flex flex-row">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                value={email}
                                onChange={handleEmailChange}
                                className="px-4 py-2 w-9/12 border border-gray-300 mx-w-sm focus:outline-none focus:text-blue-800 focus:border-blue-800"
                            />
                            <ButtonCompo text="Subscribe" className='h-full'/>
                        </form>
                    </div>
                </div>
            </div>
            <div className='sm:hidden'>
                <h2 className="text-3xl font-bold mb-3 px-4">SUBSCRIBE TO SUNPO</h2>
                <form onSubmit={handleSubmit} className="flex flex-row">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={handleEmailChange}
                        className="px-4 py-2 w-9/12 border border-gray-300 mx-w-sm focus:outline-none focus:text-blue-800 focus:border-blue-800"
                    />
                    <ButtonCompo text="Subscribe" className='h-full'/>
                </form>
            </div>
        </>
    );
}

export default Subscribe;
