
import Image from "next/image";
export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-[#16181d] p-0">
      <main className="flex flex-col items-center gap-12 w-full max-w-2xl group">
        <div className="flex flex-col items-center">
          <Image
            src="/logo_transparent.png"
            alt="ImFaris Logo"
            width={112}
            height={112}
            className="mb-2 rounded-full animate-float select-none bg-transparent"
            draggable={false}
            priority
          />
          <h1
            className="text-6xl sm:text-5xl font-extrabold text-transparent bg-clip-text mb-2 text-center tracking-tight select-none"
            style={{
              backgroundImage: 'linear-gradient(270deg, #00fff7, #00ff99, #00bfff, #7f5fff, #00fff7)',
              backgroundSize: '200% 200%',
              backgroundPosition: '0% 50%',
              WebkitBackgroundClip: 'text',
              animation: 'gradientMove 5s linear infinite',
            }}
          >
            ImFaris
          </h1>
        </div>
        <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3.2s ease-in-out infinite;
          }
        `}</style>
        <div className="flex gap-6 w-full justify-center mt-4">
          <div className="relative group">
            <button className="bg-[#23272f] text-gray-500 font-semibold py-4 px-10 rounded-lg shadow text-lg border border-[#23272f] cursor-not-allowed opacity-80" disabled>
              Pay now
            </button>
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1e222a] text-emerald-300 text-xs font-mono px-3 py-1 rounded-full border border-emerald-900/40 select-none">Soon</span>
          </div>
          <div className="relative group">
            <button
              className="bg-[#23272f] text-gray-500 font-semibold py-4 px-10 rounded-lg shadow text-lg border border-[#23272f] cursor-not-allowed opacity-80"
              disabled
            >
              Projects
            </button>
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1e222a] text-emerald-300 text-xs font-mono px-3 py-1 rounded-full border border-emerald-900/40 select-none">Soon</span>
          </div>
        </div>
        <a
          href="https://github.com/ImFaris"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors text-base font-mono underline underline-offset-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" /></svg>
          github.com/ImFaris
        </a>
      </main>
    </div>
  );
}
