import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya sekali saat elemen muncul
      mirror: true, // Memungkinkan animasi saat scroll kembali
    });
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col items-center px-6 py-20 overflow-hidden text-white bg-black md:px-12"
    >
      {/* Judul Tengah */}
      <div
        className="w-full mb-10 text-center"
        data-aos="fade-up" // Fade up untuk judul
        data-aos-duration="1000"
      >
        <h2 className="inline-block pb-2 mb-4 text-4xl font-bold border-b-4 border-yellow-400">
          Tentang Saya
        </h2>
      </div>

      {/* Konten Teks */}
      <div className="flex flex-col items-center w-full space-y-6 md:space-y-8">
        {/* Card 1 */}
        <div
          className="w-full p-6 bg-gray-800 rounded-lg shadow-lg md:w-2/3"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p className="text-lg leading-relaxed text-left">
            Halo! Saya <span className="font-semibold text-yellow-400">Yusa Putra Rosdiana</span>, seorang yang penuh semangat dalam dunia informatika. Saat ini, saya fokus untuk mempelajari dan mengembangkan pengetahuan di bidang <span className="font-semibold text-yellow-400">ERP (Enterprise Resource Planning)</span>. Selain itu, saya juga terus mendalami berbagai teknologi pengembangan web untuk memperluas wawasan dan keterampilan di bidang ini.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="w-full p-6 bg-gray-800 rounded-lg shadow-lg md:w-2/3"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <p className="text-lg leading-relaxed text-left">
            Visi saya adalah untuk menjadi ahli dalam mengembangkan sistem ERP yang tidak hanya memberikan solusi praktis dan efisien bagi perusahaan, tetapi juga mampu menghadirkan inovasi yang meningkatkan produktivitas dan kualitas bisnis secara keseluruhan. Saya percaya bahwa teknologi yang tepat dapat mendorong perubahan besar dan membawa dampak positif bagi berbagai sektor industri.
          </p>
          <p className="mt-4 text-lg italic leading-relaxed text-yellow-300">
            "Tidak ada mimpi yang terlalu besar jika diiringi dengan kerja keras, tekad, dan inovasi tanpa henti."
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="w-full p-6 bg-gray-800 rounded-lg shadow-lg md:w-2/3"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <p className="text-lg leading-relaxed text-left">
            Nilai yang saya anut adalah <span className="font-semibold text-yellow-400">kerja keras</span>, <span className="font-semibold text-yellow-400">dedikasi</span>, dan <span className="font-semibold text-yellow-400">inovasi</span>. Saya percaya bahwa dengan kerja keras, kita dapat mengatasi tantangan apa pun. Dedikasi adalah fondasi dari setiap pencapaian besar, dan inovasi adalah kunci untuk menciptakan solusi yang relevan di dunia yang terus berubah.
          </p>
          <p className="mt-4 text-lg italic leading-relaxed text-yellow-300">
            "Setiap langkah kecil hari ini adalah fondasi bagi kesuksesan besar di masa depan. Setiap kegagalan adalah pelajaran berharga yang membawa kita lebih dekat ke tujuan."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
