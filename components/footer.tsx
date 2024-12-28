"use client"
import React, { useState } from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from 'next/link';

const Footer: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
	  setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
	document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	setMenuOpen(false); // Close the menu when an item is clicked
};

  return (
	<footer>
	  {/* Main Footer Section */}
	  <div className="bg-[#121421] py-12">
		<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
		  {/* Logo and Description */}
		  <div className="flex-shrink-0">
			<div className="logo mb-4">
			  <img src="/logo_white.png" alt="Nobel Logo" className="h-12" />
			</div>
			<p
			  className="text-sm"
			  style={{ color: '#98A2B3' }}
			>
			  Les meilleures expériences d&apos;apprentissage qui créent plus de talents dans le monde.
			</p>
		  </div>

		  {/* Navigation Links */}
		  <div className="flex-shrink-0 md:mx-auto">
			<h4 className="text-[#98A2B3] mb-4 text-sm">Produit</h4>
			<ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
				<li>
				<Link href="/" className="text-white hover:text-[#fabe07] hover:underline">
					Accueil
				</Link>
				</li>
				<li>
				<Link 
					href="/#about" 
					className="text-white hover:text-[#fabe07] hover:underline"
				>
					A propos
				</Link>
				</li>
				<li>
				<Link 
					href="/#overview" 
					className="text-white hover:text-[#fabe07] hover:underline"
				>
					Aperçu
				</Link>
				</li>
				<li>
				<Link 
					href="/#register" 
					className="text-white hover:text-[#fabe07] hover:underline"
				>
					Comment s&apos;inscrire
				</Link>
				</li>
				<li>
				<Link 
					href="/#pricing" 
					className="text-white hover:text-[#fabe07] hover:underline"
				>
					Tarification
				</Link>
				</li>
			</ul>
			</div>

		</div>
	  </div>

	  {/* Bottom Footer Section */}
	  <div className="bg-[#101828] py-6">
		<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
		  {/* Copyright Text */}
		  <p className="text-[#98A2B3] text-center md:text-left">
			© 2024 Nobel. All rights reserved.
		  </p>

		  {/* Social Media Links */}
		  <div className="flex justify-center md:justify-end space-x-4">
			{/* Facebook Icon */}
			<a href="https://www.facebook.com/profile.php?id=61568757674605" target="_blank" rel="noopener noreferrer">
			  <FaFacebook
				className="text-2xl cursor-pointer hover:text-blue-600"
				style={{ color: '#98A2B3' }}
			  />
			</a>

			{/* Instagram Icon */}
			<a href="https://www.instagram.com/physi_chimie/" target="_blank" rel="noopener noreferrer">
			  <FaInstagram
				className="text-2xl cursor-pointer hover:text-pink-600"
				style={{ color: '#98A2B3' }}
			  />
			</a>
		  </div>
		</div>
	  </div>
	</footer>
  );
};

export default Footer;
