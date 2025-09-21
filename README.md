# Crystal Mine Guard

A cutting-edge mining security platform built with Fully Homomorphic Encryption (FHE) technology for secure, privacy-preserving mining operations and data protection.

## Features

- **FHE-Protected Mining Data**: All sensitive mining data is encrypted using Fully Homomorphic Encryption
- **Multi-Wallet Support**: Connect with Rainbow, MetaMask, and other popular Web3 wallets
- **Real-time Security Monitoring**: Live monitoring of mining operations and security metrics
- **Encrypted Analytics**: Track performance, security, and operational data without data exposure
- **Cross-Chain Ready**: Built for Sepolia with mainnet compatibility

## Technologies

This project is built with:

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: Tailwind CSS + shadcn/ui
- **Blockchain**: Ethereum + FHE (Zama Network)
- **Wallet Layer**: RainbowKit + Wagmi + Viem
- **Encryption**: FHE Solidity Libraries
- **Build System**: Vite + npm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- Web3 Wallet (MetaMask, Rainbow, etc.)
- Test ETH on Sepolia network

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OscarLopez369/crystal-mine-guard.git
cd crystal-mine-guard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475

# Infura Configuration (Optional)
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Smart Contract Deployment

### 1. Compile Contracts

```bash
npm run compile
```

### 2. Run Tests

```bash
npm run test
```

### 3. Deploy to Sepolia

```bash
npm run deploy
```

## Project Structure

```
crystal-mine-guard/
├── contracts/              # Smart contracts
│   └── CrystalMineGuard.sol
├── scripts/                # Deployment scripts
│   └── deploy.ts
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── HeroSection.tsx
│   │   └── MiningFooter.tsx
│   ├── config/            # Configuration files
│   │   └── env.ts
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   │   ├── contract.ts    # Contract interactions
│   │   ├── fhe-utils.ts   # FHE utilities
│   │   └── utils.ts
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   ├── Dashboard.tsx
│   │   ├── MiningData.tsx
│   │   ├── AuditStatus.tsx
│   │   └── Royalties.tsx
│   ├── App.tsx            # Main application
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── hardhat.config.ts      # Hardhat configuration
└── package.json
```

## Security

- All sensitive data is encrypted using FHE
- Wallet-based authentication
- Smart contract access controls
- Audit trail for all operations

## Deployment

### Vercel Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to Vercel:
```bash
npx vercel --prod
```

## License

MIT