import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MobileBankingApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">Mobile Banking App</h1>
        <p className="text-muted-foreground text-xl mb-12">
          Intuitive financial management with secure transactions
        </p>

        {/* Design Preview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Design Preview</h2>
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
              alt="Mobile Banking App Design"
              className="w-full h-auto"
            />
          </div>
          <p className="text-muted-foreground mt-6">
            A sleek, modern mobile banking interface that prioritizes security and usability. 
            The design features clear information hierarchy and smooth micro-interactions for an engaging user experience.
          </p>
        </section>

        {/* Workflow Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Workflow</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">1. User Research & Analysis</h3>
              <p className="text-muted-foreground">
                Conducted extensive user interviews and analyzed competitor banking apps. 
                Identified key pain points in existing solutions and opportunities for innovation.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">2. Information Architecture</h3>
              <p className="text-muted-foreground">
                Mapped out user flows for common banking tasks. Created a logical structure 
                that makes complex financial operations simple and intuitive.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">3. UI Design & Prototyping</h3>
              <p className="text-muted-foreground">
                Designed high-fidelity prototypes in Figma with detailed micro-interactions. 
                Focused on creating a trustworthy visual language while maintaining modern aesthetics.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">4. Testing & Iteration</h3>
              <p className="text-muted-foreground">
                Conducted usability testing sessions with diverse user groups. 
                Refined the interface based on feedback to ensure accessibility and ease of use.
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
                Users found traditional banking apps overwhelming with too many features 
                cluttering the main screen, making simple tasks difficult to find.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-primary">Solution</h3>
              <p className="text-muted-foreground">
                Implemented a clean, card-based design with customizable quick actions. 
                Users can prioritize the features they use most, creating a personalized experience.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3 text-destructive">Problem</h3>
              <p className="text-muted-foreground mb-4">
                Security features felt intrusive and slowed down the user experience, 
                causing frustration during routine transactions.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-primary">Solution</h3>
              <p className="text-muted-foreground">
                Designed seamless biometric authentication and smart security that adapts 
                to user behavior patterns, balancing security with convenience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileBankingApp;
