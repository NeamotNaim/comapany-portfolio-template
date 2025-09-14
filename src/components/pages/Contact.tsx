import React from 'react';

const Contact = () => (
  <section className="py-20 bg-white" id="contact">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contact Us
      </h2>
      <form className="bg-gray-50 rounded-xl shadow p-8 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-violet-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-violet-700 transition"
        >
          Send Message
        </button>
      </form>
      <div className="text-center text-gray-500 mt-6">
        Or email us at{' '}
        <a
          href="mailto:hello@recursionsoft.dev"
          className="text-violet-700 font-medium"
        >
          hello@recursionsoft.dev
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
