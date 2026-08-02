import type { Metadata } from "next";
import Image from "next/image";
import FaqList from "@/components/services/FaqList";
import ServiceCTA from "@/components/services/ServiceCTA";
import ServiceHero from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Flooring | Nexus Property Maintenance",
  description:
    "Supply and fit flooring for letting agents and landlords — LVT, laminate, engineered wood, carpet and tile. Free measure, subfloor prep included, waste taken away.",
};

const facts = [
  { value: "Free", label: "Measure & written quote" },
  { value: "48hr", label: "Typical void turnaround" },
  { value: "10yr+", label: "Manufacturer warranties" },
  { value: "100%", label: "Old flooring taken away" },
];

const floorTypes = [
  {
    title: "Luxury vinyl tile (LVT)",
    description:
      "Warm underfoot, quiet and close to indestructible. Our first pick for family lets and high-traffic hallways.",
    tags: ["Waterproof", "Click or glue-down", "20yr wear layer"],
    image: {
      src: "/images/services/flooring/type-lvt.jpg",
      alt: "Wide-plank vinyl flooring running through an open-plan kitchen",
    },
  },
  {
    title: "Laminate",
    description:
      "Best value for a fast, clean refresh between tenancies. Realistic wood finishes that sit inside a void budget.",
    tags: ["Budget-friendly", "Same-day fit", "AC4 / AC5 rated"],
    image: {
      src: "/images/services/flooring/type-laminate.jpg",
      alt: "Light oak laminate flooring in a bright living room",
    },
  },
  {
    title: "Engineered & solid wood",
    description:
      "Real timber for period and premium properties — fitted, sanded and sealed on site where the floor deserves it.",
    tags: ["Real oak veneer", "Re-sandable", "UFH compatible"],
    image: {
      src: "/images/services/flooring/type-wood.jpg",
      alt: "Polished solid oak floorboards in a newly finished room",
    },
  },
  {
    title: "Carpet & underlay",
    description:
      "Bedrooms, stairs and landings, fitted on quality underlay with proper grippers, door bars and neat edges.",
    tags: ["Stain-resistant", "Stairs & landings", "Underlay included"],
    image: {
      src: "/images/services/flooring/type-carpet.jpg",
      alt: "Neutral fitted carpet in a furnished living room",
    },
  },
  {
    title: "Tile & stone",
    description:
      "Porcelain, ceramic and natural stone for kitchens, bathrooms and utility rooms — fully waterproofed underneath.",
    tags: ["Tanked & sealed", "Anti-slip options", "Grout sealed"],
    image: {
      src: "/images/services/flooring/type-tile.jpg",
      alt: "Large-format pale floor tiles in a modern living space",
    },
  },
  {
    title: "Subfloor prep & levelling",
    description:
      "The part that decides whether a floor lasts. Latex levelling, ply overlay and moisture testing come as standard.",
    tags: ["Latex levelling", "Ply overlay", "DPM & moisture tests"],
    image: {
      src: "/images/services/flooring/type-subfloor.jpg",
      alt: "Fitter checking a newly laid floor with a spirit level",
    },
  },
];

const included = [
  "Free on-site measure and itemised written quote",
  "Samples brought to the property for sign-off",
  "Furniture moved out and put back",
  "Old flooring uplifted, bagged and taken away",
  "Subfloor levelled, dried and prepared",
  "Doors trimmed, thresholds and beading fitted",
  "Completion photos sent straight to your file",
  "Property left swept, clean and tenant-ready",
];

const process = [
  {
    title: "Measure",
    description:
      "We attend at a time that suits the tenant, measure every room and check the subfloor for damp and movement.",
  },
  {
    title: "Quote & samples",
    description:
      "An itemised quote back within 24 hours, with samples you can put in front of the landlord the same day.",
  },
  {
    title: "Schedule",
    description:
      "We book a slot that fits the void window and confirm access directly with the tenant or your branch.",
  },
  {
    title: "Fit",
    description:
      "Uplift, prep, fit, trim and finish — most flats and small houses are done inside a single visit.",
  },
  {
    title: "Sign-off",
    description:
      "Photos on completion, all waste removed and recycled, and a written guarantee on the workmanship.",
  },
];

const alsoHandled = [
  "Latex screed & self-levelling compounds",
  "Ply overlay to timber subfloors",
  "Damp-proof membranes & moisture testing",
  "Underfloor heating compatibility checks",
  "Door trimming, thresholds & transition bars",
  "Skirting, scotia & beading",
  "Stair nosings, grippers & carpet bars",
  "Uplift, disposal & recycling of old flooring",
];

