import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16 relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-chart-1/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <Badge className="mx-auto w-fit text-sm px-4 py-1.5" variant="secondary">
          <span className="inline-block animate-pulse mr-2">⚡</span>
          Intent-Based Trading on Solana
        </Badge>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-chart-1 to-primary bg-clip-text text-transparent animate-gradient">
            Welcome to FairSwap
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 pt-4">
            <p className="text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed">
              Experience the next generation of{" "}
              <span className="text-primary font-semibold">decentralized trading</span>
            </p>

            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-4">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                FairSwap uses <span className="text-primary font-semibold">intent-based architecture</span> where
                searchers compete in auctions to give you the best execution prices.
              </p>

              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">No sandwich attacks</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">No MEV extraction</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Fair & transparent</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href="/swap-intent">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
              Start Trading
              <span className="ml-2">→</span>
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-primary/5">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">0ms</div>
            <div className="text-xs text-muted-foreground">Avg Settlement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-xs text-muted-foreground">MEV Protected</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">$0</div>
            <div className="text-xs text-muted-foreground">Total Volume</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-3">
              🎯
            </div>
            <CardTitle className="text-xl">Intent-Based</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Submit your trade intent, not the execution path. Searchers
              compete to fill your order at the best possible price.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-3">
              🔒
            </div>
            <CardTitle className="text-xl">MEV Protection</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Built-in protection against sandwich attacks and frontrunning
              through competitive auction mechanisms.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-3">
              💰
            </div>
            <CardTitle className="text-xl">Best Execution</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Competitive auctions ensure you get optimal prices with minimal
              slippage on every trade.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* How It Works */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-muted-foreground text-lg">Four simple steps to better trading</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                1
              </div>
              <CardTitle className="text-xl">Connect Wallet</CardTitle>
              <CardDescription className="text-base">
                Connect your Solana wallet (Phantom, Solflare, or Ledger) to get started
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                2
              </div>
              <CardTitle className="text-xl">Submit Intent</CardTitle>
              <CardDescription className="text-base">
                Specify what you want to swap, amount, and your slippage tolerance
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                3
              </div>
              <CardTitle className="text-xl">Auction Live</CardTitle>
              <CardDescription className="text-base">
                Searchers compete in real-time to provide the best execution for your trade
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                4
              </div>
              <CardTitle className="text-xl">Get Results</CardTitle>
              <CardDescription className="text-base">
                Receive your tokens at the best available price with full transparency
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <Card className="bg-gradient-to-br from-primary/10 via-chart-1/10 to-primary/5 border-primary/30 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
          <CardHeader className="relative">
            <CardTitle className="text-3xl md:text-4xl font-bold">
              Ready to experience fair trading?
            </CardTitle>
            <CardDescription className="text-lg md:text-xl pt-2">
              Connect your wallet and submit your first swap intent in seconds
            </CardDescription>
          </CardHeader>
          <CardContent className="relative pb-8">
            <Link href="/swap-intent">
              <Button size="lg" className="text-lg px-10 py-7 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                Get Started Now
                <span className="ml-2 text-xl">→</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
