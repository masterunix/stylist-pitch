import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PitchVision from '@/components/PitchVision';
import Services from '@/components/Services';
import SkillsComplement from '@/components/SkillsComplement';
import Opportunity from '@/components/Opportunity';
import Process from '@/components/Process';
import PhilosophyRemote from '@/components/PhilosophyRemote';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F5] overflow-x-hidden selection:bg-[#B51A1A] selection:text-white">
      <Navigation />
      <Hero />
      <PitchVision />
      <Services />
      <SkillsComplement />
      <Opportunity />
      <Process />
      <PhilosophyRemote />
      <Contact />
      <Footer />
    </main>
  );
}
