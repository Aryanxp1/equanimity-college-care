import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass';
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  onClick,
  className,
  variant = 'default'
}: FeatureCardProps) {
  const cardStyles = {
    default: "bg-card hover:shadow-large",
    gradient: "bg-gradient-calm hover:shadow-glow",
    glass: "glass hover:bg-white/20"
  };

  return (
    <Card 
      className={cn(
        "p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] border-border/50",
        cardStyles[variant],
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}