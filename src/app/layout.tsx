import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SolanaWalletProvider from "@/components/providers/solana-wallet-provider";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FairSwap - Intent-Based Trading on Solana",
  description:
    "Experience fair, MEV-protected swaps through competitive auctions on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <SolanaWalletProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              {children}
            </main>
            <footer className="border-t border-border/40 py-6 md:py-8">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                  <p>© 2025 FairSwap. Built on Solana.</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Docs
                    </a>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Discord
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </SolanaWalletProvider>
      </body>
    </html>
  );
}
