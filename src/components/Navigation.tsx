import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "AI Agents", href: "/company" }, // What you offer (products)
  { name: "How It Works", href: "/how-it-works" }, // Process clarity
  { name: "Services", href: "/services" }, // Supporting/custom work
  { name: "Why Us", href: "/why-us" }, // Differentiation & trust
  { name: "About", href: "/about" }, // Brand & team
  { name: "FAQ", href: "/faq" }, // Objection handling
  { name: "Contact", href: "/contact" }, // CTA at the end
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong py-4" : "bg-transparent mt-8"
      }`}
      role="navigation"
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0.9, 0.2, 1] }}
    >
      <div className="container-width flex items-center justify-between">
        {/* Brand (text-only in header) */}
        <Link to="/" className="font-heading font-bold text-2xl text-gray-500">
          Hexa
          <span className="font-heading font-bold text-2xl text-sky-300">
            AI
          </span>
        </Link>

        {/* Desktop Navigation (links stretch to fill available space) */}
        <motion.div
          className="hidden lg:flex items-center gap-0 flex-1 ml-14"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              className="flex-1 text-center"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * idx, duration: 0.35 }}
            >
              <Link
                to={link.href}
                className="block text-lg font-medium tracking-wide text-white/90 hover:text-white transition-all duration-220 transform hover:-translate-y-1 hover:scale-105 nav-link py-3"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile-only logo under the header */}
      <div className="lg:hidden w-full flex justify-center pt-4 pb-2">
        <Link to="/" className="inline-block">
          <img
            src="/logo.png"
            alt="Hexa AI"
            className="w-20 h-20 object-contain"
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden glass-strong mt-3 mx-4 rounded-xl p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {/* contact is part of navLinks now */}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
