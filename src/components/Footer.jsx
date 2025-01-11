import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
  }, []);

  return (
    <footer
      className="p-8 text-white bg-gray-800"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        {/* Ikon Media Sosial */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/yusarosdiana_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/08997335085"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/yusa-putra-rosdiana-5777b2302"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yusarosdiana7@gmail.com"
            className="text-2xl hover:text-yellow-400"
          >
            <FaEnvelope />
          </a>
          <a href="https://github.com/yusrakk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl hover:text-yellow-400"
          >
            <FaGithub />
          </a>
        </div>

        {/* Alamat */}
        <p className="mb-6 text-lg text-center">
          <strong>Alamat:</strong> Jl. PGRI Timur, Babakan Sukakaya, No. 49, Tasikmalaya
        </p>

        {/* Hak Cipta */}
        <p className="text-center">&copy; 2025 Yusa Putra Rosdiana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
