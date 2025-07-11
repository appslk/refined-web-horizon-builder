const InfluencerMessage = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-12 rounded-lg border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            "I know it's hard to find true friends, but they do exist."
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-foreground/80">
              Our amazing influencer friends who believe in the $JBLOB vision
            </p>
            
            {/* Placeholder for influencer carousel */}
            <div className="bg-secondary p-8 rounded-lg">
              <p className="text-foreground/60 italic">
                Influencer carousel will be added here once you provide the details! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerMessage;