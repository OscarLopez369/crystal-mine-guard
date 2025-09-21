import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import miningLogo from "@/assets/mining-logo.png";

const MiningHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mining-tunnel border-b border-border/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="crystal-glow rounded-lg p-1">
            <img 
              src={miningLogo} 
              alt="Mining Royalties Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-mining-gold">MineVault</h1>
            <p className="text-xs text-muted-foreground">Confidential Mining Royalties</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/dashboard" className="text-sm hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="/royalties" className="text-sm hover:text-primary transition-colors">
            Royalties
          </a>
          <a href="/mining-data" className="text-sm hover:text-primary transition-colors">
            Mining Data
          </a>
          <a href="/audit-status" className="text-sm hover:text-primary transition-colors">
            Audit Status
          </a>
        </nav>

        {/* Wallet Connection */}
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === 'authenticated');

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  'style': {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <Button 
                        variant="outline" 
                        className="ore-glow border-primary/20 text-primary hover:bg-primary/10"
                        onClick={openConnectModal}
                      >
                        <Wallet className="mr-2 h-4 w-4" />
                        Connect Wallet
                      </Button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <Button 
                        variant="outline" 
                        className="ore-glow border-red-500/20 text-red-500 hover:bg-red-500/10"
                        onClick={openChainModal}
                      >
                        Wrong network
                      </Button>
                    );
                  }

                  return (
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        className="ore-glow border-primary/20 text-primary hover:bg-primary/10"
                        onClick={openChainModal}
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 12,
                              height: 12,
                              borderRadius: 999,
                              overflow: 'hidden',
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                style={{ width: 12, height: 12 }}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </Button>

                      <Button
                        variant="outline"
                        className="ore-glow border-primary/20 text-primary hover:bg-primary/10"
                        onClick={openAccountModal}
                      >
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ''}
                      </Button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </header>
  );
};

export default MiningHeader;