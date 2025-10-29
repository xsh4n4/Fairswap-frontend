"use client";
import { listIntents } from "@/lib/intents";
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

export default function DashboardPage() {
  const intents = listIntents();

  const statusVariants = {
    pending: "secondary" as const,
    auctioning: "default" as const,
    settled: "default" as const,
    failed: "destructive" as const,
  };

  const statusEmoji = {
    pending: "⏳",
    auctioning: "🔄",
    settled: "✅",
    failed: "❌",
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-4 py-6 relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-chart-1/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* <Badge className="w-fit text-sm px-4 py-1.5" variant="secondary">
          <span className="inline-block animate-pulse mr-2">📊</span>
          Intent Dashboard
        </Badge> */}

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-chart-1 to-primary bg-clip-text text-transparent animate-gradient">
            My Intents
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Track all your swap intents and their execution status in one place
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card className="border-primary/20 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="pb-3 relative">
            <CardDescription className="flex items-center gap-2">
              <span className="text-lg">📋</span>
              Total Intents
            </CardDescription>
            <CardTitle className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
              {intents.length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-primary/20 shadow-lg shadow-green-500/5 hover:shadow-xl hover:shadow-green-500/10 transition-all relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="pb-3 relative">
            <CardDescription className="flex items-center gap-2">
              <span className="text-lg">✅</span>
              Settled
            </CardDescription>
            <CardTitle className="text-4xl font-bold bg-gradient-to-br from-green-500 to-green-600 bg-clip-text text-transparent">
              {intents.filter((i) => i.status === "settled").length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-primary/20 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 transition-all relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="pb-3 relative">
            <CardDescription className="flex items-center gap-2">
              <span className="text-lg">🔄</span>
              In Progress
            </CardDescription>
            <CardTitle className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent">
              {
                intents.filter(
                  (i) => i.status === "auctioning" || i.status === "pending"
                ).length
              }
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-primary/20 shadow-lg shadow-red-500/5 hover:shadow-xl hover:shadow-red-500/10 transition-all relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="pb-3 relative">
            <CardDescription className="flex items-center gap-2">
              <span className="text-lg">❌</span>
              Failed
            </CardDescription>
            <CardTitle className="text-4xl font-bold bg-gradient-to-br from-red-500 to-red-600 bg-clip-text text-transparent">
              {intents.filter((i) => i.status === "failed").length}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Intents List */}
      <Card className="bg-gradient-to-br from-primary/10 via-chart-1/10 to-primary/5 border-primary/30 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full" />
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="text-2xl">📜</span>
                Recent Swap Intents
              </CardTitle>
              <CardDescription className="text-base mt-2">
                View and manage your trading history
              </CardDescription>
            </div>
            <Link href="/swap-intent">
              <Button className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <span className="mr-2">+</span>
                New Intent
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="relative">
          {intents.length === 0 ? (
            <div className="text-center py-16 space-y-6 relative">
              <div className="text-7xl animate-bounce">📊</div>
              <div className="space-y-3">
                <p className="text-xl font-semibold">No intents yet</p>
                <p className="text-base text-muted-foreground max-w-md mx-auto">
                  Create your first swap intent to get started with FairSwap and
                  experience MEV-protected trading
                </p>
              </div>
              <Link href="/swap-intent">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  <span className="mr-2">🚀</span>
                  Create Swap Intent
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {intents.map((intent) => (
                <Card
                  key={intent.id}
                  className="border-primary/20 bg-background/60 backdrop-blur-sm hover:bg-background/80 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="pt-6 relative">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge
                            variant={statusVariants[intent.status]}
                            className="text-sm px-3 py-1"
                          >
                            {statusEmoji[intent.status]}{" "}
                            {intent.status.toUpperCase()}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {new Date(intent.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-base font-semibold flex items-center gap-2">
                            <span className="text-primary">📤</span>
                            {intent.fromMint.slice(0, 8)}
                            <span className="text-muted-foreground">→</span>
                            <span className="text-primary">📥</span>
                            {intent.toMint.slice(0, 8)}
                          </p>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <span className="font-medium text-foreground">
                                💰
                              </span>
                              Amount:{" "}
                              <span className="font-semibold text-foreground">
                                {intent.amount}
                              </span>
                            </span>
                            <span className="flex items-center gap-1.5">
                              <span className="font-medium text-foreground">
                                ⚙️
                              </span>
                              Slippage:{" "}
                              <span className="font-semibold text-foreground">
                                {intent.slippageBps} bps
                              </span>
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded w-fit">
                          ID: {intent.id.slice(0, 16)}
                        </p>
                      </div>
                      <div className="flex sm:flex-col gap-2 sm:justify-center sm:min-w-[140px]">
                        <Link
                          href={`/intent-status/${intent.id}`}
                          className="flex-1 sm:flex-none"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all"
                          >
                            <span className="mr-1">👁️</span>
                            View Status
                          </Button>
                        </Link>
                        {intent.status === "settled" && (
                          <Link
                            href={`/result/${intent.id}`}
                            className="flex-1 sm:flex-none"
                          >
                            <Button
                              size="sm"
                              className="w-full shadow-md hover:shadow-lg transition-all"
                            >
                              <span className="mr-1">📊</span>
                              View Result
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
