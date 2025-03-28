import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages 🖥',
    skills: ['Javascript', 'Typescript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Frontend 🍕',
    skills: ['Angular', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend 🏴',
    skills: ['Node.js', 'Express', 'Next.js', 'Django', 'PostgreSQL'],
  },
  {
    title: 'Cloud 🚀',
    skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
  },
  {
    title: 'Tools 🛠',
    skills: [
      'Git',
      'Linux',
      'VS Code',
      'Postman',
      'IntelliJ',
      'Android Studio',
    ],
  },
  {
    title: 'Soft Skills 🤝',
    skills: ['Team Leadership', 'Agile', 'Communication', 'Problem Solving'],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="mx-auto max-w-xl ">
      <h2 className="text-xl text-black mb-4 mt-8">Skills</h2>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILLS_DATA.map((category, idx) => (
          <div
            key={idx}
            className={`
              rounded-lg border border-gray-200 p-4 bg-white
              transform transition-transform duration-500 ease-in-out
              hover:scale-110 hover:bg-[#F4F4F5]
            `}
          >
            <h3 className="mb-3 font-medium text-black">{category.title}</h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className=" text-sm bg-[#F4F4F5] rounded-full text-gray-700 px-2 py-1  select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
