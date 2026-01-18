// PageTransition is applied at the router level; do not wrap pages here.
import { Link } from "react-router-dom";

const services = [
  {
    title: "AI Automation",
    desc: "Custom AI-first automations to reduce manual work, enrich data, and automate decision flows.",
  },
  {
    title: "Web Development",
    desc: "Modern, responsive web apps and marketing sites.",
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile apps and backend services.",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, paid ads, and growth-focused campaign automation.",
  },
  {
    title: "Graphic Design",
    desc: "Branding, creatives, and UI assets for your product.",
  },
  {
    title: "SEO & Growth",
    desc: "Technical SEO, content strategy and conversion optimization.",
  },
];

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="card glass p-6">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
