// Footer.jsx
"use client";
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Footer = () => {
  const year = new Date().getFullYear();
  const router = useRouter();
  
  const onClick = async () => {
	try {
		router.push('/search')
	} catch {
		toast.error('erreur')
	}
}
const onClick1 = async () => {
	try {
		router.push('/')
	} catch {
		toast.error('erreur')
	}
}
  

  return (
    <>
    
	<div className="bg-gray-50 h-1/5 w-full flex md:flex-row flex-col justify-center items-start">
				<div className="p-4 ">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">
							Trouvez<span className="text-blue-600">-nous</span>
						</p>
						<div className="flex gap-6 pb-3">
                        <a href="https://www.instagram.com/jassem.debbich/">
                            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                        </a>
                        <a href="https://www.instagram.com/jassem.debbich/">
                            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                        </a>
							
						</div>
					</ul>
				</div>
				<div className="p-9 ">
					<ul>
						<li className="text-gray-500 text-md pb-1 font-semibold hover:text-blue-600 cursor-pointer">
                            <a onClick={onClick}>Nos Produits</a>
						</li>
						
					</ul>
				</div>
				<div className="p-9 ">
					<ul>
						
						<li className="text-gray-500 text-md pb-1 font-semibold hover:text-blue-600 cursor-pointer">
                            <a onClick={onClick1}>Politique du site</a>
						</li>
					</ul>
				</div>
				<div className="p-9 ">
					<ul>
						
						<li className="text-gray-500 text-md pb-1 font-semibold hover:text-blue-600 cursor-pointer">
                            <a onClick={onClick1}>Developpeurs</a>
						</li>
						
					</ul>
				</div>
				
	</div>
    <div className="flex flex-col justify-center items-center text-center p-1 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
                    Nobel © {year}
					
				</h1>
	</div>
    </>
    
	
    
  );
};

export default Footer;
