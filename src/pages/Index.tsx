import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DashboardStats } from "@/components/DashboardStats";
import { AppointmentsWidget } from "@/components/AppointmentsWidget";
import { RecentPatientsWidget } from "@/components/RecentPatientsWidget";
import heroImage from "@/assets/healthcare-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          {/* Hero Section */}
          <div className="relative mb-8 rounded-xl overflow-hidden shadow-medium">
            <img 
              src={heroImage} 
              alt="Healthcare Technology" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center">
              <div className="p-8 text-primary-foreground">
                <h1 className="text-4xl font-bold mb-4">Welcome to HARS 2.0</h1>
                <p className="text-xl mb-2">Hospital Appointment & Records System</p>
                <p className="text-lg opacity-90">RemedyCare Technologies Ltd - Ghana</p>
                <p className="text-sm mt-4 opacity-80">
                  Modernizing healthcare with reliable, secure, and efficient patient management
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="space-y-8">
            {/* Stats Overview */}
            <DashboardStats />

            {/* Widgets Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AppointmentsWidget />
              <RecentPatientsWidget />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 bg-card rounded-lg shadow-soft border border-border hover:shadow-medium transition-shadow cursor-pointer">
                <h3 className="font-semibold mb-2 text-primary">Emergency Protocols</h3>
                <p className="text-sm text-muted-foreground">Quick access to emergency procedures and contacts</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-soft border border-border hover:shadow-medium transition-shadow cursor-pointer">
                <h3 className="font-semibold mb-2 text-accent">System Backup</h3>
                <p className="text-sm text-muted-foreground">Automated daily backups ensure data security</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-soft border border-border hover:shadow-medium transition-shadow cursor-pointer">
                <h3 className="font-semibold mb-2 text-warning">Training Resources</h3>
                <p className="text-sm text-muted-foreground">Staff training materials and system guides</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
