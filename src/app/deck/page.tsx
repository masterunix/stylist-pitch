import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Sparkles, MapPin, GraduationCap, Award, Crown, Wand2, CheckCircle2, ArrowDown, ExternalLink, Mail, Phone, Laptop, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Simona × Muskan — Pitch Deck',
  description: 'Editorial Pitch Deck for Muskan by Simona Dhamija',
};

const pillars = [
  {
    num: '01',
    title: 'FASHION',
    skills: ['Styling', 'Trends', 'Visual identity', 'Storytelling'],
  },
  {
    num: '02',
    title: 'CREATIVE',
    skills: ['Concepts', 'Moodboards', 'Art direction', 'Narratives'],
  },
  {
    num: '03',
    title: 'PRODUCTION',
    skills: ['Shoot planning', 'Sourcing', 'Team coordination', 'Execution'],
  },
  {
    num: '04',
    title: 'BRANDING',
    skills: ['Personal brand', 'Positioning', 'Campaign concepts'],
  },
  {
    num: '05',
    title: 'PARTNERSHIPS',
    skills: ['Brand opps', 'Campaign coordination', 'Deliverables', 'Comms'],
  },
  {
    num: '06',
    title: 'MANAGEMENT',
    skills: ['Schedules', 'Follow-ups', 'Deadlines', 'Organisation'],
  },
];

const opportunities = [
  { id: '01', cat: 'FASHION', desc: 'Develop more recognisable fashion-led formats rather than individual outfit posts.' },
  { id: '02', cat: 'LIFESTYLE', desc: 'Turn everyday lifestyle content into recurring, recognisable series.' },
  { id: '03', cat: 'BEAUTY', desc: 'Integrate beauty into fashion/lifestyle storytelling rather than keeping it isolated.' },
  { id: '04', cat: 'PERSONALITY', desc: 'Create more formats where Muskan herself becomes the reason people watch.' },
  { id: '05', cat: 'BRAND CAMPAIGNS', desc: 'Make sponsored content feel native to existing content language.' },
  { id: '06', cat: 'OFFLINE', desc: 'Events, launches, shoots, creator collaborations and fashion opportunities.' },
];

const workflows = [
  {
    title: 'BRAND APPROACHES',
    steps: ['Review brief', 'Assess brand fit', 'Develop concept', 'Communicate with brand', 'Track deliverables'],
  },
  {
    title: 'SHOOT',
    steps: ['Concept', 'Moodboard', 'Styling', 'Location', 'Team', 'Schedule', 'Shoot'],
  },
  {
    title: 'CONTENT',
    steps: ['Content ideas', 'Series', 'Calendar', 'Trend research', 'Creative direction', 'Review'],
  },
  {
    title: 'EVENTS',
    steps: ['Opportunities', 'Coordination', 'Looks', 'Scheduling', 'Content capture', 'Follow-up'],
  },
];

export default async function DeckPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const params = await searchParams;
  const isMobile = params?.mode === 'mobile';

  return (
    <div className={`bg-stone-100 text-[#1C1917] ${isMobile ? 'max-w-md mx-auto font-sans' : 'w-full'}`}>
      
      {/* ========================================================================= */}
      {/* SLIDE 1: COVER */}
      {/* ========================================================================= */}
      <div className={`relative bg-striped-wallpaper flex flex-col justify-between overflow-hidden print:break-after-page ${
        isMobile ? 'min-h-[844px] p-6' : 'h-[810px] w-[1440px] mx-auto p-12'
      }`}>
        {/* Top Interactive Banner */}
        <div className="flex justify-between items-center z-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#B51A1A] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B51A1A]" />
            <span className="font-serif italic font-bold text-base text-[#B51A1A] whitespace-nowrap">
              Dear Muskan,
            </span>
          </div>

          <a
            href="https://stylist-pitch.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#B51A1A] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#8F1414]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Site ➔ stylist-pitch.vercel.app</span>
          </a>
        </div>

        {/* Center Sketchbook Card */}
        <div className={`relative bg-[#FCFBF9] rounded-2xl border border-black/10 shadow-2xl z-10 overflow-hidden ${
          isMobile ? 'my-6 p-6' : 'my-auto p-10 max-w-5xl mx-auto w-full'
        }`}>
          {/* Wire Coil */}
          <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-stone-200/60 to-transparent flex flex-col justify-around py-4 pl-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-4 h-2 rounded-full bg-stone-700 shadow-inner" />
            ))}
          </div>

          <div className="pl-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 max-w-xl">
              <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-display font-black text-[#B51A1A] tracking-tight leading-none uppercase`}>
                Creative Management<br />
                <span className="text-[#8F1414] font-serif italic font-normal text-3xl md:text-4xl normal-case mr-2">&amp;</span>
                Brand Strategy
              </h1>
              <p className="font-serif text-stone-700 text-sm md:text-base leading-relaxed">
                Elevating your creator career through bespoke creative direction, high-fashion styling, strategic brand partnerships, and full shoot production.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-semibold text-stone-700">
                <span className="bg-white px-2.5 py-1 rounded-full border border-stone-300">Jaipur Born</span>
                <span className="bg-white px-2.5 py-1 rounded-full border border-stone-300">Delhi Based</span>
                <span className="bg-white px-2.5 py-1 rounded-full border border-stone-300">Pearl Academy Masters</span>
                <span className="bg-white px-2.5 py-1 rounded-full border border-stone-300">OP Jindal Film Grad</span>
              </div>
            </div>

            {/* Right: Camera and Oval Badge */}
            <div className="flex flex-col items-center space-y-4 shrink-0">
              <div className="w-48 sm:w-56 transform rotate-2">
                <Image
                  src="/assets/oval-sticker-tape.png"
                  alt="Content Fashion Shoots Brand Partnerships Events"
                  width={400}
                  height={150}
                  className="w-full h-auto drop-shadow-md"
                />
              </div>

              {/* Camera Widget with Simona Photo */}
              <div className="relative w-64 aspect-[1529/828] drop-shadow-xl select-none">
                <div
                  className="absolute overflow-hidden rounded-xs bg-black"
                  style={{ left: '11%', top: '6.2%', width: '63.8%', height: '86.8%' }}
                >
                  <Image
                    src="/assets/simona-camera.jpg"
                    alt="Simona on Shoot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-1 left-1.5 text-[8px] font-mono text-white bg-black/60 px-1 rounded-xs">
                    SIMONA DHAMIJA
                  </div>
                </div>
                <Image
                  src="/assets/camera-transparent-screen.png"
                  alt="Camera Frame"
                  fill
                  className="object-contain pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center text-xs text-stone-500 font-mono z-20">
          <span>01 // COVER</span>
          <a href="https://stylist-pitch.vercel.app" className="text-[#B51A1A] font-bold hover:underline">
            https://stylist-pitch.vercel.app
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 2: WHY I WANT TO WORK WITH YOU (PAGE 2) */}
      {/* ========================================================================= */}
      <div className={`relative bg-[#B51A1A] text-white flex flex-col justify-between overflow-hidden print:break-after-page ${
        isMobile ? 'min-h-[844px] p-6' : 'h-[810px] w-[1440px] mx-auto p-12'
      }`}>
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
          <Image src="/assets/fashion-doodles.png" alt="Doodles" fill className="object-cover" />
        </div>

        <div className="flex justify-between items-center z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFF275]">
            02 // WHY I WANT TO WORK WITH YOU
          </span>
          <a href="https://stylist-pitch.vercel.app" className="text-xs text-white/80 font-mono hover:text-white">
            stylist-pitch.vercel.app
          </a>
        </div>

        <div className="my-auto z-10 max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-center text-white uppercase mb-8 drop-shadow-md">
            Why I Want to Work With You
          </h2>

          <div className="relative bg-[#FAF8F5] text-[#1C1917] rounded-2xl p-8 sm:p-12 shadow-2xl border border-stone-200">
            <div className="space-y-4 font-serif text-base sm:text-lg md:text-xl leading-relaxed">
              <p>
                I’m <strong className="text-[#B51A1A]">Simona</strong>, 22, originally from Jaipur and currently based in Delhi, pursuing my Masters in Fashion Styling at <strong className="underline decoration-[#B51A1A]">Pearl Academy</strong>. I graduated in Film &amp; New Media from <strong className="underline decoration-[#B51A1A]">OP Jindal Global University</strong> and have experience across styling, creative direction, content, social media and shoot production.
              </p>
              <p>
                I’ve watched your journey since school, and seeing how you’ve grown your content into a full-fledged creator career is what made me want to reach out.
              </p>
              <blockquote className="p-4 rounded-xl bg-[#F2D6D0]/40 border-l-4 border-[#B51A1A] italic text-lg sm:text-xl text-[#5C1D24]">
                "I see your content as much more than social media. With your mix of fashion, beauty, lifestyle and personality-led content, I feel there’s a lot of potential to build an even stronger personal brand around what you already do best."
              </blockquote>
              <p className="font-semibold text-stone-900">
                I’d love to be the person behind the ideas, opportunities, shoots and brand collaborations that help take it further.
              </p>
            </div>
          </div>
        </div>

        <div className="text-xs text-rose-200/80 font-mono z-10 flex justify-between">
          <span>Simona Dhamija × Muskan</span>
          <span>Page 2 of 9</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 3: WHAT I BRING TO THE TABLE (PAGE 3) */}
      {/* ========================================================================= */}
      <div className={`relative bg-[#FAF7F5] flex flex-col justify-between overflow-hidden print:break-after-page ${
        isMobile ? 'min-h-[844px] p-6' : 'h-[810px] w-[1440px] mx-auto p-12'
      }`}>
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply">
          <Image src="/assets/lined-paper.jpg" alt="Lined paper" fill className="object-cover" />
        </div>

        <div className="flex justify-between items-center z-10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8">
              <Image src="/assets/red-pushpin.png" alt="Pushpin" width={40} height={40} className="w-full h-auto drop-shadow-md" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B51A1A]">
              03 // WHAT I BRING TO THE TABLE
            </span>
          </div>
          <a href="https://stylist-pitch.vercel.app" className="text-xs text-[#B51A1A] font-mono hover:underline">
            stylist-pitch.vercel.app
          </a>
        </div>

        <div className="my-auto z-10 w-full max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#B51A1A] uppercase tracking-tight">
              What I Bring to the Table
            </h2>
            <p className="font-serif text-stone-600 text-sm sm:text-base mt-1">
              Six pillars of creative direction, wardrobe curation, and production execution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {pillars.map((p) => (
              <div key={p.num} className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-display font-black text-2xl text-[#B51A1A] block mb-1">{p.num}</span>
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#1C1917] mb-3 pb-1 border-b border-stone-100">
                    {p.title}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-stone-700 font-sans">
                    {p.skills.map((s, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B51A1A] shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs text-stone-400 font-mono z-10 flex justify-between">
          <span>Simona Dhamija Pitch</span>
          <span>Page 3 of 9</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 4: WHY OUR SKILLS COMPLEMENT EACH OTHER (PAGE 4) */}
      {/* ========================================================================= */}
      <div className={`relative bg-[#F5EDE4] flex flex-col justify-between overflow-hidden print:break-after-page ${
        isMobile ? 'min-h-[844px] p-6' : 'h-[810px] w-[1440px] mx-auto p-12'
      }`}>
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
          <Image src="/assets/kraft-crumpled.jpg" alt="Kraft paper" fill className="object-cover" />
        </div>

        <div className="flex justify-between items-center z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B51A1A]">
            04 // SYNERGY &amp; PARTNERSHIP
          </span>
          <a href="https://stylist-pitch.vercel.app" className="text-xs text-[#B51A1A] font-mono hover:underline">
            stylist-pitch.vercel.app
          </a>
        </div>

        <div className="my-auto z-10 max-w-5xl mx-auto w-full">
          <h2 className="text-3xl sm:text-5xl font-display font-black text-center text-[#B51A1A] uppercase tracking-tight mb-8">
            Why Our Skills Complement Each Other
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Muskan Card */}
            <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border-2 border-stone-200 shadow-md">
              <div className="flex items-center space-x-2 text-amber-700 text-xs font-bold uppercase tracking-widest mb-1">
                <Crown className="w-4 h-4" />
                <span>In Front of Camera</span>
              </div>
              <h3 className="text-3xl font-display font-black text-[#1C1917] mb-4">MUSKAN</h3>
              <ul className="space-y-2.5 font-serif text-base text-stone-800">
                <li>• Existing audience &amp; loyal community</li>
                <li>• Established, recognizable voice</li>
                <li>• Magnetic on-camera presence</li>
                <li>• Fashion &amp; lifestyle content engine</li>
                <li>• Brand collaboration experience</li>
              </ul>
            </div>

            {/* Simona Card */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border-2 border-[#B51A1A]/30 shadow-md">
              <div className="flex items-center space-x-2 text-[#B51A1A] text-xs font-bold uppercase tracking-widest mb-1">
                <Wand2 className="w-4 h-4" />
                <span>Behind the Scenes</span>
              </div>
              <h3 className="text-3xl font-display font-black text-[#B51A1A] mb-4">SIMONA</h3>
              <ul className="space-y-2.5 font-serif text-base text-stone-800">
                <li>• Concept development &amp; series ideation</li>
                <li>• Formal fashion styling &amp; pull sourcing</li>
                <li>• Creative direction &amp; visual storytelling</li>
                <li>• Full shoot production &amp; team management</li>
                <li>• Brand thinking &amp; commercial alignment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-xs text-stone-500 font-mono z-10 flex justify-between">
          <span>Creative Synergy</span>
          <span>Page 4 of 9</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 5: WHERE I SEE THE OPPORTUNITY (PAGE 5) */}
      {/* ========================================================================= */}
      <div className={`relative bg-[#FAF7F5] flex flex-col justify-between overflow-hidden print:break-after-page ${
        isMobile ? 'min-h-[844px] p-6' : 'h-[810px] w-[1440px] mx-auto p-12'
      }`}>
        <div className="flex justify-between items-center z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B51A1A]">
            05 // WHERE I SEE THE OPPORTUNITY
          </span>
          <a href="https://stylist-pitch.vercel.app" className="text-xs text-[#B51A1A] font-mono hover:underline">
            stylist-pitch.vercel.app
          </a>
        </div>

        <div className="my-auto z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#B51A1A] uppercase tracking-tight">
              Where I See the Opportunity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* 6 Opportunities Grid (8 cols) */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {opportunities.map((opp) => (
                <div key={opp.id} className="bg-white rounded-xl p-4 border border-stone-200 shadow-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-bold text-xs text-stone-400">{opp.id}</span>
                    <span className="font-display font-extrabold text-xs text-[#B51A1A] tracking-wider uppercase">{opp.cat}</span>
                  </div>
                  <p className="font-serif text-stone-700 text-xs sm:text-sm leading-snug">{opp.desc}</p>
                </div>
              ))}
            </div>

            {/* Polaroid Photos (4 cols) */}
            <div className="md:col-span-4 flex md:flex-col gap-4 justify-center">
              <div className="bg-white p-2.5 pb-4 rounded shadow-md border border-stone-200 rotate-2 w-36 sm:w-44 mx-auto">
                <div className="relative aspect-[3/4] rounded-xs overflow-hidden bg-stone-100 mb-1">
                  <Image src="/assets/shoot-model-orange.jpg" alt="Orange Mesh Vest" fill className="object-cover" />
                </div>
                <div className="text-[9px] font-serif italic text-stone-600 text-center">Fashion Shoot 01</div>
              </div>
              <div className="bg-white p-2.5 pb-4 rounded shadow-md border border-stone-200 -rotate-2 w-36 sm:w-44 mx-auto">
                <div className="relative aspect-[4/3] rounded-xs overflow-hidden bg-stone-100 mb-1">
                  <Image src="/assets/shoot-model-teal.jpg" alt="Teal Lifestyle" fill className="object-cover" />
                </div>
                <div className="text-[9px] font-serif italic text-stone-600 text-center">Lifestyle Shoot 02</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-stone-400 font-mono z-10 flex justify-between">
          <span>Opportunity Areas</span>
          <span>Page 5 of 9</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 6: FROM IDEA TO EXECUTION (PAGE 6) */}
      {/* ========================================================================= */}
      <div className={`relative bg-[#F6F2EA] flex flex-col justify-between overflow-hidden print:break-after-page ${
        isMobile ? 'min-h-[844px] p-6' : 'h-[810px] w-[1440px] mx-auto p-12'
      }`}>
        <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-multiply">
          <Image src="/assets/vintage-paper.jpg" alt="Vintage paper" fill className="object-cover" />
        </div>

        <div className="flex justify-between items-center z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B51A1A]">
            06 // FROM IDEA TO EXECUTION
          </span>
          <a href="https://stylist-pitch.vercel.app" className="text-xs text-[#B51A1A] font-mono hover:underline">
            stylist-pitch.vercel.app
          </a>
        </div>

        <div className="my-auto z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#B51A1A] uppercase tracking-tight">
              From Idea to Execution
            </h2>
            <span className="inline-block mt-1 px-3 py-0.5 rounded bg-[#1C1917] text-[#FFF275] text-xs font-bold uppercase tracking-widest">
              For Example —
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflows.map((flow) => (
              <div key={flow.title} className="bg-[#9B2C24] text-white rounded-xl p-5 shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-sm tracking-wider uppercase mb-3 pb-2 border-b border-white/20 text-center">
                    {flow.title}
                  </h3>
                  <ul className="space-y-2 text-xs font-serif leading-tight">
                    {flow.steps.map((step, idx) => (
                      <li key={idx} className="flex items-center space-x-2 bg-black/15 p-1.5 rounded">
                        <span className="font-mono text-[10px] text-rose-200">↓</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs text-stone-500 font-mono z-10 flex justify-between">
          <span>Workflow Execution</span>
          <span>Page 6 of 9</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 7: PHILOSOPHY & REMOTE WORKING (PAGES 7 & 8) */}
      {/* ========================================================================= */}
      <div className={`relative bg-[#8F1414] text-white flex flex-col justify-between overflow-hidden print:break-after-page ${
        isMobile ? 'min-h-[844px] p-6' : 'h-[810px] w-[1440px] mx-auto p-12'
      }`}>
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
          <Image src="/assets/crimson-crumpled.png" alt="Crimson paper" fill className="object-cover" />
        </div>

        <div className="flex justify-between items-center z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-200">
            07 // PHILOSOPHY &amp; REMOTE STRUCTURE
          </span>
          <a href="https://stylist-pitch.vercel.app" className="text-xs text-white/80 font-mono hover:text-white">
            stylist-pitch.vercel.app
          </a>
        </div>

        <div className="my-auto z-10 max-w-4xl mx-auto w-full space-y-6">
          {/* Manifesto Card */}
          <div className="bg-[#FAF8F5] text-[#1C1917] rounded-2xl p-6 sm:p-10 shadow-2xl text-center space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B51A1A]">Core Philosophy</span>
            <p className="font-serif italic text-xl sm:text-2xl text-[#1C1917]">
              "I don't want to turn your content into something overly planned or overly commercial."
            </p>
            <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed">
              The goal would be to create enough structure behind the scenes so that the content still feels <strong className="text-[#B51A1A]">spontaneous, personal and you</strong>.
            </p>
            <p className="font-serif text-sm sm:text-base text-stone-600 italic">
              My role would be to bring the strategy, ideas and execution support while keeping your personality at the centre.
            </p>
          </div>

          {/* Remote Model Card */}
          <div className="bg-[#9B2C24] text-white rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl space-y-2">
            <div className="flex justify-between items-center text-xs font-mono text-rose-200 pb-2 border-b border-white/20">
              <span>REMOTE WORKING MODEL</span>
              <span>Delhi ➔ Mumbai</span>
            </div>
            <p className="font-serif text-sm sm:text-base leading-relaxed">
              I’m currently based in Delhi while pursuing my Masters in Fashion Styling at Pearl Academy. I can comfortably manage planning, creative development, brand communication, campaign coordination, content strategy, scheduling and follow-ups remotely.
            </p>
          </div>
        </div>

        <div className="text-xs text-rose-200/80 font-mono z-10 flex justify-between">
          <span>Philosophy &amp; Working Structure</span>
          <span>Page 7 of 9</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 8: MY WORK & CONTACT (PAGE 9) */}
      {/* ========================================================================= */}
      <div className={`relative bg-[#FAF7F5] flex flex-col justify-between overflow-hidden print:break-after-page ${
        isMobile ? 'min-h-[844px] p-6' : 'h-[810px] w-[1440px] mx-auto p-12'
      }`}>
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply">
          <Image src="/assets/lined-paper-wide.jpg" alt="Lined paper" fill className="object-cover" />
        </div>

        <div className="flex justify-between items-center z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500">
            08 // MY WORK &amp; REACH
          </span>
          <a href="https://stylist-pitch.vercel.app" className="text-xs text-[#B51A1A] font-mono hover:underline">
            stylist-pitch.vercel.app
          </a>
        </div>

        <div className="my-auto z-10 max-w-4xl mx-auto w-full space-y-8">
          <div>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-[#B51A1A] tracking-tight">
              my work-
            </h2>
            <p className="font-serif italic text-stone-600 text-sm mt-1">Live portfolios and direct contact channels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://www.behance.net/simonadhamija"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs hover:border-blue-400 block"
            >
              <span className="text-[10px] font-mono font-bold text-stone-400 uppercase">PORTFOLIO</span>
              <h3 className="font-display font-bold text-xl text-[#1C1917]">Behance</h3>
              <p className="font-mono text-xs text-[#B51A1A] mt-1">behance.net/simonadhamija</p>
            </a>

            <a
              href="https://www.instagram.com/simm.png/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs hover:border-rose-400 block"
            >
              <span className="text-[10px] font-mono font-bold text-stone-400 uppercase">CURATION</span>
              <h3 className="font-display font-bold text-xl text-[#1C1917]">Instagram</h3>
              <p className="font-mono text-xs text-[#B51A1A] mt-1">@simm.png</p>
            </a>

            <a
              href="https://www.linkedin.com/in/simona-dhamija-a51799264/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs hover:border-sky-400 block"
            >
              <span className="text-[10px] font-mono font-bold text-stone-400 uppercase">EXPERIENCE</span>
              <h3 className="font-display font-bold text-xl text-[#1C1917]">LinkedIn</h3>
              <p className="font-mono text-xs text-[#B51A1A] mt-1">simona-dhamija</p>
            </a>
          </div>

          {/* Direct Channels Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-stone-200 shadow-md flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-display font-bold text-xl text-[#1C1917]">Direct Contacts</h4>
              <p className="font-serif text-sm text-stone-600">Call, WhatsApp, or drop an email anytime.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:simonadhamija2004@gmail.com"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-stone-300 text-stone-800 text-xs font-semibold hover:border-[#B51A1A]"
              >
                <Mail className="w-4 h-4 text-[#B51A1A]" />
                <span>simonadhamija2004@gmail.com</span>
              </a>
              <a
                href="tel:+918952945525"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-stone-300 text-stone-800 text-xs font-semibold hover:border-[#B51A1A]"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>+91 8952945525</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-xs text-stone-400 font-mono z-10 flex justify-between">
          <span>Live Portfolios</span>
          <span>Page 8 of 9</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 9: THANK YOU (PAGE 10) */}
      {/* ========================================================================= */}
      <div className={`relative bg-striped-wallpaper flex flex-col justify-between overflow-hidden print:break-after-page ${
        isMobile ? 'min-h-[844px] p-6' : 'h-[810px] w-[1440px] mx-auto p-12'
      }`}>
        <div className="flex justify-between items-center z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B51A1A]">
            09 // THANK YOU
          </span>
          <a href="https://stylist-pitch.vercel.app" className="text-xs text-[#B51A1A] font-mono hover:underline">
            stylist-pitch.vercel.app
          </a>
        </div>

        <div className="my-auto z-10 max-w-xl mx-auto w-full text-center space-y-8">
          {/* Corkboard with Flower */}
          <div className="relative w-full aspect-[3103/1700] drop-shadow-2xl select-none mx-auto">
            <Image src="/assets/cork-board.png" alt="Corkboard" fill className="object-contain" />
            <div className="absolute top-[12%] right-[14%] w-16 h-16 pointer-events-none drop-shadow-lg transform rotate-12">
              <Image src="/assets/pink-gem-flower.png" alt="Flower" width={100} height={100} className="w-full h-auto" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="font-display font-black text-6xl sm:text-7xl text-white tracking-tight pdf-title-shadow -rotate-1">
                thankyou.
              </h2>
            </div>
          </div>

          {/* Interactive Web Link Callout */}
          <div className="bg-white/95 rounded-2xl p-6 border border-stone-200 shadow-lg space-y-3">
            <p className="font-serif italic text-stone-700 text-base">
              "Looking forward to creating unforgettable creative and fashion moments together."
            </p>
            <div className="pt-2">
              <a
                href="https://stylist-pitch.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#B51A1A] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#8F1414]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Visit Interactive Website: stylist-pitch.vercel.app</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-xs text-stone-500 font-mono z-10 flex justify-between">
          <span>Simona Dhamija × Muskan</span>
          <span>Page 9 of 9</span>
        </div>
      </div>

    </div>
  );
}
