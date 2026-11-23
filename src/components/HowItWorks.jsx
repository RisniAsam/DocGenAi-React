
function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 py-10 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          How It Works
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm text-gray-400">
          Simple, intuitive, and fast. Three steps to your
          legal
          documents.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">

          {/* Step 01 */}
          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <span className="text-3xl font-extrabold text-brand/70">
              01
            </span>

            <h3 className="mt-4 font-semibold text-white">
              Choose a Document Type
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Select from NDA, Contract, Privacy Policy, and more
            </p>
          </div>

          {/* Step 02 */}
          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <span className="text-3xl font-extrabold text-brand/70">
              02
            </span>

            <h3 className="mt-4 font-semibold text-white">
              Answer Simple Questions
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Our AI asks just what it needs to know about your business
            </p>
          </div>

          {/* Step 03 */}
          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <span className="text-3xl font-extrabold text-brand/70">
              03
            </span>

            <h3 className="mt-4 font-semibold text-white">
              Download or Edit Instantly
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Get your document ready to use or customize further
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
