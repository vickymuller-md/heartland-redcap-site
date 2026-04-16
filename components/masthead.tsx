import Link from "next/link";

export function Masthead() {
  return (
    <header className="sticky top-0 z-30 border-b border-grid/80 bg-terminal/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        <Link
          href="https://heartlandprotocol.org"
          className="group flex items-baseline gap-2.5 font-editorial text-[14px] tracking-tight text-cool"
        >
          <span className="font-semibold uppercase tracking-[0.2em]">
            HEARTLAND
          </span>
          <span className="font-display italic text-cool/70 transition-colors group-hover:text-alert">
            / redcap
          </span>
        </Link>

        <nav className="flex items-center gap-7 font-editorial text-[13.5px] text-cool/80">
          <Link
            href="https://heartlandprotocol.org"
            className="hidden transition-colors hover:text-alert sm:inline"
          >
            Protocol
          </Link>
          <Link
            href="https://app.heartlandprotocol.org"
            className="hidden transition-colors hover:text-alert sm:inline"
          >
            App
          </Link>
          <Link
            href="https://github.com/vickymuller-md/heartland-redcap-template"
            className="inline-flex items-center gap-1.5 rounded-full border border-grid bg-panel px-3.5 py-1.5 text-cool transition-colors hover:border-alert hover:text-alert"
          >
            GitHub
            <span aria-hidden>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
