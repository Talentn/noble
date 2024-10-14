"use client";  // Add this at the top to make the component a Client Component

import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // Close the menu when an item is clicked
    };

    return (
        <>
            <div className="relative bg-[#121421] w-full">
                {/* Quarter Circle in the background */}
                <div className="absolute rounded-full opacity-10 bg-[#D9D9D9] z-0 hidden 2xl:block"
                    style={{
                        width: '1452px',
                        height: '1452px',
                        top: '-1031px',
                        left: '-880px'
                    }}>
                </div>
                <div className="absolute rounded-full bg-[#121421] z-0 hidden 2xl:block"
                    style={{
                        width: '1240px',
                        height: '1240px',
                        top: '-925px',
                        left: '-760px'
                    }}>
                </div>

                {/* Header Section */}
                <header className="text-white py-4 z-10 relative w-full">
                    <div className="container mx-auto flex items-center px-4 lg:px-10">

                        {/* Logo */}
                        <div className="logo flex-shrink-0 mr-auto">
                            <a href="/">
                                <Image
                                    height={170}
                                    width={170}
                                    alt="logo"
                                    src="/logo_white.png"
                                />
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex flex-grow justify-center mx-20">
                            <nav>
                                <ul className="flex space-x-8 lg:space-x-16">
                                    <li><button onClick={() => scrollToSection('home')} className="hover:text-[#fabe07]">Home</button></li>
                                    <li><button onClick={() => scrollToSection('about')} className="hover:text-[#fabe07]">About</button></li>
                                    <li><button onClick={() => scrollToSection('overview')} className="hover:text-[#fabe07]">Overview</button></li>
                                    <li><button onClick={() => scrollToSection('register')} className="hover:text-[#fabe07]">How to register</button></li>
                                    <li><button onClick={() => scrollToSection('pricing')} className="hover:text-[#fabe07]">Pricing</button></li>
                                </ul>
                            </nav>
                        </div>

                        {/* Log In / Sign Up Buttons */}
                        <div className="hidden lg:flex items-center ml-auto space-x-6">
                            <button className="bg-[#121421] px-4 py-2 rounded-full hover:bg-blue-600">Log in</button>
                            <button className="bg-[#fabe07] text-[#121421] px-4 py-2 rounded-full hover:bg-yellow-600">Sign up</button>
                        </div>

                        {/* Burger Menu Icon for Mobile & Tablet */}
                        <div className="lg:hidden ml-auto">
                            <button onClick={toggleMenu} className="text-white text-3xl">
                                {menuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="lg:hidden absolute top-0 right-0 w-3/4 h-screen bg-[#121421] text-white z-50 p-8">
                            <button onClick={toggleMenu} className="text-white text-3xl absolute top-4 right-4">
                                <FaTimes />
                            </button>
                            <nav className="mt-10">
                                <ul className="space-y-4 text-xl">
                                    <li><button onClick={() => scrollToSection('home')} className="hover:text-[#fabe07]">Home</button></li>
                                    <li><button onClick={() => scrollToSection('about')} className="hover:text-[#fabe07]">About</button></li>
                                    <li><button onClick={() => scrollToSection('overview')} className="hover:text-[#fabe07]">Overview</button></li>
                                    <li><button onClick={() => scrollToSection('register')} className="hover:text-[#fabe07]">How to register</button></li>
                                    <li><button onClick={() => scrollToSection('pricing')} className="hover:text-[#fabe07]">Pricing</button></li>
                                </ul>
                            </nav>
                            <div className="mt-8 flex flex-col space-y-4">
                                <button className="bg-[#121421] px-4 py-2 rounded-full hover:bg-blue-600">Log in</button>
                                <button className="bg-[#fabe07] text-[#121421] px-4 py-2 rounded-full hover:bg-yellow-600">Sign up</button>
                            </div>
                        </div>
                    )}
                </header>

                {/* Hero Section */}
                <section id="home" className="text-white px-4 py-12 mt-16 w-full">
                    <div className="flex flex-col xl:flex-row items-center justify-between w-full">
                        {/* Text and Button Section */}
                        <div className="text-center xl:text-left mt-8 xl:mt-0 xl:ml-40 xl:w-[690px] w-full">
                            <h1 className="font-extrabold text-4xl md:text-5xl xl:text-7xl z-20 text-white">
                                Unlock the Power of <span className="text-yellow-500">Math</span> & <span className="text-blue-500">Physics</span>, One Lesson at a Time
                            </h1>

                            {/* Supporting Text */}
                            <p className="text-base md:text-lg xl:text-xl text-white z-20 mt-4 xl:w-[600px] w-full">
                                Transform complex concepts into clear understanding with our interactive lessons. Build your knowledge step by step, and master math and physics at your own pace.
                            </p>

                            {/* Button */}
                            <button className="mt-8 bg-[#fabe07] text-[#121421] px-6 py-3 rounded-full hover:bg-yellow-600">
                                Learn more
                            </button>

                            {/* Offers Section */}
                            <div className="mt-10">
                                {/* Offers Header */}
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold">Our offers</h2>
                                    <a href="#" className="text-yellow-400 hover:underline">See more details</a>
                                </div>

                                {/* Offer Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Card */}
                                    <div className="bg-[#00B47F] text-white rounded-lg p-4 flex flex-col justify-between">
                                        <img src="/student.png" alt="Only one exam" className="w-full rounded-lg mb-4" />
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold">Only one exam</span>
                                            <span>15Dt</span>
                                        </div>
                                    </div>

                                    {/* Second Card */}
                                    <div className="bg-[#5164DA] text-white rounded-lg p-4 flex flex-col justify-between">
                                        <img src="/teacher.png" alt="All bac exams" className="w-full rounded-lg mb-4" />
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold">All bac exams</span>
                                            <span>200Dt</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image and Floating Badges */}
                        <div className="relative mt-10 flex items-center justify-center xl:justify-start hidden xl:block" style={{ marginLeft: '-50px' }}>
                            {/* Blue Circle in the Background */}
                            <div className="absolute rounded-full z-0"
                                style={{
                                    width: '60vw',
                                    height: '60vw',
                                    maxWidth: '600px',
                                    maxHeight: '600px',
                                    background: 'linear-gradient(180deg, #0D67C5 0%, #03305F 174.89%)',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}>
                            </div>

                            {/* Hero Image */}
                            <div className="relative z-10">
                                <img src="/hero_image.png" alt="Hero" className="max-w-full h-auto" />
                            </div>

                            {/* Play Icon and Text (floating badge) 1 */}
                            <div className="absolute top-[20%] left-[-60px] sm:left-[-80px] flex items-center rounded-full border border-white p-1 sm:p-2 px-3 sm:px-4 z-20"
                                style={{
                                    background: 'transparent',
                                }}>
                                {/* Play Icon */}
                                <div className="flex items-center justify-center bg-[#28C2FF] rounded-full w-8 h-8 sm:w-10 sm:h-10">
                                    <img src="/group1.png" alt="Play Icon" className="w-4 h-4 sm:w-6 sm:h-6" />
                                </div>

                                {/* Text Content */}
                                <div className="ml-2 sm:ml-4 text-white">
                                    <p className="text-sm sm:text-lg font-semibold">+200 hrs</p>
                                    <p className="text-xs sm:text-sm">of recorded video</p>
                                </div>
                            </div>

                            {/* Play Icon and Text (floating badge) 2 */}
                            <div className="absolute top-[30%] left-[350px] sm:left-[400px] flex items-center rounded-full border border-white p-1 sm:p-2 px-3 sm:px-4 z-20"
                                style={{
                                    background: 'transparent',
                                }}>
                                {/* Play Icon */}
                                <div className="flex items-center justify-center bg-[#28C2FF] rounded-full w-8 h-8 sm:w-10 sm:h-10">
                                    <img src="/group2.png" alt="Play Icon" className="w-4 h-4 sm:w-6 sm:h-6" />
                                </div>

                                {/* Text Content */}
                                <div className="ml-2 sm:ml-4 text-white">
                                    <p className="text-sm sm:text-lg font-semibold">+250k</p>
                                    <p className="text-xs sm:text-sm">Saved courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Header;
