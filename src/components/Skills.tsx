import { Card } from "@/components/ui/card";
import { Figma, Palette, Code, Smartphone, Sparkles, Zap } from "lucide-react";

const skills = [
  {
    icon: Figma,
    title: "Figma",
    description: "Advanced prototyping and design systems",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design principles and aesthetics",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, and modern frameworks",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first, adaptive layouts",
  },
  {
    icon: Sparkles,
    title: "Interaction Design",
    description: "Animations and micro-interactions",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized, fast-loading experiences",
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg">
            Combining design thinking with technical execution to build exceptional digital products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(189_94%_43%/0.2)] group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-accent group-hover:bg-primary/20 transition-all duration-300">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
