"use client";
import { useEffect, useState } from "react";
import { getIntent, SwapIntent } from "@/lib/intents";
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

export default function IntentStatusPage({
  params,
}: {
  params: { intentId: string };
}) {
  const { intentId } = params;
  const [intent, setIntent] = useState<SwapIntent | undefined>(() =>
    getIntent(intentId)
  );

  useEffect(() => {
    const t = setInterval(() => setIntent(getIntent(intentId)), 800);
    return () => clearInterval(t);
  }, [intentId]);

  if (!intent) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Intent Not Found</CardTitle>
            <CardDescription>
              The intent you&apos;re looking for doesn&apos;t exist or has been
              removed.
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

  const statusConfig = {
    pending: {
      label: "⏳ Pending",
      variant: "secondary" as const,
      description:
        "Your intent has been submitted and is awaiting auction participants...",
    },
    auctioning: {
      label: "🔄 Auction Live",
      variant: "default" as const,
      description:
        "Searchers are competing to provide the best execution price for your swap!",
    },
    settled: {
      label: "✅ Settled",
      variant: "default" as const,
      description: "Your swap has been executed successfully!",
    },
    failed: {
      label: "❌ Failed",
      variant: "destructive" as const,
      description: "The swap could not be completed. Please try again.",
    },
  };

  const currentStatus = statusConfig[intent.status];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Intent Status</h1>
        <p className="text-muted-foreground">
          Real-time updates on your swap intent and auction progress
        </p>
      </div>

      {/* Status Card */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Swap Intent</CardTitle>
            <Badge
              variant={currentStatus.variant}
              className="text-sm px-3 py-1"
            >
              {currentStatus.label}
            </Badge>
          </div>
          <CardDescription>{currentStatus.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
              <p className="text-sm text-muted-foreground">Amount</p>
              <p className="font-semibold">{intent.amount}</p>
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

          <div className="pt-4 border-t">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Intent ID</p>
              <p className="font-mono text-xs break-all bg-muted p-2 rounded">
                {intent.id}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Auction Progress */}
      {intent.status !== "settled" && intent.status !== "failed" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Auction Progress</CardTitle>
            <CardDescription>
              Waiting for searchers to submit their bids...
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
              <span className="text-sm text-muted-foreground">
                Processing...
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Settled - View Results */}
      {intent.status === "settled" && (
        <Card className="border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="text-lg">🎉 Swap Complete!</CardTitle>
            <CardDescription>
              Your intent has been successfully fulfilled through the auction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={`/result/${intent.id}`}>
              <Button size="lg" className="w-full">
                View Transaction Details
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Info Timeline */}
      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle className="text-sm">Auction Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                ✓
              </div>
              <div>
                <p className="font-medium text-sm">Intent Submitted</p>
                <p className="text-xs text-muted-foreground">
                  Your swap intent has been broadcast
                </p>
              </div>
            </div>
            <div
              className={`flex gap-3 ${
                intent.status === "pending" ? "opacity-50" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                {intent.status !== "pending" ? "✓" : "2"}
              </div>
              <div>
                <p className="font-medium text-sm">Auction Started</p>
                <p className="text-xs text-muted-foreground">
                  Searchers are competing for your order
                </p>
              </div>
            </div>
            <div
              className={`flex gap-3 ${
                intent.status !== "settled" ? "opacity-50" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                {intent.status === "settled" ? "✓" : "3"}
              </div>
              <div>
                <p className="font-medium text-sm">Execution Complete</p>
                <p className="text-xs text-muted-foreground">
                  Best bid wins and swap is executed
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
