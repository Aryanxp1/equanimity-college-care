import { Globe, Bell, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Label className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Push Notifications
          </Label>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <Label className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Privacy Mode
          </Label>
          <Switch />
        </div>
      </Card>
    </div>
  );
}