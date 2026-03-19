import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SecureHorizon | Protect What Matters Most",
  description:
    "Get personalized insurance and annuity solutions tailored to your life. Free consultation — no obligation. Protect your family, your income, and your future.",
  keywords: [
    "life insurance",
    "annuities",
    "retirement planning",
    "insurance quotes",
    "financial protection",
    "income protection",
  ],
  openGraph: {
    title: "SecureHorizon | Protect What Matters Most",
    description:
      "Get personalized insurance and annuity solutions. Free consultation — no obligation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
