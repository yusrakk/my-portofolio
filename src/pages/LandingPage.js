import React from 'react';
import Navbar from '../components/Navbar'; 
import HomePage from '../components/Home'; 
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => (
  <div className="font-sans text-gray-800 bg-gray-100">
    <Navbar />
    <HomePage />
    <About />
    <Skills />
    <Projects/>
    <Contact />
    <Footer />
  </div>
);

export default LandingPage;
