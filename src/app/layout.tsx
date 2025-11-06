import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vrindavan Live | Experience Krishna's Divine Abode",
  description: "Discover the sacred temples, holy places, and spiritual essence of Vrindavan. Plan your pilgrimage with hotel bookings, temple tours, and guided services.",
  keywords: "Vrindavan, Krishna, temples, pilgrimage, spiritual tourism, Banke Bihari, ISKCON, Prem Mandir, Yamuna, devotion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}