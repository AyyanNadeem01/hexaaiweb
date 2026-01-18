import { motion } from "framer-motion";
import { Shield, DollarSign, Cpu, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Your Data, Your Control",
    description: "Self-hosted infrastructure means your business data never leaves your control. No third-party access, complete ownership.",
    highlight: "100% Data Ownership"
  },
  {
    icon: DollarSign,
    title: "No Per-Task Pricing",
    description: "Unlike Zapier or Make, you're not charged per automation run. Scale to millions of tasks without exploding costs.",
    highlight: "Unlimited Runs"
  },
  {
    icon: Cpu,
    title: "Custom Logic, No Limits",
    description: "Complex branching, custom code, API integrations — we build exactly what your business needs, not what templates allow.",
    highlight: "Limitless Possibilities"
  },
  {
    icon: Sparkles,
    title: "AI-Native Workflows",
    description: "GPT-powered automations that understand context, make decisions, and handle complex tasks that simple rules can't.",
    highlight: "AI-Powered"
  }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
      <div className="container-width relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium glass rounded-full border-glow text-primary">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Enterprise Power. <span className="text-gradient">Startup Agility.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            We don't just connect apps — we architect intelligent systems that transform how your business operates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="glass rounded-xl p-8 hover-glow group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:glow-sm transition-all duration-300">
                  <reason.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {reason.highlight}
                  </span>
                  <h3 className="text-xl font-semibold font-heading mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
