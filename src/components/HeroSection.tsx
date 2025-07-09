import { Button } from "@/components/ui/button";
import { Sparkles, Code, Coffee } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[35vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-4 animate-fade-in">
            <img 
              src="/lovable-uploads/5a412c94-0d7c-42f6-bc21-0f27869ae42b.png" 
              alt="The Inner Circle by Launch by Lunch" 
              className="w-32 h-32 mx-auto mb-4 animate-float shadow-glow rounded-2xl"
            />
          </div>
          
          {/* Title */}
          <div className="mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-white to-orange-200 bg-clip-text text-transparent">
              Vibe Coding Basics
            </h1>
          </div>
          
          {/* Description */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Coffee className="w-5 h-5 text-secondary" />
              <span className="text-white/70">4-Class Accelerator Program</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};