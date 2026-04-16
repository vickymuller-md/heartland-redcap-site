import { Masthead } from "@/components/masthead";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { FormsOverview } from "@/components/forms-overview";
import { Quickstart } from "@/components/quickstart";
import { Foundation } from "@/components/foundation";
import { ValidationStudy } from "@/components/validation-study";
import { Citation } from "@/components/citation";
import { Colophon } from "@/components/colophon";

export default function Home() {
  return (
    <>
      <Masthead />
      <Hero />
      <Metrics />
      <FormsOverview />
      <Quickstart />
      <Foundation />
      <ValidationStudy />
      <Citation />
      <Colophon />
    </>
  );
}
