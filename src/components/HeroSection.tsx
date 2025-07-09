import { Button } from "@/components/ui/button";
import { Sparkles, Code, Coffee } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/5a412c94-0d7c-42f6-bc21-0f27869ae42b.png" 
              alt="The Inner Circle by Launch by Lunch" 
              className="w-48 h-48 mx-auto mb-6 animate-float shadow-glow rounded-2xl"
            />
          </div>
          
          {/* Title */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-orange-200 bg-clip-text text-transparent">
              Vibe Coding Basics
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-6">
              <Sparkles className="w-6 h-6 text-secondary" />
              <span className="text-white/90">Master the Art of Relaxed Development</span>
              <Code className="w-6 h-6 text-secondary" />
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            Join our 4-class accelerator to learn coding with a chill, sustainable approach. 
            Build real projects while maintaining your zen and loving the process.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-3 shadow-glow">
              <Coffee className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};