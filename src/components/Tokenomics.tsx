const Tokenomics = () => {
  return (
    <section className="py-20 px-4 bg-card relative overflow-hidden">
      {/* Background image */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-15 z-0">
        <img 
          src="/lovable-uploads/320d6b32-f7c5-448f-9c1a-14c873033569.png" 
          alt="Money JBLOB"
          className="w-96 h-96 object-contain"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8 text-primary">
          Tokenomics
        </h2>
        
        <div className="space-y-8">
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">What tokenomics?</h3>
            <p className="text-xl text-primary font-bold">It's pump.fun, baby.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-lg border border-primary/20">
              <p className="text-lg text-foreground/80 mb-4">
                You ape, others ape harder.<br />
                No team wallet. No presale.
              </p>
              <p className="text-primary font-bold">
                Just pure degen chaos — fair and funny.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-accent/20">
              <p className="text-xl font-bold text-accent mb-4">
                1B supply. 100% mayhem.
              </p>
              <p className="text-lg text-foreground/80">
                Let the market decide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;