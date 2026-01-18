import { Link } from "react-router-dom";

const services = [
  {
    title: "AI Automation",
    desc: "Custom AI-first automations to reduce manual work, enrich data, and automate decision flows.",
  },
  { title: "Web Development", desc: "Modern, responsive web apps and marketing sites." },
  { title: "App Development", desc: "Cross-platform mobile apps and backend services." },
  { title: "Digital Marketing", desc: "SEO, paid ads, and growth-focused campaign automation." },
  { title: "Graphic Design", desc: "Branding, creatives, and UI assets for your product." },
  { title: "SEO & Growth", desc: "Technical SEO, content strategy and conversion optimization." },
];

const ServicesSection = ({ preview = false }: { preview?: boolean }) => {
  return (
    <section className={preview ? "mt-12" : "mt-10"}>
      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <p className="text-sm text-muted-foreground mb-6">
        We build automation, web & mobile apps, and growth systems to help
        companies scale.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={i} className="card glass p-6">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            {preview && (
              <div className="mt-4">
                <Link to="/services" className="text-primary hover:underline">
                  Learn more →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
