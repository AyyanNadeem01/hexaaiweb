import { motion } from "framer-motion";
import { FormInput, Database, Mail, MessageSquare, Smartphone, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: FormInput,
    title: "Form & Landing Page Automation",
    description: "Connect any form to your CRM instantly. No more manual data entry or lost leads."
  },
  {
    icon: Database,
    title: "CRM Pipeline Management",
    description: "Leads flow automatically through your pipeline based on engagement and actions."
  },
  {
    icon: Mail,
    title: "Email Sequences",
    description: "Personalized drip campaigns that nurture leads from cold to ready-to-buy."
  },
  {
    icon: Smartphone,
    title: "WhatsApp & SMS Automation",
    description: "Reach leads where they're most responsive with automated messaging sequences."
  },
  {
    icon: GitBranch,
    title: "Multi-Channel Workflows",
    description: "Orchestrate email, SMS, calls, and ads in one unified automation system."
  },
  {
    icon: MessageSquare,
    title: "AI Lead Qualification",
    description: "Score and qualify leads automatically so your team focuses on hot prospects only."
  }
];

const LeadGenSection = () => {
  return (
    <section id="leadgen" className="section-spacing relative">
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
            For Lead Gen Agencies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Turn Leads Into Revenue <span className="text-gradient">Automatically</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Build unstoppable lead machines that capture, nurture, and convert — 
            across every channel, around the clock.
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
            Supercharge Your Lead Generation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadGenSection;
