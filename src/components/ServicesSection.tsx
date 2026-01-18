import { Link } from "react-router-dom";
import {
  Zap,
  Code,
  Smartphone,
  Megaphone,
  Palette,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "AI Automation",
    desc: "We design AI-powered automations that eliminate repetitive tasks, enrich data pipelines, integrate tools, and enable smart decision-making using workflows, agents, and custom logic.",
    icon: Zap,
  },
  {
    title: "Web Development",
    desc: "High-performance, SEO-optimized web applications and landing pages built with modern stacks, scalable architecture, and pixel-perfect UI for business growth.",
    icon: Code,
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile apps with secure backends, real-time features, API integrations, and smooth user experiences across Android and iOS.",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven marketing campaigns including SEO, paid ads, funnels, and automated lead nurturing systems to maximize reach and ROI.",
    icon: Megaphone,
  },
  {
    title: "Graphic Design",
    desc: "Creative branding solutions including logos, social creatives, marketing visuals, and modern UI assets that align with your product identity.",
    icon: Palette,
  },
  {
    title: "SEO & Growth",
    desc: "Technical SEO audits, content strategy, conversion optimization, and analytics-driven growth systems to scale organic traffic.",
    icon: TrendingUp,
  },
];

const ServicesSection = ({ preview = false }: { preview?: boolean }) => {
  return (
    <section className={preview ? "mt-12" : "mt-10"}>
      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
        We build AI automations, web & mobile products, and scalable growth
        systems that help companies move faster and smarter.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={i}
            className="
              group card glass p-6
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:scale-[1.02]
              hover:shadow-xl hover:shadow-primary/20
              hover:border-primary/30
            "
          >
            <div className="flex items-center justify-center mb-4">
              <s.icon
                className="
                  w-12 h-12 text-primary
                  transition-transform duration-300
                  group-hover:scale-110 group-hover:rotate-3
                "
              />
            </div>

            <h3
              className="
                font-semibold text-center
                transition-colors duration-300
                group-hover:text-primary
              "
            >
              {s.title}
            </h3>

            <p
              className="
                mt-3 text-sm text-muted-foreground text-center
                transition-colors duration-300
                group-hover:text-foreground
              "
            >
              {s.desc}
            </p>

            {preview && (
              <div className="mt-4 text-center">
                <Link
                  to="/services"
                  className="
                    text-primary font-medium
                    transition-all duration-300
                    hover:underline hover:tracking-wide
                  "
                >
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
