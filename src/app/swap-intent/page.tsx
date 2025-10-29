"use client";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { upsertIntent, simulateAuctionLifecycle } from "@/lib/intents";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import { submitSwapIntentOnchain } from "@/lib/onchain";

export default function SwapIntentPage() {
  const router = useRouter();
  const [fromMint, setFromMint] = useState("");
  const [toMint, setToMint] = useState("");
  const [amount, setAmount] = useState("");
  const [slippageBps, setSlippageBps] = useState("50");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = useCallback(async () => {
    if (!fromMint || !toMint || !amount) return;
    setSubmitting(true);
    const id = crypto.randomUUID();
    // TODO: Replace this block with a real on-chain intent tx
    // Example wiring:
    // const { connection } = useConnection();
    // const { publicKey, sendTransaction } = useWallet();
    // if (!publicKey) throw new Error("Connect wallet");
    // const sig = await submitSwapIntentOnchain({
    //   connection,
    //   payer: publicKey,
    //   sendTransaction,
    //   fromMint,
    //   toMint,
    //   amount: Number(amount),
    //   slippageBps: Number(slippageBps),
    // });
    upsertIntent({
      id,
      fromMint,
      toMint,
      amount: Number(amount),
      slippageBps: Number(slippageBps),
      status: "pending",
      createdAt: Date.now(),
    });
    // Kick off simulated lifecycle in background
    simulateAuctionLifecycle(id);
    router.push(`/intent-status/${id}`);
  }, [fromMint, toMint, amount, slippageBps, router]);

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-8 relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-10 right-1/3 w-96 h-96 bg-chart-1/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* <Badge
          className="mx-auto w-fit text-sm px-4 py-1.5"
          variant="secondary"
        >
          <span className="inline-block animate-pulse mr-2">🎯</span>
          Intent-Based Swaps
        </Badge> */}

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-chart-1 to-primary bg-clip-text text-transparent animate-gradient">
            Create Swap Intent
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Submit your swap intent and let searchers compete to give you the{" "}
            <span className="text-primary font-semibold">
              best execution price
            </span>{" "}
            through our auction mechanism.
          </p>
        </div>
      </section>

      {/* Main Swap Card */}
      <Card className="bg-gradient-to-br from-primary/10 via-chart-1/10 to-primary/5 border-primary/30 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full" />
        <CardHeader className="relative">
          <CardTitle className="text-2xl flex items-center gap-2">
            <span className="text-2xl">💱</span>
            Swap Details
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            Specify the tokens you want to swap and your parameters. Your intent
            will be broadcast to searchers who will compete in an auction.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 relative">
          {/* Token Inputs */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label
                  htmlFor="from-mint"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <span className="text-lg">📤</span>
                  From Token
                </Label>
                <Input
                  id="from-mint"
                  placeholder="So111... (SOL)"
                  value={fromMint}
                  onChange={(e) => setFromMint(e.target.value)}
                  className="h-12 text-base bg-background/80 backdrop-blur-sm border-2 border-primary/30 focus:border-primary focus:bg-background transition-all shadow-sm"
                />
                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  The token you want to swap from
                </p>
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="to-mint"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <span className="text-lg">📥</span>
                  To Token
                </Label>
                <Input
                  id="to-mint"
                  placeholder="USDC mint address"
                  value={toMint}
                  onChange={(e) => setToMint(e.target.value)}
                  className="h-12 text-base bg-background/80 backdrop-blur-sm border-2 border-primary/30 focus:border-primary focus:bg-background transition-all shadow-sm"
                />
                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  The token you want to receive
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label
                  htmlFor="amount"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <span className="text-lg">💰</span>
                  Amount
                </Label>
                <Input
                  id="amount"
                  type="number"
                  min={0}
                  step={0.000001}
                  placeholder="0.0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-12 text-base bg-background/80 backdrop-blur-sm border-2 border-primary/30 focus:border-primary focus:bg-background transition-all shadow-sm"
                />
                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Amount of tokens to swap
                </p>
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="slippage"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <span className="text-lg">⚙️</span>
                  Slippage Tolerance
                </Label>
                <div className="relative">
                  <Input
                    id="slippage"
                    type="number"
                    min={1}
                    max={1000}
                    value={slippageBps}
                    onChange={(e) => setSlippageBps(e.target.value)}
                    className="h-12 text-base bg-background/80 backdrop-blur-sm border-2 border-primary/30 focus:border-primary focus:bg-background transition-all shadow-sm pr-16"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">
                    bps
                  </span>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  50 bps = 0.5% slippage
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 space-y-4">
            <Button
              onClick={onSubmit}
              disabled={submitting || !fromMint || !toMint || !amount}
              className="w-full h-14 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              size="lg"
            >
              {submitting ? (
                <>
                  <span className="inline-block animate-spin mr-2">⏳</span>
                  Submitting Intent...
                </>
              ) : (
                <>
                  Submit Swap Intent
                  <span className="ml-2">→</span>
                </>
              )}
            </Button>

            {/* <Card className="bg-gradient-to-br from-primary/5 to-chart-1/5 border-primary/20 border-dashed">
              <CardContent className="pt-6">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                    ℹ️
                  </div>
                  <div className="space-y-1">
                    <Badge variant="secondary" className="mb-2">
                      Demo Mode
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This is a prototype flow using simulated auctions. In
                      production, this will submit an on-chain intent
                      transaction and real searchers will compete to fill your
                      order.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </CardContent>
      </Card>

      {/* Info Cards */}
      <section className="grid sm:grid-cols-3 gap-6">
        <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
              🎯
            </div>
            <CardTitle className="text-lg">Fair Execution</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Searchers compete in auctions to provide the best price for your
              swap
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
              🔒
            </div>
            <CardTitle className="text-lg">MEV Protected</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Intent-based design prevents frontrunning and sandwich attacks
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <CardTitle className="text-lg">Fast Execution</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Auctions settle quickly with competitive searcher participation
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* How It Works Mini Section */}
      <Card className="bg-gradient-to-br from-primary/10 via-chart-1/10 to-primary/5 border-primary/30 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <CardHeader className="relative">
          <CardTitle className="text-2xl flex items-center gap-2">
            <span className="text-2xl">🔄</span>
            How Your Intent Is Processed
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid sm:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                1
              </div>
              <div className="text-sm font-medium">Submit Intent</div>
              <div className="text-xs text-muted-foreground">
                Your intent goes on-chain
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                2
              </div>
              <div className="text-sm font-medium">Auction Starts</div>
              <div className="text-xs text-muted-foreground">
                Searchers compete
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                3
              </div>
              <div className="text-sm font-medium">Winner Selected</div>
              <div className="text-xs text-muted-foreground">
                Best price wins
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                4
              </div>
              <div className="text-sm font-medium">Swap Executed</div>
              <div className="text-xs text-muted-foreground">
                You receive tokens
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
