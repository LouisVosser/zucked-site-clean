import React from "react";

export default function ZuckedLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2c2c54] to-[#40407a] text-white p-4 font-sans">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">$ZUCKED</h1>
        <p className="text-xl max-w-xl mx-auto">A meme coin for the shadowbanned, the censored, the memelords. Get ZUCKED by the algorithm and rise again.</p>
      </section>

      <section className="py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="bg-[#474787] p-4 rounded-2xl shadow-md">
            <p><strong>Total Supply:</strong> 1,000,000,000</p>
            <p><strong>Tax:</strong> 0/0</p>
            <p><strong>Ownership:</strong> Renounced</p>
            <p><strong>Liquidity:</strong> Burned Forever</p>
            <p><strong>Chain:</strong> Ethereum (ERC-20)</p>
          </div>
        </div>
      </section>

      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">How to Buy</h2>
        <ol className="list-decimal text-left max-w-lg mx-auto space-y-2">
          <li>Install MetaMask</li>
          <li>Buy ETH</li>
          <li>Go to Uniswap</li>
          <li>Paste $ZUCKED contract address</li>
          <li>Swap ETH for $ZUCKED</li>
        </ol>
      </section>

      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join the Cult</h2>
        <div className="space-x-4">
          <a href="#" className="bg-yellow-400 text-black px-6 py-2 rounded-full shadow hover:bg-yellow-300">Twitter</a>
          <a href="#" className="bg-green-500 px-6 py-2 rounded-full shadow hover:bg-green-400">Telegram</a>
          <a href="#" className="bg-blue-500 px-6 py-2 rounded-full shadow hover:bg-blue-400">DEX Screener</a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-300">
        &copy; 2025 Zucked. All rights reserved. This site is for entertainment purposes only.
      </footer>
    </main>
  );
}
