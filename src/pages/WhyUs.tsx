import WhyUsSection from "@/components/WhyUsSection";

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold">Why choose Hexa AI?</h1>
        <p className="mt-4 text-muted-foreground">
          Why companies pick us for AI automation and web apps.
        </p>
        <div className="mt-8">
          <WhyUsSection />
        </div>
      </main>
    </div>
  );
};

export default WhyUs;
