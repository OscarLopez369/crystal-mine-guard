// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint64, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract CrystalMineGuard is SepoliaConfig {
    using FHE for *;
    
    struct MiningOperation {
        euint32 operationId;
        euint32 hashRate;
        euint32 powerConsumption;
        euint32 temperature;
        euint32 efficiency;
        ebool isActive;
        ebool isSecure;
        address operator;
        uint256 timestamp;
    }
    
    struct SecurityAlert {
        euint32 alertId;
        euint32 severity;
        euint32 threatLevel;
        ebool isResolved;
        string alertType;
        address reporter;
        uint256 timestamp;
    }
    
    struct MiningRevenue {
        euint32 revenueId;
        euint32 amount;
        euint32 royaltyPercentage;
        ebool isDistributed;
        address beneficiary;
        uint256 timestamp;
    }
    
    struct AuditReport {
        euint32 reportId;
        euint32 securityScore;
        euint32 complianceScore;
        ebool isVerified;
        string reportHash;
        address auditor;
        uint256 timestamp;
    }
    
    mapping(uint256 => MiningOperation) public miningOperations;
    mapping(uint256 => SecurityAlert) public securityAlerts;
    mapping(uint256 => MiningRevenue) public miningRevenues;
    mapping(uint256 => AuditReport) public auditReports;
    mapping(address => euint32) public operatorReputation;
    mapping(address => euint32) public securityScore;
    
    uint256 public operationCounter;
    uint256 public alertCounter;
    uint256 public revenueCounter;
    uint256 public reportCounter;
    
    address public owner;
    address public securityAuditor;
    
    event MiningOperationCreated(uint256 indexed operationId, address indexed operator);
    event SecurityAlertRaised(uint256 indexed alertId, address indexed reporter, string alertType);
    event RevenueGenerated(uint256 indexed revenueId, address indexed beneficiary, uint32 amount);
    event AuditCompleted(uint256 indexed reportId, address indexed auditor, bool isVerified);
    event ReputationUpdated(address indexed operator, uint32 reputation);
    
    constructor(address _securityAuditor) {
        owner = msg.sender;
        securityAuditor = _securityAuditor;
    }
    
    function createMiningOperation(
        externalEuint32 hashRate,
        externalEuint32 powerConsumption,
        externalEuint32 temperature,
        externalEuint32 efficiency,
        bytes calldata inputProof
    ) public returns (uint256) {
        uint256 operationId = operationCounter++;
        
        // Convert external encrypted values to internal
        euint32 internalHashRate = FHE.fromExternal(hashRate, inputProof);
        euint32 internalPowerConsumption = FHE.fromExternal(powerConsumption, inputProof);
        euint32 internalTemperature = FHE.fromExternal(temperature, inputProof);
        euint32 internalEfficiency = FHE.fromExternal(efficiency, inputProof);
        
        miningOperations[operationId] = MiningOperation({
            operationId: FHE.asEuint32(operationId),
            hashRate: internalHashRate,
            powerConsumption: internalPowerConsumption,
            temperature: internalTemperature,
            efficiency: internalEfficiency,
            isActive: FHE.asEbool(true),
            isSecure: FHE.asEbool(true),
            operator: msg.sender,
            timestamp: block.timestamp
        });
        
        emit MiningOperationCreated(operationId, msg.sender);
        return operationId;
    }
    
    function raiseSecurityAlert(
        externalEuint32 severity,
        externalEuint32 threatLevel,
        string memory alertType,
        bytes calldata inputProof
    ) public returns (uint256) {
        uint256 alertId = alertCounter++;
        
        euint32 internalSeverity = FHE.fromExternal(severity, inputProof);
        euint32 internalThreatLevel = FHE.fromExternal(threatLevel, inputProof);
        
        securityAlerts[alertId] = SecurityAlert({
            alertId: FHE.asEuint32(alertId),
            severity: internalSeverity,
            threatLevel: internalThreatLevel,
            isResolved: FHE.asEbool(false),
            alertType: alertType,
            reporter: msg.sender,
            timestamp: block.timestamp
        });
        
        emit SecurityAlertRaised(alertId, msg.sender, alertType);
        return alertId;
    }
    
    function generateRevenue(
        externalEuint32 amount,
        externalEuint32 royaltyPercentage,
        address beneficiary,
        bytes calldata inputProof
    ) public returns (uint256) {
        uint256 revenueId = revenueCounter++;
        
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        euint32 internalRoyaltyPercentage = FHE.fromExternal(royaltyPercentage, inputProof);
        
        miningRevenues[revenueId] = MiningRevenue({
            revenueId: FHE.asEuint32(revenueId),
            amount: internalAmount,
            royaltyPercentage: internalRoyaltyPercentage,
            isDistributed: FHE.asEbool(false),
            beneficiary: beneficiary,
            timestamp: block.timestamp
        });
        
        emit RevenueGenerated(revenueId, beneficiary, 0); // Amount will be decrypted off-chain
        return revenueId;
    }
    
    function submitAuditReport(
        externalEuint32 securityScore,
        externalEuint32 complianceScore,
        string memory reportHash,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(msg.sender == securityAuditor, "Only authorized auditor can submit reports");
        
        uint256 reportId = reportCounter++;
        
        euint32 internalSecurityScore = FHE.fromExternal(securityScore, inputProof);
        euint32 internalComplianceScore = FHE.fromExternal(complianceScore, inputProof);
        
        auditReports[reportId] = AuditReport({
            reportId: FHE.asEuint32(reportId),
            securityScore: internalSecurityScore,
            complianceScore: internalComplianceScore,
            isVerified: FHE.asEbool(true),
            reportHash: reportHash,
            auditor: msg.sender,
            timestamp: block.timestamp
        });
        
        emit AuditCompleted(reportId, msg.sender, true);
        return reportId;
    }
    
    function updateOperatorReputation(
        address operator,
        externalEuint32 reputation,
        bytes calldata inputProof
    ) public {
        require(msg.sender == owner || msg.sender == securityAuditor, "Unauthorized");
        
        euint32 internalReputation = FHE.fromExternal(reputation, inputProof);
        operatorReputation[operator] = internalReputation;
        
        emit ReputationUpdated(operator, 0); // Reputation will be decrypted off-chain
    }
    
    function updateSecurityScore(
        address operator,
        externalEuint32 score,
        bytes calldata inputProof
    ) public {
        require(msg.sender == securityAuditor, "Only auditor can update security scores");
        
        euint32 internalScore = FHE.fromExternal(score, inputProof);
        securityScore[operator] = internalScore;
    }
    
    function getMiningOperation(uint256 operationId) public view returns (
        address operator,
        uint256 timestamp,
        bool exists
    ) {
        MiningOperation storage op = miningOperations[operationId];
        return (op.operator, op.timestamp, op.operator != address(0));
    }
    
    function getSecurityAlert(uint256 alertId) public view returns (
        address reporter,
        string memory alertType,
        uint256 timestamp,
        bool exists
    ) {
        SecurityAlert storage alert = securityAlerts[alertId];
        return (alert.reporter, alert.alertType, alert.timestamp, alert.reporter != address(0));
    }
    
    function getMiningRevenue(uint256 revenueId) public view returns (
        address beneficiary,
        uint256 timestamp,
        bool exists
    ) {
        MiningRevenue storage revenue = miningRevenues[revenueId];
        return (revenue.beneficiary, revenue.timestamp, revenue.beneficiary != address(0));
    }
    
    function getAuditReport(uint256 reportId) public view returns (
        address auditor,
        string memory reportHash,
        uint256 timestamp,
        bool exists
    ) {
        AuditReport storage report = auditReports[reportId];
        return (report.auditor, report.reportHash, report.timestamp, report.auditor != address(0));
    }
}
