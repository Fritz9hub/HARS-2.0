import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Clock, 
  Search, 
  Filter, 
  Download,
  User,
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  Eye
} from "lucide-react";

const AuditLogs = () => {
  const auditLogs = [
    {
      id: 1,
      timestamp: "2024-01-15 14:30:25",
      user: "Dr. Sarah Johnson",
      action: "Viewed patient record",
      resource: "Patient ID: P-2024-001",
      ip: "192.168.1.45",
      status: "success",
      severity: "info"
    },
    {
      id: 2,
      timestamp: "2024-01-15 14:28:12",
      user: "Nurse Mary Adams",
      action: "Updated appointment status",
      resource: "Appointment ID: A-2024-156",
      ip: "192.168.1.52",
      status: "success",
      severity: "info"
    },
    {
      id: 3,
      timestamp: "2024-01-15 14:25:08",
      user: "Admin John Doe",
      action: "Modified user permissions",
      resource: "User ID: U-2024-045",
      ip: "192.168.1.10",
      status: "success",
      severity: "warning"
    },
    {
      id: 4,
      timestamp: "2024-01-15 14:22:45",
      user: "Unknown",
      action: "Failed login attempt",
      resource: "Login system",
      ip: "203.45.67.89",
      status: "failed",
      severity: "critical"
    },
    {
      id: 5,
      timestamp: "2024-01-15 14:20:33",
      user: "Dr. Michael Brown",
      action: "Created medical record",
      resource: "Record ID: R-2024-089",
      ip: "192.168.1.67",
      status: "success",
      severity: "info"
    },
    {
      id: 6,
      timestamp: "2024-01-15 14:18:21",
      user: "System",
      action: "Automated backup initiated",
      resource: "Database backup",
      ip: "127.0.0.1",
      status: "success",
      severity: "info"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-destructive/10 text-destructive border-destructive";
      case "warning":
        return "bg-warning/10 text-warning border-warning";
      case "info":
        return "bg-primary/10 text-primary border-primary";
      default:
        return "bg-muted/10 text-muted-foreground border-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "failed":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">Audit Logs</h1>
              <p className="text-muted-foreground">Track system activities and user actions for compliance and security</p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Events Today</p>
                      <p className="text-2xl font-bold">1,247</p>
                    </div>
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Failed Attempts</p>
                      <p className="text-2xl font-bold text-destructive">3</p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                      <p className="text-2xl font-bold">45</p>
                    </div>
                    <User className="w-8 h-8 text-accent" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Data Access Events</p>
                      <p className="text-2xl font-bold">892</p>
                    </div>
                    <Shield className="w-8 h-8 text-chart-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filter Logs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search logs..." className="pl-10" />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by user" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="doctors">Doctors</SelectItem>
                      <SelectItem value="nurses">Nurses</SelectItem>
                      <SelectItem value="admin">Administrators</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Severities</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="warning">Warning</SelectItem>
                      <SelectItem value="info">Info</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Audit Log Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest system and user activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {auditLogs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(log.status)}
                          <Badge variant="outline" className={getSeverityColor(log.severity)}>
                            {log.severity}
                          </Badge>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-sm font-medium truncate">{log.action}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">{log.resource}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {log.user}
                            </span>
                            <span>{log.timestamp}</span>
                            <span>IP: {log.ip}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuditLogs;