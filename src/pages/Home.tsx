// Navigation is provided at app level
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left: large logo on home page (no border/wrapper) */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-center">
            <img src="/logo.png" alt="Hexa AI" className="home-logo" />
          </div>

          {/* Right: hero */}
          <div className="col-span-12 lg:col-span-9">
            <HeroSection />
          </div>
        </div>

        <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/how-it-works" className="card glass hover:shadow-lg p-6">
            <h3 className="font-bold">How it works</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              See our process from discovery to production-ready automation.
            </p>
          </Link>

          <Link to="/company" className="card glass hover:shadow-lg p-6">
            <h3 className="font-bold">Company Portfolio & Client Review</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Selected case studies and customer feedback.
            </p>
          </Link>

          <Link to="/contact" className="card glass hover:shadow-lg p-6">
            <h3 className="font-bold">Contact Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Start a conversation about automating your workflows.
            </p>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
