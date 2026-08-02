type Faq = {
  question: string;
  answer: string;
};

type FaqListProps = {
  faqs: readonly Faq[];
};

/**
 * Native <details> accordions — no client JS, and each answer stays in the
 * markup so it is still crawlable and findable with in-page search.
 */
export default function FaqList({ faqs }: FaqListProps) {
  return (
    <ul className="divide-y divide-white/10 border-y border-white/10">
      {faqs.map((faq) => (
        <li key={faq.question}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-white transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-brand transition-transform duration-200 group-open:rotate-45">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="max-w-3xl pb-6 leading-relaxed text-neutral-300">
              {faq.answer}
            </p>
          </details>
        </li>
      ))}
    </ul>
  );
}
