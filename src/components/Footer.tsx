import { Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-border/50 py-12 hard-entrance"
      initial={{ opacity: 0, y: 18, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
    >
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-2">
            <Link
              to="/"
              className="font-heading font-bold text-2xl text-gray-500"
            >
              Hexa{" "}
              <span className="font-heading font-bold text-2xl text-sky-300">
                AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-heading">
              AI-Powered Business Automation
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Quick links</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  <Link
                    to="/company"
                    className="hover:text-white transition-colors"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Resources</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@hexa.ai"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground text-center md:text-right">
              Need help? <br />
              <a href="mailto:contact@hexa.ai" className="text-white underline">
                contact@hexa.ai
              </a>
            </p>
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
          <div className="flex items-center gap-6 text-muted-foreground">
            <span>Built with care.</span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
