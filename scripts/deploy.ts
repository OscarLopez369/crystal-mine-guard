import { ethers } from "hardhat";

async function main() {
  console.log("Deploying Crystal Mine Guard contract...");

  // Get the contract factory
  const CrystalMineGuard = await ethers.getContractFactory("CrystalMineGuard");
  
  // Deploy the contract with a security auditor address
  // In production, this should be a real auditor address
  const securityAuditor = "0x742d35Cc6634C0532925a3b8D0C0E1c2B5c8b8b8"; // Replace with actual auditor address
  
  const crystalMineGuard = await CrystalMineGuard.deploy(securityAuditor);
  
  await crystalMineGuard.waitForDeployment();
  
  const contractAddress = await crystalMineGuard.getAddress();
  
  console.log("Crystal Mine Guard deployed to:", contractAddress);
  console.log("Security Auditor:", securityAuditor);
  
  // Verify the deployment
  console.log("Verifying deployment...");
  const owner = await crystalMineGuard.owner();
  console.log("Contract owner:", owner);
  
  console.log("Deployment completed successfully!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
