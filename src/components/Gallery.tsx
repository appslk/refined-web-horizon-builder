
const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/5e484ce6-dac9-4e59-818b-7fcb8414acea.png",
      alt: "JBLOB Character",
      title: "Meet JBLOB"
    },
    {
      src: "/lovable-uploads/cd5357d2-45ce-4293-a412-5230fed637bd.png",
      alt: "JBLOB Living Room",
      title: "JBLOB's Vibe"
    },
    {
      src: "/lovable-uploads/320d6b32-f7c5-448f-9c1a-14c873033569.png",
      alt: "Money JBLOB",
      title: "To The Moon"
    },
    {
      src: "/lovable-uploads/68af630d-fce3-4505-a5f9-b0fb8ae1016c.png",
      alt: "JBLOB Art",
      title: "Pure Art"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-dripink font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-foreground/80 font-mochiy">
            Check out the JBLOB universe in all its chaotic glory
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-dripink font-bold text-xl text-center px-4">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
