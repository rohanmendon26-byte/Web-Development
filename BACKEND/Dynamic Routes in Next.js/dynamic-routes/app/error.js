
// app/error.js

"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#09090b] text-white flex items-center justify-center overflow-hidden relative px-6">

      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">

        {/* Error code */}
        <div className="relative mb-6">
          <h1 className="text-[120px] md:text-[180px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
            500
          </h1>

          {/* Glow */}
          <div className="absolute inset-0 text-[120px] md:text-[180px] font-black tracking-tighter leading-none text-red-500/10 blur-2xl -z-10">
            500
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Something went wrong
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
          Something unexpected happened on our side.
          Don't worry — you can try again or return home.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-white text-black font-semibold
                       transition-all duration-300
                       hover:scale-105
                       hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Try Again
          </button>

          <a
            href="/"
            className="px-6 py-3 rounded-full border border-zinc-700
                       text-zinc-300 font-semibold
                       transition-all duration-300
                       hover:bg-zinc-800 hover:text-white"
          >
            Go Home
          </a>

        </div>

      </div>

      {/* Decorative particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-ping" />

      <div className="absolute bottom-24 right-16 w-2 h-2 bg-orange-400 rounded-full animate-ping" />

      <div className="absolute top-1/3 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping" />

    </main>
  );
}

