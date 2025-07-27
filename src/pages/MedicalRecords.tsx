import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Search,
  Filter,
  Plus,
  Download,
  Eye,
  Calendar,
  User,
  Stethoscope,
  Pill,
  TestTube,
  Activity
} from "lucide-react";

const medicalRecords = [
  {
    id: 1,
    patientName: "Ama Asante",
    patientId: "PAT-001",
    recordType: "Consultation",
    doctor: "Dr. Kwame Asante",
    date: "2024-01-15",
    diagnosis: "Hypertension",
    treatment: "Prescribed medication and lifestyle changes",
    status: "active",
    priority: "high"
  },
  {
    id: 2,
    patientName: "Kofi Adjei",
    patientId: "PAT-002",
    recordType: "Lab Results",
    doctor: "Dr. Ama Boateng",
    date: "2024-01-14",
    diagnosis: "Blood work normal",
    treatment: "Continue routine check-ups",
    status: "completed",
    priority: "normal"
  },
  {
    id: 3,
    patientName: "Efua Gyamfi",
    patientId: "PAT-003",
    recordType: "X-Ray",
    doctor: "Dr. Samuel Nkrumah",
    date: "2024-01-13",
    diagnosis: "Fractured wrist",
    treatment: "Cast applied, follow-up in 6 weeks",
    status: "active",
    priority: "medium"
  },
  {
    id: 4,
    patientName: "Samuel Opoku",
    patientId: "PAT-004",
    recordType: "Surgery Report",
    doctor: "Dr. Grace Mensah",
    date: "2024-01-12",
    diagnosis: "Appendectomy successful",
    treatment: "Post-operative care and recovery",
    status: "recovery",
    priority: "high"
  }
];

const getRecordTypeIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "consultation":
      return Stethoscope;
    case "lab results":
      return TestTube;
    case "x-ray":
      return Activity;
    case "surgery report":
      return Pill;
    default:
      return FileText;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-warning text-warning-foreground";
    case "completed":
      return "bg-success text-success-foreground";
    case "recovery":
      return "bg-primary text-primary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-destructive text-destructive-foreground";
    case "medium":
      return "bg-warning text-warning-foreground";
    case "normal":
      return "bg-success text-success-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function MedicalRecords() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecords = medicalRecords.filter(record =>
    record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.recordType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h1 className="text-3xl font-bold text-foreground">Medical Records</h1>
                <p className="text-muted-foreground">Manage patient medical records and documents</p>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                New Record
              </Button>
            </div>

            {/* Search and Filter */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search medical records..."
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

            {/* Medical Records List */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Medical Records ({filteredRecords.length})</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredRecords.map((record) => {
                  const RecordIcon = getRecordTypeIcon(record.recordType);
                  
                  return (
                    <div 
                      key={record.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                          <RecordIcon className="h-6 w-6 text-primary" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{record.patientName}</h4>
                            <span className="text-xs bg-muted px-2 py-1 rounded">{record.patientId}</span>
                            <Badge className={getPriorityColor(record.priority)} variant="secondary">
                              {record.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-primary font-medium">{record.recordType}</p>
                          <p className="text-sm text-muted-foreground">{record.diagnosis}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{record.doctor}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{record.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(record.status)}>
                          {record.status}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Download className="h-4 w-4" />
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