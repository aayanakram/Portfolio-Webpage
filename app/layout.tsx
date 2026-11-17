import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  /* Lets the link preview image resolve to a full address. Change this if the site moves. */
  metadataBase: new URL("https://aayanakram.vercel.app"),
  openGraph: {
    title: "Aayan Akram | Engineering Portfolio",
    description: "I build systems where software meets hardware.",
    url: "/",
    siteName: "Aayan Akram",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  title: "Aayan Akram | Engineering Portfolio",
  description:
    "Engineering portfolio for Aayan Akram, a Computer Engineering student focused on embedded systems, drones, autonomous platforms, and signal processing.",
  keywords: [
    "Aayan Akram",
    "Computer Engineering",
    "embedded systems",
    "UAV",
    "drones",
    "signal processing",
    "engineering portfolio",
  ],
};

/* Runs before the first paint so the page never flashes the wrong theme. Light is the default; dark is used only after the visitor picks it. */
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t="light";document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
