const Origin = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:order-1">
            <img 
              src="/lovable-uploads/f08102d5-9601-4370-bd79-ce058109a966.png" 
              alt="Presidential JBLOB"
              className="max-w-md w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-6 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              The Legendary Origin
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Long ago — or maybe just last Tuesday — in a forgotten corner of the blockchain, a strange pink blob emerged from the trash bin of failed experiments and party leftovers.
              </p>
              
              <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                <p className="font-bold text-foreground mb-2">He wasn't born.</p>
                <p className="text-foreground/80">He just... wobbled into existence 🍺🧠</p>
              </div>
              
              <p>
                While other tokens were out here promising "real utility" and "world-changing tech," $JBLOB was busy doing keg stands, inhaling memes, and injecting pure nonsense straight into the SOL ecosystem.
              </p>
              
              <div className="bg-secondary p-6 rounded-lg">
                <p className="font-bold text-foreground mb-4">Nobody knows exactly what he is.</p>
                <div className="space-y-3 text-sm">
                  <p>Some say he's the mutated twin of $GONK, left behind after one too many shots of smart contract moonshine.</p>
                  <p>Others say he's a failed DeFi project that got drunk, forgot his purpose, and decided to become a legend instead.</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="font-semibold text-foreground">What we do know is this:</p>
                <ul className="space-y-2 text-sm">
                  <li>✨ He has no roadmap, just vibes</li>
                  <li>🧠 He has no utility, just a brain hanging out</li>
                  <li>🚀 He has no limits, just an army of degens ready to follow him anywhere</li>
                  <li>📈 He doesn't care about your charts or whitepapers</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-xl font-bold text-foreground mb-2">
                  And now... he's launching on pump.fun
                </p>
                <p className="text-sm text-foreground/80 mb-4">
                  The world isn't ready — but he doesn't care.
                </p>
                <div className="space-y-1">
                  <p className="font-bold text-foreground">This is $JBLOB.</p>
                  <p className="text-sm text-foreground/80">A movement. A mess. A masterpiece. Born for chaos, built to moon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Origin;