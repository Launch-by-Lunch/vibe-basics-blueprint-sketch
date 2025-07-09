import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Target } from "lucide-react";

interface AcceleratorCardProps {
  title: string;
  description: string;
  duration: string;
  participants: string;
  objectives: string[];
  index: number;
}

export const AcceleratorCard = ({ 
  title, 
  description, 
  duration, 
  participants, 
  objectives, 
  index 
}: AcceleratorCardProps) => {
  return (
    <Card className="h-full bg-card border-border hover:shadow-primary transition-all duration-300 animate-fade-in group hover:scale-105">
      <CardHeader className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
            {index}
          </div>
          <Badge variant="outline" className="border-primary text-primary">
            Class {index}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>{participants}</span>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-foreground">Key Objectives</h4>
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {objectives.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};