function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center md:px-10 lg:px-16">
      <div className="glow-red-strong pointer-events-none absolute inset-0"></div>
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Stop Paying for
          <span className="block text-brand">Basic Lawyers.</span>
        </h2>
        <p className="mt-5 text-sm text-gray-400">
          Generate professional, compliant legal documents today. No credit card
          required.
        </p>
        <a
          href="#signup"
          className="mt-8 inline-block rounded-lg bg-brand px-7 py-3 text-sm font-semibold transition hover:bg-brand-dark"
        >
          Generate Your First Document
        </a>
      </div>
    </section>
  );
}

export default CTA;
