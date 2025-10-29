"use client";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { usePathname } from "next/navigation";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active =
    pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
        active 
          ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-300 border border-blue-500/50" 
          : "text-gray-400 hover:text-blue-300 hover:bg-blue-500/10"
      }`}
    >
      {label}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-500/20 backdrop-blur-xl bg-black/80 supports-[backdrop-filter]:bg-black/60 shadow-lg shadow-blue-500/10">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white border border-blue-400/50 box-glow-blue group-hover:scale-110 transition-transform">
            ⚡
          </div>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient text-glow-blue text-2xl font-extrabold">
            FairSwap
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/swap-intent" label="Swap" />
          <NavLink href="/dashboard" label="My Intents" />
          <NavLink href="/about" label="About" />
        </nav>
        <div className="flex items-center gap-3">
          <WalletMultiButton className="!bg-gradient-to-r !from-blue-600 !to-purple-600 hover:!from-blue-500 hover:!to-purple-500 !text-white !rounded-lg !px-4 !py-2 !h-auto !font-medium !transition-all !border !border-blue-400/50 !shadow-lg !shadow-blue-500/30 hover:!shadow-blue-500/50 hover:!scale-105" />
        </div>
      </div>
    </header>
  );
}
