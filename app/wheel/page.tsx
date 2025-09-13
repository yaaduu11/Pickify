"use client";
import React, { useState, useRef } from "react";
import { Plus, RotateCcw, Sparkles, Stars, Zap, Trophy } from "lucide-react";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SpinningWheel() {
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [currentResult, setCurrentResult] = useState<string | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  const colors = [
    "from-red-400 to-red-600",
    "from-blue-400 to-blue-600",
    "from-green-400 to-green-600",
    "from-yellow-400 to-yellow-600",
    "from-purple-400 to-purple-600",
    "from-pink-400 to-pink-600",
    "from-indigo-400 to-indigo-600",
    "from-orange-400 to-orange-600",
    "from-teal-400 to-teal-600",
    "from-cyan-400 to-cyan-600",
    "from-emerald-400 to-emerald-600",
    "from-rose-400 to-rose-600",
  ];

  const availableOptions = options.filter((o) => !selectedOptions.includes(o));

  const updateOption = (i: number, val: string) => {
    const next = [...options];
    next[i] = val;
    setOptions(next);
  };

  const addOption = () => {
    if (options.length >= 12) return alert("Maximum 12 options allowed");
    setOptions([...options, `Option ${options.length + 1}`]);
  };

  const removeOption = (i: number) => {
    if (options.length <= 2) return alert("Minimum 2 options required!");
    const toRemove = options[i];
    setOptions(options.filter((_, idx) => idx !== i));
    setSelectedOptions((prev) => prev.filter((p) => p !== toRemove));
  };

  const spinWheel = () => {
    if (isSpinning || availableOptions.length === 0) return;

    setIsSpinning(true);
    setCurrentResult(null);

    const randomIndex = Math.floor(Math.random() * availableOptions.length);
    const segmentAngle = 360 / availableOptions.length;
    const targetAngle =
      360 - (randomIndex * segmentAngle + segmentAngle / 2);

    const spins = Math.floor(Math.random() * 5) + 4;
    const finalRotation = rotation + spins * 360 + targetAngle;

    setRotation(finalRotation);

    setTimeout(() => {
      setCurrentResult(availableOptions[randomIndex]);
      setSelectedOptions((p) => [...p, availableOptions[randomIndex]]);
      setIsSpinning(false);
    }, 3000);
  };

  const resetWheel = () => {
    setSelectedOptions([]);
    setCurrentResult(null);
    setRotation(0);
  };

  const renderWheel = () => {
    const seg = 360 / availableOptions.length;
    return (
      <div className="relative">
        <div
          ref={wheelRef}
          className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? "transform 3s cubic-bezier(0.23, 1, 0.32, 1)"
              : "none",
          }}
        >
          {availableOptions.map((opt, i) => {
            const start = i * seg;
            const color = options.indexOf(opt) % colors.length;
            return (
              <div
                key={i}
                className={`absolute w-full h-full bg-gradient-to-r ${colors[color]} flex items-center justify-center`}
                style={{
                  clipPath: `polygon(50% 50%, 
                    ${50 + 50 * Math.cos((start - 90) * Math.PI / 180)}% 
                    ${50 + 50 * Math.sin((start - 90) * Math.PI / 180)}%, 
                    ${50 + 50 * Math.cos((start + seg - 90) * Math.PI / 180)}% 
                    ${50 + 50 * Math.sin((start + seg - 90) * Math.PI / 180)}%)`,
                }}
              >
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotate(${start + seg / 2}deg)`,
                  }}
                >
                  <span
                    className="font-bold text-white text-center block"
                    style={{
                      fontSize:
                        availableOptions.length > 8
                          ? "10px"
                          : availableOptions.length > 6
                          ? "12px"
                          : "14px",
                      maxWidth:
                        availableOptions.length > 8
                          ? "60px"
                          : availableOptions.length > 6
                          ? "70px"
                          : "80px",
                    }}
                  >
                    {opt}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* center + needle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 rounded-full border-4 border-white shadow-lg z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500 drop-shadow-lg"></div>
          <div className="w-2 h-6 bg-red-500 mx-auto rounded-b-full shadow-lg"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden relative pt-20">
      <div className="absolute top-20 left-10 opacity-20">
        <Stars size={32} className="text-yellow-300 animate-pulse" />
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <Sparkles size={28} className="text-pink-300 animate-bounce" />
      </div>
      <div className="absolute bottom-20 left-16 opacity-20">
        <Zap size={36} className="text-cyan-300 animate-pulse" />
      </div>

      <header className={`absolute top-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 ${josefin.className}`}>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wider">
          Pickify
        </h1>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Spinning Wheel Decision
          </h1>
          <p className="text-xl text-gray-300">
            Spin to make your choice from multiple options
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 items-start justify-center max-w-7xl mx-auto pt-20">
          {/* options editor */}
          <div className="xl:w-1/3 w-full">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 sticky top-8">
              <div className="flex justify-between mb-6">
                <h3 className="text-xl font-semibold text-yellow-400">
                  Manage Options
                </h3>
                <button
                  onClick={addOption}
                  className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed"
                  disabled={options.length >= 12}
                >
                  <Plus size={16} />
                </button>
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {options.map((o, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 w-6">{i + 1}.</span>
                    <input
                      className="flex-1 px-3 py-2 rounded bg-white/20 text-white"
                      value={o}
                      onChange={(e) => updateOption(i, e.target.value)}
                    />
                    {options.length > 2 && (
                      <button
                        onClick={() => removeOption(i)}
                        className="text-red-400 hover:text-red-300"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:w-1/3 w-full flex flex-col items-center">
            <div className="mb-8">
              {availableOptions.length > 0 ? (
                renderWheel()
              ) : (
                <div className="w-80 h-80 rounded-full bg-gray-700 flex items-center justify-center">
                  No options
                </div>
              )}
            </div>

            {currentResult && (
              <div className="mb-6 text-center">
                <div className="bg-green-400 text-green-900 px-8 py-4 rounded-full font-bold text-xl shadow-lg animate-pulse">
                  🎉 {currentResult}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={spinWheel}
                disabled={isSpinning || availableOptions.length === 0}
                className="px-8 py-4 rounded-full font-bold text-lg bg-yellow-400 text-yellow-900 hover:bg-yellow-300 disabled:bg-gray-600"
              >
                {isSpinning ? "🌀 Spinning..." : "🎯 SPIN"}
              </button>
              {selectedOptions.length > 0 && (
                <button
                  onClick={resetWheel}
                  className="px-6 py-4 rounded-full bg-white/20 border"
                >
                  <RotateCcw size={20} />
                </button>
              )}
            </div>
          </div>

          <div className="xl:w-1/3 w-full">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 sticky top-8">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                Selected Options
              </h3>
              {selectedOptions.length === 0 ? (
                <p className="text-gray-400">Spin to see results</p>
              ) : (
                <ul className="space-y-2">
                  {selectedOptions.map((o, i) => (
                    <li key={i} className="bg-white/10 p-2 rounded">
                      {i + 1}. {o}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
