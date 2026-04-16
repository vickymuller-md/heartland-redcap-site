import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Create an empty REDCap project",
    body: "In your institutional REDCap, pick New Project → Research → name it (e.g. “HEARTLAND Validation — Site X”).",
  },
  {
    n: "02",
    title: "Upload the data dictionary",
    body: "Project Setup → Data Dictionary → Upload. Select heartland_data_dictionary.csv from the GitHub release.",
  },
  {
    n: "03",
    title: "Enable the repeating instrument",
    body: "Project Setup → Enable optional modules → Repeatable instruments and events. Mark monthly_followup as repeating.",
  },
];

export function Quickstart() {
  return (
    <section className="relative bg-terminal-deep">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-stone">
              Quickstart
            </p>
            <h2 className="mt-3 text-[clamp(2rem,3.4vw,2.8rem)] font-editorial font-semibold leading-[1.08] tracking-[-0.02em] text-cool">
              Three steps,{" "}
              <span className="font-display italic font-normal text-alert">
                fifteen minutes.
              </span>
            </h2>
            <p className="mt-5 max-w-md font-editorial text-[16px] leading-[1.65] text-cool/70">
              REDCap 14.x or newer is recommended. A 13.x instance works with
              minor caveats documented in the import guide.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                href="https://github.com/vickymuller-md/heartland-redcap-template/blob/main/docs/import_guide.md"
                className="inline-flex items-center gap-2 rounded-full border border-grid bg-panel px-5 py-3 font-editorial text-[14px] text-cool transition-colors hover:border-alert hover:text-alert"
              >
                Full import guide
                <span aria-hidden>↗</span>
              </Link>
              <Link
                href="https://github.com/vickymuller-md/heartland-redcap-template/releases/latest"
                className="inline-flex items-center gap-2 font-editorial text-[14px] text-cool/80 transition-colors hover:text-alert"
              >
                Latest release
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-7">
            <ol className="space-y-4">
              {steps.map((step) => (
                <li
                  key={step.n}
                  className="flex gap-5 rounded-xl border border-grid bg-panel px-6 py-5"
                >
                  <span className="font-display text-[32px] leading-none text-alert">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-editorial text-[16px] font-medium text-cool">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 font-editorial text-[14.5px] leading-[1.55] text-cool/70">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-xl border border-grid bg-cool text-terminal">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-terminal/70">
                  Regenerate artifacts locally
                </span>
                <span className="font-mono-editorial text-[10.5px] uppercase tracking-widest text-terminal/50">
                  bash
                </span>
              </div>
              <pre className="overflow-x-auto px-5 py-4 font-mono-editorial text-[12.5px] leading-[1.7] text-terminal/90">
                <code>{`# In the repo root
python3 scripts/csv_to_xml.py \\
  --input instruments/heartland_data_dictionary.csv \\
  --output instruments/heartland_instrument.xml

python3 scripts/generate_sample_data.py \\
  --output examples/sample_data.csv`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
