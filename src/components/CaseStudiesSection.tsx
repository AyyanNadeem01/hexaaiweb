import { motion } from "framer-motion";
import { TrendingUp, Clock, BarChart3 } from "lucide-react";

const caseStudies = [
  {
    icon: Clock,
    metric: "5x",
    title: "Faster Lead Response",
    industry: "Real Estate Agency",
    description: "Automated lead capture and instant follow-up reduced response time from 4 hours to under 5 minutes, increasing conversion by 180%."
  },
  {
    icon: TrendingUp,
    metric: "87%",
    title: "Fewer Missed Calls",
    industry: "Dental Clinic",
    description: "AI receptionist now handles after-hours calls and booking, recovering patients that would have gone to competitors."
  },
  {
    icon: BarChart3,
    metric: "3.2x",
    title: "Higher Conversion Rate",
    industry: "Lead Gen Agency",
    description: "Multi-channel nurturing sequences with AI personalization transformed cold leads into qualified appointments at record rates."
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="results" className="section-spacing relative bg-secondary/30">
      <div className="container-width">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium glass rounded-full border-glow text-primary">
            Results That Matter
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Real Outcomes. <span className="text-gradient">Real Businesses.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            These aren't hypotheticals — these are actual results from businesses like yours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className="glass rounded-xl p-8 hover-glow group cursor-default text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:glow-md transition-all duration-300">
                <study.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-5xl font-bold font-heading text-gradient mb-2">{study.metric}</div>
              <h3 className="text-xl font-semibold font-heading mb-1">{study.title}</h3>
              <p className="text-sm text-primary mb-4">{study.industry}</p>
              <p className="text-muted-foreground">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
