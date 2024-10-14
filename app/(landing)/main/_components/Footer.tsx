import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importing the logos

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Main Footer Section */}
      <div className="bg-[#121421] py-12">
        <div className="container mx-auto px-4 flex justify-between items-start">
          {/* Logo and Description */}
          <div>
            <div className="logo mb-4">
              <img src="/logo_white.png" alt="Nobel Logo" className="h-12" />
            </div>
            <p
                className="text-sm max-w-none whitespace-nowrap"
                style={{ color: '#98A2B3' }}
                >
                Top learning experiences that create more <br />talent in the world.
                </p>

          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-[#98A2B3] mb-4 text-sm">Product</h4>
            <ul className="flex space-x-6">
                <li><a href="/home" className="text-white hover:text-[#fabe07] hover:underline">Home</a></li>
                <li><a href="/about" className="text-white hover:text-[#fabe07] hover:underline">About</a></li>
                <li><a href="/overview" className="text-white hover:text-[#fabe07] hover:underline">Overview</a></li>
                <li><a href="/register" className="text-white hover:text-[#fabe07] hover:underline">How to register</a></li>
                <li><a href="/pricing" className="text-white hover:text-[#fabe07] hover:underline">Pricing</a></li>
            </ul>
            </div>



            {/* Newsletter Subscription */}
            <div>
            <h4 className="text-[#EAECF0] mb-4 text-sm">Subscribe to our newsletter</h4>
            <form className="space-y-4">
                {/* Email Input */}
                <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-5 rounded-full bg-transparent border border-[#EAECF0] text-[#EAECF0] focus:outline-none focus:border-[#fabe07]"
                />

                {/* Subscribe Button */}
                <button
                className="w-full bg-[#fabe07] text-white py-3 rounded-full hover:bg-yellow-500 font-bold"
                type="submit"
                >
                Subscribe
                </button>
            </form>
            </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-[#101828] py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Copyright Text */}
          <p className="text-[#98A2B3]">
            © 2024 Nobel. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            {/* Facebook Icon */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" style={{ color: '#98A2B3' }} />
            </a>

            {/* Instagram Icon */}
            <a href="https://www.instagram.com/jassem.debbich/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" style={{ color: '#98A2B3' }} />
            </a>
            </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
