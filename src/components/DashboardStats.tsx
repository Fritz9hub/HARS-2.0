import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Calendar, 
  FileText, 
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle
} from "lucide-react";

const stats = [
  {
    title: "Total Patients",
    value: "2,847",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Today's Appointments",
    value: "89",
    change: "+5%",
    trend: "up",
    icon: Calendar,
    color: "text-accent"
  },
  {
    title: "Active Records",
    value: "15,892",
    change: "+8%",
    trend: "up",
    icon: FileText,
    color: "text-warning"
  },
  {
    title: "System Uptime",
    value: "99.9%",
    change: "-0.1%",
    trend: "down",
    icon: Activity,
    color: "text-success"
  }
];

const alerts = [
  {
    title: "Server Maintenance",
    message: "Scheduled maintenance tonight at 2:00 AM",
    type: "warning",
    time: "2 hours"
  },
  {
    title: "Backup Complete",
    message: "Daily backup completed successfully",
    type: "success",
    time: "1 hour ago"
  },
  {
    title: "High Load Alert",
    message: "Database queries running slower than usual",
    type: "error",
    time: "5 minutes ago"
  }
];

export const DashboardStats = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
          
          return (
            <Card key={stat.title} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-1 text-xs">
                  <TrendIcon className={`h-3 w-3 ${
                    stat.trend === "up" ? "text-success" : "text-destructive"
                  }`} />
                  <span className={
                    stat.trend === "up" ? "text-success" : "text-destructive"
                  }>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Alerts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Performance */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>System Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>CPU Usage</span>
                <span>45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Memory Usage</span>
                <span>67%</span>
              </div>
              <Progress value={67} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Storage Usage</span>
                <span>23%</span>
              </div>
              <Progress value={23} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Network Load</span>
                <span>12%</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span>Recent Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  alert.type === "success" ? "bg-success" :
                  alert.type === "warning" ? "bg-warning" :
                  "bg-destructive"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{alert.title}</p>
                  <p className="text-xs text-muted-foreground">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};