import { User, Mail, School } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">My Profile</h1>
      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
            <User className="h-10 w-10 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Student User</h2>
            <p className="text-muted-foreground">student@university.edu</p>
          </div>
        </div>
        <Button variant="outline">Edit Profile</Button>
      </Card>
    </div>
  );
}