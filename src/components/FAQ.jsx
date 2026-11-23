
function FAQ() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Frequently Asked Questions</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-gray-400">Everything you need to know</p>

        <div className="mt-10 space-y-3 text-left">
          <details className="group rounded-xl border border-surface-border bg-surface-card px-6 py-5">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-white">
              Is this legally binding?
              <i className="fa-solid fa-chevron-down faq-chevron text-xs text-gray-400 transition-transform"></i>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Yes, documents generated are legally binding when properly executed.
              However, for complex situations, we recommend having a lawyer review your document.
            </p>
          </details>

          <details className="group rounded-xl border border-surface-border bg-surface-card px-6 py-5">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-white">
              Can I customize documents?
              <i className="fa-solid fa-chevron-down faq-chevron text-xs text-gray-400 transition-transform"></i>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Yes, documents generated are legally binding when properly executed.
              However, for complex situations, we recommend having a lawyer review your document.
            </p>
          </details>

          <details className="group rounded-xl border border-surface-border bg-surface-card px-6 py-5">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-white">
              Is this US-specific?
              <i className="fa-solid fa-chevron-down faq-chevron text-xs text-gray-400 transition-transform"></i>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Yes, documents generated are legally binding when properly executed.
              However, for complex situations, we recommend having a lawyer review your document.
            </p>
          </details>

          <details className="group rounded-xl border border-surface-border bg-surface-card px-6 py-5">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-white">
              Can I cancel anytime?
              <i className="fa-solid fa-chevron-down faq-chevron text-xs text-gray-400 transition-transform"></i>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Yes, documents generated are legally binding when properly executed.
              However, for complex situations, we recommend having a lawyer review your document.
            </p>
          </details>

          <details className="group rounded-xl border border-surface-border bg-surface-card px-6 py-5">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-white">
              How long does generation take?
              <i className="fa-solid fa-chevron-down faq-chevron text-xs text-gray-400 transition-transform"></i>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Yes, documents generated are legally binding when properly executed.
              However, for complex situations, we recommend having a lawyer review your document.
            </p>
          </details>

          <details className="group rounded-xl border border-surface-border bg-surface-card px-6 py-5">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-white">
              Are my documents private?
              <i className="fa-solid fa-chevron-down faq-chevron text-xs text-gray-400 transition-transform"></i>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Yes, documents generated are legally binding when properly executed.
              However, for complex situations, we recommend having a lawyer review your document.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
