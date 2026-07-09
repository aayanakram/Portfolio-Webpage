import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
