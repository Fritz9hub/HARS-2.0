import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  User, 
  Phone,
  Video,
  Plus,
  MoreHorizontal 
} from "lucide-react";

const upcomingAppointments = [
  {
    id: 1,
    patient: "Sarah Mensah",
    time: "09:00 AM",
    type: "Check-up",
    status: "confirmed",
    avatar: "",
    phone: "+233 24 123 4567",
    isVideo: false
  },
  {
    id: 2,
    patient: "Kwaku Osei",
    time: "10:30 AM",
    type: "Follow-up",
    status: "pending",
    avatar: "",
    phone: "+233 26 987 6543",
    isVideo: true
  },
  {
    id: 3,
    patient: "Akosua Boateng",
    time: "02:00 PM",
    type: "Emergency",
    status: "urgent",
    avatar: "",
    phone: "+233 20 555 0123",
    isVideo: false
  },
  {
    id: 4,
    patient: "Emmanuel Nkrumah",
    time: "03:30 PM",
    type: "Consultation",
    status: "confirmed",
    avatar: "",
    phone: "+233 27 444 9876",
    isVideo: true
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

export const AppointmentsWidget = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-primary" />
          <span>Today's Appointments</span>
        </CardTitle>
        <Button size="sm" className="bg-gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          New
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingAppointments.map((appointment) => (
          <div 
            key={appointment.id}
            className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={appointment.avatar} />
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
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{appointment.time}</span>
                  </div>
                  <span>•</span>
                  <span>{appointment.type}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge className={getStatusColor(appointment.status)}>
                {appointment.status}
              </Badge>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        
        <div className="pt-2 border-t border-border">
          <Button variant="ghost" className="w-full text-sm text-muted-foreground hover:text-foreground">
            View all appointments
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};