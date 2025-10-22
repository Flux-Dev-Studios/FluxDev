import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-muted-foreground text-lg mb-8">
          I'm always interested in hearing about new projects and opportunities. Let's create something amazing together.
        </p>
        <Button variant="hero" size="lg">
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default Contact;
