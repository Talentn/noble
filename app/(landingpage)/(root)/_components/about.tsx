"use client";
import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Logo } from './logo';
import {motion} from "framer-motion";
import {fadeIn} from "./variants";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";





const About = async ({}) => {

    const router = useRouter();

    const onClick = async () => {
        try {
          router.push('/sign-in')
        } catch {
          toast.error('erreur')
        }
      }
  
    return (
        <div className="md:px-10 p-3 max-w-s mx-auto">
            <div className='flex flex-col md:flex-row justify-between items-center gap-5 '>
                <div className='md:w-1/2'>
                    <Logo/>
                </div>

                {/* content */}
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>Plate-forme <span>Nobel</span></h2>
                    <p className='text-indigo-950 text-lg mb-7'>Nobel est une plateforme innovante conçue pour aider les étudiants à perfectionner leurs compétences en rédaction lors des examens de sciences physiques et offre un environnement d&apos;apprentissage dynamique où les étudiants peuvent développer leur capacité à formuler des réponses claires et précises aux questions posées dans les examens de physique. Grâce à des exercices ciblés et à des conseils personnalisés, les étudiants peuvent renforcer leur compréhension des concepts scientifiques tout en améliorant leur expression écrite, les préparant ainsi à réussir avec succès leurs examens.</p>
                    <button className='btnPrimary py-3 px-8 bg-black font-semibold text-white rounded hover:bg-gray-500 transition-all duration-300' onClick={onClick}>Commencer</button>
                </div>

            </div>
        </div>
        
    )
}
export default About;