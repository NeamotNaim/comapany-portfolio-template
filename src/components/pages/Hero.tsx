import React from 'react';

const Hero = () => (
  <section className="min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-violet-600 to-indigo-700 text-white px-4 py-20">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
      RecursionSoft
    </h1>
    <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto font-medium">
      Building world-class software, websites, and apps for ambitious brands and
      startups.
    </p>
    <a
      href="#contact"
      className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-50 transition"
    >
      Let’s Work Together
    </a>
  </section>
);

export default Hero;
