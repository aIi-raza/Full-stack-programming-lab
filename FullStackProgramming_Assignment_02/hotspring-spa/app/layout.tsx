import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HotSpring Portable Spas",
  description: "Premium hot tubs and portable spas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: "60vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
