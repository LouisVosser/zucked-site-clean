import React from "react";

export default function ZuckedLandingPage() {
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
          A meme coin for the shadowbanned, the censored, the memelords.
          Built by bots. Fueled by rage. You’ve officially been ZUCKED.
        </p>
      </section>

      <section className="py-12 px-6 bg-white/5 backdrop-blur-sm rounded-xl max-w-4xl mx-auto shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#3a3a5d] p-6 rounded-lg shadow">
            <p><strong>Total Supply:</strong> 1,000,000,000</p>
            <p><strong>Tax:</strong> 0/0</p>
            <p><strong>Ownership:</strong> Renounced</p>
            <p><strong>Liquidity:</strong> Burned Forever</p>
            <p><strong>Chain:</strong> Ethereum (ERC-20)</p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">How to Buy</h2>
        <ol className="list-decimal text-left max-w-xl mx-auto text-gray-200 space-y-2 text-lg">
          <li>Install MetaMask</li>
          <li>Buy ETH</li>
          <li>Go to Uniswap</li>
          <li>Paste $ZUCKED contract address</li>
          <li>Swap ETH for $ZUCKED</li>
        </ol>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Join the Cult</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#" className="bg-yellow-400 text-black px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition">Twitter</a>
          <a href="#" className="bg-green-500 px-6 py-2 rounded-full shadow hover:bg-green-400 transition">Telegram</a>
          <a href="#" className="bg-blue-500 px-6 py-2 rounded-full shadow hover:bg-blue-400 transition">DEX Screener</a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400">
        &copy; 2025 Zucked. All rights reserved. This site is for entertainment purposes only.
      </footer>
    </main>
  );
}
