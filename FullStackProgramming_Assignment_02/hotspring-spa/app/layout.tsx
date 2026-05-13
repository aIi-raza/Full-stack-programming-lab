import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/lib/store";

export const metadata: Metadata = {
  title: "Home | HotSpring Portable Spas",
  description: "Premium hot tubs and portable spas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <StoreProvider>
          <Header />
          <main style={{ minHeight: "60vh" }}>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
