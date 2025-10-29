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
      <section className="text-center space-y-8 py-16 relative animate-slide-in-up">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        {/* <Badge className="mx-auto w-fit text-sm px-4 py-1.5 border-glow animate-scale-in" variant="secondary">
          <span className="inline-block animate-pulse mr-2">⚡</span>
          Intent-Based Trading on Solana
        </Badge> */}

        <div className="space-y-4 animate-float">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient text-glow-blue">
            Welcome to FairSwap
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 pt-4">
            <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
              Experience the next generation of{" "}
              <span className="text-blue-400 font-bold text-glow-blue">decentralized trading</span>
            </p>

            <div className="bg-gradient-to-br from-blue-950/40 to-purple-950/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 space-y-4 box-glow-blue">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                FairSwap uses <span className="text-purple-400 font-bold text-glow-purple">intent-based architecture</span> where
                searchers compete in auctions to give you the best execution prices.
              </p>

              {/* <div className="grid md:grid-cols-3 gap-4 pt-2">
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
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-scale-in">
          <Link href="/swap-intent">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-glow shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
              Start Trading
              <span className="ml-2">→</span>
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-400 transition-all">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-950/30 to-transparent border border-blue-500/20 hover:border-blue-400/40 transition-all">
            <div className="text-4xl font-extrabold text-blue-400 text-glow-blue animate-glow">0ms</div>
            <div className="text-xs text-gray-400 mt-2">Avg Settlement</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-950/30 to-transparent border border-purple-500/20 hover:border-purple-400/40 transition-all">
            <div className="text-4xl font-extrabold text-purple-400 text-glow-purple animate-glow">100%</div>
            <div className="text-xs text-gray-400 mt-2">MEV Protected</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-950/30 to-transparent border border-cyan-500/20 hover:border-cyan-400/40 transition-all">
            <div className="text-4xl font-extrabold text-cyan-400 text-glow-blue animate-glow">$0</div>
            <div className="text-xs text-gray-400 mt-2">Total Volume</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="border-blue-500/30 hover:border-blue-400/60 transition-all hover:shadow-2xl hover:shadow-blue-500/20 bg-gradient-to-br from-blue-950/30 to-transparent backdrop-blur-sm group animate-slide-in-up">
          <CardHeader>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform border border-blue-400/30 box-glow-blue">
              🎯
            </div>
            <CardTitle className="text-2xl font-bold text-blue-300">Intent-Based</CardTitle>
            <CardDescription className="text-base leading-relaxed text-gray-300">
              Submit your trade intent, not the execution path. Searchers
              compete to fill your order at the best possible price.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-purple-500/30 hover:border-purple-400/60 transition-all hover:shadow-2xl hover:shadow-purple-500/20 bg-gradient-to-br from-purple-950/30 to-transparent backdrop-blur-sm group animate-slide-in-up" style={{animationDelay: '0.1s'}}>
          <CardHeader>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform border border-purple-400/30">
              🔒
            </div>
            <CardTitle className="text-2xl font-bold text-purple-300">MEV Protection</CardTitle>
            <CardDescription className="text-base leading-relaxed text-gray-300">
              Built-in protection against sandwich attacks and frontrunning
              through competitive auction mechanisms.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-cyan-500/30 hover:border-cyan-400/60 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 bg-gradient-to-br from-cyan-950/30 to-transparent backdrop-blur-sm group animate-slide-in-up" style={{animationDelay: '0.2s'}}>
          <CardHeader>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform border border-cyan-400/30">
              💰
            </div>
            <CardTitle className="text-2xl font-bold text-cyan-300">Best Execution</CardTitle>
            <CardDescription className="text-base leading-relaxed text-gray-300">
              Competitive auctions ensure you get optimal prices with minimal
              slippage on every trade.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* How It Works */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient text-glow-blue">How It Works</h2>
          <p className="text-gray-400 text-lg">Four simple steps to better trading</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-blue-500/30 relative overflow-hidden group hover:border-blue-400/60 transition-all bg-gradient-to-br from-blue-950/20 to-transparent hover:shadow-xl hover:shadow-blue-500/20 animate-slide-in-up">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-bl-full" />
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform border-2 border-blue-400/50 shadow-lg shadow-blue-500/50">
                1
              </div>
              <CardTitle className="text-xl font-bold text-blue-300">Connect Wallet</CardTitle>
              <CardDescription className="text-base text-gray-300">
                Connect your Solana wallet (Phantom, Solflare, or Ledger) to get started
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-500/30 relative overflow-hidden group hover:border-purple-400/60 transition-all bg-gradient-to-br from-purple-950/20 to-transparent hover:shadow-xl hover:shadow-purple-500/20 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 rounded-bl-full" />
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform border-2 border-purple-400/50 shadow-lg shadow-purple-500/50">
                2
              </div>
              <CardTitle className="text-xl font-bold text-purple-300">Submit Intent</CardTitle>
              <CardDescription className="text-base text-gray-300">
                Specify what you want to swap, amount, and your slippage tolerance
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-cyan-500/30 relative overflow-hidden group hover:border-cyan-400/60 transition-all bg-gradient-to-br from-cyan-950/20 to-transparent hover:shadow-xl hover:shadow-cyan-500/20 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-600/10 rounded-bl-full" />
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/50">
                3
              </div>
              <CardTitle className="text-xl font-bold text-cyan-300">Auction Live</CardTitle>
              <CardDescription className="text-base text-gray-300">
                Searchers compete in real-time to provide the best execution for your trade
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-green-500/30 relative overflow-hidden group hover:border-green-400/60 transition-all bg-gradient-to-br from-green-950/20 to-transparent hover:shadow-xl hover:shadow-green-500/20 animate-slide-in-up" style={{animationDelay: '0.3s'}}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-600/10 rounded-bl-full" />
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform border-2 border-green-400/50 shadow-lg shadow-green-500/50">
                4
              </div>
              <CardTitle className="text-xl font-bold text-green-300">Get Results</CardTitle>
              <CardDescription className="text-base text-gray-300">
                Receive your tokens at the best available price with full transparency
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 animate-scale-in">
        <Card className="bg-gradient-to-br from-blue-950/40 via-purple-950/40 to-blue-950/30 border-blue-500/40 shadow-2xl relative overflow-hidden border-glow">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <CardHeader className="relative">
            <CardTitle className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient text-glow-blue">
              Ready to experience fair trading?
            </CardTitle>
            <CardDescription className="text-lg md:text-xl pt-2 text-gray-300">
              Connect your wallet and submit your first swap intent in seconds
            </CardDescription>
          </CardHeader>
          <CardContent className="relative pb-8">
            <Link href="/swap-intent">
              <Button size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 border-glow">
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
