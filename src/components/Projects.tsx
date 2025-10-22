import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import rollingPinImage from "@/assets/rolling-pin-bakery.png";
import verdantSanctuaryImage from "@/assets/verdant-sanctuary.png";

const projects = [
  {
    title: "The Rolling Pin Bakery",
    description: "Experience the warmth of our artisan bakery, where every loaf tells a story and every pastry is crafted with love.",
    tags: ["Web Design", "Branding", "UI/UX", "Responsive Design"],
    image: rollingPinImage,
    link: "/projects/rolling-pin-bakery",
  },
  {
    title: "The Verdant Sanctuary",
    description: "Experience luxury wellness in nature's embrace with elegant design and serene atmosphere",
    tags: ["Web Design", "Luxury Brand", "UI/UX", "Wellness"],
    image: verdantSanctuaryImage,
    link: "/projects/verdant-sanctuary",
  },
  {
    title: "Mobile Banking App",
    description: "Intuitive financial management with secure transactions",
    tags: ["Mobile UI", "Figma Design", "User Flows", "Micro-interactions"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    link: "/projects/mobile-banking-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work showcasing design and development capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(189_94%_43%/0.2)] group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link to={project.link}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    View Case Study
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
