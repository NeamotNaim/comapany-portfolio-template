import React from 'react';
import { useParams, Link } from 'react-router-dom';

const allProductsData = {
  novabank: {
    name: 'NovaBank Platform',
    desc: 'A next-gen digital banking platform for seamless financial management. NovaBank provides a secure, scalable, and intuitive experience, enabling rapid growth and customer satisfaction.',
    image: 'https://source.unsplash.com/600x350/?banking,app',
    features: [
      { icon: '⚡', title: 'Fast Performance', desc: 'Optimized for speed and reliability.' },
      { icon: '🔒', title: 'Bank-grade Security', desc: 'Robust encryption and fraud prevention.' },
      { icon: '📱', title: 'Mobile Ready', desc: 'Fully responsive and mobile-friendly access.' },
      { icon: '📊', title: 'Advanced Analytics', desc: 'Real-time insights for data-driven decisions.' },
    ],
    useCases: [
      'Fintech startups needing rapid MVP development',
      'Established banks digitizing legacy systems',
      'Financial institutions requiring custom features',
    ],
    screenshots: [
      'https://source.unsplash.com/400x250/?dashboard,bank',
      'https://source.unsplash.com/400x250/?mobile-banking,ui',
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    pricing: [
      { plan: 'Starter', price: '$99/mo', features: ['Basic features', '24/7 Support', '1000 users'] },
      { plan: 'Enterprise', price: 'Custom', features: ['All Starter features', 'Dedicated support', 'Unlimited users', 'Custom integrations'] },
    ],
  },
  fittrack: {
    name: 'FitTrack App',
    desc: 'A comprehensive fitness tracking mobile app with real-time analytics and social features. Empowering users to achieve their health goals with personalized insights and community support.',
    image: 'https://source.unsplash.com/600x350/?fitness,mobile',
    features: [
      { icon: '⏱️', title: 'Real-time Tracking', desc: 'Monitor workouts and progress instantly.' },
      { icon: '🤝', title: 'Social Integration', desc: 'Connect with friends and fitness communities.' },
      { icon: '🎯', title: 'Personalized Goals', desc: 'Set and track custom fitness objectives.' },
      { icon: '🍎', title: 'Nutrition Planner', desc: 'Log meals and manage dietary intake.' },
    ],
    useCases: [
      'Fitness coaches managing client progress',
      'Gyms offering digital engagement to members',
      'Individuals seeking a complete health solution',
    ],
    screenshots: [
      'https://source.unsplash.com/400x250/?workout,app',
      'https://source.unsplash.com/400x250/?health,tracker',
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    pricing: [
      { plan: 'Basic', price: '$19/mo', features: ['Workout tracking', 'Community access'] },
      { plan: 'Premium', price: '$39/mo', features: ['All Basic features', 'Personal coaching', 'Advanced analytics'] },
    ],
  },
  shopease: {
    name: 'ShopEase E-commerce',
    desc: 'A robust e-commerce solution for modern retailers with advanced analytics and seamless checkout. Designed to maximize sales and streamline inventory management.',
    image: 'https://source.unsplash.com/600x350/?ecommerce,website',
    features: [
      { icon: '📈', title: 'Advanced Analytics', desc: 'Gain insights into sales and customer behavior.' },
      { icon: '💳', title: 'Seamless Checkout', desc: 'Streamlined and secure payment processing.' },
      { icon: '📦', title: 'Inventory Management', desc: 'Track stock and automate reorders.' },
      { icon: '🎨', title: 'Customizable Design', desc: 'Tailor your storefront to your brand.' },
    ],
    useCases: [
      'Small businesses setting up online stores',
      'Growing brands expanding digital reach',
      'Retailers needing comprehensive sales tools',
    ],
    screenshots: [
      'https://source.unsplash.com/400x250/?online-store,ui',
      'https://source.unsplash.com/400x250/?shopping,website',
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    pricing: [
      { plan: 'Standard', price: '$79/mo', features: ['Online store', 'Basic analytics'] },
      { plan: 'Pro', price: '$149/mo', features: ['All Standard features', 'Advanced reporting', 'Marketing tools'] },
    ],
  },
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = allProductsData[id];

  if (!product) {
    return (
      <section className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-violet-700 mb-4">Product Not Found</h1>
        <Link to="/products" className="bg-violet-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-violet-800 transition">Back to All Products</Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-violet-700">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-8">{product.desc}</p>
      {/* Feature breakdown */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {product.features.map((f, i) => (
          <div key={i} className="bg-gray-50 rounded-xl shadow p-6 text-center">
            <div className="text-4xl mb-2">{f.icon}</div>
            <h3 className="font-bold text-xl mb-1 text-violet-700">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
      {/* Use cases */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Who is it for?</h2>
        <ul className="list-disc list-inside text-gray-700">
          {product.useCases.map((uc, i) => <li key={i}>{uc}</li>)}
        </ul>
      </div>
      {/* Screenshots & video demo */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Screenshots & Demo</h2>
        <div className="flex flex-wrap gap-6 mb-4">
          {product.screenshots.map((src, i) => <img key={i} src={src} alt="Screenshot" className="rounded-lg shadow w-64 h-40 object-cover" />)}
        </div>
        <div className="aspect-w-16 aspect-h-9 w-full max-w-2xl mx-auto">
          <iframe
            src={product.video}
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 rounded-lg shadow"
          ></iframe>
        </div>
      </div>
      {/* Pricing table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Pricing</h2>
        <div className="flex flex-wrap gap-8">
          {product.pricing.map((p, i) => (
            <div key={i} className="bg-white border border-violet-200 rounded-xl shadow p-6 w-64">
              <h3 className="font-bold text-xl mb-2 text-violet-700">{p.plan}</h3>
              <div className="text-3xl font-extrabold mb-4">{p.price}</div>
              <ul className="mb-4 text-gray-700 list-disc list-inside">
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <button className="bg-violet-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-violet-800 transition">Choose {p.plan}</button>
            </div>
          ))}
        </div>
      </div>
      {/* Back to Products */}
      <div className="text-center">
        <Link to="/product" className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition">← Back to All Products</Link>
      </div>
    </section>
  );
};

export default ProductDetailPage;