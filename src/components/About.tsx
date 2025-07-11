
const About = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-anton font-bold text-foreground">
              About $JBLOB
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/80 font-mochiy">
              <p>
                $JBLOB isn't just a memecoin. It's a brain-melting, liver-destroying, zero-sense masterpiece born straight from the depths of CT insanity.
              </p>
              
              <p className="text-foreground font-semibold">
                And yes, he's the drunk, unhinged brother of $GONK 🍺
                Two legends, same family, zero chill.
              </p>
              
              <div className="space-y-3 my-8">
                <p>🍻 Fueled by alcohol, chaos, and pure degeneracy</p>
                <p>🧠 Main character: a pink blob with his brain out and no clue what's going on</p>
                <p>🎯 Utility? Nah. Vibes? 100%.</p>
                <p>🎉 Launching on pump.fun and it's gonna get wild.</p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg border-l-4 border-primary">
                <p className="font-semibold text-foreground mb-2">This isn't your average coin.</p>
                <p className="text-xl font-bold text-foreground mb-2">This is JELLOBLOB.</p>
                <p className="text-sm">
                  He doesn't ask for permission. He crashes the party, spills beer on your keyboard, and moons by accident.
                </p>
                <p className="font-semibold text-foreground mt-4">
                  Get in degens. The $JBLOB era is coming.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/5e484ce6-dac9-4e59-818b-7fcb8414acea.png" 
              alt="JBLOB Character"
              className="max-w-md w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
