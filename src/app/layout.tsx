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
    images: [
      {
        url: "/Image/Raralogo.png",
        width: 1200,
        height: 1200,
        alt: "RaraPathways",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaraPathways | Your Gateway to Study, Work & Live Abroad",
    description:
      "Premium consultancy for study abroad admissions, immigration, PR, work visas, tourist visas, and documentation assistance.",
    images: ["/Image/Raralogo.png"],
  },
  icons: {
    icon: "/Image/Raralogo.png",
    apple: "/Image/Raralogo.png",
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