const faqs = [
  {
    question: "How quickly can you fit a floor?",
    answer:
      "We normally measure within a few working days of your instruction and fit within a week of the quote being approved. For urgent voids, tell us the check-in date and we will work backwards from it.",
  },
  {
    question: "Can you work around a tenant who is still in the property?",
    answer:
      "Yes. We move furniture room by room, keep dust down with sheeting and extraction, and put everything back before we leave. We agree access times with the tenant in advance so nobody is caught out.",
  },
  {
    question: "Do you supply the flooring, or can we?",
    answer:
      "Either. We hold trade accounts with the main UK suppliers, so supply-and-fit is usually cheaper and comes with one point of responsibility. If the landlord has already bought materials, we are happy to fit on a labour-only basis.",
  },
  {
    question: "What flooring holds up best in a rental?",
    answer:
      "LVT for kitchens, hallways and bathrooms — it shrugs off spills, pets and suitcases, and a damaged plank can be swapped without lifting the whole floor. Carpet still wins in bedrooms for warmth and sound.",
  },
  {
    question: "What if the subfloor is uneven or damp?",
    answer:
      "We flag it at the measure stage rather than on the day, with photos and a cost to put it right. Levelling compound, ply overlay and damp-proof membranes are all part of what we do.",
  },
  {
    question: "Is the work guaranteed?",
    answer:
      "Workmanship is guaranteed for 12 months, and materials carry the manufacturer's warranty — typically 10 to 25 years on LVT and engineered wood. If something moves or lifts, we come back and sort it.",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path
        d="m8 12.5 2.5 2.5L16 9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FlooringPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Flooring"
        title={
          <>
            Floors fitted right, <span className="text-brand">first time.</span>
          </>
        }
        description="Supply and fit for every floor type — LVT, laminate, engineered wood, carpet, tile and stone. Measured properly, prepped properly, and finished in time for check-in."
        chips={["Supply & fit", "Void turnarounds", "Waste removed"]}
        image={{
          src: "/images/services/flooring/hero.jpg",
          alt: "Bright room with newly fitted oak flooring",
        }}
      />

      {/* Quick facts */}
      <section className="border-y border-white/10 bg-dark text-white">
        <div className="container-site py-10">
          <ul className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {facts.map((fact) => (
              <li key={fact.label} className="px-4 text-center">
                <p className="text-3xl font-bold text-brand sm:text-4xl">
                  {fact.value}
                </p>
                <p className="mt-2 text-sm text-neutral-400">{fact.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Floor types */}
      <section className="bg-dark text-white">
        <div className="container-site py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              What we fit
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              The right floor for the property — and the tenant.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-300">
              We fit every mainstream floor type, so the recommendation you get
              is the one that suits the room and the budget, not the one we
              happen to stock.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {floorTypes.map((type) => (
              <li
                key={type.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-200 hover:border-brand/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <Image
                    src={type.image.src}
                    alt={type.image.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-brand">
                    {type.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-neutral-300">
                    {type.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {type.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium tracking-wide text-neutral-200"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-white/10 bg-dark text-white">
        <div className="container-site py-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-last aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 sm:aspect-[3/2] lg:order-first lg:aspect-[4/5]">
              <Image
                src="/images/services/flooring/samples.jpg"
                alt="Rack of laminate and wood flooring samples in a range of finishes"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-dark/70 via-transparent to-transparent"
                aria-hidden="true"
              />
              <p className="absolute inset-x-0 bottom-0 p-7 text-lg font-medium">
                Samples brought to the property, not posted to the branch.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                What&apos;s included
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                One price. No surprises on the invoice.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                Every flooring quote we send covers the whole job — prep, fit,
                finish and clear-up. If we find something behind the old floor
                that changes the price, you hear about it before we carry on.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-neutral-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-dark text-white">
        <div className="container-site py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From first call to check-in.
            </h2>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <li key={step.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand font-bold text-black">
                    {index + 1}
                  </span>
                  <span
                    className="hidden h-px flex-1 bg-white/15 lg:block"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Also handled */}
      <section className="border-y border-white/10 bg-dark text-white">
        <div className="container-site py-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Underneath it all
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                A floor is only as good as what it sits on.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                Most flooring complaints are subfloor problems in disguise —
                lifting edges, hollow spots, doors that catch. We deal with the
                boring layer properly so the finished floor stays flat.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {alsoHandled.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-neutral-100"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-neutral-900">
              <Image
                src="/images/services/flooring/underfloor.jpg"
                alt="Underfloor heating pipework laid out across a subfloor before screeding"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-dark text-white">
        <div className="container-site py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
            <div className="lg:pt-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Questions
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The things agents ask us most.
              </h2>
              <p className="mt-5 leading-relaxed text-neutral-400">
                Something not covered here? Call the office and you will speak
                to someone who has actually been on site.
              </p>
            </div>

            <div className="lg:col-span-2">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Need a floor down before check-in?"
        description="Send us the address and the date you need it finished. We will measure, quote and book it in around your void."
      />
    </>
  );
}
