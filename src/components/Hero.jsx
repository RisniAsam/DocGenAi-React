
import robot from "../assets/robot.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-10 lg:px-16 lg:pt-24">
      <div className="glow-red pointer-events-none absolute inset-0"></div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand">
            Trusted by 10,000+ companies
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Legal Docs
            <span className="block text-brand">
              in Minutes
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-gray-400">
            Generate compliant NDAs, contracts, and policies with AI. Fast, affordable, and simple — no
            lawyer
            required.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#signup"
              className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold transition hover:bg-brand-dark"
            >
              Start Free
            </a>

            <a
              href="#samples"
              className="rounded-lg border border-surface-border px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-500"
            >
              View Samples
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center rounded-2xl border border-surface-border bg-surface-card px-8 pt-20 pb-4">
          <div className="glow-red pointer-events-none absolute inset-0 rounded-2xl"></div>

          <img
            src={robot}
            alt="AI Robot Illustration"
            className="h-80 w-80 relative h-40 w-40 opacity-80 rounded-xl"
          />

          <p className="pt-10 text-sm text-gray-400">
            AI-Powered Document Generation
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
