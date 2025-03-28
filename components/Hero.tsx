import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full px-4 pt-16 mx-auto">
      <div className="max-w-xl mx-auto ">
        {/* Name */}
        <h1 className="text-xl text-black">Ahmad Asif</h1>

        {/* Title */}
        <h2 className="text-md  text-[#52525D] ">Software Engineer</h2>

        {/* Description */}
        <p className="text-md text-[#52525D] mt-6 leading-relaxed">
          Software Developer with 1+ years of experience, proficient in Python,
          Javascript and React.js. Skilled in both front-end and back-end
          development, capable of managing any stage of the development process
          with confidence. A strong team player with exceptional technical
          expertise and a collaborative mindset.
        </p>
      </div>
    </section>
  );
};

export default Hero;
