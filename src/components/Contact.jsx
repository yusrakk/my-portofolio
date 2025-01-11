import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="px-10 py-20 text-white bg-black"
      data-aos="fade-up"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <h2
          className="inline-block mb-10 text-4xl font-bold border-b-4 border-yellow-400"
          data-aos="fade-down"
        >
        Kontak Saya
        </h2>
        <p
          className="mb-8 text-lg"
          data-aos="fade-up"
        >
          Hubungi saya pada kontak dibawah ini
        </p>
        
        {/* Informasi Kontak */}
        <div
          className="flex flex-col items-center justify-center gap-8 mb-12 md:flex-row"
          data-aos="fade-up"
        >
          <a
            href="mailto:yusarosdiana7@gmail.com"
            className="flex items-center gap-3 px-6 py-3 transition duration-300 bg-gray-800 rounded-lg hover:bg-gray-700"
            data-aos="zoom-in"
          >
            <img src="gmail.svg" alt="Email Icon" className="w-6 h-6" />
            <span className="text-lg">Gmail</span>
          </a>

          <a
            href="https://wa.me/628997335085"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 transition duration-300 bg-green-600 rounded-lg hover:bg-green-500"
            data-aos="zoom-in"
          >
            <img src="/whatsapp.svg" alt="WhatsApp Icon" className="w-6 h-6" />
            <span className="text-lg">Whatsapp</span>
          </a>
        </div>

        <form
          action="mailto:yusarosdiana7@gmail.com"
          method="POST"
          encType="text/plain"
          className="p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="Name"
              type="text"
              className="w-full p-3 text-white bg-gray-900 border border-gray-700 rounded-md"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="Email"
              type="email"
              className="w-full p-3 text-white bg-gray-900 border border-gray-700 rounded-md"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              className="w-full p-3 text-white bg-gray-900 border border-gray-700 rounded-md"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-500"
            data-aos="zoom-in"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
