import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Server, 
  Database, 
  Wifi, 
  HardDrive,
  Cpu,
  MemoryStick,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const SystemHealth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">System Health</h1>
              <p className="text-muted-foreground">Monitor system performance and infrastructure status</p>
            </div>

            {/* Overall System Status */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">System Status</p>
                      <p className="text-2xl font-bold text-success">Healthy</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Uptime</p>
                      <p className="text-2xl font-bold">99.8%</p>
                    </div>
                    <Server className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                      <p className="text-2xl font-bold">127</p>
                    </div>
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Response Time</p>
                      <p className="text-2xl font-bold">245ms</p>
                    </div>
                    <Wifi className="w-8 h-8 text-chart-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Resources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="w-5 h-5" />
                    CPU Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>CPU Usage</span>
                      <span>64%</span>
                    </div>
                    <Progress value={64} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Load Average</span>
                      <span>2.1</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MemoryStick className="w-5 h-5" />
                    Memory Usage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>RAM Usage</span>
                      <span>8.2GB / 16GB</span>
                    </div>
                    <Progress value={51} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Swap Usage</span>
                      <span>0.5GB / 4GB</span>
                    </div>
                    <Progress value={12} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Storage and Database */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HardDrive className="w-5 h-5" />
                    Storage Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>System Drive</span>
                      <span>156GB / 500GB</span>
                    </div>
                    <Progress value={31} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Data Drive</span>
                      <span>1.2TB / 2TB</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Backup Drive</span>
                      <span>800GB / 1TB</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Database Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Connection Pool</span>
                    <Badge variant="outline" className="bg-success/10 text-success border-success">
                      Healthy
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Query Performance</span>
                    <Badge variant="outline" className="bg-success/10 text-success border-success">
                      Optimal
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Backup Status</span>
                    <Badge variant="outline" className="bg-success/10 text-success border-success">
                      Up to Date
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Replication</span>
                    <Badge variant="outline" className="bg-warning/10 text-warning border-warning">
                      Syncing
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Issues */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Recent System Events
                </CardTitle>
                <CardDescription>Latest system events and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-warning/20 bg-warning/5">
                    <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">High Memory Usage Detected</p>
                      <p className="text-xs text-muted-foreground">Memory usage exceeded 80% threshold - 15 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-success/20 bg-success/5">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Backup Completed Successfully</p>
                      <p className="text-xs text-muted-foreground">Daily backup completed without errors - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-chart-2/20 bg-chart-2/5">
                    <Shield className="w-4 h-4 text-chart-2 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Security Scan Completed</p>
                      <p className="text-xs text-muted-foreground">No vulnerabilities detected - 6 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SystemHealth;