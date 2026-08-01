export default function ConstructionRibbon() {
  return (
    <div
      role="status"
      className="bg-brand text-black"
    >
      <div className="container-site flex items-center justify-center gap-2 py-2 text-center text-xs font-bold uppercase tracking-wide sm:text-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <path d="M12 3 1.8 20.5h20.4L12 3Z" />
          <path d="M12 9.5v4.5" />
          <path d="M12 17.5h.01" />
        </svg>
        <span>
          This website is under construction — some content may be incomplete.
        </span>
      </div>
    </div>
  );
}
