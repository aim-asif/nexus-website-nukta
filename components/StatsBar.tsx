const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-9 w-9 text-brand",
  "aria-hidden": true,
};

const stats = [
  {
    value: "98%",
    label: "First time fix rate",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "2hr",
    label: "Average response",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    value: "4.8/5",
    label: "Agent satisfaction",
    icon: (
      <svg {...iconProps} fill="none">
        <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L12 3z" />
      </svg>
    ),
  },
  {
    value: "10+ years",
    label: "Industry experience",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="4" width="14" height="17" rx="1.5" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  return (
    <section className="border-y border-white/10 bg-dark text-white">
      <div className="container-site py-10">
        <ul className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-center sm:text-left"
            >
              {stat.icon}
              <div>
                <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-neutral-400">{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
