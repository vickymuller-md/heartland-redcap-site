import Link from "next/link";

const citations = [
  {
    label: "Protocol v3.3",
    title:
      "Ferreira VM. HEARTLAND Protocol: A Tiered Clinical Implementation Toolkit.",
    venue: "Cureus · 2026",
    href: "https://doi.org/10.5281/zenodo.18566403",
    note: "Authoritative source for Table 1 (risk score) and Module 4 (GDMT).",
  },
  {
    label: "Risk score",
    title: "Weighted 0-18 points across ten variables, three tiers.",
    venue: "Protocol v3.3 Table 1",
    href: "https://doi.org/10.5281/zenodo.18566403",
    note: "Pragmatic heuristic — not yet formally validated.",
  },
  {
    label: "GDMT",
    title: "Foundational therapies for HFrEF and HFpEF-specific agents.",
    venue: "Protocol v3.3 Module 4",
    href: "https://doi.org/10.5281/zenodo.18566403",
    note: "Target doses, safety gates, and Tier 1-3 initiation strategies.",
  },
];

export function Foundation() {
  return (
    <section className="bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="flex flex-col items-start gap-3">
          <p className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-stone">
            Clinical foundation
          </p>
          <h2 className="max-w-2xl text-[clamp(2rem,3.4vw,2.8rem)] font-editorial font-semibold leading-[1.08] tracking-[-0.02em] text-cool">
            Every field traces back to the{" "}
            <span className="font-display italic font-normal text-alert">
              peer-reviewed protocol.
            </span>
          </h2>
          <p className="mt-3 max-w-2xl font-editorial text-[16px] leading-[1.65] text-cool/70">
            The data dictionary mirrors HEARTLAND Protocol v3.3 exactly. The
            codebook PDF cites the specific module or table for every
            variable, so reviewers and adjudicators can verify clinical
            fidelity without leaving the repo.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {citations.map((c) => (
            <li
              key={c.label}
              className="flex flex-col gap-3 rounded-xl border border-grid bg-panel p-6 transition-colors hover:border-alert"
            >
              <span className="font-mono-editorial text-[10.5px] uppercase tracking-[0.22em] text-signal-deep">
                {c.label}
              </span>
              <p className="font-editorial text-[15.5px] leading-[1.5] text-cool">
                {c.title}
              </p>
              <p className="font-editorial text-[12.5px] text-stone">
                {c.venue}
              </p>
              <p className="font-editorial text-[13.5px] leading-[1.55] text-cool/70">
                {c.note}
              </p>
              <Link
                href={c.href}
                className="mt-auto inline-flex items-center gap-1.5 font-editorial text-[13px] text-cool transition-colors hover:text-alert"
              >
                Open source
                <span aria-hidden>↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
