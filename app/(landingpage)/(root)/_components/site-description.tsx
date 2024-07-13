"use client";
import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Logo } from './logo';
import {motion} from "framer-motion";
import {fadeIn} from "./variants";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";





const SiteDescription = async ({}) => {
  const router = useRouter();

  const onClick = async () => {
    try {
      router.push('/sign-in')
    } catch {
      toast.error('erreur')
    }
  }
  
    return (
        <>
        <div className='md:px-10 p-5 max-w-screen-5xl mx-auto mt-25'>
          <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9"
            style={{
              background: 'linear-gradient(99deg, #7a7a7a  0%, #b0adac 100%)',
            }}>
            <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
              
              {/* banner content */}
              <motion.div className='md:w-3/5'
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false,amount: 0.7}}
              >
                <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>Plate-forme Nobel</h2>
                <p className='text-white text-2xl mb-8'>Première plate-forme en Tunisie du correction des épreuves du Baccalauréat</p>
                <div className='space-y-4'>
                  <button className="btnPrimary py-3 px-8 bg-secondary font-semibold text-black rounded hover:bg-white transition-all duration-300" onClick={onClick}>Commencer</button>
                </div>
              </motion.div>

              {/* banner image */}
              <motion.div
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount: 0.7}}
              >
                <Logo/>
              </motion.div>
              
            </div>
          </div>
        </div>
        </>
        
    )
}
export default SiteDescription;