// Navigation and Footer are provided by app-level layout

const faqs = [
  {
    q: "How long does it take to build an automation?",
    a: "Typical prototypes take 2-4 weeks; production-ready systems 2-3 months depending on scope and integrations required.",
  },
  {
    q: "Do you integrate with my CRM?",
    a: "Yes — we integrate with most CRMs via API, webhooks, or middleware. We also provide pre-built connectors for popular platforms.",
  },
  {
    q: "What industries do you serve?",
    a: "We focus on real estate, healthcare (clinics/dentists), e-commerce, and content creators, but can build custom solutions for other industries.",
  },
  {
    q: "How do you price projects?",
    a: "We price based on scope, complexity and expected ROI — common models are fixed-price for well-scoped work, or time & materials for larger programs. We provide an estimate after discovery.",
  },
  {
    q: "What kind of support do you provide after launch?",
    a: "We offer maintenance, monitoring, and SLA-backed support plans. We can also take ownership of hosting and operations if required.",
  },
  {
    q: "How do you approach data privacy and security?",
    a: "Security is built-in: encrypted transport, secure credentials management, role-based access, and regular audits. We can sign NDAs and meet compliance requirements where needed.",
  },
  {
    q: "Can you help with SEO and marketing after the site is live?",
    a: "Yes — our digital marketing services include SEO, analytics setup, paid campaigns, and content strategies to help you grow traffic and conversions.",
  },
];

const Faq = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-4 text-muted-foreground">
          Answers to common questions about timelines, pricing, integrations and support.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="card glass p-6 hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Faq;
