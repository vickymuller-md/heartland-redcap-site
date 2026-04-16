import Link from "next/link";

export function Colophon() {
  return (
    <footer className="border-t border-grid bg-terminal-deep">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-stone">
              HEARTLAND Protocol · REDCap Template
            </p>
            <p className="mt-3 font-editorial text-[14.5px] leading-[1.6] text-cool/75">
              Authored by{" "}
              <Link
                href="https://orcid.org/0009-0009-1099-5690"
                className="underline decoration-alert/50 underline-offset-4 transition-colors hover:text-alert"
              >
                Vicky Muller Ferreira, MD
              </Link>
              . Released under the MIT License. Clinical disclaimer: this
              template is non-clinical reference material — local IRB
              approval, informed consent, and clinical oversight remain the
              responsibility of the implementing institution.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-stone">
              Resources
            </p>
            <ul className="mt-3 space-y-2 font-editorial text-[14px]">
              <li>
                <Link
                  href="https://github.com/vickymuller-md/heartland-redcap-template"
                  className="text-cool transition-colors hover:text-alert"
                >
                  GitHub repository
                </Link>
              </li>
              <li>
                <Link
                  href="https://doi.org/10.5281/zenodo.18566403"
                  className="text-cool transition-colors hover:text-alert"
                >
                  Protocol (Zenodo)
                </Link>
              </li>
              <li>
                <Link
                  href="https://app.heartlandprotocol.org"
                  className="text-cool transition-colors hover:text-alert"
                >
                  Clinical decision app
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono-editorial text-[11px] uppercase tracking-[0.2em] text-stone">
              Contact
            </p>
            <p className="mt-3 font-editorial text-[14px] text-cool/80">
              <Link
                href="mailto:vickymuller@heartlandprotocol.org"
                className="transition-colors hover:text-alert"
              >
                vickymuller@heartlandprotocol.org
              </Link>
            </p>
            <p className="mt-4 font-editorial text-[12.5px] text-stone">
              Site: Next.js + Tailwind · Deployed on Vercel.
              <br />
              © 2026 Vicky Muller Ferreira.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
