import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="space-y-6 text-center py-8 relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-10 right-1/3 w-96 h-96 bg-chart-1/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <Badge
          className="mx-auto w-fit text-sm px-4 py-1.5"
          variant="secondary"
        >
          <span className="inline-block animate-pulse mr-2">ℹ️</span>
          About the Project
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-chart-1 to-primary bg-clip-text text-transparent animate-gradient">
          About FairSwap
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          FairSwap is a next-generation intent-based trading protocol built on
          Solana, designed to provide fair execution and MEV protection through
          competitive auctions.
        </p>
      </section>

      {/* What is FairSwap */}
      <Card className="bg-gradient-to-br from-primary/10 via-chart-1/10 to-primary/5 border-primary/30 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full" />
        <CardHeader className="relative">
          <CardTitle className="text-2xl flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            What is Intent-Based Trading?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed relative">
          <p>
            Traditional DEXs require users to specify the exact execution path
            for their trades, making them vulnerable to MEV (Maximal Extractable
            Value) attacks like sandwich attacks and frontrunning. FairSwap
            takes a different approach.
          </p>
          <p>
            With FairSwap, you simply express your{" "}
            <strong className="text-foreground">intent</strong>: what you want
            to swap and your tolerance for slippage. Instead of executing
            directly on-chain, your intent is broadcast to a network of
            searchers who compete to fulfill it.
          </p>
          <p>
            Searchers submit sealed bids in an auction, and the best execution
            wins. This means:
          </p>
          <ul className="list-none space-y-2 ml-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Better prices through competition
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Protection from sandwich attacks
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              No frontrunning or MEV extraction
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Transparent, fair execution
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Architecture */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            System Architecture
          </h2>
          <p className="text-muted-foreground">
            A robust three-layer system for MEV-protected trading
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                💻
              </div>
              <CardTitle className="text-lg">Frontend Client</CardTitle>
              <CardDescription className="leading-relaxed">
                Next.js app with Solana wallet adapters for seamless user
                interaction
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground relative">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Wallet integration (Phantom, Solflare, etc.)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Intent submission interface
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Real-time status tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Transaction history
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                ⛓️
              </div>
              <CardTitle className="text-lg">On-Chain Program</CardTitle>
              <CardDescription className="leading-relaxed">
                Smart contract on Solana handling intent storage and settlement
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground relative">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Intent escrow accounts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Auction state management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Bid verification
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Settlement execution
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                🔄
              </div>
              <CardTitle className="text-lg">Off-Chain Relayer</CardTitle>
              <CardDescription className="leading-relaxed">
                Auction coordinator and searcher network infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground relative">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Auction orchestration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Bid collection & validation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Winner selection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Settlement triggering
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How It Works */}
      <Card className="bg-gradient-to-br from-primary/10 via-chart-1/10 to-primary/5 border-primary/30 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <CardHeader className="relative">
          <CardTitle className="text-2xl flex items-center gap-2">
            <span className="text-2xl">🔄</span>
            The Auction Flow
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                1
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">User Submits Intent</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You specify what tokens to swap, amount, and maximum
                  acceptable slippage. Your tokens are escrowed on-chain.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                2
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Auction Begins</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The intent is broadcast to a network of searchers. They
                  analyze liquidity sources and compute optimal execution paths.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                3
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Searchers Compete</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Searchers submit sealed bids specifying the output amount they
                  can guarantee. The highest bid (best execution) wins.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                4
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Settlement</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The winning searcher executes the swap on-chain. You receive
                  your tokens at the best available price, protected from MEV.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            Why Choose FairSwap?
          </h2>
          <p className="text-muted-foreground">
            Experience the next generation of decentralized trading
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-2 text-xl">
                🛡️ MEV Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed relative">
              Intent-based architecture makes sandwich attacks and frontrunning
              economically unviable. Your trade is protected by design.
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-2 text-xl">
                💰 Better Prices
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed relative">
              Competitive auctions ensure you get the best execution price.
              Searchers compete to win your order, driving prices in your favor.
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-2 text-xl">
                ⚡ Fast Execution
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed relative">
              Auctions settle quickly on Solana&apos;s high-performance
              blockchain. Get your tokens in seconds, not minutes.
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-2 text-xl">
                🔍 Transparent
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed relative">
              All auction results and settlements are on-chain and verifiable.
              You can see exactly how your trade was executed.
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tech Stack */}
      <Card className="bg-gradient-to-br from-primary/10 via-chart-1/10 to-primary/5 border-primary/30 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full" />
        <CardHeader className="relative">
          <CardTitle className="text-2xl flex items-center gap-2">
            <span className="text-2xl">⚙️</span>
            Technology Stack
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <span>💻</span>
                Frontend
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Next.js 15 (App Router)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Tailwind CSS v4
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  shadcn/ui components
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Solana Wallet Adapter
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <span>⛓️</span>
                Blockchain
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Solana (Devnet/Mainnet)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Anchor framework (coming soon)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  @solana/web3.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  SPL Token program
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <Card className="text-center bg-gradient-to-br from-primary/5 to-chart-1/5 border-primary/20 border-dashed shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <CardContent className="pt-6 space-y-3 relative">
          <div className="text-4xl">🚀</div>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            Prototype Stage
          </Badge>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            FairSwap is currently in{" "}
            <strong className="text-foreground">prototype stage</strong>. Smart
            contract integration and searcher network infrastructure are under
            active development.
          </p>
          <p className="text-sm text-muted-foreground pt-2">
            Built with <span className="text-red-500">❤️</span> by the FairSwap
            team
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
