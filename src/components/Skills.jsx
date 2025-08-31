import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya sekali saat elemen muncul
    });
  }, []);

  const skills = [
    {
      title: 'HTML',
      description: 'HTML adalah kerangka dasar dari semua halaman web.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
      title: 'CSS',
      description: 'CSS digunakan untuk membuat halaman web terlihat menarik.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    },
    {
      title: 'JavaScript',
      description: 'JavaScript adalah bahasa pemrograman untuk web.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    },
    {
      title: 'PostgreSQL',
      description: 'PostgreSQL adalah sistem manajemen basis data relasional.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      title: 'Next.js',
      description: 'Next.js adalah framework React untuk pengembangan web modern.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      title: 'Tailwind CSS',
      description: 'Tailwind CSS adalah framework CSS yang modern.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    },
    {
      title: 'React',
      description: 'React adalah pustaka JavaScript untuk membangun UI.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
  ];

  return (
    <section id="skills" className="px-10 py-20 text-white bg-black">
      <div className="container mx-auto text-center">
        <h2 className="inline-block mb-10 text-4xl font-bold border-b-4 border-yellow-400">
          Keahlian
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 transition transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-yellow-400"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={skill.icon}
                alt={skill.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="mb-2 text-2xl font-semibold">{skill.title}</h3>
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
