import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  FileText,
  Phone,
  Mail,
  MapPin,
  Heart,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

const patients = [
  {
    id: 1,
    name: "Ama Asante",
    age: 34,
    gender: "Female",
    phone: "+233 24 123 4567",
    email: "ama.asante@email.com",
    address: "Accra, Greater Accra",
    condition: "Hypertension",
    lastVisit: "2 hours ago",
    status: "critical",
    patientId: "PAT-001"
  },
  {
    id: 2,
    name: "Kofi Adjei",
    age: 28,
    gender: "Male",
    phone: "+233 26 987 6543",
    email: "kofi.adjei@email.com",
    address: "Kumasi, Ashanti",
    condition: "Routine Check-up",
    lastVisit: "1 day ago",
    status: "stable",
    patientId: "PAT-002"
  },
  {
    id: 3,
    name: "Efua Gyamfi",
    age: 45,
    gender: "Female",
    phone: "+233 20 555 0123",
    email: "efua.gyamfi@email.com",
    address: "Cape Coast, Central",
    condition: "Diabetes Management",
    lastVisit: "3 days ago",
    status: "monitoring",
    patientId: "PAT-003"
  },
  {
    id: 4,
    name: "Samuel Opoku",
    age: 52,
    gender: "Male",
    phone: "+233 27 444 9876",
    email: "samuel.opoku@email.com",
    address: "Tamale, Northern",
    condition: "Post-Surgery",
    lastVisit: "5 hours ago",
    status: "recovery",
    patientId: "PAT-004"
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
        icon: CheckCircle,
        label: "Unknown"
      };
  }
};

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page Header */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Patients</h1>
                <p className="text-muted-foreground">Manage patient records and information</p>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Patient
              </Button>
            </div>

            {/* Search and Filter */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search patients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* Patients List */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Patient Records ({filteredPatients.length})</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredPatients.map((patient) => {
                  const statusConfig = getStatusConfig(patient.status);
                  const StatusIcon = statusConfig.icon;
                  
                  return (
                    <div 
                      key={patient.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-accent text-accent-foreground">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{patient.name}</h4>
                            <span className="text-sm text-muted-foreground">({patient.age}, {patient.gender})</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">{patient.patientId}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{patient.condition}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Phone className="h-3 w-3" />
                              <span>{patient.phone}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{patient.address}</span>
                            </div>
                            <span>Last visit: {patient.lastVisit}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Badge className={statusConfig.color}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {statusConfig.label}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}