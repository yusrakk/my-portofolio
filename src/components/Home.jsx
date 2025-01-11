import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const HomePage = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Kecepatan mengetik
  const wordIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    const words = ['Frontend Developer'];
    AOS.init({ duration: 1000, once: true });

    const typeWriterEffect = setTimeout(() => {
      const currentWord = words[wordIndex.current];

      if (!isDeleting) {
        // Mengetik karakter
        setText(currentWord.substring(0, charIndex.current + 1));
        charIndex.current++;

        if (charIndex.current === currentWord.length) {
          setIsDeleting(true);
          setTypingSpeed(500); // Waktu jeda setelah selesai mengetik
        }
      } else {
        // Menghapus karakter
        setText(currentWord.substring(0, charIndex.current - 1));
        charIndex.current--;

        if (charIndex.current === 0) {
          setIsDeleting(false);
          wordIndex.current = (wordIndex.current + 1) % words.length; // Berpindah ke kata berikutnya
          setTypingSpeed(150); // Kembali ke kecepatan mengetik
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typeWriterEffect);
  }, [text, isDeleting, typingSpeed]);

  return (
    <div style={{ paddingTop: '70px' }}> {/* Sesuaikan dengan tinggi navbar */}
      <header className="flex flex-col items-center justify-center min-h-screen gap-6 text-center text-white bg-black md:flex-row md:text-left md:gap-12">
        <div 
          className="flex flex-col items-center justify-center px-4 md:items-start md:px-8"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <h1 
            className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl" 
            data-aos="zoom-in" 
            data-aos-delay="400"
          >
            Hi! It's Yusa Putra Rosdiana
          </h1>

          <p className="mb-4 text-2xl" data-aos="fade-right" data-aos-delay="600">
            Saya Seorang <span className="font-semibold text-yellow-500 border-b-2 border-white">{text}</span>
          </p>
          <p className="max-w-xl mb-6 text-base leading-relaxed text-gray-300">
              Saya mahasiswa Universitas Siliwangi jurusan Informatika. Ketertarikan saya pada dunia informatika dimulai sejak SMA. Saat ini, saya sedang belajar menjadi Web Developer dan berharap mendalami ERP di masa depan.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.instagram.com/yusarosdiana_/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="https://wa.me/08997335085" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/yusa-putra-rosdiana-5777b2302" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
              <FaLinkedin />
            </a>
            <a href="mailto:yusarosdiana7@gmail.com" className="text-2xl hover:text-yellow-400">
              <FaEnvelope />
            </a>
            <a href="https://github.com/yusrakk" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
              <FaGithub />
            </a>
          </div>
        </div>
        <div 
          className="relative mt-6 md:mt-0 group"
          data-aos="flip-left"
          data-aos-delay="1000"
        >
          <img 
            src="yusa.jpg"  
            alt="Yusa Putra Rosdiana"
            className="w-96 h-96 rounded-full object-cover transition-all duration-300 group-hover:shadow-[0_0_25px_8px] group-hover:shadow-yellow-500 group-hover:filter group-hover:brightness-125"
          />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
