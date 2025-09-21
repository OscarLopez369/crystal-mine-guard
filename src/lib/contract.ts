import { createPublicClient, createWalletClient, http, parseEther } from 'viem';
import { sepolia } from 'viem/chains';
import { env } from '../config/env';

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(env.RPC_URL),
});

export const createWallet = (account: any) => createWalletClient({
  account,
  chain: sepolia,
  transport: http(env.RPC_URL),
});

// Contract ABI for CrystalMineGuard
export const crystalMineGuardABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_securityAuditor",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "revenueId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "amount",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "inputProof",
        "type": "bytes"
      }
    ],
    "name": "claimRevenue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "hashRate",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "powerConsumption",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "temperature",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "efficiency",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "inputProof",
        "type": "bytes"
      }
    ],
    "name": "createMiningOperation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "reportId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "auditor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isVerified",
        "type": "bool"
      }
    ],
    "name": "AuditCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "operationId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "MiningOperationCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "revenueId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "beneficiary",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "amount",
        "type": "uint32"
      }
    ],
    "name": "RevenueGenerated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "reputation",
        "type": "uint32"
      }
    ],
    "name": "ReputationUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "alertId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "reporter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "alertType",
        "type": "string"
      }
    ],
    "name": "SecurityAlertRaised",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "reportId",
        "type": "uint256"
      }
    ],
    "name": "getAuditReport",
    "outputs": [
      {
        "internalType": "address",
        "name": "auditor",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "reportHash",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "operationId",
        "type": "uint256"
      }
    ],
    "name": "getMiningOperation",
    "outputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "revenueId",
        "type": "uint256"
      }
    ],
    "name": "getMiningRevenue",
    "outputs": [
      {
        "internalType": "address",
        "name": "beneficiary",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "alertId",
        "type": "uint256"
      }
    ],
    "name": "getSecurityAlert",
    "outputs": [
      {
        "internalType": "address",
        "name": "reporter",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "alertType",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

// Contract address (will be set after deployment)
export const CRYSTAL_MINE_GUARD_ADDRESS = '0x0000000000000000000000000000000000000000'; // Update after deployment

export const crystalMineGuardContract = {
  address: CRYSTAL_MINE_GUARD_ADDRESS,
  abi: crystalMineGuardABI,
} as const;
