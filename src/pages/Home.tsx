import { useNavigate } from "react-router-dom";
import { 
  Brain, 
  Heart, 
  Users, 
  MessageSquare, 
  BookOpen, 
  TrendingUp,
  Shield,
  Sparkles,
  Clock,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";

export default function Home() {
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: Brain,
      title: "Take Assessment",
      description: "Quick mental health check-up",
      path: "/assessment",
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Chat with AI",
      description: "Get instant support",
      path: "/counseling",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with peers",
      path: "/community",
      color: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      icon: BookOpen,
      title: "Explore Resources",
      description: "Self-help materials",
      path: "/resources",
      color: "bg-gradient-to-br from-orange-500 to-amber-500"
    }
  ];

  const stats = [
    { icon: Heart, label: "Active Users", value: "2,847", trend: { value: 12, isPositive: true } },
    { icon: TrendingUp, label: "Wellness Score", value: "78%", trend: { value: 5, isPositive: true } },
    { icon: Clock, label: "Sessions Today", value: "124" },
    { icon: Award, label: "Challenges Completed", value: "892" }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-aurora p-8 md:p-12 shadow-large">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Sahay
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Your trusted companion for mental wellness. Take a moment to care for yourself today.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              variant="glass"
              onClick={() => navigate("/assessment")}
              className="text-white border-white/30"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Assessment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/crisis")}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              <Shield className="mr-2 h-5 w-5" />
              Crisis Support
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className={cn(
                "relative overflow-hidden cursor-pointer transition-all duration-300",
                "hover:scale-[1.02] hover:shadow-large",
                "border-0"
              )}
              onClick={() => navigate(action.path)}
            >
              <div className={cn("absolute inset-0", action.color)} />
              <div className="relative z-10 p-6 text-white">
                <action.icon className="h-8 w-8 mb-3" />
                <h3 className="font-semibold text-lg mb-1">{action.title}</h3>
                <p className="text-sm text-white/80">{action.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Latest Updates</h2>
        <div className="space-y-4">
          <FeatureCard
            icon={Sparkles}
            title="New Meditation Series Available"
            description="Explore our guided meditation sessions designed specifically for exam stress"
            variant="glass"
          />
          <FeatureCard
            icon={Users}
            title="Community Milestone: 1000+ Support Groups"
            description="Join themed support groups and connect with peers facing similar challenges"
            variant="glass"
          />
          <FeatureCard
            icon={Award}
            title="Wellness Challenge: 30 Days of Mindfulness"
            description="Participate in daily mindfulness activities and track your progress"
            variant="glass"
          />
        </div>
      </section>
    </div>
  );
}

// Helper function import
import { cn } from "@/lib/utils";