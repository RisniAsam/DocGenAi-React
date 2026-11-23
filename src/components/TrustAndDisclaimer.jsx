
function TrustAndDisclaimer() {
  return (
    <section className="bg-[#0d0c0b] px-6 pb-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <i className="fa-solid fa-lock text-xl text-brand"></i>
            <h3 className="mt-4 font-semibold">Security</h3>
            <p className="mt-2 text-sm text-gray-400">Enterprise-grade encryption protects your data</p>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <i className="fa-solid fa-shield-halved text-xl text-brand"></i>
            <h3 className="mt-4 font-semibold">Privacy</h3>
            <p className="mt-2 text-sm text-gray-400">Your documents are never shared or retained</p>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-card p-7">
            <span className="trust-icon text-xl text-brand">🇺🇸</span>
            <h3 className="mt-4 font-semibold">US-Focused</h3>
            <p className="mt-2 text-sm text-gray-400">Compliant with all US business regulations</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-surface-border bg-surface-card p-7">
          <h3 className="font-semibold text-white">Important Disclaimer</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            This tool does not replace a licensed attorney. Documents generated are for informational
            purposes.
            For complex legal matters or specific advice, please consult with a qualified attorney.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TrustAndDisclaimer;
