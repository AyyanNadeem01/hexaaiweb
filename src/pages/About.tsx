// Navigation and Footer are provided at app level
// PageTransition is applied at the router level; do not wrap pages here.

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold">About Hexa AI</h1>
        <p className="mt-4 text-muted-foreground">
          Hexa AI builds production-ready AI automation and modern web & mobile
          applications that accelerate business outcomes. We focus on
          automations that save time, reduce manual work, and scale reliably.
        </p>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="card glass p-6">
            <h3 className="font-semibold">Our Mission</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              To empower businesses with reliable AI-first automation that
              drives measurable growth and operational efficiency.
            </p>
          </div>

          <div className="card glass p-6">
            <h3 className="font-semibold">Our Values</h3>
            <ul className="mt-3 text-sm text-muted-foreground list-disc ml-5">
              <li>Outcome-focused engineering</li>
              <li>Human-centered design & safety</li>
              <li>Clear, transparent delivery</li>
            </ul>
          </div>

          <div className="card glass p-6">
            <h3 className="font-semibold">What we do</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              We build custom automations (lead-gen, customer service,
              appointment automation, content pipelines), web and mobile
              apps, and marketing integrations.
            </p>
          </div>
        </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Team</h2>
            <p className="text-sm text-muted-foreground">
              Our team combines ML engineers, full-stack developers and product
              designers. We keep teams small and cross-functional so we can
              iterate fast and ship production-grade systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
            <ol className="list-decimal ml-6 text-sm text-muted-foreground">
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
