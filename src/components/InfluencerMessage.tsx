
const InfluencerMessage = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-12 rounded-xl border border-primary/10 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-anton font-bold text-primary mb-8">
            Building Strong Partnerships
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl text-foreground/90 font-mochiy max-w-3xl mx-auto leading-relaxed">
              We believe in fostering genuine connections and partnerships within the crypto community. 
              Trust and collaboration are the foundations of sustainable growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  🤝
                </div>
                <h3 className="text-lg font-anton font-semibold text-foreground mb-2">Community First</h3>
                <p className="text-foreground/70 font-mochiy text-sm">
                  Our partnerships are built on mutual respect and shared vision for the future of DeFi.
                </p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  🎯
                </div>
                <h3 className="text-lg font-anton font-semibold text-foreground mb-2">Strategic Growth</h3>
                <p className="text-foreground/70 font-mochiy text-sm">
                  We collaborate with industry leaders who share our commitment to innovation and transparency.
                </p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  🚀
                </div>
                <h3 className="text-lg font-anton font-semibold text-foreground mb-2">Future Ready</h3>
                <p className="text-foreground/70 font-mochiy text-sm">
                  Together, we're building the infrastructure for the next generation of digital assets.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-background/50 rounded-lg border border-primary/20">
              <p className="text-foreground/80 font-mochiy italic">
                Partnership opportunities and collaborations will be announced through our official channels. 
                Stay tuned for exciting developments! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerMessage;
