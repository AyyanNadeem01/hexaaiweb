import CaseStudiesSection from "@/components/CaseStudiesSection";

const reviews = [
  {
    name: "Aisha M.",
    role: "Realtor",
    text: "Hexa AI tripled our monthly leads with an automated funnel. Highly recommend.",
  },
  {
    name: "Dr. Patel",
    role: "Dentist",
    text: "No-shows decreased dramatically after Hexa AI implemented reminders and confirmations.",
  },
  {
    name: "Carlos R.",
    role: "YouTuber",
    text: "Workflow automation saved me hours per week — content velocity went way up.",
  },
];

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold">
          Company Portfolio & Client Review
        </h1>
        <p className="mt-4 text-muted-foreground">
          A selection of projects and what our clients say.
        </p>

        <section className="mt-10">
          <CaseStudiesSection />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Client Reviews</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="card glass p-6">
                <div className="font-semibold">
                  {r.name}{" "}
                  <span className="text-sm text-muted-foreground">
                    — {r.role}
                  </span>
                </div>
                <p className="mt-3 text-sm">“{r.text}”</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Company;
