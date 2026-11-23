function ProblemSolution() {
  return (
    <section className="mt-24 px-6 pb-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-surface-border bg-surface-card p-8 md:p-10">
          <h2 className="text-2xl font-bold">The Problem</h2>

          <div className="mt-7 space-y-6">
            <div className="flex gap-4">
              <i className="fa-solid fa-sack-dollar mt-1 text-lg text-brand"></i>
              <div>
                <h3 className="font-semibold text-white">
                  Hiring lawyers is expensive
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Legal services can cost thousands for simple documents
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <i className="fa-solid fa-stopwatch mt-1 text-lg text-brand"></i>
              <div>
                <h3 className="font-semibold text-white">
                  Legal documents take time
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Traditional drafting takes weeks or months
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <i className="fa-solid fa-book-open mt-1 text-lg text-brand"></i>
              <div>
                <h3 className="font-semibold text-white">
                  Confusing legal language
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Complex jargon makes documents hard to understand
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/15 via-surface-card to-surface-card p-8 md:p-10">
          <h2 className="text-2xl font-bold">Our Solution</h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Our AI creates clear, ready-to-use legal documents tailored to your
            business in minutes. No confusion. Just documents you can understand
            and use immediately.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3 text-sm text-gray-200">
              <i className="fa-solid fa-check text-brand"></i>
              Save thousands on legal fees
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-200">
              <i className="fa-solid fa-check text-brand"></i>
              Get documents in minutes, not months
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-200">
              <i className="fa-solid fa-check text-brand"></i>
              Clear, plain English language
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
