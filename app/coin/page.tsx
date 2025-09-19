"use client";

import React, { useState } from "react";
import { RotateCcw, Sparkles, Stars, Zap } from "lucide-react";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function CoinFlipPage() {
  const [option1, setOption1] = useState("Option 1");
  const [option2, setOption2] = useState("Option 2");
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const flipCoin = () => {
    if (isFlipping) return;

    setIsFlipping(true);
    setShowResult(false);
    setResult(null);

    const heads = Math.random() < 0.5;
    setResult(heads ? option1 : option2);

    setTimeout(() => {
      setIsFlipping(false);
      setShowResult(true);
    }, 2000);
  };

  const resetCoin = () => {
    setIsFlipping(false);
    setResult(null);
    setShowResult(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden px-4 sm:px-6 lg:px-8 py-8">
      <Stars size={32} className="hidden sm:block absolute top-20 left-6 opacity-20 text-yellow-300" />
      <Sparkles size={28} className="hidden sm:block absolute top-20 right-8 opacity-20 text-pink-300" />
      <Zap size={36} className="hidden md:block absolute bottom-20 left-12 opacity-20 text-cyan-300" />
      <Stars size={24} className="hidden md:block absolute bottom-32 right-8 opacity-20 text-green-300" />

      <header
        className={`absolute top-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 ${josefin.className}`}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wider">
          Pickify
        </h1>
      </header>

      <section className="mt-16 sm:mt-12 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
          Coin Flip Decision
        </h2>
        <p className="text-base sm:text-xl text-gray-300">Let fate decide your next move</p>
      </section>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
        <div className="space-y-6 order-1">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-yellow-400">
              Customize Your Options
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Side A (Heads)</label>
                <input
                  type="text"
                  value={option1}
                  onChange={(e) => setOption1(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  maxLength={20}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Side B (Tails)</label>
                <input
                  type="text"
                  value={option2}
                  onChange={(e) => setOption2(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  maxLength={20}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center order-2">
          <div className="relative">
            <div
              className={`coin ${
                isFlipping ? "flipping" : result === option2 ? "land-tails" : "land-heads"
              }`}
            >
              <div className="coin-side coin-heads">
                <div className="coin-content">
                  <div className="text-xl font-bold text-yellow-900 mb-2">HEADS</div>
                  <div className="text-sm font-medium text-yellow-800 text-center px-2 break-words">
                    {option1}
                  </div>
                </div>
              </div>
              <div className="coin-side coin-tails">
                <div className="coin-content">
                  <div className="text-xl font-bold text-indigo-900 mb-2">TAILS</div>
                  <div className="text-sm font-medium text-indigo-800 text-center px-2 break-words">
                    {option2}
                  </div>
                </div>
              </div>
            </div>
            {showResult && (
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-green-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse">
                  🎉 {result}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6 order-3">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-cyan-400">
              How to Use
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold flex items-center justify-center mr-3">
                  1
                </span>
                Customize your options
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-pink-400 text-pink-900 rounded-full text-sm font-bold flex items-center justify-center mr-3">
                  2
                </span>
                Click the flip button
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-cyan-400 text-cyan-900 rounded-full text-sm font-bold flex items-center justify-center mr-3">
                  3
                </span>
                Watch the magic happen!
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-12">
        <button
          onClick={flipCoin}
          disabled={isFlipping}
          className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 whitespace-nowrap ${
            isFlipping
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 shadow-lg"
          }`}
        >
          {isFlipping ? "Flipping..." : "🪙 FLIP COIN"}
        </button>
        {(showResult || isFlipping) && (
          <button
            onClick={resetCoin}
            className="px-6 py-4 rounded-full font-bold text-lg bg-white/20 hover:bg-white/30 border border-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <RotateCcw size={20} />
            Reset
          </button>
        )}
      </div>

      <style jsx>{`
        .coin {
          perspective: 1000px;
          width: 180px;
          height: 180px;
          max-width: 60vw;
          max-height: 60vw;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 2s ease-in-out;
        }
        .coin-side {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .coin-heads {
          background: linear-gradient(135deg, #ffd700 0%, #ffed4a 100%);
          border: 4px solid #f59e0b;
        }
        .coin-tails {
          background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
          transform: rotateY(180deg);
          border: 4px solid #7c3aed;
        }
        .coin-content {
          text-align: center;
          padding: 12px;
        }
        .flipping {
          animation: coinFlip 2s ease-in-out forwards;
        }
        .land-heads {
          transform: rotateY(1800deg) rotateX(720deg);
        }
        .land-tails {
          transform: rotateY(1980deg) rotateX(720deg);
        }
        @keyframes coinFlip {
          0% {transform: rotateY(0deg) rotateX(0deg);}
          25% {transform: rotateY(450deg) rotateX(180deg) scale(0.85);}
          50% {transform: rotateY(900deg) rotateX(360deg) scale(1.05);}
          75% {transform: rotateY(1350deg) rotateX(540deg) scale(0.95);}
          100% {transform: rotateY(1800deg) rotateX(720deg);}
        }
      `}</style>
    </div>
  );
}