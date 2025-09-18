import { Bot, Calendar, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Counseling() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Counseling Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <Bot className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Support Bot</h3>
          <p className="text-muted-foreground mb-4">Get instant support 24/7</p>
          <Button variant="gradient" className="w-full">Start Chat</Button>
        </Card>
        
        <Card className="p-6">
          <Calendar className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
          <p className="text-muted-foreground mb-4">Schedule with a counselor</p>
          <Button variant="outline" className="w-full">View Available Slots</Button>
        </Card>
      </div>
    </div>
  );
}