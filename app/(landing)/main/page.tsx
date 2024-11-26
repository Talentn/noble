"use client";

import React, { useState, useEffect } from "react";
import Header from "./_components/Header";
import WhyChooseUs from "./_components/WhyChooseUs";
import PlansOverview from "./_components/PlansOverview";
import BuyingCourseSteps from "./_components/BuyingCourseSteps";
import PricingSection from "./_components/PricingSection";
import Footer from "./_components/Footer";
import { FaArrowUp } from "react-icons/fa";

const Main: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [courses, setCourses] = useState<
    { id: string; title: string; imageUrl: string | null; price: number | null }[]
  >([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
        try {
          const response = await fetch("/api/coursesLandingPage");
          if (!response.ok) {
            throw new Error("Failed to fetch courses");
          }
          const data = await response.json();
          setCourses(data);
        } catch (error) {
          console.error("[FETCH_COURSES_ERROR]", error);
        }
      };
      
    fetchCourses();
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <section id="about">
        <WhyChooseUs />
      </section>
      <section id="overview">
        <PlansOverview courses={courses} />
      </section>
      <section id="register">
        <BuyingCourseSteps />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <Footer />

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[#fabe07] text-white text-xl shadow-lg hover:bg-yellow-600 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Main;
