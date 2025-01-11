import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(true); // Menyimpan status visibilitas

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya sekali saat elemen muncul
    });

    // Event listener untuk mendeteksi scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(false); // Menyembunyikan elemen saat scroll ke bawah
      } else {
        setIsVisible(true); // Menampilkan elemen kembali saat scroll ke atas
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "Projek 1",
      description: " Dalam projek ini Saya ikut mengembangkan sebuah platform perpustakaan digital yang dirancang khusus untuk anak-anak. Platform ini dikembangkan dengan menggunakan framework Next.js",
      link: "https://perpustakaan-anak.vercel.app/",
      image: "projek1.png"
    },
    {
      title: "Projek 2",
      description: "Dalam projek ini Saya ikut mengembangkan sebuah platform belajar materi bilangan kompleks dengan isi fitur kalkulator, bahan materi, dan Quiz. Saya ikut berkonribusi diprojek ini. kami munggunakan html sebagai kerangka semua halaman web, javascript sebagai animasi, dan css vanila sebagai styling.",
      link: "https://ndesmond99.github.io/kalkulus3/html/home-page.html",
      image: "projek2.png"
    },
    {
      title: "Projek 3",
      description: "Projek portofolio ini saya kembangkan menggunakan React Native untuk memastikan performa yang optimal dan desain responsif yang sesuai dengan berbagai perangkat.",
      link: "#",
      image: "projek3.png"
    },
  ];

  return (
    <section id="projects" className="py-16 text-white bg-gray-900">
      <div className="container mx-auto text-center">
        <h2
          className="inline-block mb-10 text-4xl font-bold border-b-4 border-yellow-400"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Projek Saya
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 transition-all duration-300 bg-black rounded-lg shadow-lg ${isVisible ? 'opacity-100' : 'opacity-50'} hover:shadow-xl`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 200}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-56 mb-4 rounded-t-lg"
              />
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="font-semibold text-yellow-400 hover:text-yellow-500"
              >
                Lihat Detail
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
