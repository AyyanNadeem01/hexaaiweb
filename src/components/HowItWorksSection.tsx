import { motion } from "framer-motion";
import { Search, Wrench, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit",
    description: "We analyze your current workflows, identify bottlenecks, and map opportunities for automation."
  },
  {
    number: "02",
    icon: Wrench,
    title: "Build",
    description: "Our team designs and builds custom automations tailored to your exact business processes."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Automate",
    description: "We deploy, test, and optimize your workflows to ensure flawless execution every time."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    description: "As you grow, we expand your automation systems to handle increased volume effortlessly."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-spacing relative bg-secondary/20">
      <div className="container-width">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium glass rounded-full border-glow text-primary">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            From Chaos to <span className="text-gradient">Clarity</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A simple, proven process that transforms your business operations in weeks, not months.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="glass rounded-xl p-8 text-center hover-glow h-full">
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center glow-sm">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold font-heading text-primary">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
