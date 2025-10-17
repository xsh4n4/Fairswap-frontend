export type IntentStatus = "pending" | "auctioning" | "settled" | "failed";

export interface SwapIntent {
  id: string;
  fromMint: string;
  toMint: string;
  amount: number;
  slippageBps: number; // e.g. 50 = 0.5%
  status: IntentStatus;
  tx?: string; // signature link when available
  createdAt: number;
}

const STORAGE_KEY = "fairswap:intents";

export function loadIntents(): SwapIntent[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as SwapIntent[]) : [];
}

function saveIntents(intents: SwapIntent[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(intents));
}

export function upsertIntent(intent: SwapIntent) {
  const all = loadIntents();
  const idx = all.findIndex((i) => i.id === intent.id);
  if (idx >= 0) all[idx] = intent;
  else all.unshift(intent);
  saveIntents(all);
}

export function getIntent(id: string): SwapIntent | undefined {
  return loadIntents().find((i) => i.id === id);
}

export function listIntents(): SwapIntent[] {
  return loadIntents().sort((a, b) => b.createdAt - a.createdAt);
}

// Simulated lifecycle: pending -> auctioning -> settled
export async function simulateAuctionLifecycle(id: string) {
  const step = async (update: Partial<SwapIntent>, delayMs: number) => {
    await new Promise((r) => setTimeout(r, delayMs));
    const current = getIntent(id);
    if (!current) return;
    upsertIntent({ ...current, ...update });
  };
  await step({ status: "auctioning" }, 1200);
  await step({ status: "settled", tx: `FAKE_SIG_${id.slice(0, 8)}` }, 1500);
}
