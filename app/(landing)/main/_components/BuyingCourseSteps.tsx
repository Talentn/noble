import React from 'react';
import Image from 'next/image'; // Adjust depending on your framework

const BuyingCourseSteps: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">buying a course step by step</h2>
          <p className="text-gray-500 max-w-full mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

    {/* Step Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative bg-white shadow-md rounded-lg p-6 text-center w-[400px]">
            {/* Icon above the card */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image src="/account.png" alt="Create a student account" width={130} height={130}/>
            </div>
            {/* Content inside the card */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-2 text-[#2F327D]">Create a student account</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white shadow-md rounded-lg p-6 text-center w-[400px]">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image src="/search.png" alt="Search your course easily" width={130} height={130}/>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-2 text-[#2F327D]">Search your course easily</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white shadow-md rounded-lg p-6 text-center w-[400px]">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image src="/wallet.png" alt="Paying courses online" width={130} height={130}/>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-2 text-[#2F327D]">Paying courses online</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default BuyingCourseSteps;
