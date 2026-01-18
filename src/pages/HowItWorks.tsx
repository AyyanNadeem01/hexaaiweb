import HowItWorksSection from "@/components/HowItWorksSection";
import ToolsSection from "@/components/ToolsSection";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6">
        {/* <h1 className="text-3xl font-bold">How it works</h1>
        <p className="mt-4 text-muted-foreground">
          Our structured approach moves you from idea to automation in
          predictable milestones.
        </p> */}
        <div>
          <HowItWorksSection />
        </div>
        <div className="mb-9">
          <ToolsSection />
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
