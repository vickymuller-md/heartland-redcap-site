import type { Metadata } from "next";
import { Inter, Geist, Sora, Instrument_Serif } from "next/font/google";
import "@heartland/ui/css/theme.css";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Sora({
  subsets: ["latin"],
  variable: "--font-mono-editorial",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "HEARTLAND REDCap Instrument · Pre-built data collection for rural heart failure research",
  description:
    "A ready-to-import REDCap data dictionary and XML instrument for the HEARTLAND Protocol v3.3. Five forms, 75 fields, weighted risk score (0-18), 12-month follow-up — zero development cost for rural hospitals and research institutions.",
  metadataBase: new URL("https://redcap.heartlandprotocol.org"),
  openGraph: {
    title: "HEARTLAND REDCap Instrument Template",
    description:
      "Ready-to-import REDCap data dictionary for the HEARTLAND Protocol — built for rural US heart failure research.",
    url: "https://redcap.heartlandprotocol.org",
    siteName: "HEARTLAND Protocol",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        inter.className,
        "font-sans",
        geist.variable,
        sora.variable,
        instrumentSerif.variable,
        mono.variable,
      )}
    >
      <body className="min-h-screen flex flex-col bg-terminal font-editorial text-cool antialiased selection:bg-alert/40 selection:text-cool">
        {children}
      </body>
    </html>
  );
}
