import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-muted-foreground">
          Start a project or ask a question — we usually reply within one
          business day.
        </p>
        <div className="mt-8">
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Contact;
