// PageTransition is applied at the router level; do not wrap pages here.
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <section className="mt-10">
          <ServicesSection preview={false} />
        </section>
      </main>
    </div>
  );
};

export default Services;
