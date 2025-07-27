import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  UserPlus, 
  Search,
  Filter,
  Plus,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Stethoscope,
  ShieldCheck,
  Clock,
  Edit,
  Eye
} from "lucide-react";

const staff = [
  {
    id: 1,
    name: "Dr. Kwame Asante",
    role: "Cardiologist",
    department: "Cardiology",
    email: "kwame.asante@remedycare.gh",
    phone: "+233 24 111 2222",
    location: "Main Building, Floor 3",
    experience: "15 years",
    status: "active",
    shift: "Morning",
    specialization: "Heart Surgery"
  },
  {
    id: 2,
    name: "Dr. Ama Boateng",
    role: "Pediatrician",
    department: "Pediatrics",
    email: "ama.boateng@remedycare.gh",
    phone: "+233 26 333 4444",
    location: "Children's Ward",
    experience: "8 years",
    status: "active",
    shift: "Evening",
    specialization: "Child Healthcare"
  },
  {
    id: 3,
    name: "Nurse Grace Mensah",
    role: "Senior Nurse",
    department: "Emergency",
    email: "grace.mensah@remedycare.gh",
    phone: "+233 20 555 6666",
    location: "Emergency Ward",
    experience: "12 years",
    status: "on-duty",
    shift: "Night",
    specialization: "Emergency Care"
  },
  {
    id: 4,
    name: "Dr. Samuel Nkrumah",
    role: "Surgeon",
    department: "Surgery",
    email: "samuel.nkrumah@remedycare.gh",
    phone: "+233 27 777 8888",
    location: "Operating Theater",
    experience: "20 years",
    status: "in-surgery",
    shift: "Morning",
    specialization: "General Surgery"
  },
  {
    id: 5,
    name: "Pharmacist Yaa Asantewaa",
    role: "Head Pharmacist",
    department: "Pharmacy",
    email: "yaa.asantewaa@remedycare.gh",
    phone: "+233 24 999 0000",
    location: "Pharmacy Department",
    experience: "10 years",
    status: "active",
    shift: "Morning",
    specialization: "Clinical Pharmacy"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-success text-success-foreground";
    case "on-duty":
      return "bg-primary text-primary-foreground";
    case "in-surgery":
      return "bg-warning text-warning-foreground";
    case "off-duty":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getRoleIcon = (role: string) => {
  if (role.toLowerCase().includes("doctor") || role.toLowerCase().includes("surgeon")) {
    return Stethoscope;
  }
  if (role.toLowerCase().includes("nurse")) {
    return ShieldCheck;
  }
  return UserPlus;
};

export default function Staff() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStaff = staff.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>
                <p className="text-muted-foreground">Manage hospital staff and personnel</p>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Staff
              </Button>
            </div>

            {/* Search and Filter */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search staff..."
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

            {/* Staff List */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  <span>Staff Directory ({filteredStaff.length})</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredStaff.map((member) => {
                  const RoleIcon = getRoleIcon(member.role);
                  
                  return (
                    <div 
                      key={member.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{member.name}</h4>
                            <RoleIcon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium text-primary">{member.role}</p>
                            <span className="text-sm text-muted-foreground">• {member.department}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{member.specialization}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Phone className="h-3 w-3" />
                              <span>{member.phone}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{member.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{member.shift} Shift</span>
                            </div>
                            <span>{member.experience} experience</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(member.status)}>
                          {member.status.replace('-', ' ')}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
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