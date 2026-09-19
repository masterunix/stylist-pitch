import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import PitchVision from '@/components/PitchVision'
import SkillsComplement from '@/components/SkillsComplement'
import Opportunity from '@/components/Opportunity'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PitchVision />
      <SkillsComplement />
      <Opportunity />
      <Process />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
