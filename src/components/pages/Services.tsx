import React from 'react';

const services = [
  {
    title: 'Web Development',
    desc: 'Custom websites and web apps built for performance, scalability, and beauty.'
  },
  {
    title: 'Mobile App Development',
    desc: 'iOS & Android apps with seamless UX and robust functionality.'
  },
  {
    title: 'UI/UX Design',
    desc: 'Modern, user-centric interfaces that delight and engage.'
  },
  {
    title: 'Product Strategy',
    desc: 'From ideation to launch, we help shape your digital vision.'
  },
  {
    title: 'Branding',
    desc: 'Distinctive brand identities and digital assets.'
  },
];

const Services = () => (
  <section className="py-20 bg-gray-50" id="services">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
            <p className="text-gray-500">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 