import {
  Home,
  Calendar,
  PhoneCall,
  Headphones,
  ShoppingCart,
  Video,
} from "lucide-react";

const agents = [
  {
    title: "Real Estate AI Agent",
    icon: Home,
    desc: "Handles inbound leads, qualifies buyers & sellers, books viewings, and follows up instantly across SMS, WhatsApp, and email.",
    result:
      "5x faster lead response, higher close rates, zero missed opportunities.",
  },
  {
    title: "Dental Appointment Booker",
    icon: Calendar,
    desc: "AI receptionist that answers calls, books appointments, sends reminders, and handles reschedules 24/7.",
    result: "Up to 87% fewer missed calls and reduced no-shows.",
  },
  {
    title: "Sales & Lead Qualification Agent",
    icon: PhoneCall,
    desc: "Engages cold & warm leads, asks qualifying questions, scores prospects, and hands off only high-intent leads.",
    result: "3x more qualified meetings with the same ad spend.",
  },
  {
    title: "Customer Support AI Agent",
    icon: Headphones,
    desc: "Instantly resolves FAQs, order issues, refunds, and support tickets across chat and email.",
    result: "60–80% ticket automation and faster resolution times.",
  },
  {
    title: "E-commerce AI Agent",
    icon: ShoppingCart,
    desc: "Product recommendations, order tracking, abandoned cart recovery, and upsells via chat automation.",
    result: "Higher AOV and increased repeat purchases.",
  },
  {
    title: "Content Creator AI Agent",
    icon: Video,
    desc: "Manages DMs, brand inquiries, content workflows, and fan engagement automatically.",
    result: "Saves 10+ hours per week while increasing content output.",
  },
];

const AgentsSection = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-4">AI Agents We Build</h2>
      <p className="text-muted-foreground max-w-2xl mb-10">
        We design and deploy industry-specific AI agents that automate
        operations, increase revenue, and deliver measurable results.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((a, i) => (
          <div
            key={i}
            className="
              card glass p-6 group
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-primary/40
            "
          >
            <a.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />

            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {a.title}
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>

            <p className="mt-4 text-sm font-medium text-primary">
              Result: {a.result}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgentsSection;
