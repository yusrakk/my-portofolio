import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsScrolling(true); // Navbar menghilang saat scroll ke bawah
      } else {
        setIsScrolling(false); // Navbar muncul saat scroll ke atas
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md transition-transform duration-500 ${
    isScrolling ? '-translate-y-full' : 'translate-y-0'
  }`}
  style={{ height: '70px' }} // Tinggi navbar
>
  <div className="flex items-center px-6 py-4">
    {/* Navigation Menu */}
    <nav className="justify-center flex-grow hidden md:flex">
      <ul className="flex space-x-8">
        <li>
          <a
            href="#about"
            className="text-lg font-medium transition transform hover:text-yellow-400 hover:scale-105"
          >
            Tentang Saya
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-lg font-medium transition transform hover:text-yellow-400 hover:scale-105"
          >
            Keahlian
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-lg font-medium transition transform hover:text-yellow-400 hover:scale-105"
          >
            Projek
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-lg font-medium transition transform hover:text-yellow-400 hover:scale-105"
          >
            Kontak Saya
          </a>
        </li>
      </ul>
    </nav>

    {/* Hamburger Menu for Mobile */}
    <div className="ml-auto md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
          </button>
        </div>
      </div>

      {/* Overlay when Menu is Open (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Dropdown Menu */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-16 right-4 w-64 rounded-lg bg-white text-black md:hidden`}
      >
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li>
            <a
              href="#about"
              className="block text-lg font-medium transition transform hover:text-yellow-400 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Tentang Saya
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block text-lg font-medium transition transform hover:text-yellow-400 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Keahlian
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-lg font-medium transition transform hover:text-yellow-400 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Projek
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-lg font-medium transition transform hover:text-yellow-400 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Kontak Saya
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
