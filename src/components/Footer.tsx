import { Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-border/50 py-12 hard-entrance"
      initial={{ opacity: 0, y: 18, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
    >
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="font-heading font-bold text-2xl text-white">
              Hexa AI
            </a>
            <p className="text-sm text-muted-foreground font-heading">
              AI-Powered Business Automation
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.06 }}
        >
          <p className="text-white text-base font-heading">
            @2022 Hexa AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-white transition-all">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-white transition-all">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
