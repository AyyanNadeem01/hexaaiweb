import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import WhyUs from "./pages/WhyUs";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Services from "./pages/Services";
import PageTransition from "@/components/PageTransition";
import NotFound from "./pages/NotFound";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AppBackground from "@/components/AppBackground";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();

  // curtain visibility for full-viewport cinematic transition
  const [curtainVisible, setCurtainVisible] = useState(true);

  useEffect(() => {
    // show curtain on every navigation (including first load)
    setCurtainVisible(true);
    const t = window.setTimeout(() => setCurtainVisible(false), 850);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      {/* app-level background visuals (hero-style) */}
      <AppBackground />
      <Navigation />
      <AnimatePresence mode="wait" initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/how-it-works"
            element={
              <PageTransition>
                <HowItWorks />
              </PageTransition>
            }
          />
          <Route
            path="/company"
            element={
              <PageTransition>
                <Company />
              </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/why-us"
            element={
              <PageTransition>
                <WhyUs />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/privacy"
            element={
              <PageTransition>
                <Privacy />
              </PageTransition>
            }
          />
          <Route
            path="/terms"
            element={
              <PageTransition>
                <Terms />
              </PageTransition>
            }
          />
          <Route
            path="/faq"
            element={
              <PageTransition>
                <Faq />
              </PageTransition>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />

      {/* Full-viewport cinematic curtain. Renders on initial load and on route changes. */}
      <AnimatePresence>
        {curtainVisible && (
          <motion.div
            key={`curtain-${location.pathname}`}
            initial={{ x: "-100%" }}
            animate={{ x: "120%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
            className="global-curtain pointer-events-none"
          />
        )}
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
