import React from 'react';
import Image from 'next/image'; // Ensure you're importing Next.js Image component if needed

const PricingSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Packs and pricing</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Let's join our famous class, the knowledge provided will definitely be useful for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="bg-white rounded-xl p-6 mt-16 flex flex-col justify-between items-start h-[500px] w-full mx-auto">
            <div className='mt-10'>
              <h3 className="text-4xl font-bold text-[#2F327D]">$15</h3>
              <span className="text-gray-400">/Exam</span>
              <h4 className="text-xl font-bold mt-4 text-[#2F327D]">Only one exam</h4>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit consectetur adipiscing elit fergo.
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#eeedf2] rounded-full text-[#5164da]">
                  ✔
                </span>
                <span>Lorem espium anturium</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#eeedf2] rounded-full text-[#5164da]">
                  ✔
                </span>
                <span>Lorem espium anturium</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#eeedf2] rounded-full text-[#5164da]">
                  ✔
                </span>
                <span>Lorem espium anturium</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#eeedf2] rounded-full text-[#5164da]">
                  ✔
                </span>
                <span>Lorem espium anturium</span>
              </div>
              </ul>
            </div>
            <button className="mt-8 bg-white border border-[#2F327D] text-[#2F327D] px-6 py-3 rounded-full hover:bg-gray-100 w-full font-bold" >
              Choose plan
            </button>
          </div>

          {/* Second Card with Background Image */}
          <div
            className="relative bg-[#5164da] shadow-[0_10px_50px_rgba(0,0,0,0.5)] rounded-3xl p-6 text-white flex flex-col justify-between items-start h-[540px] w-full mx-auto"
            style={{
              backgroundImage: "url('/price_bg.png')", // Use your image path here
              backgroundPosition: 'right bottom', // Adjust the position to the right side
              backgroundSize: '40%', // Adjust the size as needed
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* "Most Popular" Badge */}
            <div className="absolute font-bold top-7 right-6 bg-yellow-400 text-xs px-6 py-2 rounded-full text-[#121421] tracking-widest">
              MOST POPULAR
            </div>
            <div className='mt-10'>
              <h3 className="text-4xl font-bold">$200</h3>
              <h4 className="text-xl font-bold mt-4">All bac exams</h4>
              <p className="text-gray-300 mt-2">
                Lorem ipsum dolor sit consectetur adipiscing elit fergo.
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#b1b7f1] rounded-full text-white">
                  ✔
                </span>
                <span>Lorem espium anturium</span>
              </div>
                <div className="flex items-center space-x-2">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#b1b7f1] rounded-full text-white">
                  ✔
                </span>
                <span>Lorem espium anturium</span>
              </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-[#b1b7f1] rounded-full text-white">
                    ✔
                  </span>
                  <span>Lorem espium anturium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-[#b1b7f1] rounded-full text-white">
                    ✔
                  </span>
                  <span>Lorem espium anturium</span>
              </div>
              </ul>
            </div>
            <button className="mb-10 bg-yellow-400 text-[#121421] px-6 py-3 rounded-full hover:bg-yellow-500 w-full font-bold">
            Choose plan
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
