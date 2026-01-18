import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import TypingText from "@/components/TypingText";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-radial opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial opacity-12"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium glass rounded-full border-glow text-primary">
            AI-Powered Business Automation
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypingText
            text={"Automate Your Business."}
            className="text-foreground"
          />
          <br />
          <TypingText
            text={"Scale Without Limits."}
            className="text-gradient glow-text"
          />
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We build custom AI workflows that capture leads, nurture customers,
          and close deals — all running on autopilot, 24/7.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button variant="heroOutline" size="xl" asChild>
            <a href="contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#how-it-works">
              <Play className="mr-2 h-5 w-5" />
              See How It Works
            </a>
          </Button>
        </motion.div>

        {/* Trust indicators */}
        {/* <motion.div
          className="mt-16 pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by growing businesses in
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/70">
            <span className="font-heading font-medium">Real Estate</span>
            <span className="text-border">•</span>
            <span className="font-heading font-medium">Healthcare</span>
            <span className="text-border">•</span>
            <span className="font-heading font-medium">Lead Generation</span>
            <span className="text-border">•</span>
            <span className="font-heading font-medium">Local Services</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
