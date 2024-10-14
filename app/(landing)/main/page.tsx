"use client"; // Add this to indicate the component is a Client Component

import React, { useState, useEffect } from 'react';
import Header from './_components/Header';
import WhyChooseUs from './_components/WhyChooseUs';
import PlansOverview from './_components/PlansOverview';
import BuyingCourseSteps from './_components/BuyingCourseSteps';
import PricingSection from './_components/PricingSection';
import Footer from './_components/Footer';
import { FaArrowUp } from 'react-icons/fa';

const Main: React.FC = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div>
                <Header />
                <section id="about">
                    <WhyChooseUs />
                </section>
                <section id="overview">
                    <PlansOverview />
                </section>
                <section id="register">
                    <BuyingCourseSteps />
                </section>
                <section id="pricing">
                    <PricingSection />
                </section>
                <Footer />

                {/* Scroll to Top Button */}
                {showScrollButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-3 rounded-full bg-[#fabe07] text-white text-xl shadow-lg hover:bg-yellow-600 transition"
                    >
                        <FaArrowUp />
                    </button>
                )}
            </div>
        </>
    );
};

export default Main;
