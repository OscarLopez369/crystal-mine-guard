import MiningHeader from "@/components/MiningHeader";
import MiningFooter from "@/components/MiningFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Thermometer, Zap, Users, Calendar } from "lucide-react";

const MiningData = () => {
  const miningSites = [
    {
      id: "ALPHA-7",
      name: "Gold Rush Alpha",
      location: "Colorado, USA",
      mineral: "Gold",
      status: "Active",
      production: 87,
      safety: 96,
      workers: 45,
      lastUpdate: "2024-03-15 14:30"
    },
    {
      id: "BETA-3", 
      name: "Copper Canyon Beta",
      location: "Arizona, USA",
      mineral: "Copper",
      status: "Active",
      production: 92,
      safety: 98,
      workers: 32,
      lastUpdate: "2024-03-15 13:45"
    },
    {
      id: "GAMMA-1",
      name: "Silver Stream Gamma",
      location: "Nevada, USA", 
      mineral: "Silver",
      status: "Maintenance",
      production: 45,
      safety: 94,
      workers: 12,
      lastUpdate: "2024-03-14 09:15"
    },
    {
      id: "DELTA-9",
      name: "Platinum Peak Delta",
      location: "Montana, USA",
      mineral: "Platinum",
      status: "Active",
      production: 78,
      safety: 99,
      workers: 28,
      lastUpdate: "2024-03-15 15:20"
    }
  ];

  const operationalMetrics = [
    { label: "Total Extraction Volume", value: "2,847 tons", icon: <Zap className="h-4 w-4" /> },
    { label: "Average Temperature", value: "23.4°C", icon: <Thermometer className="h-4 w-4" /> },
    { label: "Active Workers", value: "117 personnel", icon: <Users className="h-4 w-4" /> },
    { label: "Operating Hours", value: "24/7 continuous", icon: <Calendar className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-mining-hero">
      <MiningHeader />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-mining-gold mb-2">Mining Operations Data</h1>
            <p className="text-muted-foreground">Real-time monitoring and analytics for all mining sites</p>
          </div>

          {/* Operational Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {operationalMetrics.map((metric, index) => (
              <Card key={index} className="mining-tunnel border-border/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                  <div className="text-encryption-cyan">{metric.icon}</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-mining-gold">{metric.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="sites" className="space-y-6">
            <TabsList className="mining-tunnel">
              <TabsTrigger value="sites">Mining Sites</TabsTrigger>
              <TabsTrigger value="production">Production Data</TabsTrigger>
              <TabsTrigger value="environmental">Environmental</TabsTrigger>
            </TabsList>

            <TabsContent value="sites" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {miningSites.map((site) => (
                  <Card key={site.id} className="mining-tunnel border-border/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-mining-gold">{site.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            {site.location}
                          </CardDescription>
                        </div>
                        <Badge 
                          variant={site.status === "Active" ? "default" : "secondary"}
                          className={site.status === "Active" ? "bg-success" : ""}
                        >
                          {site.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Site ID</p>
                          <p className="font-medium">{site.id}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Primary Mineral</p>
                          <p className="font-medium text-encryption-cyan">{site.mineral}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Workers</p>
                          <p className="font-medium">{site.workers} personnel</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Update</p>
                          <p className="font-medium text-xs">{site.lastUpdate}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm">Production Efficiency</span>
                            <span className="text-sm font-medium">{site.production}%</span>
                          </div>
                          <Progress value={site.production} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm">Safety Score</span>
                            <span className="text-sm font-medium">{site.safety}%</span>
                          </div>
                          <Progress value={site.safety} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="production" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="mining-tunnel border-border/20">
                  <CardHeader>
                    <CardTitle className="text-mining-gold">Daily Production</CardTitle>
                    <CardDescription>Output by mineral type</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Gold</span>
                      <span className="font-bold text-mining-gold">247.8 oz</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Copper</span>
                      <span className="font-bold text-encryption-cyan">1,847 lbs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Silver</span>
                      <span className="font-bold">892.3 oz</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Platinum</span>
                      <span className="font-bold">34.7 oz</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mining-tunnel border-border/20">
                  <CardHeader>
                    <CardTitle className="text-encryption-cyan">Equipment Status</CardTitle>
                    <CardDescription>Operational equipment overview</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Excavators</span>
                      <Badge variant="default" className="bg-success">8/8 Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Crushers</span>
                      <Badge variant="default" className="bg-success">4/4 Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Conveyors</span>
                      <Badge variant="secondary">5/6 Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Processing Units</span>
                      <Badge variant="default" className="bg-success">3/3 Active</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="environmental" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="mining-tunnel border-border/20">
                  <CardHeader>
                    <CardTitle className="text-success">Water Quality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-success">Excellent</div>
                    <p className="text-sm text-muted-foreground">pH: 7.2, Clarity: 98%</p>
                  </CardContent>
                </Card>

                <Card className="mining-tunnel border-border/20">
                  <CardHeader>
                    <CardTitle className="text-success">Air Quality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-success">Good</div>
                    <p className="text-sm text-muted-foreground">PM2.5: 12 μg/m³</p>
                  </CardContent>
                </Card>

                <Card className="mining-tunnel border-border/20">
                  <CardHeader>
                    <CardTitle className="text-success">Soil Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-success">Stable</div>
                    <p className="text-sm text-muted-foreground">No contamination detected</p>
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

export default MiningData;