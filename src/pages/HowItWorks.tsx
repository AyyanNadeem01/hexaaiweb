import HowItWorksSection from "@/components/HowItWorksSection";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold">How it works</h1>
        <p className="mt-4 text-muted-foreground">
          Our structured approach moves you from idea to automation in
          predictable milestones.
        </p>
        <div className="mt-8">
          <HowItWorksSection />
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
