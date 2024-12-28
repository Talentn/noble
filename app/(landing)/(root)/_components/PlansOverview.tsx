import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Course = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
};

interface PlansOverviewProps {
  courses: Course[];
}

const PlansOverview: React.FC<PlansOverviewProps> = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (courses.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [courses.length]);

  const getDisplayIndexes = () => {
    const total = courses.length;
    if (total === 0) return { left: -1, center: -1, right: -1 };
    const left = (currentIndex - 1 + total) % total;
    const right = (currentIndex + 1) % total;
    return { left, center: currentIndex, right };
  };

  const { left, center, right } = getDisplayIndexes();

  // Guard clause for empty courses array
  if (courses.length === 0) {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">No courses available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="hidden sm:block">Aperçu des plans</span>
            <span className="block sm:hidden">Plans</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            <span className="hidden sm:block">
              Explorez nos programmes adaptés à vos besoins
            </span>
            <span className="block sm:hidden">
              Découvrez nos offres parfaites pour vous
            </span>
          </p>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden">
          <div className="flex space-x-4">
            {[left, center, right].map((index, position) => {
              // Ensure the index is valid
              const course = courses[index];
              if (!course) return null;

              return (
                <div
                  key={course.id}
                  className={`transition-all duration-&lsqb;3000ms&rsqb; ease-in-out ${
                    position === 1
                      ? "scale-105 opacity-100 z-10"
                      : "scale-95 opacity-60 hidden sm:block"
                  }`}
                  style={{
                    opacity: position === 1 ? 1 : 0.6,
                    transition: "opacity 3s ease, transform 3s ease",
                  }}
                >
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Image
                      src={course.imageUrl}
                      alt={course.title}
                      width={400}
                      height={250}
                      className="w-full h-auto"
                    />
                    <div className="p-6">
                      <h3 className="text-lg md:text-xl font-bold mb-2">
                        {course.title}
                      </h3>
                      <p className="text-blue-600 font-bold">
                        {course.price.toFixed(2)} DT
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + courses.length) % courses.length
              )
            }
            className="p-3 rounded-full bg-[#fabe07] text-white text-2xl shadow-lg hover:bg-yellow-600 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length)
            }
            className="p-3 rounded-full bg-[#fabe07] text-white text-2xl shadow-lg hover:bg-yellow-600 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlansOverview;
