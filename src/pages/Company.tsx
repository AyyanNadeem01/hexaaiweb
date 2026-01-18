import CaseStudiesSection from "@/components/CaseStudiesSection";
import AgentsSection from "@/components/AgentsSection";

const reviews = [
  {
    name: "Aisha M.",
    role: "Real Estate Broker",
    text: "Hexa AI transformed our lead handling. Response time dropped to minutes and conversions nearly doubled.",
  },
  {
    name: "Dr. Patel",
    role: "Dental Clinic Owner",
    text: "Our phones are finally covered 24/7. Missed calls and no-shows are no longer an issue.",
  },
  {
    name: "James L.",
    role: "Sales Director",
    text: "Their AI qualification agent filters leads better than our sales team ever could.",
  },
  {
    name: "Sofia R.",
    role: "E-commerce Founder",
    text: "Support automation paid for itself within weeks. Customers get instant responses now.",
  },
  {
    name: "Carlos R.",
    role: "Content Creator",
    text: "DM automation alone saved me 10+ hours every week. Game changer.",
  },
  {
    name: "Ahmed K.",
    role: "Agency Owner",
    text: "Hexa AI helped us scale without hiring more staff. Results were immediate.",
  },
  {
    name: "Emily W.",
    role: "Marketing Manager",
    text: "Clear communication, fast delivery, and real ROI. Exactly what we needed.",
  },
];

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6">
        {/* AI Agents / Niches */}
        <AgentsSection />

        {/* Case Studies */}
        <section className="mt-24">
          <CaseStudiesSection />
        </section>

        {/* Reviews */}
        <section className="mt-20 mb-24">
          <h2 className="text-3xl font-bold mb-6">Client Reviews</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
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
                <div className="font-semibold group-hover:text-primary transition-colors">
                  {r.name}
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    — {r.role}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed">“{r.text}”</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Company;
