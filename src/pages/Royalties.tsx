import MiningHeader from "@/components/MiningHeader";
import MiningFooter from "@/components/MiningFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Eye, Lock, Unlock } from "lucide-react";

const Royalties = () => {
  const royaltyPayments = [
    {
      id: "ROY-001",
      site: "Site Alpha-7",
      mineral: "Gold",
      amount: "$3,247.82",
      date: "2024-03-15",
      status: "Encrypted",
      encrypted: true
    },
    {
      id: "ROY-002", 
      site: "Site Beta-3",
      mineral: "Copper",
      amount: "$1,892.15",
      date: "2024-03-14",
      status: "Encrypted",
      encrypted: true
    },
    {
      id: "ROY-003",
      site: "Site Gamma-1", 
      mineral: "Silver",
      amount: "$967.43",
      date: "2024-03-13",
      status: "Audited",
      encrypted: false
    },
    {
      id: "ROY-004",
      site: "Site Delta-9",
      mineral: "Platinum",
      amount: "$5,123.67",
      date: "2024-03-12",
      status: "Pending Audit",
      encrypted: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-mining-hero">
      <MiningHeader />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-mining-gold mb-2">Royalty Management</h1>
            <p className="text-muted-foreground">Track and manage your encrypted mining royalty payments</p>
          </div>

          <Tabs defaultValue="payments" className="space-y-6">
            <TabsList className="mining-tunnel">
              <TabsTrigger value="payments">Payment History</TabsTrigger>
              <TabsTrigger value="pending">Pending Claims</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="payments" className="space-y-6">
              <Card className="mining-tunnel border-border/20">
                <CardHeader>
                  <CardTitle className="text-mining-gold">Royalty Payment History</CardTitle>
                  <CardDescription>Complete record of your mining royalty distributions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Payment ID</TableHead>
                        <TableHead>Mining Site</TableHead>
                        <TableHead>Mineral Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {royaltyPayments.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell className="font-medium">{payment.id}</TableCell>
                          <TableCell>{payment.site}</TableCell>
                          <TableCell>{payment.mineral}</TableCell>
                          <TableCell className="font-bold text-mining-gold">{payment.amount}</TableCell>
                          <TableCell>{payment.date}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={payment.status === "Audited" ? "default" : "secondary"}
                              className="flex items-center gap-1"
                            >
                              {payment.encrypted ? <Lock className="h-3 w-3" /> : <Unlock className="h-3 w-3" />}
                              {payment.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="ore-glow">
                                <Eye className="h-3 w-3 mr-1" />
                                View
                              </Button>
                              <Button size="sm" variant="outline" className="ore-glow">
                                <Download className="h-3 w-3 mr-1" />
                                Export
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pending" className="space-y-6">
              <Card className="mining-tunnel border-border/20">
                <CardHeader>
                  <CardTitle className="text-encryption-cyan">Pending Royalty Claims</CardTitle>
                  <CardDescription>Royalties awaiting audit completion for decryption</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border/20 rounded-lg">
                      <div>
                        <h3 className="font-medium">Site Omega-5 - Rare Earth Elements</h3>
                        <p className="text-sm text-muted-foreground">Pending third-party audit verification</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-mining-gold">$7,432.91</p>
                        <Badge variant="outline" className="text-xs">
                          <Lock className="h-3 w-3 mr-1" />
                          Encrypted
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border/20 rounded-lg">
                      <div>
                        <h3 className="font-medium">Site Theta-2 - Lithium Deposits</h3>
                        <p className="text-sm text-muted-foreground">Audit scheduled for next week</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-mining-gold">$4,156.78</p>
                        <Badge variant="outline" className="text-xs">
                          <Lock className="h-3 w-3 mr-1" />
                          Encrypted
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="mining-tunnel border-border/20">
                  <CardHeader>
                    <CardTitle className="text-mining-gold">Total Earnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-mining-gold">$67,234.56</div>
                    <p className="text-sm text-muted-foreground">Lifetime royalties</p>
                  </CardContent>
                </Card>
                <Card className="mining-tunnel border-border/20">
                  <CardHeader>
                    <CardTitle className="text-encryption-cyan">Average Payment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-encryption-cyan">$2,847.31</div>
                    <p className="text-sm text-muted-foreground">Per distribution</p>
                  </CardContent>
                </Card>
                <Card className="mining-tunnel border-border/20">
                  <CardHeader>
                    <CardTitle className="text-success">Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-success">98.7%</div>
                    <p className="text-sm text-muted-foreground">Audit approval rate</p>
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

export default Royalties;