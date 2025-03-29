import Education from '@/components/Education';
import WorkExperience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div>
      <Hero />
      <WorkExperience />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}
