import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Settings as SettingsIcon, 
  Shield, 
  Database, 
  Bell,
  Users,
  Palette,
  Globe,
  Save,
  RefreshCw
} from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground">Configure system preferences and administrative settings</p>
            </div>

            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="backup">Backup</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
              </TabsList>

              {/* General Settings */}
              <TabsContent value="general">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <SettingsIcon className="w-5 h-5" />
                        System Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="hospital-name">Hospital Name</Label>
                        <Input id="hospital-name" defaultValue="RemedyCare Medical Center" />
                      </div>
                      <div>
                        <Label htmlFor="system-version">System Version</Label>
                        <Input id="system-version" defaultValue="HARS 2.0.1" disabled />
                      </div>
                      <div>
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="utc">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                            <SelectItem value="gmt">GMT (Ghana Mean Time)</SelectItem>
                            <SelectItem value="wat">WAT (West Africa Time)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Palette className="w-5 h-5" />
                        Interface Preferences
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">Enable dark theme for the interface</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Compact View</Label>
                          <p className="text-sm text-muted-foreground">Show more content in less space</p>
                        </div>
                        <Switch />
                      </div>
                      <div>
                        <Label htmlFor="language">Language</Label>
                        <Select defaultValue="en">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="tw">Twi</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Access Control
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Session Timeout</Label>
                          <p className="text-sm text-muted-foreground">Auto-logout inactive users</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div>
                        <Label htmlFor="timeout-duration">Timeout Duration (minutes)</Label>
                        <Input id="timeout-duration" type="number" defaultValue="30" />
                      </div>
                      <div>
                        <Label htmlFor="password-policy">Password Policy</Label>
                        <Select defaultValue="strong">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                            <SelectItem value="strong">Strong (12+ chars, mixed case, numbers)</SelectItem>
                            <SelectItem value="complex">Complex (16+ chars, symbols required)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        Network Security
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>IP Whitelist</Label>
                          <p className="text-sm text-muted-foreground">Restrict access to approved IPs</p>
                        </div>
                        <Switch />
                      </div>
                      <div>
                        <Label htmlFor="allowed-ips">Allowed IP Addresses</Label>
                        <Textarea 
                          id="allowed-ips" 
                          placeholder="192.168.1.0/24&#10;10.0.0.0/8" 
                          className="h-20"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>VPN Required</Label>
                          <p className="text-sm text-muted-foreground">Require VPN for external access</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Notifications */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Notification Settings
                    </CardTitle>
                    <CardDescription>Configure system alerts and notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Email Notifications</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label>System Alerts</Label>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label>Security Events</Label>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label>Backup Reports</Label>
                            <Switch />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label>Performance Alerts</Label>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium">SMS Notifications</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label>Critical Alerts</Label>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label>Emergency Events</Label>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label>System Downtime</Label>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="admin-email">Admin Email</Label>
                          <Input id="admin-email" type="email" defaultValue="admin@remedycare.gh" />
                        </div>
                        <div>
                          <Label htmlFor="admin-phone">Admin Phone</Label>
                          <Input id="admin-phone" type="tel" defaultValue="+233 24 123 4567" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Backup Settings */}
              <TabsContent value="backup">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Backup Configuration
                    </CardTitle>
                    <CardDescription>Configure automated backup settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Automatic Backups</Label>
                            <p className="text-sm text-muted-foreground">Enable scheduled backups</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div>
                          <Label htmlFor="backup-frequency">Backup Frequency</Label>
                          <Select defaultValue="daily">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hourly">Every Hour</SelectItem>
                              <SelectItem value="daily">Daily</SelectItem>
                              <SelectItem value="weekly">Weekly</SelectItem>
                              <SelectItem value="monthly">Monthly</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="backup-time">Backup Time</Label>
                          <Input id="backup-time" type="time" defaultValue="02:00" />
                        </div>
                        <div>
                          <Label htmlFor="retention">Retention Period (days)</Label>
                          <Input id="retention" type="number" defaultValue="30" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="backup-location">Backup Location</Label>
                          <Input id="backup-location" defaultValue="/backup/hars-2.0/" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Cloud Backup</Label>
                            <p className="text-sm text-muted-foreground">Store backups in cloud storage</p>
                          </div>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Encryption</Label>
                            <p className="text-sm text-muted-foreground">Encrypt backup files</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Button variant="outline" className="w-full">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Run Backup Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* User Management */}
              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      User Management
                    </CardTitle>
                    <CardDescription>Configure user roles and permissions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Default Permissions</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label>Doctor - Full Patient Access</Label>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label>Nurse - Limited Patient Access</Label>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label>Admin - System Management</Label>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label>Receptionist - Appointment Management</Label>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium">Account Settings</h4>
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="max-users">Maximum Active Users</Label>
                            <Input id="max-users" type="number" defaultValue="100" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Auto-deactivate Inactive Users</Label>
                              <p className="text-sm text-muted-foreground">After 90 days of inactivity</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Self-registration</Label>
                              <p className="text-sm text-muted-foreground">Allow users to register accounts</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Save Button */}
            <div className="flex justify-end mt-8">
              <Button size="lg">
                <Save className="w-4 h-4 mr-2" />
                Save All Settings
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;