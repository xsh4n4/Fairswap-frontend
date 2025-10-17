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
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground ${
        active ? "bg-accent text-accent-foreground" : "text-muted-foreground"
      }`}
    >
      {label}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-xl bg-background/80 supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center text-primary-foreground">
            ⚡
          </div>
          <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            FairSwap
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/swap-intent" label="Swap" />
          <NavLink href="/dashboard" label="My Intents" />
          <NavLink href="/about" label="About" />
        </nav>
        <div className="flex items-center gap-3">
          <WalletMultiButton className="!bg-primary !text-primary-foreground !rounded-lg !px-4 !py-2 !h-auto !font-medium hover:!bg-primary/90 !transition-all" />
        </div>
      </div>
    </header>
  );
}
