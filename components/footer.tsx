import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Main Footer Section */}
      <div className="bg-[#121421] py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex-shrink-0">
            <div className="logo mb-4">
              <img src="/logo_white.png" alt="Nobel Logo" className="h-12" />
            </div>
            <p
              className="text-sm"
              style={{ color: '#98A2B3' }}
            >
              Top learning experiences that create more <br /> talent in the world.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-shrink-0 md:mx-auto">
            <h4 className="text-[#98A2B3] mb-4 text-sm">Product</h4>
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <li>
                <a href="/home" className="text-white hover:text-[#fabe07] hover:underline">Home</a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-[#fabe07] hover:underline">About</a>
              </li>
              <li>
                <a href="/overview" className="text-white hover:text-[#fabe07] hover:underline">Overview</a>
              </li>
              <li>
                <a href="/register" className="text-white hover:text-[#fabe07] hover:underline">How to register</a>
              </li>
              <li>
                <a href="/pricing" className="text-white hover:text-[#fabe07] hover:underline">Pricing</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-[#101828] py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright Text */}
          <p className="text-[#98A2B3] text-center md:text-left">
            © 2024 Nobel. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {/* Facebook Icon */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook
                className="text-2xl cursor-pointer hover:text-blue-600"
                style={{ color: '#98A2B3' }}
              />
            </a>

            {/* Instagram Icon */}
            <a href="https://www.instagram.com/jassem.debbich/" target="_blank" rel="noopener noreferrer">
              <FaInstagram
                className="text-2xl cursor-pointer hover:text-pink-600"
                style={{ color: '#98A2B3' }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
