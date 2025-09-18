import { Phone, MessageCircle, Heart, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Crisis() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="p-8 bg-gradient-to-r from-destructive to-warning text-white">
        <AlertCircle className="h-12 w-12 mb-4" />
        <h1 className="text-3xl font-bold mb-4">Emergency Support</h1>
        <p className="text-lg mb-6">You're not alone. Help is available 24/7.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button size="lg" variant="glass" className="text-white">
            <Phone className="mr-2" /> Call Crisis Hotline
          </Button>
          <Button size="lg" variant="glass" className="text-white">
            <MessageCircle className="mr-2" /> Start Crisis Chat
          </Button>
        </div>
      </Card>
      
      <div className="grid gap-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-3">Emergency Contacts</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>• National Suicide Prevention: 988</p>
            <p>• Crisis Text Line: Text HOME to 741741</p>
            <p>• Campus Emergency: 911</p>
          </div>
        </Card>
      </div>
    </div>
  );
}