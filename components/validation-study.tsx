import Link from "next/link";

const pillars = [
  { value: "150", label: "participants (50 per tier)" },
  { value: "12 mo", label: "follow-up window" },
  { value: "STROBE", label: "reporting checklist" },
];

export function ValidationStudy() {
  return (
    <section className="bg-terminal-deep">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-stone">
              Suggested validation study
            </p>
            <h2 className="mt-3 text-[clamp(2rem,3.4vw,2.8rem)] font-editorial font-semibold leading-[1.08] tracking-[-0.02em] text-cool">
              A reference design you can{" "}
              <span className="font-display italic font-normal text-alert">
                hand to your IRB.
              </span>
            </h2>
            <p className="mt-5 max-w-xl font-editorial text-[16px] leading-[1.65] text-cool/70">
              A pre-written, STROBE-aligned observational protocol ships
              alongside the instrument. Primary endpoint, statistical plan,
              and inclusion criteria are ready to adapt — no blank page to
              fight on a Sunday night.
            </p>
            <Link
              href="https://github.com/vickymuller-md/heartland-redcap-template/blob/main/docs/validation_study_protocol.md"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-cool px-6 py-3 font-editorial text-[14px] font-medium text-terminal transition-colors hover:bg-alert hover:text-cool"
            >
              Read the study protocol
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-6">
            <dl className="grid grid-cols-3 gap-4">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col gap-2 rounded-xl border border-grid bg-panel p-5"
                >
                  <dt className="font-display text-[34px] leading-none text-cool">
                    {p.value}
                  </dt>
                  <dd className="font-editorial text-[11.5px] uppercase tracking-[0.18em] text-stone">
                    {p.label}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-4 space-y-2 rounded-xl border border-grid bg-panel p-5 font-editorial text-[14px] leading-[1.6] text-cool/80">
              <li className="flex gap-3">
                <span className="text-signal">•</span>
                Primary endpoint: all-cause mortality by HEARTLAND tier.
              </li>
              <li className="flex gap-3">
                <span className="text-signal">•</span>
                Secondary: HF hospitalizations, days alive and out of
                hospital, GDMT optimization.
              </li>
              <li className="flex gap-3">
                <span className="text-signal">•</span>
                Exploratory: discrimination vs MAGGIC / GWTG-HF; Track A vs
                Track B comparison.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
