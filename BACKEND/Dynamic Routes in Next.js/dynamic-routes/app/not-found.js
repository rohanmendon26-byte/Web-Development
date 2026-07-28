
// app/not-found.js

"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white flex items-center justify-center overflow-hidden relative px-6">
      
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">

        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="text-[140px] md:text-[200px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
            404
          </h1>

          {/* Glow */}
          <div className="absolute inset-0 text-[140px] md:text-[200px] font-black tracking-tighter leading-none text-purple-500/10 blur-2xl -z-10">
            404
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Lost in the digital space?
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back somewhere useful.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                     bg-white text-black font-semibold
                     transition-all duration-300
                     hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          ← Back to Home
        </Link>

      </div>

      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
      <div className="absolute bottom-24 right-16 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500" />
      <div className="absolute top-1/3 right-10 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-300" />

    </main>
  );
}

