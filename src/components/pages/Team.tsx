import React from 'react';

const team = [
  {
    name: 'Alex Kim',
    role: 'Lead Developer',
    image: 'https://picsum.photos/seed/alex-team/150/150',
  },
  {
    name: 'Maria Gomez',
    role: 'UI/UX Designer',
    image: 'https://picsum.photos/seed/maria-team/150/150',
  },
  {
    name: 'David Chen',
    role: 'Project Manager',
    image: 'https://picsum.photos/seed/david-team/150/150',
  },
];

const Team = () => (
  <section className="py-20 bg-gray-50" id="team">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Meet the Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
            <span className="text-violet-700 font-medium mb-1">{member.role}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team; 