import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import verdantSanctuaryImage from "@/assets/verdant-sanctuary.png";

const VerdantSanctuary = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">The Verdant Sanctuary</h1>
        <p className="text-muted-foreground text-xl mb-12">
          Experience luxury wellness in nature's embrace with elegant design and serene atmosphere
        </p>

        {/* Design Preview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Design Preview</h2>
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src={verdantSanctuaryImage}
              alt="The Verdant Sanctuary Design"
              className="w-full h-auto"
            />
          </div>
          <p className="text-muted-foreground mt-6">
            A luxurious wellness retreat design that blends natural serenity with modern elegance. 
            The website creates an immersive experience that transports visitors to a peaceful sanctuary.
          </p>
        </section>

        {/* Workflow Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Workflow</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">1. Brand Discovery</h3>
              <p className="text-muted-foreground">
                Immersed in the wellness retreat's philosophy and values. Conducted stakeholder interviews 
                to understand the luxury positioning and target demographic of high-end wellness seekers.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">2. Visual Identity</h3>
              <p className="text-muted-foreground">
                Developed a sophisticated visual language combining natural textures with refined typography. 
                Created a calming color palette inspired by forest greens and earthy tones.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">3. User Experience Design</h3>
              <p className="text-muted-foreground">
                Crafted an intuitive booking journey with emphasis on visual storytelling. 
                Designed immersive galleries showcasing the retreat's facilities and serene surroundings.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">4. Implementation & Refinement</h3>
              <p className="text-muted-foreground">
                Built a high-performance website with smooth parallax effects and video backgrounds. 
                Integrated booking system and optimized for luxury user experience across all devices.
              </p>
            </div>
          </div>
        </section>

        {/* Problems and Solution Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Problems & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3 text-destructive">Problem</h3>
              <p className="text-muted-foreground mb-4">
                The retreat's previous website didn't convey the luxury and tranquility of the actual experience, 
                resulting in lower-than-expected bookings.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-primary">Solution</h3>
              <p className="text-muted-foreground">
                Designed an immersive digital experience with high-quality imagery, serene animations, 
                and elegant typography that accurately represents the luxury wellness experience.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3 text-destructive">Problem</h3>
              <p className="text-muted-foreground mb-4">
                Complex booking process with multiple treatment options was confusing potential guests 
                and causing booking abandonment.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-primary">Solution</h3>
              <p className="text-muted-foreground">
                Streamlined the booking flow with a guided experience, clear package presentations, 
                and intuitive date selection that increased conversion rates by 45%.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VerdantSanctuary;
