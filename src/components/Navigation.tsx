import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Brain, 
  LayoutDashboard, 
  Users, 
  MessageCircle, 
  AlertCircle, 
  BookOpen, 
  User, 
  Settings,
  Menu,
  X,
  HeartHandshake,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/assessment", label: "Assessment", icon: Brain },
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/community", label: "Community", icon: Users },
  { path: "/counseling", label: "Counseling", icon: MessageCircle },
  { path: "/crisis", label: "Crisis Support", icon: AlertCircle },
  { path: "/resources", label: "Resources", icon: BookOpen },
  { path: "/profile", label: "Profile", icon: User },
  { path: "/settings", label: "Settings", icon: Settings },
];

export default function Navigation({ isOpen, onToggle }: NavigationProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-lg border-b border-border/50 z-50 md:hidden">
        <div className="flex items-center justify-between h-full px-4">
          <Link to="/" className="flex items-center gap-2">
            <HeartHandshake className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Sahay
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full bg-white/90 backdrop-blur-xl border-r border-border/50 z-40 transition-all duration-300 shadow-large",
          isOpen ? "w-64" : "w-20",
          "max-md:top-16",
          !isOpen && "max-md:-translate-x-full"
        )}
      >
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between p-4 border-b border-border/50">
          <Link 
            to="/" 
            className={cn(
              "flex items-center gap-3 transition-all",
              !isOpen && "justify-center"
            )}
          >
            <HeartHandshake className="h-8 w-8 text-primary flex-shrink-0" />
            {isOpen && (
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Sahay
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="hidden md:flex"
          >
            {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                  active ? 
                    "bg-gradient-primary text-white shadow-medium" : 
                    "hover:bg-accent/20 text-muted-foreground hover:text-foreground",
                  !isOpen && "justify-center"
                )}
              >
                <Icon className={cn(
                  "flex-shrink-0",
                  active ? "h-5 w-5" : "h-5 w-5"
                )} />
                {isOpen && (
                  <span className="font-medium">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Emergency Button */}
        <div className="absolute bottom-4 left-4 right-4">
          <Link to="/crisis">
            <Button 
              variant="crisis" 
              className={cn(
                "w-full",
                !isOpen && "px-2"
              )}
            >
              <AlertCircle className="h-5 w-5" />
              {isOpen && <span>Emergency Help</span>}
            </Button>
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
}