const items = [
  { value: "75", label: "fields" },
  { value: "5", label: "REDCap forms" },
  { value: "0–18", label: "weighted risk score" },
  { value: "3", label: "risk tiers" },
  { value: "12×", label: "monthly follow-ups" },
];

export function Metrics() {
  return (
    <section className="border-y border-grid bg-terminal-deep">
      <div className="mx-auto max-w-[1200px] px-6 py-10 md:py-14">
        <dl className="grid grid-cols-2 gap-y-6 md:grid-cols-5 md:gap-y-0">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-start gap-1">
              <dt className="font-display text-[40px] leading-none text-cool md:text-[48px]">
                {item.value}
              </dt>
              <dd className="font-editorial text-[12.5px] uppercase tracking-[0.18em] text-stone">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
