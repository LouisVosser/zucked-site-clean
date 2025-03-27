import React, { useState } from "react";

export default function ZuckedLandingPage() {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "46toCfWoxY1vHxkMUB8dd9Z2hbaPqBWiC8dPgBHomoon";

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1e1e2f] to-[#2c2c54] text-white font-sans">
      <header className="w-full">
        <img
          src="/zucked-banner.png"
          alt="$ZUCKED Banner"
          className="w-full object-cover max-h-[450px] shadow-lg"
        />
      </header>

      <section className="text-center py-12 px-4">
        <h1 className="text-6xl font-extrabold tracking-tight">$ZUCKED</h1>
        <p className="text-xl max-w-2xl mx-auto mt-4 text-gray-300">
          A meme coin for the shadowbanned, the censored, and the Solana speed demons. You've officially been ZUCKED.
        </p>
      </section>

      <section className="py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Token Contract</h2>
        <div className="bg-[#3a3a5d] inline-block px-4 py-3 rounded-xl font-mono text-sm relative">
          {tokenAddress}
          <button
            onClick={handleCopy}
            className="ml-4 text-xs bg-green-500 hover:bg-green-400 text-black px-3 py-1 rounded"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </section>

      <section className="py-10 px-6 bg-white/5 backdrop-blur-sm rounded-xl max-w-4xl mx-auto shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#3a3a5d] p-6 rounded-lg shadow">
            <p><strong>Total Supply:</strong> 1,000,000,000</p>
            <p><strong>Tax:</strong> 0/0</p>
            <p><strong>Ownership:</strong> Renounced</p>
            <p><strong>Liquidity:</strong> Burned Forever</p>
            <p><strong>Chain:</strong> Solana (SPL Token)</p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">How to Buy</h2>
        <ol className="list-decimal text-left max-w-xl mx-auto text-gray-200 space-y-2 text-lg">
          <li>Install the <strong>Phantom Wallet</strong></li>
          <li>Fund your wallet with <strong>SOL</strong></li>
          <li>Go to <a className="text-blue-400 underline" href="https://jup.ag" target="_blank" rel="noopener noreferrer">Jupiter</a> or <a className="text-blue-400 underline" href="https://bonkbot.io" target="_blank" rel="noopener noreferrer">BonkSwap</a></li>
          <li>Paste the token address</li>
          <li>Swap SOL for $ZUCKED</li>
        </ol>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Live Chart</h2>
        <iframe
          src="https://dexscreener.com/solana/46tocfwoxy1vhxkmub8dd9z2hbapqbwic8dpgbhomoon?embed=1&theme=dark"
          className="w-full max-w-4xl mx-auto h-[500px] rounded-xl border-2 border-[#3a3a5d]"
          allowFullScreen
        />
      </section>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Roadmap</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-left text-gray-300">
          <p>✅ Q1 – Get ZUCKED goes live. Memes fly. Liquidity locked. Degens unite.</p>
          <p>✅ Q2 – Twitter raids. Telegram cult formation. First influencer gets ZUCKED.</p>
          <p>🚀 Q3 – BonkBot integration. Trending on DEXScreener. VCs still confused.</p>
          <p>🌕 Q4 – Netflix documentary: "Zucked: How the Internet Memed a Coin to Mars"</p>
        </div>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Join the Cult</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://twitter.com/zuckedsol" className="bg-yellow-400 text-black px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition">Twitter</a>
          <a href="https://t.me/zuckedsol" className="bg-green-500 px-6 py-2 rounded-full shadow hover:bg-green-400 transition">Telegram</a>
          <a href="https://dexscreener.com/solana/46tocfwoxy1vhxkmub8dd9z2hbapqbwic8dpgbhomoon" className="bg-blue-500 px-6 py-2 rounded-full shadow hover:bg-blue-400 transition">DEX Screener</a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400">
        &copy; 2025 Zucked. All rights reserved. This site is for entertainment purposes only.
      </footer>
    </main>
  );
}
