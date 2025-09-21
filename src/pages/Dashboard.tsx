import MiningHeader from "@/components/MiningHeader";
import MiningFooter from "@/components/MiningFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Pickaxe, Shield } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-mining-hero">
      <MiningHeader />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-mining-gold mb-2">Mining Dashboard</h1>
            <p className="text-muted-foreground">Monitor your mining operations and royalty status</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="mining-tunnel border-border/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Royalties</CardTitle>
                <DollarSign className="h-4 w-4 text-mining-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-mining-gold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card className="mining-tunnel border-border/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mining Operations</CardTitle>
                <Pickaxe className="h-4 w-4 text-encryption-cyan" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-encryption-cyan">12</div>
                <p className="text-xs text-muted-foreground">Active mining sites</p>
              </CardContent>
            </Card>

            <Card className="mining-tunnel border-border/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Audit Status</CardTitle>
                <Shield className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">Verified</div>
                <p className="text-xs text-muted-foreground">Last audit: 2 days ago</p>
              </CardContent>
            </Card>

            <Card className="mining-tunnel border-border/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-mining-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-mining-gold">+12.5%</div>
                <p className="text-xs text-muted-foreground">Monthly average</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mining-tunnel border-border/20">
              <CardHeader>
                <CardTitle className="text-mining-gold">Recent Royalty Payments</CardTitle>
                <CardDescription>Latest encrypted distributions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Site Alpha-7</p>
                    <p className="text-sm text-muted-foreground">Gold extraction</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-mining-gold">$3,247.82</p>
                    <Badge variant="secondary" className="text-xs">Encrypted</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Site Beta-3</p>
                    <p className="text-sm text-muted-foreground">Copper mining</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-mining-gold">$1,892.15</p>
                    <Badge variant="secondary" className="text-xs">Encrypted</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Site Gamma-1</p>
                    <p className="text-sm text-muted-foreground">Silver deposits</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-mining-gold">$967.43</p>
                    <Badge variant="secondary" className="text-xs">Encrypted</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mining-tunnel border-border/20">
              <CardHeader>
                <CardTitle className="text-encryption-cyan">Mining Performance</CardTitle>
                <CardDescription>Operational efficiency metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Extraction Rate</span>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Processing Efficiency</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Safety Compliance</span>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <MiningFooter />
    </div>
  );
};

export default Dashboard;