import { Pickaxe, Github, Twitter, Globe } from "lucide-react";

const MiningFooter = () => {
  return (
    <footer className="mining-tunnel border-t border-border/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="crystal-glow rounded-lg p-2">
                <Pickaxe className="h-6 w-6 text-primary pickaxe-strike" />
              </div>
              <div>
                <h3 className="font-bold text-mining-gold">MineVault</h3>
                <p className="text-xs text-muted-foreground">Confidential Mining Royalties</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Secure, private, and transparent mining revenue distribution platform 
              powered by advanced encryption and blockchain technology.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Royalty Claims</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mining Data</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Audit Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wallet Integration</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Developers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SDK</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security Audits</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 MineVault. All rights reserved. Encrypted ore technology.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Animated Pickaxe & Ore */}
        <div className="relative mt-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4">
            <div className="flex items-center gap-2">
              <Pickaxe className="h-8 w-8 text-primary pickaxe-strike" />
              <div className="w-6 h-6 bg-gradient-ore rounded-full ore-glow animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MiningFooter;