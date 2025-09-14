import React from 'react';

const projects = [
  {
    name: 'NovaBank',
    desc: 'A next-gen digital banking platform for seamless financial management.',
    image: 'https://picsum.photos/seed/novabank-portfolio/400/250',
  },
  {
    name: 'FitTrack',
    desc: 'A fitness tracking mobile app with real-time analytics and social features.',
    image: 'https://picsum.photos/seed/fittrack-portfolio/400/250',
  },
  {
    name: 'ShopEase',
    desc: 'E-commerce solution for modern retailers with advanced analytics.',
    image: 'https://picsum.photos/seed/shopease-portfolio/400/250',
  },
];

const Portfolio = () => (
  <section className="py-20 bg-white" id="portfolio">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Work</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="bg-gray-50 rounded-xl shadow p-4 hover:shadow-lg transition flex flex-col">
            <img src={project.image} alt={project.name} className="rounded-lg mb-4 h-40 object-cover" />
            <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
            <p className="text-gray-500 flex-1">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio; 