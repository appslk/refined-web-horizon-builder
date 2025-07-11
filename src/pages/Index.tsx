
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToBuy from "@/components/HowToBuy";
import Origin from "@/components/Origin";
import WhyJBlob from "@/components/WhyJBlob";
import Tokenomics from "@/components/Tokenomics";
import Merch from "@/components/Merch";
import InfluencerMessage from "@/components/InfluencerMessage";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-mochiy">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="how-to-buy">
        <HowToBuy />
      </div>
      <div id="origin">
        <Origin />
      </div>
      <WhyJBlob />
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="merch">
        <Merch />
      </div>
      <InfluencerMessage />
      <ScrollToTop />
    </div>
  );
};

export default Index;
