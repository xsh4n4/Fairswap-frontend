import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

export interface SubmitIntentParams {
  connection: Connection;
  payer: PublicKey;
  // Typically from wallet adapter
  sendTransaction: (
    tx: Transaction,
    connection: Connection,
    options?: { skipPreflight?: boolean; preflightCommitment?: string }
  ) => Promise<string>;
  // Intent data
  fromMint: string;
  toMint: string;
  amount: number;
  slippageBps: number;
}

// Placeholder: uses Memo program to create a lightweight signed tx so you can test wallet flow.
// Replace with your actual program instructions.
export async function submitSwapIntentOnchain(
  params: SubmitIntentParams
): Promise<string> {
  const {
    connection,
    payer,
    sendTransaction,
    fromMint,
    toMint,
    amount,
    slippageBps,
  } = params;

  const memoProgramId = new PublicKey(
    "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
  );
  const memo = `FairSwap intent: ${fromMint} -> ${toMint}, amount=${amount}, slippage=${slippageBps}bps`;
  const ix = new TransactionInstruction({
    programId: memoProgramId,
    data: Buffer.from(memo),
    keys: [],
  });

  const tx = new Transaction().add(ix);
  tx.feePayer = payer;

  const signature = await sendTransaction(tx, connection, {
    skipPreflight: true,
  });
  return signature;
}
