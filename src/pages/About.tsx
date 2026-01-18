// Navigation and Footer are provided at app level
// PageTransition is applied at the router level; do not wrap pages here.

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold">About Hexa AI</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Hexa AI builds production-ready AI automation and modern web & mobile
          applications that accelerate business outcomes. We focus on
          automations that save time, reduce manual work, and scale reliably.
        </p>

        {/* Cards */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <div
            className="
              card glass p-6 group
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-primary/40
            "
          >
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              Our Mission
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              To empower businesses with reliable AI-first automation that
              drives measurable growth and operational efficiency.
            </p>
          </div>

          <div
            className="
              card glass p-6 group
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-primary/40
            "
          >
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              Our Values
            </h3>
            <ul className="mt-3 text-sm text-muted-foreground list-disc ml-5 space-y-1">
              <li>Outcome-focused engineering</li>
              <li>Human-centered design & safety</li>
              <li>Clear, transparent delivery</li>
            </ul>
          </div>

          <div
            className="
              card glass p-6 group
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-primary/40
            "
          >
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              What we do
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We build custom automations (lead-gen, customer service,
              appointment automation, content pipelines), web and mobile apps,
              and marketing integrations.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Team</h2>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Our team combines ML engineers, full-stack developers and product
            designers. We keep teams small and cross-functional so we can
            iterate fast and ship production-grade systems.
          </p>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <ol className="list-decimal ml-6 text-sm text-muted-foreground space-y-1">
            <li>Discovery & research — align on KPIs</li>
            <li>Prototype & validate — quick MVP</li>
            <li>Productionize — monitoring, scaling, handoff</li>
          </ol>
        </section>
      </main>
    </div>
  );
};

export default About;
