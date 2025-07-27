import { 
  Calendar, 
  Users, 
  FileText, 
  BarChart3, 
  Settings, 
  Heart,
  UserPlus,
  Clock,
  Shield,
  Home,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, current: true },
  { name: "Appointments", href: "/appointments", icon: Calendar, current: false, badge: "5" },
  { name: "Patients", href: "/patients", icon: Users, current: false },
  { name: "Medical Records", href: "/records", icon: FileText, current: false },
  { name: "Staff", href: "/staff", icon: UserPlus, current: false },
  { name: "Reports", href: "/reports", icon: BarChart3, current: false },
  { name: "Emergency", href: "/emergency", icon: Heart, current: false, urgent: true },
];

const secondaryNavigation = [
  { name: "System Health", href: "/system-health", icon: Shield, current: false },
  { name: "Audit Logs", href: "/audit", icon: Clock, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
];

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-card border-r border-border h-full flex flex-col transition-all duration-300",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Collapse Toggle */}
      <div className="flex justify-end p-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 p-0"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 pb-4 space-y-1">
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors relative",
                  item.current
                    ? "bg-primary text-primary-foreground"
                    : item.urgent
                    ? "text-destructive hover:bg-destructive/10"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className={cn("flex-shrink-0 w-5 h-5", collapsed ? "" : "mr-3")} />
                {!collapsed && (
                  <>
                    <span className="flex-1">{item.name}</span>
                    {item.badge && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-4" />

        {/* Secondary Navigation */}
        <div className="space-y-1">
          {!collapsed && (
            <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              System
            </h3>
          )}
          {secondaryNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  item.current
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className={cn("flex-shrink-0 w-5 h-5", collapsed ? "" : "mr-3")} />
                {!collapsed && <span>{item.name}</span>}
              </a>
            );
          })}
        </div>
      </nav>

      {/* System Status */}
      {!collapsed && (
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">System Online</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Last backup: 2 hours ago</p>
        </div>
      )}
    </div>
  );
};