const Merch = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:order-1">
            <img 
              src="/lovable-uploads/68af630d-fce3-4505-a5f9-b0fb8ae1016c.png" 
              alt="Chef JBLOB"
              className="max-w-md w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-6 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Merch?
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/80">
              <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                <p className="mb-2">Maybe there will be merch.</p>
                <p className="mb-2">Maybe there won't.</p>
                <p className="font-semibold text-foreground">
                  Maybe you'll wake up in a $JBLOB bathrobe one day. Who knows?
                </p>
              </div>
              
              <div className="space-y-3">
                <p className="font-semibold text-foreground">All we know is…</p>
                <p>
                  If it drops, it's gonna be weird, pink, and probably not safe for grandma.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <p>
                  Stay tuned. Or don't.
                  <span className="font-semibold text-foreground block mt-2">The blob decides.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merch;