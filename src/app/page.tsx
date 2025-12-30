import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Partners from '@/components/sections/partners';
import Features from '@/components/sections/features';
import AiSimulation from '@/components/sections/ai-simulation';
import Pricing from '@/components/sections/pricing';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Features />
        <AiSimulation />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
