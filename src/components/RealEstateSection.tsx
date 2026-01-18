import { motion } from "framer-motion";
import { Building2, Youtube, Users, MessageSquare, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Lead Capture & CRM Sync",
    description: "Automatically capture leads from any source and sync directly to your CRM with complete context."
  },
  {
    icon: Youtube,
    title: "YouTube Content Automation",
    description: "Auto-publish listings, extract leads from comments, and turn viewers into booked appointments."
  },
  {
    icon: MessageSquare,
    title: "Smart Follow-Up Workflows",
    description: "Instant SMS, email, and call sequences that respond in seconds — not hours."
  },
  {
    icon: Building2,
    title: "Listing Management",
    description: "Sync listings across platforms, update prices, and notify buyers automatically."
  },
  {
    icon: Zap,
    title: "Speed-to-Lead Response",
    description: "Respond to inquiries within 60 seconds with AI-powered qualification and booking."
  },
  {
    icon: TrendingUp,
    title: "Pipeline Automation",
    description: "Move leads through your pipeline automatically based on behavior and engagement."
  }
];

const RealEstateSection = () => {
  return (
    <section id="real-estate" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container-width relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium glass rounded-full border-glow text-primary">
            For Real Estate Professionals
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Close More Deals on <span className="text-gradient">Autopilot</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            From lead capture to closing, automate every step of your real estate workflow 
            and never miss an opportunity again.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass rounded-xl p-6 hover-glow group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:glow-sm transition-all duration-300">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="hero" size="lg">
            Automate Your Real Estate Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RealEstateSection;
