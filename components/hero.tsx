import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-grid bg-panel px-3.5 py-1.5 font-editorial text-[12px] tracking-tight text-cool/80">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              v1.0.0 · Open source · MIT
            </p>

            <h1 className="mt-7 text-[clamp(2.6rem,6.4vw,5.25rem)] font-editorial font-semibold leading-[1.04] tracking-[-0.025em] text-cool">
              A REDCap instrument{" "}
              <span className="font-display italic font-normal text-alert">
                ready
              </span>{" "}
              to import.
            </h1>

            <p className="mt-7 max-w-xl font-editorial text-[17px] leading-[1.65] text-cool/75 md:text-[18px]">
              Pre-built data dictionary and XML instrument for the
              peer-reviewed HEARTLAND Protocol. Five forms, 75 variables,
              a weighted 0-18 risk score, and 12 monthly follow-ups — so any
              rural hospital or research institution can start collecting
              structured heart failure data on day one.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="https://github.com/vickymuller-md/heartland-redcap-template"
                className="group inline-flex items-center gap-3 rounded-full bg-cool px-7 py-4 font-editorial text-[15px] font-medium text-terminal transition-colors hover:bg-alert hover:text-cool"
              >
                View on GitHub
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="https://doi.org/10.5281/zenodo.18566403"
                className="group inline-flex items-center gap-2 font-editorial text-[15px] font-medium text-cool/85 transition-colors hover:text-alert"
              >
                Read the Protocol
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <p className="mt-12 max-w-md font-editorial text-[12.5px] leading-relaxed text-stone">
              For clinicians and researchers with institutional REDCap access.
              All sample data is synthetic — no PHI is ever transmitted or
              collected by this template.
            </p>
          </div>

          <div className="md:col-span-5">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] rounded-2xl border border-grid bg-panel p-6 shadow-[0_1px_0_0_rgba(245,239,226,1),0_12px_40px_-20px_rgba(15,37,68,0.22)]">
      <div className="mb-4 flex items-center justify-between border-b border-grid pb-3">
        <span className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-stone">
          heartland_data_dictionary.csv
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/10 px-2.5 py-0.5 font-editorial text-[10.5px] uppercase tracking-widest text-signal-deep">
          <span className="h-1 w-1 rounded-full bg-signal" aria-hidden />
          ready
        </span>
      </div>

      <ul className="space-y-2 font-mono-editorial text-[12.5px] leading-relaxed text-cool/80">
        {[
          ["01", "enrollment", "13 fields"],
          ["02", "baseline", "15 fields · risk score"],
          ["03", "gdmt_status", "19 fields"],
          ["04", "monthly_followup", "20 fields · repeating"],
          ["05", "outcomes_12mo", "8 fields"],
        ].map(([n, form, note]) => (
          <li
            key={form}
            className="flex items-center justify-between gap-3 rounded-md bg-panel-hi/60 px-3 py-2"
          >
            <span className="flex items-center gap-3">
              <span className="text-stone">{n}</span>
              <span className="font-medium text-cool">{form}</span>
            </span>
            <span className="text-[11px] text-stone">{note}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-grid pt-4 font-mono-editorial text-[11px] text-stone">
        <span>75 fields total</span>
        <span>MIT · v1.0.0</span>
      </div>
    </div>
  );
}
