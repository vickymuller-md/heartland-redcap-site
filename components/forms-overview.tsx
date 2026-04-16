const forms = [
  {
    n: "01",
    name: "Enrollment",
    summary:
      "Facility information, consent, demographics, geographic context (state, county FIPS, USDA RUCA rurality).",
  },
  {
    n: "02",
    name: "Baseline",
    summary:
      "The ten HEARTLAND risk variables and a weighted 0-18 score with automatic tier assignment (low / moderate / high).",
  },
  {
    n: "03",
    name: "GDMT Status",
    summary:
      "RAS inhibitor, beta-blocker, MRA, and SGLT2i tracked with target doses, start dates, and the generic $4 bridge option.",
  },
  {
    n: "04",
    name: "Monthly follow-up",
    summary:
      "Repeating instrument, months 1-12. Vitals, optional labs, GDMT titrations, red flags, hospitalizations, KCCQ-12.",
  },
  {
    n: "05",
    name: "12-month outcomes",
    summary:
      "Mortality, HF hospitalizations, HF ED visits, days alive and out of hospital, and GDMT optimization rate.",
  },
];

export function FormsOverview() {
  return (
    <section className="relative bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-stone">
              What&apos;s inside
            </p>
            <h2 className="mt-3 text-[clamp(2rem,3.4vw,2.8rem)] font-editorial font-semibold leading-[1.08] tracking-[-0.02em] text-cool">
              Five forms,{" "}
              <span className="font-display italic font-normal text-alert">
                one shared workflow.
              </span>
            </h2>
            <p className="mt-5 max-w-md font-editorial text-[16px] leading-[1.65] text-cool/70">
              Clinical definitions match the published Protocol v3.3 exactly.
              Calculated fields, branching logic, and a 20-row synthetic
              sample dataset are all included so your first import validates
              cleanly.
            </p>
          </div>

          <div className="md:col-span-8">
            <ul className="divide-y divide-grid border-y border-grid">
              {forms.map((f) => (
                <li
                  key={f.name}
                  className="group grid grid-cols-12 items-start gap-4 py-6 transition-colors hover:bg-panel-hi/40"
                >
                  <span className="col-span-2 font-mono-editorial text-[12.5px] text-stone md:col-span-1">
                    {f.n}
                  </span>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="font-editorial text-[18px] font-medium text-cool">
                      {f.name}
                    </h3>
                    <p className="mt-1.5 max-w-2xl font-editorial text-[15px] leading-[1.6] text-cool/70">
                      {f.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
