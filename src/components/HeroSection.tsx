import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Lock } from "lucide-react";
import miningHeroBg from "@/assets/mining-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${miningHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Encrypted Mesh Overlay */}
      <div className="absolute inset-0 encrypted-mesh opacity-30" />
      
      {/* Tunnel Flow Effects */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="tunnel-flow absolute h-1 w-full"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-mining-gold ore-glow">
            Mining Revenue,
            <span className="block text-encryption-cyan encryption-glow">
              Privately Distributed
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Royalty payments for mining tokenization encrypted until audited. 
            Experience the future of confidential mining revenue distribution.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="ore-glow text-lg px-8 py-4">
              <Zap className="mr-2 h-5 w-5" />
              Claim Royalties
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="encryption-glow border-accent/20 text-accent hover:bg-accent/10 text-lg px-8 py-4"
            >
              <Shield className="mr-2 h-5 w-5" />
              View Audit Status
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="mining-tunnel border-border/20 p-6">
              <div className="encryption-glow rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-accent/10">
                <Lock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                End-to-End Encryption
              </h3>
              <p className="text-sm text-muted-foreground">
                Advanced cryptographic protocols ensure complete privacy until audit completion.
              </p>
            </Card>

            <Card className="mining-tunnel border-border/20 p-6">
              <div className="ore-glow rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                Instant Royalty Claims
              </h3>
              <p className="text-sm text-muted-foreground">
                Connect your wallet to access and claim your mining royalty distributions.
              </p>
            </Card>

            <Card className="mining-tunnel border-border/20 p-6">
              <div className="ore-glow rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-primary/20">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                Transparent Auditing
              </h3>
              <p className="text-sm text-muted-foreground">
                Full transparency through blockchain verification once audit processes complete.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;