import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./page";

const Readex = Readex_Pro({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "سلامي للصحه النفسيه",
  description: "سلامي للصحه النفسيه احد مشاريع براندريا",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" className="light">
      <body className={Readex.className}>
        <Providers>
          <Header />
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
