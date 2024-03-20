"use client";
import * as React from 'react';

import {motion} from "framer-motion";
import {fadeIn} from "./variants";
import { Etape1 } from './etape1';
import { Etape2 } from './etape2';
import { Etape3 } from './etape3';



const Features = async ({}) => {
  
    return (
        
        <div className='my-24 md:px:14 px-3 max-w-screen-2xl mx-auto'>
           <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <motion.div className='lg:w-1/4'
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount: 0.7}}>
                    <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>Comment s'inscrire?</h3>
                    <p className='text-base text-indigo-800 text-opacity-45'>Suivez ces 3 étapes</p>
                </motion.div>
                {/* featured cards */}
                <motion.div className='w-full lg:w-3/4'
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount: 0.7}}>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-{35px} h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div className='items-center justify-center'>
                                <div className='flex items-center justify-center'>
                                    <Etape1/>
                                </div>
                                
                               
                                <div>
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center'>Abonnez-vous à la plateforme par email ou facebook</h5>
                                </div>
                                
                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-{35px} h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                        <div className='items-center justify-center'>
                                <div className='flex items-center justify-center'>
                                    <Etape2/>
                                </div>
                                
                               
                                <div>
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center'>Choisissez votre produit</h5>
                                </div>
                                
                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-{35px} h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div className='items-center justify-center'>
                                <div className='flex items-center justify-center'>
                                    <Etape3/>
                                </div>
                                
                               
                                <div>
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center'>Payez avec votre carte bancaire ou postale</h5>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </motion.div>
           </div>
        </div>
        
    );
};
export default Features;