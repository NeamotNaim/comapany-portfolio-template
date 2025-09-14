import React from 'react';

const testimonials = [
  {
    name: 'Sarah Lee',
    company: 'NovaBank',
    feedback:
      'RecursionSoft exceeded our expectations. The team was professional, creative, and delivered on time.',
  },
  {
    name: 'James Carter',
    company: 'FitTrack',
    feedback:
      'Their attention to detail and technical expertise helped us launch a successful app.',
  },
  {
    name: 'Priya Patel',
    company: 'ShopEase',
    feedback:
      'We loved working with RecursionSoft. They truly care about their clients and the end product.',
  },
];

const Testimonials = () => (
  <section className="py-20 bg-white" id="testimonials">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-violet-200 flex items-center justify-center text-2xl font-bold text-violet-700 mb-4">
              {t.name[0]}
            </div>
            <p className="text-gray-700 italic mb-2">“{t.feedback}”</p>
            <span className="font-semibold text-violet-700">{t.name}</span>
            <span className="text-gray-500 text-sm">{t.company}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
