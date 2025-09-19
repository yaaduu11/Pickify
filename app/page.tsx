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
      className={`min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-8 lg:px-16 py-12 ${josefin.className}`}
    >
      <header
        className={`absolute top-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 ${josefin.className}`}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wider">
          Pickify
        </h1>
      </header>

      <main className="w-full max-w-3xl mt-24 sm:mt-12 flex flex-col items-center">
        <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-200 text-center mb-6 px-2">
          Choose your picker: flip a coin or spin the wheel
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 place-items-center">

          <Link
            href="/coin"
            className="w-full max-w-xs"
            aria-label="Open coin picker"
          >
            <div className="group bg-transparent hover:bg-white/5 rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center transition-transform transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400">
              <div className="w-36 h-36 sm:w-52 sm:h-52 mb-4 relative">
                <Image
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWk2dXd0ZzI4dDBvcW01N2R5b3FybW9jMmZmMTc0NzVkdTJsOGl3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FnlKFHfO0QddQqjvxT/giphy.gif"
                  alt="Animated coin flipping"
                  fill
                  className="rounded-full object-cover shadow-lg"
                  unoptimized
                />
              </div>

              <h3 className="text-lg sm:text-2xl font-semibold text-white">Coin</h3>
              <p className="text-sm sm:text-md text-gray-300 mt-2 px-2">
                Perfect for picking between two options — fast, simple, and touch-friendly.
              </p>
            </div>
          </Link>

          <Link
            href="/wheel"
            className="w-full max-w-xs"
            aria-label="Open spinning wheel picker"
          >
            <div className="group bg-transparent hover:bg-white/5 rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center transition-transform transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400">
              <div className="w-36 h-36 sm:w-52 sm:h-52 mb-4 relative">
                <Image
                  src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJrcmk5aHlqOGZkeHdrczUyZzV5bTEzNG02dnNvNzF3aXF6OTFhMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KaJ5TkX2NY0O6hhsKY/giphy.gif"
                  alt="Animated spinning wheel"
                  fill
                  className="rounded-full object-cover shadow-lg"
                  unoptimized
                />
              </div>

              <h3 className="text-lg sm:text-2xl font-semibold text-white">Spinning Wheel</h3>
              <p className="text-sm sm:text-md text-gray-300 mt-2 px-2">
                Choose randomly between many options — perfect when there are several contenders.
              </p>
            </div>
          </Link>
        </div>
      </main>

      <footer className="w-full max-w-5xl mt-10 sm:mt-12 mb-6 flex items-center justify-center">
        <p className="text-sm text-gray-400 text-center">
          App created by{' '}
          <a
            href="https://www.linkedin.com/in/yadu-krishnan-k/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Yadu Krishnan
          </a>
        </p>
      </footer>

    </div>
  );
}
