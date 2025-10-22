import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import rollingPinImage from "@/assets/rolling-pin-bakery.png";

const RollingPinBakery = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">The Rolling Pin Bakery</h1>
        <p className="text-muted-foreground text-xl mb-12">
          Experience the warmth of our artisan bakery, where every loaf tells a story and every pastry is crafted with love.
        </p>

        {/* Design Preview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Design Preview</h2>
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src={rollingPinImage}
              alt="The Rolling Pin Bakery Design"
              className="w-full h-auto"
            />
          </div>
          <p className="text-muted-foreground mt-6">
            A warm, inviting design that captures the essence of artisan baking. The website features a 
            rustic aesthetic with modern touches, showcasing fresh bread and pastries in an appetizing way.
          </p>
        </section>

        {/* Workflow Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Workflow</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">1. Discovery & Research</h3>
              <p className="text-muted-foreground">
                Conducted market research on local bakeries and analyzed competitor websites. 
                Interviewed the bakery owners to understand their brand story and target audience.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">2. Design Concept</h3>
              <p className="text-muted-foreground">
                Created mood boards emphasizing warmth, craftsmanship, and authenticity. 
                Developed a color palette featuring warm browns and creams to evoke freshly baked goods.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">3. UI/UX Design</h3>
              <p className="text-muted-foreground">
                Designed wireframes and high-fidelity mockups focusing on an intuitive browsing experience. 
                Prioritized product photography and easy navigation to the menu and ordering system.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">4. Development & Launch</h3>
              <p className="text-muted-foreground">
                Built a responsive website with smooth animations and optimized loading times. 
                Integrated online ordering and implemented SEO best practices for local search visibility.
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
                The bakery had no online presence and was losing customers to competitors with modern websites.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-primary">Solution</h3>
              <p className="text-muted-foreground">
                Created a visually appealing, mobile-friendly website that showcases their artisan products 
                and tells their brand story, complete with online ordering capabilities.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3 text-destructive">Problem</h3>
              <p className="text-muted-foreground mb-4">
                Customers found it difficult to see what products were available each day without calling.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-primary">Solution</h3>
              <p className="text-muted-foreground">
                Implemented a dynamic menu system that the bakery can update daily, showing available 
                items and allowing customers to pre-order their favorites.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RollingPinBakery;
