import { motion } from "framer-motion";
import { Phone, Calendar, Bell, UserCheck, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "AI Receptionist",
    description: "Never miss a call. Our AI answers, qualifies patients, and books appointments 24/7."
  },
  {
    icon: Calendar,
    title: "Smart Appointment Booking",
    description: "Patients book directly into your schedule with automatic confirmation and reminders."
  },
  {
    icon: Bell,
    title: "Missed Call Recovery",
    description: "Automatically text back missed calls within seconds to recapture lost patients."
  },
  {
    icon: UserCheck,
    title: "Patient Intake Automation",
    description: "Digital forms sent before appointments, synced directly to your practice management system."
  },
  {
    icon: Clock,
    title: "Automated Reminders",
    description: "Reduce no-shows with SMS, email, and voice reminders at optimal times."
  },
  {
    icon: MessageCircle,
    title: "Follow-Up Sequences",
    description: "Automated post-visit follow-ups, recall reminders, and review requests."
  }
];

const DentalSection = () => {
  return (
    <section id="dental" className="section-spacing relative bg-secondary/30">
      <div className="container-width relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium glass rounded-full border-glow text-primary">
            For Dental Clinics
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Your <span className="text-gradient">AI Receptionist</span> Never Sleeps
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Transform patient communication with AI that handles calls, books appointments, 
            and follows up — so your team can focus on patient care.
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
            Upgrade Your Patient Experience
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DentalSection;
