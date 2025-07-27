import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  Plus, 
  Search,
  Filter,
  Video,
  Phone,
  Edit,
  Trash2
} from "lucide-react";

const appointments = [
  {
    id: 1,
    patient: "Sarah Mensah",
    doctor: "Dr. Kwame Asante",
    time: "09:00 AM",
    date: "2024-01-15",
    type: "Check-up",
    status: "confirmed",
    isVideo: false,
    room: "A-204"
  },
  {
    id: 2,
    patient: "Kwaku Osei",
    doctor: "Dr. Ama Boateng",
    time: "10:30 AM",
    date: "2024-01-15",
    type: "Follow-up",
    status: "pending",
    isVideo: true,
    room: "Virtual"
  },
  {
    id: 3,
    patient: "Akosua Boateng",
    doctor: "Dr. Samuel Nkrumah",
    time: "02:00 PM",
    date: "2024-01-15",
    type: "Emergency",
    status: "urgent",
    isVideo: false,
    room: "Emergency Ward"
  },
  {
    id: 4,
    patient: "Emmanuel Nkrumah",
    doctor: "Dr. Grace Mensah",
    time: "03:30 PM",
    date: "2024-01-15",
    type: "Consultation",
    status: "confirmed",
    isVideo: true,
    room: "Virtual"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-success text-success-foreground";
    case "pending":
      return "bg-warning text-warning-foreground";
    case "urgent":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function Appointments() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = appointments.filter(appointment =>
    appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
                <p className="text-muted-foreground">Manage patient appointments and schedules</p>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                New Appointment
              </Button>
            </div>

            {/* Search and Filter */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search appointments..."
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

            {/* Appointments List */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Today's Appointments ({filteredAppointments.length})</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredAppointments.map((appointment) => (
                  <div 
                    key={appointment.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {appointment.patient.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{appointment.patient}</h4>
                          {appointment.isVideo && (
                            <Video className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{appointment.time}</span>
                          </div>
                          <span>•</span>
                          <span>{appointment.type}</span>
                          <span>•</span>
                          <span>{appointment.room}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive">
                          <Trash2 className="h-4 w-4" />
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