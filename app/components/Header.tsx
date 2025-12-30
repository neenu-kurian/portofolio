"use client";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg h-16 md:h-20 backdrop-blur-sm bg-[radial-gradient(circle_at_center,#ffffff_0,#ffffff_180px,#f6f0fa_100%)] p-4 md:p-6">
      <div className="flex justify-between items-center">
        <div className="text-lg md:text-xl text-gray-800 cursor-pointer hover:text-black" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Portfolio
        </div>
        <ul className="hidden md:flex gap-6 md:gap-15 text-sm md:text-lg text-gray-500">
          <li><a href="#skills" className="hover:text-black cursor-pointer">Skills</a></li>
          <li><a href="#timeline" className="hover:text-black cursor-pointer">Experience</a></li>
          <li><a href="#project" className="hover:text-black cursor-pointer">Projects</a></li>
          <li><a href="#contact" className="hover:text-black cursor-pointer">Contact</a></li>
        </ul>
        <button 
          className="md:hidden text-gray-500 hover:text-black z-50 relative"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40" onClick={closeMenu}>
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 bg-white">
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
                onClick={closeMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="space-y-4 text-lg text-gray-500">
                <li><a href="#skills" className="hover:text-black cursor-pointer block py-2" onClick={closeMenu}>Skills</a></li>
                <li><a href="#timeline" className="hover:text-black cursor-pointer block py-2" onClick={closeMenu}>Experience</a></li>
                <li><a href="#project" className="hover:text-black cursor-pointer block py-2" onClick={closeMenu}>Project</a></li>
                <li><a href="#contact" className="hover:text-black cursor-pointer block py-2" onClick={closeMenu}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;