import { motion } from "framer-motion";
import { Workflow, Brain, Database, Plug, Cloud, Lock } from "lucide-react";

const techStack = [
  {
    icon: Workflow,
    name: "n8n",
    description: "Self-hosted workflow automation engine"
  },
  {
    icon: Brain,
    name: "OpenAI / AI",
    description: "GPT-powered intelligent automation"
  },
  {
    icon: Database,
    name: "CRMs",
    description: "HubSpot, Salesforce, GoHighLevel & more"
  },
  {
    icon: Plug,
    name: "APIs & Webhooks",
    description: "Connect any system, any platform"
  },
  {
    icon: Cloud,
    name: "Cloud Infrastructure",
    description: "AWS, GCP, or self-hosted options"
  },
  {
    icon: Lock,
    name: "Enterprise Security",
    description: "SOC2-ready, encrypted, compliant"
  }
];

const TechStackSection = () => {
  return (
    <section id="tech" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-10" />
      
      <div className="container-width relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium glass rounded-full border-glow text-primary">
            Built on Proven Technology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            The <span className="text-gradient">Stack</span> Behind the Magic
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            We use battle-tested, enterprise-grade technology that scales with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="glass rounded-xl p-6 text-center hover-glow group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3 group-hover:bg-gradient-primary transition-all duration-300">
                <tech.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold font-heading mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
