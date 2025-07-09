import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AcceleratorCard } from "@/components/AcceleratorCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Zap, Heart, Trophy } from "lucide-react";

const acceleratorClasses = [
  {
    title: "Early vibes",
    description: "Introduction to vibe coding and understanding its place in the AI landscape.",
    duration: "1 hour",
    participants: "12-15 people",
    objectives: [
      "What is vibe coding?",
      "Where does vibe coding sit in the landscape of AI?",
      "Reviewing terms: No code Glossary",
      "Build side by side apps"
    ]
  },
  {
    title: "Let your friends try it",
    description: "Learn the fundamentals of front-end vs back-end development and create shareable applications.",
    duration: "1 hour",
    participants: "12-15 people", 
    objectives: [
      "Front end vs. back end - what does it mean?",
      "Tips for creating a specific look and feel",
      "Adding local memory to your app",
      "Creating Logins and user levels",
      "Publishing externally"
    ]
  },
  {
    title: "Adding scaleable features for public use",
    description: "Scale your applications with databases, media, and automated communications for public deployment.",
    duration: "1 hour",
    participants: "12-15 people",
    objectives: [
      "Connecting an external database (Supabase), and why it matters",
      "Adding pictures and videos",
      "Sending automated emails without connecting your CRM",
      "How to find and harvest your data in Supabase"
    ]
  },
  {
    title: "Integrations and API keys for Payments and more",
    description: "Master integrations, code management, and connecting to external services for advanced functionality.",
    duration: "1 hour",
    participants: "12-15 people",
    objectives: [
      "Where's my code and how do I save it externally?",
      "What is an API key, and why do I need it?",
      "What are the most common integrations available in Lovable",
      "Connecting to Stripe, Supabase, Resend, Github"
    ]
  }
];

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };
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
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each class builds on the previous one, creating a comprehensive learning experience 
              that transforms how you approach coding.
            </p>
          </div>
          
          {/* Class Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {acceleratorClasses.map((classData, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-500 cursor-pointer ${
                  selectedCard === index 
                    ? 'scale-150 z-30 relative shadow-2xl' 
                    : selectedCard !== null 
                      ? 'scale-90 opacity-50' 
                      : 'hover:scale-105'
                }`}
                onClick={() => handleCardClick(index)}
              >
                <AcceleratorCard
                  title={classData.title}
                  description={classData.description}
                  duration={classData.duration}
                  participants={classData.participants}
                  objectives={classData.objectives}
                  index={index + 1}
                  isSelected={selectedCard === index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
