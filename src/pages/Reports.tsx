import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Download,
  Calendar,
  TrendingUp,
  Users,
  Activity,
  FileText,
  Heart,
  Clock,
  DollarSign
} from "lucide-react";

const reportCategories = [
  {
    title: "Patient Reports",
    description: "Patient statistics and demographics",
    icon: Users,
    reports: [
      "Daily Patient Census",
      "Patient Demographics",
      "Admission/Discharge Trends",
      "Patient Satisfaction Survey"
    ]
  },
  {
    title: "Clinical Reports",
    description: "Medical and clinical data analysis",
    icon: Heart,
    reports: [
      "Disease Pattern Analysis",
      "Treatment Outcomes",
      "Medication Usage",
      "Lab Results Summary"
    ]
  },
  {
    title: "Operational Reports",
    description: "Hospital operations and efficiency",
    icon: Activity,
    reports: [
      "Staff Productivity",
      "Equipment Utilization",
      "Appointment Statistics",
      "Emergency Response Times"
    ]
  },
  {
    title: "Financial Reports",
    description: "Revenue and financial analysis",
    icon: DollarSign,
    reports: [
      "Revenue Analysis",
      "Department Costs",
      "Insurance Claims",
      "Payment Collections"
    ]
  }
];

const recentReports = [
  {
    id: 1,
    name: "Monthly Patient Census",
    type: "Patient Report",
    date: "2024-01-15",
    status: "completed",
    downloads: 23
  },
  {
    id: 2,
    name: "Emergency Department Performance",
    type: "Operational Report",
    date: "2024-01-14",
    status: "completed",
    downloads: 15
  },
  {
    id: 3,
    name: "Revenue Summary Q1",
    type: "Financial Report",
    date: "2024-01-13",
    status: "in-progress",
    downloads: 8
  },
  {
    id: 4,
    name: "Disease Pattern Analysis",
    type: "Clinical Report",
    date: "2024-01-12",
    status: "completed",
    downloads: 31
  }
];

export default function Reports() {
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
                <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
                <p className="text-muted-foreground">Generate and view hospital reports and analytics</p>
              </div>
              <Button className="bg-gradient-primary">
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>

            {/* Report Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reportCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="shadow-soft hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="text-lg">{category.title}</span>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {category.reports.map((report, reportIndex) => (
                        <div key={reportIndex} className="flex items-center justify-between p-2 rounded hover:bg-muted/50 transition-colors">
                          <span className="text-sm">{report}</span>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <TrendingUp className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Reports */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Recent Reports</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentReports.map((report) => (
                  <div 
                    key={report.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      
                      <div>
                        <h4 className="font-medium">{report.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{report.type}</span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{report.date}</span>
                          </div>
                          <span>{report.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        report.status === 'completed' 
                          ? 'bg-success text-success-foreground' 
                          : 'bg-warning text-warning-foreground'
                      }`}>
                        {report.status}
                      </span>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Reports</p>
                      <p className="text-2xl font-bold">247</p>
                    </div>
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">This Month</p>
                      <p className="text-2xl font-bold">42</p>
                    </div>
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">In Progress</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <Clock className="h-8 w-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Downloads</p>
                      <p className="text-2xl font-bold">1,523</p>
                    </div>
                    <Download className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}