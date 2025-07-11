const WhyJBlob = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why $JBLOB?
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/80">
              <p className="font-semibold text-foreground">
                Because it makes zero sense — and that's exactly the point.
              </p>
              
              <p>
                It's loud, pink, brain-out chaos born for pump.fun and built to entertain.
              </p>
              
              <div className="bg-secondary p-6 rounded-lg border-l-4 border-primary">
                <p className="font-bold text-foreground mb-2">
                  Not here to save the world.
                </p>
                <p className="font-bold text-foreground">
                  Here to flip it upside down.
                </p>
              </div>
              
              <p>
                $JBLOB is what happens when crypto stops pretending to be serious.
                Degens get it. The rest will follow.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/29aa17c0-d167-4d30-9bbd-1effdada79a7.png" 
              alt="Relaxing JBLOB"
              className="max-w-md w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJBlob;