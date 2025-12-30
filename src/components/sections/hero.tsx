import { Button } from '@/components/ui/button';
import MagneticButton from '@/components/magnetic-button';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute w-[40rem] h-[40rem] rounded-full bg-primary/40 blur-[150px] animate-pulse-slow-1 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        <div className="absolute w-[30rem] h-[30rem] rounded-full bg-accent/30 blur-[120px] animate-pulse-slow-2 top-1/4 right-1/4" />
        <div className="absolute w-[25rem] h-[25rem] rounded-full bg-primary/20 blur-[100px] animate-pulse-slow-3 bottom-1/4 left-1/4" />
      </div>

      <div className="container relative z-10 text-center px-4">
        <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block mb-4 border border-white/10">
          <span className="text-sm text-accent">Now in Public Beta</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg">
          The Future of Data <span className="text-primary">Nebula</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6">
          Harness the power of next-generation AI to simulate, analyze, and unlock
          the hidden potential within your data.
        </p>
        <div className="flex justify-center items-center gap-4">
          <MagneticButton>
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
              Get Started Now
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
              Book a Demo
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
