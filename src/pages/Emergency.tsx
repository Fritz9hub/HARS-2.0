import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  Search,
  Plus,
  AlertTriangle,
  Clock,
  Phone,
  Ambulance,
  Activity,
  MapPin,
  User,
  Calendar,
  Stethoscope
} from "lucide-react";

const emergencyCases = [
  {
    id: 1,
    patientName: "Kwame Asante",
    age: 45,
    condition: "Cardiac Arrest",
    severity: "critical",
    arrivalTime: "14:30",
    status: "in-treatment",
    room: "Emergency Room 1",
    assignedDoctor: "Dr. Ama Boateng",
    vitalSigns: {
      heartRate: 120,
      bloodPressure: "160/100",
      oxygen: "92%"
    }
  },
  {
    id: 2,
    patientName: "Akosua Mensah",
    age: 32,
    condition: "Severe Allergic Reaction",
    severity: "urgent",
    arrivalTime: "15:15",
    status: "stabilized",
    room: "Emergency Room 2",
    assignedDoctor: "Dr. Samuel Nkrumah",
    vitalSigns: {
      heartRate: 95,
      bloodPressure: "140/90",
      oxygen: "96%"
    }
  },
  {
    id: 3,
    patientName: "Yaw Osei",
    age: 28,
    condition: "Motor Vehicle Accident",
    severity: "urgent",
    arrivalTime: "15:45",
    status: "waiting",
    room: "Triage",
    assignedDoctor: "Dr. Grace Gyamfi",
    vitalSigns: {
      heartRate: 110,
      bloodPressure: "130/85",
      oxygen: "98%"
    }
  },
  {
    id: 4,
    patientName: "Efua Adjei",
    age: 67,
    condition: "Stroke Symptoms",
    severity: "critical",
    arrivalTime: "16:00",
    status: "in-treatment",
    room: "Emergency Room 3",
    assignedDoctor: "Dr. Kwaku Asante",
    vitalSigns: {
      heartRate: 85,
      bloodPressure: "180/110",
      oxygen: "94%"
    }
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "critical":
      return "bg-destructive text-destructive-foreground";
    case "urgent":
      return "bg-warning text-warning-foreground";
    case "moderate":
      return "bg-primary text-primary-foreground";
    case "low":
      return "bg-success text-success-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "in-treatment":
      return "bg-destructive text-destructive-foreground";
    case "stabilized":
      return "bg-success text-success-foreground";
    case "waiting":
      return "bg-warning text-warning-foreground";
    case "discharged":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function Emergency() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCases = emergencyCases.filter(emergency =>
    emergency.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emergency.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const criticalCount = emergencyCases.filter(c => c.severity === "critical").length;
  const urgentCount = emergencyCases.filter(c => c.severity === "urgent").length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Emergency Alert Header */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-destructive animate-pulse" />
                  <div>
                    <h1 className="text-2xl font-bold text-destructive">Emergency Department</h1>
                    <p className="text-destructive/80">Active Cases: {emergencyCases.length} | Critical: {criticalCount} | Urgent: {urgentCount}</p>
                  </div>
                </div>
                <Button className="bg-destructive hover:bg-destructive/90">
                  <Plus className="h-4 w-4 mr-2" />
                  New Emergency
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="shadow-soft border-destructive/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Critical Cases</p>
                      <p className="text-3xl font-bold text-destructive">{criticalCount}</p>
                    </div>
                    <Heart className="h-8 w-8 text-destructive" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft border-warning/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Urgent Cases</p>
                      <p className="text-3xl font-bold text-warning">{urgentCount}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Wait Time</p>
                      <p className="text-3xl font-bold text-primary">12m</p>
                    </div>
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft border-success/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Available Beds</p>
                      <p className="text-3xl font-bold text-success">4</p>
                    </div>
                    <Ambulance className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search emergency cases..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
            </Card>

            {/* Emergency Cases */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-destructive" />
                  <span>Active Emergency Cases ({filteredCases.length})</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredCases.map((emergency) => (
                  <div 
                    key={emergency.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-destructive/20 bg-destructive/5 hover:bg-destructive/10 transition-colors"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <Avatar className="h-12 w-12 border-2 border-destructive/30">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-destructive text-destructive-foreground">
                          {emergency.patientName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{emergency.patientName}</h4>
                          <span className="text-sm text-muted-foreground">({emergency.age} years)</span>
                          <Badge className={getSeverityColor(emergency.severity)} variant="secondary">
                            {emergency.severity}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-destructive">{emergency.condition}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>Arrived: {emergency.arrivalTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{emergency.room}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Stethoscope className="h-3 w-3" />
                            <span>{emergency.assignedDoctor}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-xs mt-1">
                          <span>HR: {emergency.vitalSigns.heartRate} bpm</span>
                          <span>BP: {emergency.vitalSigns.bloodPressure}</span>
                          <span>O2: {emergency.vitalSigns.oxygen}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(emergency.status)}>
                        {emergency.status.replace('-', ' ')}
                      </Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Activity className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}