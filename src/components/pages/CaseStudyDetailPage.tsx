import React from 'react';
import { useParams, Link } from 'react-router-dom';

const caseStudiesData = {
  novabank: {
    id: 'novabank',
    client: 'NovaBank',
    industry: 'Fintech',
    title: 'Building a Secure & Scalable Digital Banking Platform',
    image: 'https://picsum.photos/seed/novabank-cs-main/800/450',
    overview:
      'RecursionSoft partnered with NovaBank to develop a cutting-edge digital banking platform, transforming their customer experience and enabling rapid growth in a competitive market. The solution focused on security, scalability, and intuitive user interfaces.',
    challenge:
      'NovaBank faced challenges with an outdated legacy system that limited their ability to innovate and provide modern banking services. They needed a robust, secure, and user-friendly platform to attract new customers and retain existing ones.',
    solution: [
      'Designed and implemented a microservices-based architecture for high scalability and resilience.',
      'Developed a secure and intuitive mobile and web application with multi-factor authentication.',
      'Integrated with various third-party financial services and payment gateways.',
      'Implemented advanced analytics and reporting tools for business insights.',
    ],
    results: [
      'Increased user retention by 40% within the first year.',
      'Reduced transaction processing time by 60%.',
      'Achieved 99.9% uptime and enhanced security ratings.',
      'Expanded customer base by 25% in key demographics.',
    ],
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Kubernetes',
    ],
    screenshots: [
      'https://picsum.photos/seed/novabank-cs-shot1/400/250',
      'https://picsum.photos/seed/novabank-cs-shot2/400/250',
      'https://picsum.photos/seed/novabank-cs-shot3/400/250',
    ],
  },
  fittrack: {
    id: 'fittrack',
    client: 'FitTrack',
    industry: 'Health & Fitness',
    title: 'Revolutionizing Fitness Tracking with a Mobile App',
    image: 'https://picsum.photos/seed/fittrack-cs-main/800/450',
    overview:
      'RecursionSoft collaborated with FitTrack to design and launch a highly engaging mobile application that revolutionized how users track their fitness. The app combined real-time analytics with social features to create a motivating and personalized experience.',
    challenge:
      'FitTrack aimed to stand out in a crowded fitness app market by offering a unique blend of accurate tracking, personalized coaching, and community interaction. Their existing solution lacked the engagement and scalability needed to achieve this vision.',
    solution: [
      'Developed native iOS and Android applications with a focus on intuitive UI/UX.',
      'Integrated with popular wearable devices for seamless data synchronization.',
      'Implemented social features like challenges, leaderboards, and group workouts.',
      'Designed a personalized coaching algorithm based on user data and goals.',
    ],
    results: [
      'App downloads grew 3x in the first 6 months post-launch.',
      'Increased daily active users by 50%.',
      'Achieved a 4.8-star rating on app stores.',
      'Significantly improved user engagement and retention rates.',
    ],
    technologies: [
      'React Native',
      'Firebase',
      'Google Fit API',
      'Apple HealthKit',
      'AWS Amplify',
    ],
    screenshots: [
      'https://picsum.photos/seed/fittrack-cs-shot1/400/250',
      'https://picsum.photos/seed/fittrack-cs-shot2/400/250',
      'https://picsum.photos/seed/fittrack-cs-shot3/400/250',
    ],
  },
};

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const caseStudy = caseStudiesData[id];

  if (!caseStudy) {
    return (
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-violet-700 mb-4">
          Case Study Not Found
        </h1>
        <Link to="/case-studies" className="text-violet-700 underline">
          Back to Case Studies
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <img
        src={caseStudy.image}
        alt={caseStudy.title}
        className="rounded-xl shadow-lg mb-8 w-full h-96 object-cover"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-violet-800">
        {caseStudy.title}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Client: {caseStudy.client} | Industry: {caseStudy.industry}
      </p>

      <div className="prose prose-lg max-w-none mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p>{caseStudy.overview}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Challenge</h2>
        <p>{caseStudy.challenge}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Solution</h2>
        <ul className="list-disc list-inside space-y-2">
          {caseStudy.solution.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Results</h2>
        <ul className="list-disc list-inside space-y-2">
          {caseStudy.results.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {caseStudy.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {caseStudy.screenshots.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${caseStudy.client} screenshot ${i + 1}`}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <Link
          to="/case-studies"
          className="bg-violet-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Back to All Case Studies
        </Link>
      </div>
    </section>
  );
};

export default CaseStudyDetailPage;
