
export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-neutral-900 p-0">
      <main className="flex flex-col items-center gap-12 w-full max-w-2xl group">
        <h1
          className="text-6xl sm:text-5xl font-extrabold text-transparent bg-clip-text mb-2 text-center tracking-tight select-none drop-shadow-lg"
          style={{
            backgroundImage: 'linear-gradient(270deg, #00ffea, #00ff99, #00bfff, #7f5fff, #00ffea)',
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 50%',
            WebkitBackgroundClip: 'text',
            animation: 'gradientMove 5s linear infinite',
          }}
        >
          ImFaris
        </h1>
        <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
        <div className="flex gap-8 w-full justify-center mt-4">
          <button className="group relative overflow-hidden bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg text-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <span className="relative z-10">Pay now</span>
            <span className="absolute left-0 top-0 w-full h-full bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
          </button>
          <div className="relative group">
            <button
              className="group relative overflow-hidden bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg text-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 cursor-not-allowed opacity-80"
              disabled
            >
              <span className="relative z-10">Projects</span>
              <span className="absolute left-0 top-0 w-full h-full bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </button>
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-700 text-green-200 text-xs font-mono px-3 py-1 rounded-full shadow animate-pulse select-none">Soon</span>
          </div>
        </div>
        <a
          href="https://github.com/ImFaris"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-lg font-mono underline underline-offset-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" /></svg>
          github.com/ImFaris
        </a>
      </main>
    </div>
  );
}
