# 🔒 Crystal Mine Guard

> **Advanced Mining Security Platform with FHE Protection**

A cutting-edge mining security platform that leverages Fully Homomorphic Encryption (FHE) technology to provide secure, privacy-preserving mining operations and data protection. Built for the future of confidential blockchain operations.

## ✨ Key Features

- **🔐 FHE-Encrypted Operations**: All sensitive mining data encrypted using Fully Homomorphic Encryption
- **🌐 Multi-Wallet Integration**: Seamless connection with Rainbow, MetaMask, and 50+ Web3 wallets
- **📊 Real-time Security Monitoring**: Live monitoring of mining operations and security metrics
- **🛡️ Encrypted Analytics**: Track performance, security, and operational data without data exposure
- **⚡ Cross-Chain Ready**: Built for Sepolia with mainnet compatibility
- **🔍 Transparent Auditing**: Public verification while keeping sensitive data private

## 🏗️ Technical Architecture

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | React 18 + TypeScript + Vite | Modern, fast development experience |
| **UI Framework** | Tailwind CSS + shadcn/ui | Beautiful, accessible components |
| **Blockchain** | Ethereum + FHE (Zama Network) | Privacy-preserving smart contracts |
| **Wallet Layer** | RainbowKit + Wagmi + Viem | Universal wallet connectivity |
| **Encryption** | FHE Solidity Libraries | Zero-knowledge data processing |
| **Build System** | Vite + npm | Optimized production builds |

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+ (LTS recommended)
- **Package Manager** npm/yarn/pnpm
- **Git** for version control
- **Web3 Wallet** (MetaMask, Rainbow, etc.)
- **Test ETH** on Sepolia network

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/OscarLopez369/crystal-mine-guard.git
cd crystal-mine-guard
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment setup**
Create a `.env` file in the root directory:
```env
# Chain Configuration
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY

# Wallet Connect Configuration
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID

# Infura Configuration
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser** and navigate to `http://localhost:5173`

## 🔧 Smart Contract Operations

### Contract Deployment

```bash
# Compile contracts
npm run compile

# Run tests
npm run test

# Deploy to Sepolia
npm run deploy
```

### FHE-Protected Operations

The platform implements secure contract interactions for:

- **Mining Operations**: Encrypted hash rate, power consumption, and efficiency data
- **Security Alerts**: FHE-encrypted threat level and severity reporting
- **Revenue Distribution**: Private royalty calculations and encrypted payouts
- **Audit Reports**: Secure compliance scoring and verification

## 📁 Project Structure

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
│   │   ├── env.ts
│   │   └── wallet.ts
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

## 🔐 Security & Privacy

- **FHE Encryption**: All sensitive data encrypted using Fully Homomorphic Encryption
- **Wallet Authentication**: Secure Web3 wallet-based authentication
- **Smart Contract Access Controls**: Role-based access management
- **Audit Trail**: Complete transaction history for all operations
- **Zero-Knowledge Proofs**: Verify operations without revealing data

## 🚀 Deployment

### Vercel Deployment

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Vercel**
```bash
npx vercel --prod
```

### Environment Variables

Configure the following environment variables in your deployment platform:

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run compile` - Compile smart contracts
- `npm run test` - Run contract tests
- `npm run deploy` - Deploy to Sepolia

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the smart contract code

---

**Built with ❤️ for the future of secure mining operations**