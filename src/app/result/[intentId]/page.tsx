"use client";
import { getIntent } from "@/lib/intents";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ResultPage({
  params,
}: {
  params: { intentId: string };
}) {
  const intent = getIntent(params.intentId);

  if (!intent) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Intent Not Found</CardTitle>
            <CardDescription>
              The intent you&apos;re looking for doesn&apos;t exist.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/swap-intent">
              <Button>Create New Intent</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isSuccess = intent.status === "settled";

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Transaction Result</h1>
        <p className="text-muted-foreground">
          Final execution details for your swap intent
        </p>
      </div>

      {/* Result Summary */}
      <Card className={isSuccess ? "border-green-500/20 bg-green-500/5" : ""}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">
              {isSuccess ? "✅ Swap Successful" : "⏳ Swap Status"}
            </CardTitle>
            <Badge variant={isSuccess ? "default" : "secondary"}>
              {intent.status.toUpperCase()}
            </Badge>
          </div>
          <CardDescription>
            {isSuccess
              ? "Your swap has been executed successfully through the auction mechanism"
              : "Current status of your swap intent"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Transaction Details */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">From Token</p>
              <p className="font-mono text-sm break-all">{intent.fromMint}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">To Token</p>
              <p className="font-mono text-sm break-all">{intent.toMint}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Amount Swapped</p>
              <p className="font-semibold text-lg">{intent.amount}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                Slippage Tolerance
              </p>
              <p className="font-semibold">
                {intent.slippageBps} bps (
                {(intent.slippageBps / 100).toFixed(2)}%)
              </p>
            </div>
          </div>

          {/* Transaction Link */}
          {intent.tx ? (
            <div className="pt-4 border-t space-y-3">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Transaction Signature
                </p>
                <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                  <p className="font-mono text-xs break-all flex-1">
                    {intent.tx}
                  </p>
                  <a
                    href={`https://solscan.io/tx/${intent.tx}?cluster=devnet`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <Button size="sm" variant="outline">
                      View on Solscan →
                    </Button>
                  </a>
                </div>
              </div>

              <Card className="bg-muted/50 border-dashed">
                <CardContent className="pt-4">
                  <div className="flex gap-2 items-start">
                    <Badge variant="secondary" className="mt-0.5">
                      ℹ️ Demo
                    </Badge>
                    <p className="text-xs text-muted-foreground">
                      In this prototype, the transaction signature is simulated.
                      In production, this will be a real on-chain transaction
                      that you can verify on Solscan.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                No transaction available yet.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Auction Metrics */}
      {isSuccess && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Auction Metrics</CardTitle>
            <CardDescription>
              Performance stats from the competitive auction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-2xl font-bold text-green-500">0.42%</p>
                <p className="text-xs text-muted-foreground">Price Impact</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-2xl font-bold">2.1s</p>
                <p className="text-xs text-muted-foreground">Execution Time</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-2xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Competing Bids</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              * Simulated metrics for demonstration
            </p>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <div className="flex gap-4">
        <Link href="/swap-intent" className="flex-1">
          <Button variant="outline" className="w-full">
            Create Another Swap
          </Button>
        </Link>
        <Link href="/dashboard" className="flex-1">
          <Button variant="outline" className="w-full">
            View All Intents
          </Button>
        </Link>
      </div>
    </div>
  );
}
