import React from 'react';

interface Education {
  degree: string;
  graduationDate: string;
  institution: string;
}

const educationData: Education[] = [
  {
    degree: 'Bachelors in Information Technology',
    graduationDate: 'June 2024 ',
    institution:
      'Punjab University College of Information Technology, Punjab, Lahore',
  },
];

const Education: React.FC = () => {
  return (
    <section className="mx-auto max-w-xl  pt-6">
      <h2 className="text-xl text-black mb-4 mt-8">Education</h2>

      <div className="space-y-4">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="group relative rounded-lg border border-gray-200 cursor-pointer bg-white p-4 "
          >
            {/* Top row: Degree & Graduation Date */}
            <div className="flex items-start justify-between">
              <h3 className="text-base sm:text-lg font-medium text-black">
                {edu.degree}
              </h3>
              <span className="text-sm text-[#52525D]">
                {edu.graduationDate}
              </span>
            </div>
            <span className="shimmer"></span>

            {/* Institution */}
            <p className="mt-1 text-md text-[#52525D]">{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
