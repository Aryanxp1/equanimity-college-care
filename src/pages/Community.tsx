import { Users, MessageSquare, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Community() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Community Support</h1>
      <div className="grid gap-4">
        <Card className="p-6">
          <Users className="h-6 w-6 text-primary mb-3" />
          <h3 className="font-semibold mb-2">Study Stress Support</h3>
          <p className="text-muted-foreground mb-4">Connect with peers facing academic pressure</p>
          <Button variant="outline">Join Group</Button>
        </Card>
      </div>
    </div>
  );
}