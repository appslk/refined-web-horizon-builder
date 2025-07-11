
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Hero = () => {
  // Smoke particles
  const smokeParticles = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className="smoke"
      style={{
        width: `${Math.random() * 30 + 10}px`,
        height: `${Math.random() * 30 + 10}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`
      }}
    />
  ));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-secondary">
      {/* Smoke effects */}
      <div className="absolute inset-0 pointer-events-none">
        {smokeParticles}
      </div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/cd5357d2-45ce-4293-a412-5230fed637bd.png" 
          alt="JBLOB Living Room Scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-anton font-black mb-6 text-primary blob-glow">
          $JBLOB
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/90 font-bold font-mochiy">
          Brain-melting, liver-destroying, zero-sense masterpiece
        </p>
        <p className="text-lg mb-12 text-foreground/80 font-mochiy">
          The drunk, unhinged brother of $GONK 🍺<br />
          Born for chaos, built to moon.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-bold blob-glow font-mochiy"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Buy on Pump.fun
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-bold font-mochiy"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Raydium
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
