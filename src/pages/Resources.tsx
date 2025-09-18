import { BookOpen, Video, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Resources() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Wellness Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <BookOpen className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-semibold">Articles</h3>
          <p className="text-muted-foreground">Educational content</p>
        </Card>
        <Card className="p-6">
          <Video className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-semibold">Videos</h3>
          <p className="text-muted-foreground">Guided exercises</p>
        </Card>
        <Card className="p-6">
          <Headphones className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-semibold">Meditations</h3>
          <p className="text-muted-foreground">Relaxation audio</p>
        </Card>
      </div>
    </div>
  );
}