import Link from "next/link";
export default function Buy() {
  return (
    <div className="font-sans h-screen flex flex-col items-center justify-center bg-[#16181d] p-0 overflow-hidden">
      <main className="flex flex-col items-center gap-12 w-full max-w-2xl group">
        <div className="flex flex-col items-center">
          <h1
            className="text-5xl sm:text-4xl font-extrabold text-transparent bg-clip-text mb-2 text-center tracking-tight select-none"
            style={{
              backgroundImage: 'linear-gradient(270deg, #00fff7, #00ff99, #00bfff, #7f5fff, #00fff7)',
              backgroundSize: '200% 200%',
              backgroundPosition: '0% 50%',
              WebkitBackgroundClip: 'text',
              animation: 'gradientMove 5s linear infinite',
            }}
          >
            Buy Access
          </h1>
        </div>
        <div className="flex flex-row gap-6 w-full max-w-md justify-center">
          <button
            className="flex-1 py-5 rounded-lg bg-[#23272f] text-emerald-300 text-lg font-semibold shadow border border-[#23272f] opacity-60 cursor-not-allowed text-center"
            disabled
          >
            SIM
          </button>
          <button className="flex-1 py-5 rounded-lg bg-[#23272f] text-indigo-300 text-lg font-semibold shadow hover:bg-[#23272f]/80 hover:text-indigo-200 transition-colors duration-150 border border-[#23272f] focus:outline-none focus:ring-2 focus:ring-indigo-400">Alioth Bot</button>

        </div>
        <Link
          href="/"
          className="fixed top-6 left-6 z-20 px-6 py-2 rounded-lg bg-[#23272f] text-gray-300 font-semibold shadow hover:bg-[#23272f]/80 hover:text-white transition-colors duration-150 border border-[#23272f] focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          ← Back to Home
        </Link>
        <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </main>
    </div>
  );
}
