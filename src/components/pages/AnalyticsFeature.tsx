import React from 'react';

const AnalyticsFeature = () => (
  <section className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-violet-700">
      Analytics & Conversion Tracking
    </h1>
    <p className="text-lg text-gray-700 mb-6">
      RecursionSoft integrates advanced analytics and conversion tracking into
      every project, helping you make data-driven decisions and optimize your
      digital presence.
    </p>
    <div className="mb-8 flex justify-center">
      <img
        src="https://source.unsplash.com/600x300/?analytics,dashboard"
        alt="Analytics Dashboard"
        className="rounded-xl shadow-lg"
      />
    </div>
    <ul className="mb-8 list-disc list-inside text-gray-700">
      <li>Google Analytics, Mixpanel, and custom dashboards</li>
      <li>Event and goal tracking for conversions</li>
      <li>GDPR-compliant data collection</li>
      <li>Real-time reporting and insights</li>
    </ul>
    <div className="bg-violet-50 rounded-xl shadow p-6 text-center">
      <span className="text-violet-700 font-semibold">Note:</span> All analytics
      integrations are privacy-first and fully GDPR compliant. Cookie consent
      banners are included by default.
    </div>
  </section>
);

export default AnalyticsFeature;
