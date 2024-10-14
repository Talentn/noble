import React from 'react';
import Image from 'next/image'; // If you're using Next.js

const WhyChooseUs: React.FC = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Title and Description */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        {/* Apply Figma styling to the title */}
                        <h2 
                            className="font-extrabold text-black mb-4"
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontSize: '80px', // Figma: 64px
                                fontWeight: 800,  // Figma: 800
                                lineHeight: '80px', // Figma: 40px
                                letterSpacing: '-0.05em', // Figma: -0.02em
                                textAlign: 'left'
                            }}
                        >
                            Why should choose <br /> Nobel services
                        </h2>
                    </div>

                    {/* Apply Figma styling to the paragraph */}
                    <p 
                        className="text-gray-500 max-w-md mt-8"
                        style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: '20px',
                            fontWeight: 600,  
                            lineHeight: '30px', 
                            textAlign: 'left'
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                    </p>
                </div>

                {/* Main Image with Play Button */}
                <div className="relative mb-12">
                    <Image
                        src="/video.png"
                        alt="Person in Meeting"
                        width={700}
                        height={400}
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <button className="bg-white p-4 rounded-full shadow-lg">
                            <Image src="/play_button.png" alt="Play" width={32} height={32} />
                        </button>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start w-[400px]">
                        <div>
                            <Image src="/pay.png" alt="Paying courses" width={110} height={110} />
                        </div>
                        <h3 className="text-xl font-bold mb-1" style={{ color: '#2F327D' }}>Paying courses online</h3>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start  w-[400px]">
                        <div>
                            <Image src="/course.png" alt="Updated courses" width={110} height={110} />
                        </div>
                        <h3 className="text-xl font-bold mb-1" style={{ color: '#2F327D' }}>Updated courses</h3>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start  w-[400px]">
                        <div>
                            <Image src="/security.png" alt="Secure platform" width={110} height={110} />
                        </div>
                        <h3 className="text-xl font-bold mb-1" style={{ color: '#2F327D' }}>Secure platform</h3>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
