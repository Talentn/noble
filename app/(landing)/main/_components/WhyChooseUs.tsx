import React from 'react';
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Title and Description */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
                    <div className="lg:w-1/2">
                        <h2 
                            className="font-extrabold text-black mb-4"
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontSize: '50px', // Smaller size for mobile, overridden by Tailwind for lg+
                                fontWeight: 800, 
                                lineHeight: '48px',
                                letterSpacing: '-0.02em',
                                textAlign: 'left',
                            }}
                        >
                            Pourquoi choisir <br /> les services de Nobel
                        </h2>
                    </div>

                    <p 
                        className="text-gray-500 mt-8 lg:mt-0 lg:ml-8 lg:w-1/2"
                        style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: '20px', // Smaller size for mobile, overridden for larger screens
                            fontWeight: 600,
                            lineHeight: '28px',
                            textAlign: 'left',
                        }}
                    >
                        Choisissez Nobel pour une préparation optimale au bac en physique. Profitez de corrections détaillées et claires des anciens examens pour mieux apprendre et comprendre comment répondre efficacement à l&apos;examen principal
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start">
                        <div>
                            <Image src="/pay.png" alt="Paying courses" width={80} height={80} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#2F327D' }}>Cours payants en ligne</h3>
                        <p className="text-gray-500 text-sm md:text-base">
                            Accédez à des cours approfondis et détaillés pour maîtriser la physique, à votre rythme. Nos cours payants vous offrent un contenu de haute qualité conçu par des experts.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start">
                        <div>
                            <Image src="/course.png" alt="Updated courses" width={80} height={80} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#2F327D' }}>Cours mis à jour</h3>
                        <p className="text-gray-500 text-sm md:text-base">
                        Restez à jour avec les dernières mises à jour des cours, adaptées aux nouvelles exigences du programme. Nos contenus sont régulièrement revus pour vous offrir les meilleures ressources pédagogiques.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start">
                        <div>
                            <Image src="/security.png" alt="Secure platform" width={80} height={80} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#2F327D' }}>Plateforme sécurisée</h3>
                        <p className="text-gray-500 text-sm md:text-base">
                        Profitez d&apos;une plateforme d&apos;apprentissage sécurisée, garantissant la confidentialité de vos données et des transactions en toute sécurité.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
