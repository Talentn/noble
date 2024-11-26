import React from 'react';
import Image from 'next/image'; // Adjust depending on your framework

const BuyingCourseSteps: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Acheter un cours étape par étape</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base">
          Suivez nos instructions simples pour acheter un cours. De la sélection du cours au paiement sécurisé, chaque étape est claire et facile à suivre.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative bg-white shadow-md rounded-lg p-6 text-center">
            {/* Icon above the card */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image
                src="/account.png"
                alt="Create a student account"
                width={100}
                height={100}
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
            {/* Content inside the card */}
            <div className="mt-12">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2F327D]">Créer un compte étudiant</h3>
              <p className="text-gray-500 text-sm md:text-base">
              Inscrivez-vous dès maintenant pour accéder à nos cours de physique et commencer à apprendre en toute simplicité.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white shadow-md rounded-lg p-6 text-center">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image
                src="/search.png"
                alt="Search your course easily"
                width={100}
                height={100}
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
            <div className="mt-12">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2F327D]">Recherchez votre cours facilement</h3>
              <p className="text-gray-500 text-sm md:text-base">
              Trouvez rapidement le cours de physique qui vous convient grâce à notre outil de recherche intuitif.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white shadow-md rounded-lg p-6 text-center">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image
                src="/wallet.png"
                alt="Paying courses online"
                width={100}
                height={100}
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
            <div className="mt-12">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#2F327D]">Cours payants en ligne</h3>
              <p className="text-gray-500 text-sm md:text-base">
              Accédez à des cours de physique complets et de qualité en ligne pour approfondir vos connaissances, à votre rythme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyingCourseSteps;
