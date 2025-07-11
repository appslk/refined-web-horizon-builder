import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Wallet, Search, ShoppingCart, Camera, Trophy } from "lucide-react";

const HowToBuy = () => {
  const steps = [
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Step 0: Mentally prepare",
      description: "This isn't a blue chip. This is $JBLOB. Brain out, beer in. Let's roll.",
      color: "text-destructive"
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Step 1: Get some $SOL",
      description: "You'll need SOL in your wallet. If you're broke, do not sell your cat. Just use Phantom, Solflare or Backpack.",
      color: "text-blob-yellow"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Step 2: Connect to pump.fun",
      description: "Go to pump.fun and click \"Connect Wallet\" (Yes, we know the site looks like it was made in MS Paint. It still prints.)",
      color: "text-blob-green"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Step 3: Find $JBLOB",
      description: "Search for $JBLOB or scroll until you see our pink brainy boy. Click on it like your life depends on it.",
      color: "text-blob-blue"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Step 4: Buy",
      description: "Pick the amount of $SOL you want to ape in with. Hit BUY. Boom. You're now a certified blobber.",
      color: "text-primary"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Step 5: Screenshot & Claim GONK",
      description: "After buying, take a screenshot and send it in our Discord DMs to claim your $GONK airdrop. (Yes, we actually give you free tokens for being early.)",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-primary">
            🛒 How to Buy $JBLOB
          </h2>
          <p className="text-xl text-foreground/80">
            The Degenerate Way
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className={`${step.color} mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-card p-8 rounded-lg border border-primary/20 text-center">
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-4">🎉 Done!</h3>
          <p className="text-lg text-foreground/80 mb-6">
            You now hold $JBLOB. You are officially part of the chaos.<br />
            Hold tight, the memes are just getting started.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Join the Chaos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;