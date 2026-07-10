import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "RaraPathways | Immigration & Study Abroad Consultancy",
  description:
    "RaraPathways is a Dubai-based immigration and study abroad consultancy helping clients with admissions, PR pathways, work permits, tourist visas, passports, and documentation support.",
  keywords:
    "RaraPathways, study abroad consultancy Dubai, immigration consultants, PR application, work visa, tourist visa, passport documentation",
  openGraph: {
    title: "RaraPathways | Your Gateway to Study, Work & Live Abroad",
    description:
      "Premium consultancy for study abroad admissions, immigration, PR, work visas, tourist visas, and documentation assistance.",
    url: "https://rarapathways.com/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
