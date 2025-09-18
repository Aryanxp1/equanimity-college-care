import { useState } from "react";
import { 
  TrendingUp, 
  Calendar, 
  Trophy, 
  Target,
  Heart,
  Brain,
  Smile,
  Frown,
  Meh,
  Activity,
  Bell,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import StatCard from "@/components/StatCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";

const moodData = [
  { day: "Mon", mood: 7, anxiety: 4, stress: 5 },
  { day: "Tue", mood: 6, anxiety: 5, stress: 6 },
  { day: "Wed", mood: 8, anxiety: 3, stress: 4 },
  { day: "Thu", mood: 7, anxiety: 4, stress: 5 },
  { day: "Fri", mood: 9, anxiety: 2, stress: 3 },
  { day: "Sat", mood: 8, anxiety: 3, stress: 3 },
  { day: "Sun", mood: 9, anxiety: 2, stress: 2 },
];

const challenges = [
  { id: 1, title: "7-Day Meditation Streak", progress: 5, total: 7, reward: "50 XP" },
  { id: 2, title: "Daily Gratitude Journal", progress: 3, total: 5, reward: "30 XP" },
  { id: 3, title: "Exercise for Mental Health", progress: 2, total: 4, reward: "40 XP" },
  { id: 4, title: "Connect with Friends", progress: 1, total: 3, reward: "25 XP" },
];

const activities = [
  { id: 1, title: "Completed anxiety assessment", time: "2 hours ago", icon: Brain },
  { id: 2, title: "Joined 'Study Stress' support group", time: "Yesterday", icon: Heart },
  { id: 3, title: "Meditation session completed", time: "2 days ago", icon: Activity },
  { id: 4, title: "Scheduled counseling session", time: "3 days ago", icon: Calendar },
];

export default function Dashboard() {
  const [journalEntry, setJournalEntry] = useState("");
  const [selectedMood, setSelectedMood] = useState<string>("");
  const { toast } = useToast();

  const handleJournalSave = () => {
    if (!journalEntry.trim()) {
      toast({
        title: "Please write something",
        description: "Your journal entry cannot be empty.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Journal entry saved!",
      description: "Your thoughts have been recorded privately.",
    });
    setJournalEntry("");
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    toast({
      title: "Mood recorded!",
      description: `You're feeling ${mood} today. Keep tracking for insights!`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Your Wellness Dashboard</h1>
          <p className="text-muted-foreground mt-1">Track your mental health journey</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button variant="gradient">
            <Plus className="mr-2 h-4 w-4" />
            Log Activity
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Heart} label="Wellness Score" value="78%" trend={{ value: 5, isPositive: true }} />
        <StatCard icon={Brain} label="Streak Days" value="12" trend={{ value: 3, isPositive: true }} />
        <StatCard icon={Trophy} label="Challenges" value="4/7" />
        <StatCard icon={Target} label="Goals Met" value="89%" trend={{ value: 8, isPositive: true }} />
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="progress" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-sm">
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="mood">Mood</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Weekly Wellness Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="anxiety" 
                  stroke="hsl(var(--warning))" 
                  fill="hsl(var(--warning))" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="stress" 
                  stroke="hsl(var(--destructive))" 
                  fill="hsl(var(--destructive))" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex gap-6 mt-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Mood</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-warning" />
                <span className="text-sm text-muted-foreground">Anxiety</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm text-muted-foreground">Stress</span>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="mood" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">How are you feeling today?</h3>
            <div className="grid grid-cols-5 gap-4 mb-6">
              {[
                { emoji: "😄", label: "Great", value: "great" },
                { emoji: "🙂", label: "Good", value: "good" },
                { emoji: "😐", label: "Okay", value: "okay" },
                { emoji: "😔", label: "Not Good", value: "not-good" },
                { emoji: "😢", label: "Bad", value: "bad" }
              ].map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => handleMoodSelect(mood.label)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                    selectedMood === mood.label 
                      ? "border-primary bg-primary/10" 
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="text-4xl">{mood.emoji}</span>
                  <span className="text-xs text-muted-foreground">{mood.label}</span>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Journal Entry</h3>
            <Textarea
              placeholder="Write about your thoughts and feelings..."
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              className="min-h-[150px] resize-none"
            />
            <Button 
              variant="gradient" 
              className="mt-4"
              onClick={handleJournalSave}
            >
              Save Entry
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-4">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">{challenge.title}</h4>
                <Badge variant="secondary">{challenge.reward}</Badge>
              </div>
              <Progress 
                value={(challenge.progress / challenge.total) * 100} 
                className="h-2 mb-2"
              />
              <p className="text-sm text-muted-foreground">
                {challenge.progress} of {challenge.total} completed
              </p>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <Card key={activity.id} className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}