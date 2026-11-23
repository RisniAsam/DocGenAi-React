
function Documents() {
  return (
    <section id="documents" className="px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Document Templates
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm text-gray-400">
          Professional, attorney-reviewed templates for every business need
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-surface-border bg-surface-card px-4 py-8 transition hover:border-brand/40">
            <i className="fa-solid fa-handshake text-2xl text-brand"></i>
            <h3 className="text-sm font-semibold">NDA (Mutual)</h3>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-surface-border bg-surface-card px-4 py-8 transition hover:border-brand/40">
            <i className="fa-solid fa-lock text-2xl text-brand"></i>
            <h3 className="text-sm font-semibold">NDA (Non-Mutual)</h3>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-surface-border bg-surface-card px-4 py-8 transition hover:border-brand/40">
            <i className="fa-solid fa-clipboard-list text-2xl text-brand"></i>
            <h3 className="text-sm font-semibold">Privacy Policy</h3>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-surface-border bg-surface-card px-4 py-8 transition hover:border-brand/40">
            <i className="fa-solid fa-scale-balanced text-2xl text-brand"></i>
            <h3 className="text-sm font-semibold">Terms of Service</h3>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-surface-border bg-surface-card px-4 py-8 transition hover:border-brand/40">
            <i className="fa-solid fa-briefcase text-2xl text-brand"></i>
            <h3 className="text-sm font-semibold">Freelance Contract</h3>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-surface-border bg-surface-card px-4 py-8 transition hover:border-brand/40">
            <i className="fa-solid fa-user-group text-2xl text-brand"></i>
            <h3 className="text-sm font-semibold">Employment Agreement</h3>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-surface-border bg-surface-card px-4 py-8 transition hover:border-brand/40">
            <i className="fa-solid fa-phone text-2xl text-brand"></i>
            <h3 className="text-sm font-semibold">Consulting Agreement</h3>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-surface-border bg-surface-card px-4 py-8 transition hover:border-brand/40">
            <i className="fa-regular fa-file text-2xl text-brand"></i>
            <h3 className="text-sm font-semibold">Service Agreement</h3>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Documents;
