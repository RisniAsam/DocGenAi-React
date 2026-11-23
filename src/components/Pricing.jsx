
function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Simple, Transparent Pricing</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-gray-400">Choose the plan that fits your needs</p>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 text-left lg:grid-cols-3">

          {/* Starter Plan */}
          <div className="rounded-2xl border border-surface-border bg-surface-card p-8">
            <h3 className="text-lg font-bold">Starter</h3>
            <p className="mt-1 text-sm text-gray-400">Perfect for getting started</p>
            <p className="mt-6 text-4xl font-extrabold">$0</p>
            <a href="#starter" className="mt-6 block rounded-lg border border-surface-border py-2.5 text-center text-sm font-semibold text-gray-200 transition hover:border-gray-500">
              Get Started
            </a>
            <ul className="mt-7 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>1 document per month</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Watermarked documents</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Basic templates</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Email support</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="relative rounded-2xl border-2 border-brand bg-surface-card p-8 lg:-mt-4 lg:mb-[-1rem]">
            <span className="recommended-badge">Recommended</span>
            <h3 className="text-lg font-bold">Pro</h3>
            <p className="mt-1 text-sm text-gray-400">For most small businesses</p>
            <p className="mt-6 text-4xl font-extrabold">
              $29 <span className="text-base font-medium text-gray-400">/month</span>
            </p>
            <a href="#pro" className="mt-6 block rounded-lg bg-brand py-2.5 text-center text-sm font-semibold transition hover:bg-brand-dark">
              Start Free Trial
            </a>
            <ul className="mt-7 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Unlimited documents</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>No watermark</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Editable formats</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Priority support</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Advanced templates</li>
            </ul>
          </div>

          {/* Business Plan */}
          <div className="rounded-2xl border border-surface-border bg-surface-card p-8">
            <h3 className="text-lg font-bold">Business</h3>
            <p className="mt-1 text-sm text-gray-400">For growing teams</p>
            <p className="mt-6 text-4xl font-extrabold">
              $79 <span className="text-base font-medium text-gray-400">/month</span>
            </p>
            <a href="#business" className="mt-6 block rounded-lg border border-surface-border py-2.5 text-center text-sm font-semibold text-gray-200 transition hover:border-gray-500">
              Contact Sales
            </a>
            <ul className="mt-7 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Everything in Pro</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Team access</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Client documents</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Priority support</li>
              <li className="flex items-center gap-2.5"><i className="fa-solid fa-check text-brand"></i>Custom templates</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;
