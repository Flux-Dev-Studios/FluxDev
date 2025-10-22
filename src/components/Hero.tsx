import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Large 3D Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1
          className="text-[20vw] font-bold text-transparent opacity-5"
          style={{
            WebkitTextStroke: "2px hsl(189 94% 43% / 0.2)",
          }}
        >
          KAISEN
        </h1>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <Badge variant="outline" className="mb-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          Available for Freelance
        </Badge>

        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Web Designer & Developer
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Crafting beautiful digital experiences with <span className="text-primary font-semibold">UI/UX design</span> and modern web development
        </p>

        <div className="flex gap-4 justify-center">
          <Button variant="hero" size="lg" onClick={scrollToWork}>
            View My Work
            <ChevronDown className="ml-2" />
          </Button>
          <Button variant="outline" size="lg">
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
