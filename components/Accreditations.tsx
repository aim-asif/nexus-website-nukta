// Placeholder badges — replace with real logo files in public/images/ once provided
// (TrustMark Safe Register, NAPIT, Federation of Master Builders, Constructionline).
const badges = [
  { name: "Safe Register", sub: "TrustMark" },
  { name: "NAPIT", sub: "" },
  { name: "Master Builders", sub: "Federation of" },
  { name: "Constructionline", sub: "Gold Member" },
];

export default function Accreditations() {
  return (
    <section className="border-t border-white/10 bg-dark text-white">
      <div className="container-site py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Accredited. Qualified. Trusted.
        </p>

        <ul className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-8 divide-white/10 sm:divide-x">
          {badges.map((badge) => (
            <li
              key={badge.name}
              className="flex flex-col gap-1 pl-0 text-neutral-400 first:pl-0 sm:pl-12 sm:first:pl-0"
            >
              {badge.sub && (
                <span className="text-xs uppercase tracking-wide">
                  {badge.sub}
                </span>
              )}
              <span className="text-lg font-semibold text-neutral-200">
                {badge.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
