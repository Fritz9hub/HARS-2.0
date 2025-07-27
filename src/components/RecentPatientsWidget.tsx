import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Heart, 
  AlertCircle,
  CheckCircle,
  Clock,
  Eye,
  FileText,
  Circle
} from "lucide-react";

const recentPatients = [
  {
    id: 1,
    name: "Ama Asante",
    age: 34,
    condition: "Hypertension",
    lastVisit: "2 hours ago",
    status: "critical",
    avatar: "",
    roomNumber: "A-204"
  },
  {
    id: 2,
    name: "Kofi Adjei",
    age: 28,
    condition: "Routine Check-up",
    lastVisit: "1 day ago",
    status: "stable",
    avatar: "",
    roomNumber: "B-101"
  },
  {
    id: 3,
    name: "Efua Gyamfi",
    age: 45,
    condition: "Diabetes Management",
    lastVisit: "3 days ago",
    status: "monitoring",
    avatar: "",
    roomNumber: "C-305"
  },
  {
    id: 4,
    name: "Samuel Opoku",
    age: 52,
    condition: "Post-Surgery",
    lastVisit: "5 hours ago",
    status: "recovery",
    avatar: "",
    roomNumber: "A-112"
  },
  {
    id: 5,
    name: "Grace Boadu",
    age: 29,
    condition: "Prenatal Care",
    lastVisit: "1 week ago",
    status: "stable",
    avatar: "",
    roomNumber: "D-201"
  }
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case "critical":
      return {
        color: "bg-destructive text-destructive-foreground",
        icon: AlertCircle,
        label: "Critical"
      };
    case "stable":
      return {
        color: "bg-success text-success-foreground",
        icon: CheckCircle,
        label: "Stable"
      };
    case "monitoring":
      return {
        color: "bg-warning text-warning-foreground",
        icon: Heart,
        label: "Monitoring"
      };
    case "recovery":
      return {
        color: "bg-primary text-primary-foreground",
        icon: Clock,
        label: "Recovery"
      };
    default:
      return {
        color: "bg-muted text-muted-foreground",
        icon: Circle,
        label: "Unknown"
      };
  }
};

export const RecentPatientsWidget = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-primary" />
          <span>Recent Patients</span>
        </CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentPatients.map((patient) => {
          const statusConfig = getStatusConfig(patient.status);
          const StatusIcon = statusConfig.icon;
          
          return (
            <div 
              key={patient.id}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3 flex-1">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={patient.avatar} />
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium truncate">{patient.name}</h4>
                    <span className="text-sm text-muted-foreground">({patient.age})</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{patient.condition}</p>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>Room {patient.roomNumber}</span>
                    <span>•</span>
                    <span>{patient.lastVisit}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Badge className={statusConfig.color} variant="secondary">
                  <StatusIcon className="h-3 w-3 mr-1" />
                  {statusConfig.label}
                </Badge>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="pt-2 border-t border-border">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Total Active Patients: 142</span>
            <span>Critical: 3 • Stable: 127 • Monitoring: 12</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};