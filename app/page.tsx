import { Masthead, Colophon } from "@heartland/ui";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { FormsOverview } from "@/components/forms-overview";
import { Quickstart } from "@/components/quickstart";
import { Foundation } from "@/components/foundation";
import { ValidationStudy } from "@/components/validation-study";
import { Citation } from "@/components/citation";

export default function Home() {
  return (
    <>
      <Masthead
        currentSite="redcap"
        navItems={[
          { label: "Forms", href: "#forms" },
          { label: "Quickstart", href: "#quickstart" },
          { label: "Validation", href: "#validation" },
        ]}
        cta={{
          label: "Download instrument",
          href: "https://github.com/vickymuller-md/heartland-redcap-site/releases/latest",
          external: true,
        }}
      />
      <Hero />
      <Metrics />
      <FormsOverview />
      <Quickstart />
      <Foundation />
      <ValidationStudy />
      <Citation />
      <Colophon
        currentSite="redcap"
        description="Pre-built REDCap data dictionary and XML instrument for the HEARTLAND Protocol v3.3. Five forms, 75 fields, weighted risk score (0-18), 12-month follow-up — zero development cost for rural hospitals and research institutions."
        extraBlocks={[
          {
            title: "Instrument",
            links: [
              {
                label: "Download release",
                href: "https://github.com/vickymuller-md/heartland-redcap-site/releases/latest",
                external: true,
              },
              {
                label: "GitHub",
                href: "https://github.com/vickymuller-md/heartland-redcap-site",
                external: true,
              },
            ],
          },
        ]}
      />
    </>
  );
}
