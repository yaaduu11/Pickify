"use client";

import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-black flex flex-col items-center justify-center p-8 ${josefin.className}`}
    >
      {/* Header */}
      <header className="absolute top-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wider">
          Pickify
        </h1>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center gap-12 sm:gap-20">
        {/* Instruction title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 text-center">
          Choose your picker: flip a coin or spin the wheel
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-20">
          {/* Coin Option */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-52 h-52 mb-4">
              <Link href="/coin">
                <Image
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWk2dXd0ZzI4dDBvcW01N2R5b3FybW9jMmZmMTc0NzVkdTJsOGl3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FnlKFHfO0QddQqjvxT/giphy.gif"
                  alt="Coin flip"
                  width={208}
                  height={208}
                  className="rounded-full shadow-lg"
                  unoptimized
                />
              </Link>
            </div>
            <h3 className="text-2xl font-semibold text-white">Coin</h3>
            <p className="text-gray-300 text-md mt-2">
              Perfect for picking between two options.
            </p>
          </div>

          {/* Wheel Option */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-52 h-52 mb-4">
              <Link href="/wheel">
                <Image
                  src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJrcmk5aHlqOGZkeHdrczUyZzV5bTEzNG02dnNvNzF3aXF6OTFhMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KaJ5TkX2NY0O6hhsKY/giphy.gif"
                  alt="Spinning wheel"
                  width={208}
                  height={208}
                  className="rounded-full shadow-lg"
                  unoptimized
                />
              </Link>
            </div>
            <h3 className="text-2xl font-semibold text-white">Spinning Wheel</h3>
            <p className="text-gray-300 text-md mt-2">
              Choose randomly between many options.
            </p>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-4 text-gray-400 text-lg text-center">
        App created by{" "}
        <a
          href="https://www.linkedin.com/in/yadu-krishnan-k/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Yadu Krishnan
        </a>
      </footer>
    </div>
  );
}