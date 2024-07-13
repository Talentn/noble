"use client";
import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Logo } from './logo';

import {motion} from "framer-motion";
import {fadeIn} from "./variants";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const packages = [
    {
        name: "Un seul Bac", price: "15DT" , description: "Correction d'un seul examen qui contient 5 exercices détaillées" 
    },
    {
        name: "Package Bac's ", price: "200DT" , description: "Correction des examens bac session principale et contrôle du sesion 2014 à 2022 "
    }
]


const Pricing = async ({}) => {

    const router = useRouter();

  const onClick = async () => {
    try {
      router.push('/product')
    } catch {
      toast.error('erreur')
    }
  }

  const onClick1 = async () => {
    try {
      router.push('/pack')
    } catch {
      toast.error('erreur')
    }
  }
  
    return (
     <div className="md:px-14 p-4 max-w-s mx-auto py-10">
        <div className='text-center'>
            <h2 className='md:text-5xl text-3xl font-extrabolad text-primary mb-2'>Nos offres</h2>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-20 md:w-11/12 mx-auto'>
            {
                packages.map((pkg, index) => <div key={index} className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
                    <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                    <p className='text-indigo-950 text-center my-5 '>{pkg.description}</p>
                    <p className='mt-5 text-indigo-950 text-center text-4xl font-bold'>{pkg.price}</p>
                    <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                        <button className='btnPrimary py-3 px-8 bg-black font-semibold text-white rounded hover:bg-gray-500 transition-all duration-300' onClick={index === 0 ? onClick : onClick1}>Acheter</button>
                    </div>
                </div>)
            }
        </div>

     </div>
        
    )
}
export default Pricing;