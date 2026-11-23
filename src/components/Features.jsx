
function Features() {
  return (
    <section className="bg-[#0d0c0b] px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Key Features</h2>

        <div className="mt-12 grid grid-cols-1 gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <i className="fa-solid fa-bolt text-xl text-brand"></i>
            <h3 className="mt-4 font-semibold">Attorney-reviewed templates</h3>
            <p className="mt-2 text-sm text-gray-400">Created by legal experts for accuracy and compliance</p>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <span className="feature-icon text-xl text-brand">🇺🇸</span>
            <h3 className="mt-4 font-semibold">US-business friendly</h3>
            <p className="mt-2 text-sm text-gray-400">Compliant with US laws and regulations</p>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <i className="fa-solid fa-book-open text-xl text-brand"></i>
            <h3 className="mt-4 font-semibold">No legal jargon</h3>
            <p className="mt-2 text-sm text-gray-400">Clear, plain English everyone can understand</p>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <i className="fa-solid fa-pencil text-xl text-brand"></i>
            <h3 className="mt-4 font-semibold">Edit &amp; export anytime</h3>
            <p className="mt-2 text-sm text-gray-400">Customize documents to your specific needs</p>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <i className="fa-solid fa-lock text-xl text-brand"></i>
            <h3 className="mt-4 font-semibold">Secure &amp; private</h3>
            <p className="mt-2 text-sm text-gray-400">Your documents are never shared or stored</p>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <i className="fa-solid fa-bolt text-xl text-brand"></i>
            <h3 className="mt-4 font-semibold">Instant generation</h3>
            <p className="mt-2 text-sm text-gray-400">Get professional documents in under 5 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
