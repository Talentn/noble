import React from 'react';
import Image from 'next/image'; // Adjust depending on whether you're using Next.js

const PlansOverview: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Plans overview</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src="/course_1.png" alt="Maths exam 2024" width={500} height={300} className="w-full" />
            <div className="p-6">
              <div className="text-sm text-blue-600 mb-2">Mathematics section</div>
              <h3 className="text-2xl font-bold mb-2">Maths exam 2024</h3>
              <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <div className="flex justify-between items-center">
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src="/course_2.png" alt="Physics exam 2022" width={500} height={300} className="w-full" />
            <div className="p-6">
              <div className="text-sm text-blue-600 mb-2">Mathematics section</div>
              <h3 className="text-2xl font-bold mb-2">Physics exam 2022</h3>
              <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <div className="flex justify-between items-center">
              </div>
            </div>
          </div>

          {/* Course 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src="/course_3.png" alt="Maths exam 2015" width={500} height={300} className="w-full" />
            <div className="p-6">
              <div className="text-sm text-blue-600 mb-2">Mathematics section</div>
              <h3 className="text-2xl font-bold mb-2">Maths exam 2015</h3>
              <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <div className="flex justify-between items-center">
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
        {/* Active Dot */}
        <div className="w-8 h-3 rounded-full bg-[#fabe07]"></div> 
        {/* Inactive Dots */}
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
        </div>


        {/* Learn more button */}
        <div className="text-center mt-12">
          <button className="bg-[#fabe07] text-[#121421] px-8 py-3 rounded-full hover:bg-yellow-600">
            Learn more about our programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlansOverview;
