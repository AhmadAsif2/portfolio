import Education from '@/components/Education';
import WorkExperience from '@/components/Experience';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div>
      <Hero />
      <WorkExperience />
      <Skills />
      <Education />
    </div>
  );
}
