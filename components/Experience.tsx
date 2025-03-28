import React from 'react';

interface Experience {
  role: string;
  date: string;
  company: string;
}

const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    date: 'July 2024 - Present',
    company: 'Credminds',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section className="mx-auto max-w-xl py-6">
      <h2 className="text-xl text-black mb-4 mt-8">Work Experience</h2>

      <div className="space-y-4">
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="
              group relative w-full 
              rounded-lg border border-gray-200 
              bg-white p-4 
              cursor-pointer 
              overflow-hidden
            "
          >
            {/* The shining effect */}
            <span className="shimmer"></span>

            {/* Top row: Role & Date */}
            <div className="flex items-start justify-between">
              <h3 className="text-base sm:text-lg  text-black">{item.role}</h3>
              <span className="text-sm text-[#52525D]">{item.date}</span>
            </div>

            {/* Company */}
            <p className="mt-1 text-sm text-[#52525D]">{item.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
