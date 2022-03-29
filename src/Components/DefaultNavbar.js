import { useState } from 'react';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

const DefaultNavbar = () => {
    return (
        <nav className="bg-black shadow-md z-10 p-3">
            <div className="px-3 mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <a href="#" className="flex items-center py-2 px-2 text-gray-200">
                            <span className="font-extrabold text-white">CheeseMates</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-5">
                        <a href="https://discord.gg/tM6x7ttv" className="flex items-center text-white rounded hover:bg-gray-300 hover:text-white transition duration-500">
                            <FaDiscord size={25}/>
                        </a>
                        <a href="https://twitter.com/cheesematesnft?s=21&t=cTT8UfG-BcPvj3oJFAMqeA" className="flex items-center text-white rounded hover:bg-gray-300 hover:text-white transition duration-500">
                            <FaTwitter size={25}/>
                        </a>
                        <a href="https://instagram.com/cheesematesnft?utm_medium=copy_link" className="flex items-center text-white rounded hover:bg-gray-300 hover:text-white transition duration-500">
                            <FaInstagram size={25}/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DefaultNavbar;