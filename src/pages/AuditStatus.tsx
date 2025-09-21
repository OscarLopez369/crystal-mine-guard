import MiningHeader from "@/components/MiningHeader";
import MiningFooter from "@/components/MiningFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, AlertTriangle, FileCheck, Shield, Calendar, Download } from "lucide-react";

const AuditStatus = () => {
  const auditRecords = [
    {
      id: "AUD-2024-003",
      site: "Site Alpha-7",
      auditor: "SecureChain Audits",
      type: "Financial Compliance",
      status: "Completed",
      score: 98,
      date: "2024-03-13",
      report: "Available"
    },
    {
      id: "AUD-2024-002",
      site: "Site Beta-3", 
      auditor: "CryptoVerify Inc",
      type: "Security Assessment",
      status: "In Progress",
      score: null,
      date: "2024-03-15",
      report: "Pending"
    },
    {
      id: "AUD-2024-001",
      site: "Site Gamma-1",
      auditor: "BlockChain Assurance",
      type: "Operational Review",
      status: "Scheduled",
      score: null,
      date: "2024-03-18",
      report: "Scheduled"
    }
  ];

  const complianceMetrics = [
    { label: "Overall Compliance", value: 96, color: "text-success" },
    { label: "Financial Transparency", value: 98, color: "text-success" },
    { label: "Security Protocols", value: 94, color: "text-success" },
    { label: "Operational Standards", value: 92, color: "text-success" }
  ];

  return (
    <div className="min-h-screen bg-gradient-mining-hero">
      <MiningHeader />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-mining-gold mb-2">Audit Status Center</h1>
            <p className="text-muted-foreground">Third-party audit verification and compliance monitoring</p>
          </div>

          {/* Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="mining-tunnel border-border/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Audits</CardTitle>
                <Clock className="h-4 w-4 text-encryption-cyan" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-encryption-cyan">2</div>
                <p className="text-xs text-muted-foreground">Currently in progress</p>
              </CardContent>
            </Card>

            <Card className="mining-tunnel border-border/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">15</div>
                <p className="text-xs text-muted-foreground">This quarter</p>
              </CardContent>
            </Card>

            <Card className="mining-tunnel border-border/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
                <Shield className="h-4 w-4 text-mining-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-mining-gold">96%</div>
                <p className="text-xs text-muted-foreground">Industry leading</p>
              </CardContent>
            </Card>

            <Card className="mining-tunnel border-border/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Audit</CardTitle>
                <Calendar className="h-4 w-4 text-encryption-cyan" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-encryption-cyan">3</div>
                <p className="text-xs text-muted-foreground">Days remaining</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="current" className="space-y-6">
            <TabsList className="mining-tunnel">
              <TabsTrigger value="current">Current Audits</TabsTrigger>
              <TabsTrigger value="history">Audit History</TabsTrigger>
              <TabsTrigger value="compliance">Compliance Metrics</TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="space-y-6">
              <div className="space-y-4">
                {auditRecords.map((audit) => (
                  <Card key={audit.id} className="mining-tunnel border-border/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-mining-gold">{audit.id}</CardTitle>
                          <CardDescription className="mt-1">
                            {audit.site} • {audit.type}
                          </CardDescription>
                        </div>
                        <Badge 
                          variant={
                            audit.status === "Completed" ? "default" : 
                            audit.status === "In Progress" ? "secondary" : "outline"
                          }
                          className={
                            audit.status === "Completed" ? "bg-success" :
                            audit.status === "In Progress" ? "bg-encryption-cyan text-black" : ""
                          }
                        >
                          {audit.status === "Completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {audit.status === "In Progress" && <Clock className="h-3 w-3 mr-1" />}
                          {audit.status === "Scheduled" && <Calendar className="h-3 w-3 mr-1" />}
                          {audit.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Auditor</p>
                          <p className="font-medium">{audit.auditor}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Audit Date</p>
                          <p className="font-medium">{audit.date}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Compliance Score</p>
                          <p className="font-medium">
                            {audit.score ? (
                              <span className="text-success">{audit.score}%</span>
                            ) : (
                              <span className="text-muted-foreground">Pending</span>
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Report Status</p>
                          <p className="font-medium">{audit.report}</p>
                        </div>
                      </div>
                      
                      {audit.status === "Completed" && (
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="ore-glow">
                            <FileCheck className="h-3 w-3 mr-1" />
                            View Report
                          </Button>
                          <Button size="sm" variant="outline" className="ore-glow">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      )}
                      
                      {audit.status === "In Progress" && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Audit Progress</span>
                            <span className="text-sm font-medium">75%</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <Card className="mining-tunnel border-border/20">
                <CardHeader>
                  <CardTitle className="text-mining-gold">Audit History</CardTitle>
                  <CardDescription>Complete record of all audit activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({length: 5}, (_, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border border-border/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-success" />
                          <div>
                            <p className="font-medium">AUD-2024-{String(10-i).padStart(3, '0')}</p>
                            <p className="text-sm text-muted-foreground">
                              Site {['Alpha-7', 'Beta-3', 'Gamma-1', 'Delta-9', 'Omega-5'][i]} • 
                              {['Security', 'Financial', 'Operational', 'Compliance', 'Environmental'][i]} Audit
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-success">{95 + i}% Score</p>
                          <p className="text-sm text-muted-foreground">2024-03-{10 + i}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="mining-tunnel border-border/20">
                  <CardHeader>
                    <CardTitle className="text-mining-gold">Compliance Metrics</CardTitle>
                    <CardDescription>Key performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {complianceMetrics.map((metric, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">{metric.label}</span>
                          <span className={`text-sm font-medium ${metric.color}`}>{metric.value}%</span>
                        </div>
                        <Progress value={metric.value} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="mining-tunnel border-border/20">
                  <CardHeader>
                    <CardTitle className="text-encryption-cyan">Audit Schedule</CardTitle>
                    <CardDescription>Upcoming audit appointments</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 border border-border/20 rounded-lg">
                      <Calendar className="h-5 w-5 text-encryption-cyan" />
                      <div>
                        <p className="font-medium">Site Gamma-1 Review</p>
                        <p className="text-sm text-muted-foreground">March 18, 2024 • BlockChain Assurance</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-border/20 rounded-lg">
                      <Calendar className="h-5 w-5 text-encryption-cyan" />
                      <div>
                        <p className="font-medium">Quarterly Security Assessment</p>
                        <p className="text-sm text-muted-foreground">March 25, 2024 • SecureChain Audits</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-border/20 rounded-lg">
                      <Calendar className="h-5 w-5 text-encryption-cyan" />
                      <div>
                        <p className="font-medium">Environmental Compliance</p>
                        <p className="text-sm text-muted-foreground">April 2, 2024 • EcoAudit Solutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <MiningFooter />
    </div>
  );
};

export default AuditStatus;