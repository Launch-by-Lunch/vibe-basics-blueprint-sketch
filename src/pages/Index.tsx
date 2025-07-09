import { HeroSection } from "@/components/HeroSection";
import { AcceleratorCard } from "@/components/AcceleratorCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Zap, Heart, Trophy } from "lucide-react";

const acceleratorClasses = [
  {
    title: "Foundations & Flow State",
    description: "Discover the mindset and environment that makes coding feel effortless. Learn to set up your workspace for maximum comfort and productivity.",
    duration: "2 hours",
    participants: "12-15 people",
    objectives: [
      "Establish a coding mindset that reduces stress",
      "Set up an ergonomic and inspiring workspace",
      "Learn basic programming concepts through relaxed exploration",
      "Practice mindful debugging techniques"
    ]
  },
  {
    title: "Rhythm & Routine Building",
    description: "Build sustainable coding habits that fit your lifestyle. Create routines that make consistent progress feel natural and enjoyable.",
    duration: "2.5 hours",
    participants: "12-15 people", 
    objectives: [
      "Design personalized learning schedules",
      "Master time-blocking for coding sessions",
      "Develop project management skills with low stress",
      "Create accountability systems that motivate"
    ]
  },
  {
    title: "Creative Problem Solving",
    description: "Turn challenges into creative opportunities. Learn to approach coding problems with curiosity rather than anxiety.",
    duration: "3 hours",
    participants: "12-15 people",
    objectives: [
      "Develop creative thinking patterns for coding",
      "Practice collaborative problem-solving techniques",
      "Build resilience through guided challenges",
      "Learn to celebrate small wins and progress"
    ]
  },
  {
    title: "Project Zen & Delivery",
    description: "Bring it all together by completing a real project with confidence. Learn to ship code while maintaining your inner peace.",
    duration: "3.5 hours", 
    participants: "12-15 people",
    objectives: [
      "Complete a full project from concept to deployment",
      "Practice presenting your work with confidence",
      "Build a sustainable long-term learning plan",
      "Connect with the vibe coding community"
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Accelerator Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <Badge variant="outline" className="border-primary text-primary font-semibold">
                4-Class Accelerator
              </Badge>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Your Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each class builds on the previous one, creating a comprehensive learning experience 
              that transforms how you approach coding. From mindset to mastery, we've got you covered.
            </p>
          </div>
          
          {/* Class Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {acceleratorClasses.map((classData, index) => (
              <AcceleratorCard
                key={index}
                title={classData.title}
                description={classData.description}
                duration={classData.duration}
                participants={classData.participants}
                objectives={classData.objectives}
                index={index + 1}
              />
            ))}
          </div>
          
          <Separator className="my-12" />
          
          {/* What Makes This Different */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              What Makes Vibe Coding Different?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Stress-Free Learning</h4>
                <p className="text-muted-foreground">
                  No pressure, no deadlines that make you panic. Learn at a pace that feels right for you.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Community Focus</h4>
                <p className="text-muted-foreground">
                  Join a supportive community where everyone lifts each other up and celebrates progress.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Real Results</h4>
                <p className="text-muted-foreground">
                  Walk away with actual projects, new skills, and the confidence to keep growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
