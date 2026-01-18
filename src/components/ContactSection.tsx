import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, User, Building } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder: In production, this would send to your backend
    // For now, simulating a form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    // Placeholder email: contact@hexa.ai

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial opacity-40"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-width relative">
        <motion.div
          className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto glow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium glass rounded-full border-glow text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Ready to Put Your Business on{" "}
              <span className="text-gradient glow-text">Autopilot?</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's map out exactly how automation can transform your
              operations. No pitch, no pressure — just a roadmap for your
              business.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Send className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">
                Message Sent!
              </h3>
              <p className="text-muted-foreground">
                We'll get back to you within 24 hours.
              </p>
              <Button
                variant="heroOutline"
                className="mt-6"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  Company Name
                </label>
                <Input
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  How can we help you?
                </label>
                <Textarea
                  placeholder="Tell us about your business and what processes you'd like to automate..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                ✓ 100% free consultation &nbsp;&nbsp; ✓ No obligation
                &nbsp;&nbsp; ✓ Response within 24 hours
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
