// PageTransition is applied at the router level; do not wrap pages here.
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-4 text-muted-foreground">
          We offer a full stack of services to build, deploy, and grow
          AI-powered products and digital experiences.
        </p>

        <section className="mt-10">
          <ServicesSection preview={false} />
        </section>
      </main>
    </div>
  );
};

export default Services;
