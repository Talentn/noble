import React from 'react';
import Image from 'next/image';

const PricingSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Forfaits et Tarification</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base">
          Rejoignez notre célèbre classe, les connaissances partagées vous seront certainement utiles.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-auto w-full">
            <div className="mt-6 md:mt-10">
              <h3 className="text-3xl md:text-4xl font-bold text-[#2F327D]">10 DT</h3>
              <span className="text-gray-400 text-sm md:text-base">/Examen</span>
              <h4 className="text-lg md:text-xl font-bold mt-4 text-[#2F327D]">Un seul examen</h4>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
              Préparez-vous efficacement pour réussir cet examen unique grâce à nos ressources et conseils ciblés.
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-2">
  <li className="flex items-center space-x-2">
    <span className="inline-flex items-center justify-center w-6 h-6 bg-[#eeedf2] rounded-full text-[#2F327D] font-extrabold">
      &#10003;
    </span>
    <span className="text-sm md:text-base">5 vidéos par examen</span>
  </li>
  <li className="flex items-center space-x-2">
    <span className="inline-flex items-center justify-center w-6 h-6 bg-[#eeedf2] rounded-full text-[#2F327D] font-extrabold">
      &#10003;
    </span>
    <span className="text-sm md:text-base">Correction bien détaillé</span>
  </li>
  <li className="flex items-center space-x-2">
    <span className="inline-flex items-center justify-center w-6 h-6 bg-[#eeedf2] rounded-full text-[#2F327D] font-extrabold">
      &#10003;
    </span>
    <span className="text-sm md:text-base">Plus que 2 heures</span>
  </li>
</ul>

            </div>
          </div>

          {/* Second Card with Background Image */}
          <div
            className="relative bg-[#5164da] shadow-lg rounded-lg p-6 text-white flex flex-col justify-between h-auto w-full"
            style={{
              backgroundImage: "url('/price_bg.png')",
              backgroundPosition: 'right bottom',
              backgroundSize: '40%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* "Most Popular" Badge */}
            <div className="absolute font-bold top-7 right-6 bg-yellow-400 text-xs px-6 py-2 rounded-full text-[#121421] tracking-widest">
            LE PLUS POPULAIRE
            </div>
            <div className="mt-6 md:mt-10">
              <h3 className="text-3xl md:text-4xl font-bold">120 DT / 180 DT</h3>
              <h4 className="text-lg md:text-xl font-bold mt-4">Tous les examens du bac</h4>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
              Accédez à une collection complète de tous les examens du bac pour vous entraîner et réussir avec confiance.
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-2">
  <li className="flex items-center space-x-2">
    <span
      className="inline-flex items-center justify-center w-6 h-6 bg-[#b1b7f1] rounded-full"
      style={{ color: 'white' }}
    >
      &#10003;
    </span>
    <span className="text-sm md:text-base">Plus que 20 examens</span>
  </li>
  <li className="flex items-center space-x-2">
    <span
      className="inline-flex items-center justify-center w-6 h-6 bg-[#b1b7f1] rounded-full"
      style={{ color: 'white' }}
    >
      &#10003;
    </span>
    <span className="text-sm md:text-base">Plus que 90 vidéos</span>
  </li>
  <li className="flex items-center space-x-2">
    <span
      className="inline-flex items-center justify-center w-6 h-6 bg-[#b1b7f1] rounded-full"
      style={{ color: 'white' }}
    >
      &#10003;
    </span>
    <span className="text-sm md:text-base">Plus que 180 heures</span>
  </li>
</ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
