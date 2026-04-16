import Link from "next/link";

export function Citation() {
  return (
    <section className="bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
        <div className="rounded-2xl border border-grid bg-panel-hi/50 p-8 md:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-stone">
                If you use this
              </p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.4rem)] font-editorial font-semibold leading-[1.1] tracking-[-0.02em] text-cool">
                Please cite the template{" "}
                <span className="font-display italic font-normal text-alert">
                  and the protocol.
                </span>
              </h2>
              <p className="mt-5 font-editorial text-[15px] leading-[1.6] text-cool/70">
                Machine-readable citation is in{" "}
                <code className="rounded bg-panel px-1.5 py-0.5 font-mono-editorial text-[13px]">
                  CITATION.cff
                </code>{" "}
                at the repo root. Zenodo DOI for this release will be wired in
                once the GitHub → Zenodo integration mints it.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-xl border border-grid bg-panel">
                <div className="flex items-center justify-between border-b border-grid px-5 py-3">
                  <span className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-stone">
                    bibtex
                  </span>
                  <Link
                    href="https://github.com/vickymuller-md/heartland-redcap-template/blob/main/CITATION.cff"
                    className="font-editorial text-[12px] text-cool/80 transition-colors hover:text-alert"
                  >
                    CITATION.cff ↗
                  </Link>
                </div>
                <pre className="overflow-x-auto px-5 py-4 font-mono-editorial text-[12.5px] leading-[1.7] text-cool">
                  <code>{`@misc{ferreira_heartland_redcap_2026,
  author       = {Ferreira, Vicky Muller},
  title        = {{HEARTLAND Protocol REDCap
                   Instrument Template, v1.0.0}},
  year         = {2026},
  publisher    = {Zenodo},
  doi          = {10.5281/zenodo.<pending>},
  url          = {https://redcap.heartlandprotocol.org}
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
