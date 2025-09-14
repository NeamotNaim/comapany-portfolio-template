import React from 'react';

const ProductShowcase = () => (
  <section className="py-20 bg-gradient-to-r from-indigo-50 to-violet-100" id="product">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
      <img src="https://picsum.photos/seed/showcase/400/400" alt="Product" className="rounded-2xl shadow-lg w-full md:w-1/2 object-cover" />
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Study: NovaBank</h2>
        <p className="text-lg text-gray-700 mb-4">We partnered with NovaBank to build a secure, scalable, and intuitive digital banking platform. Our team delivered a seamless user experience, robust backend, and a modern design that elevated their brand.</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Custom dashboard & analytics</li>
          <li>Mobile-first responsive design</li>
          <li>Bank-grade security features</li>
        </ul>
        <a href="#contact" className="inline-block bg-violet-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-violet-700 transition">Start Your Project</a>
      </div>
    </div>
  </section>
);

export default ProductShowcase; 