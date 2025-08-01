export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_50%)] pointer-events-none"></div>
      
      <main className="flex flex-col items-center gap-8 w-full max-w-4xl relative z-10">
        <div className="flex flex-col items-center animate-fade-in-up">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text mb-2 text-center tracking-tight select-none"
            style={{
              backgroundImage: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 30%, #94a3b8 60%, #64748b 100%)',
              backgroundSize: '100% 100%',
              WebkitBackgroundClip: 'text',
              fontWeight: '700',
              letterSpacing: '-0.05em',
            }}
          >
            imFaris
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 rounded-full mb-4"></div>
        </div>

        <style>{`
          @keyframes subtleGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(148, 163, 184, 0.1); }
            50% { box-shadow: 0 0 30px rgba(148, 163, 184, 0.2); }
          }
          .animate-subtle-glow {
            animation: subtleGlow 4s ease-in-out infinite;
          }
        `}</style>

        <div className="flex flex-wrap gap-6 w-full justify-center mt-8">
          <div className="relative group">
            <a
              href="/buy"
              className="bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium py-4 px-12 rounded-xl shadow-xl text-lg border border-slate-700 hover:border-slate-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950 animate-subtle-glow"
            >
              Get Started (testing)
            </a>
          </div>
          <div className="relative group">
            <button
              className="bg-slate-900/50 text-slate-400 font-medium py-4 px-12 rounded-xl shadow-xl text-lg border border-slate-800 cursor-not-allowed backdrop-blur-sm"
              disabled
            >
              My Portfolio
            </button>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-700 select-none">Coming Soon</span>
          </div>
          <div className="relative group">
            <button
              className="bg-slate-900/50 text-slate-400 font-medium py-4 px-12 rounded-xl shadow-xl text-lg border border-slate-800 cursor-not-allowed backdrop-blur-sm"
              disabled
            >
              Bot Dashboard
            </button>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-700 select-none">Coming Soon</span>
          </div>
        </div>
        
        {/* Professional description section */}
        <div className="text-center max-w-2xl mx-auto mt-12">
          <h2 className="text-xl font-medium text-slate-300 mb-6 tracking-wide">
            Specializing In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-slate-200 font-medium mb-2">Discord Bots</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Custom automation and engagement solutions</p>
            </div>
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-slate-200 font-medium mb-2">Applications</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Software solutions for your needs</p>
            </div>
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-slate-200 font-medium mb-2">Automation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Intelligent workflows that enhance productivity</p>
            </div>
          </div>
        </div>

        {/* Social links section */}
        <div className="flex gap-6 mt-8">
          <a
            href="https://discord.gg/XjG6bfC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#5865F2]/90 hover:bg-[#5865F2] text-white font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 focus:ring-offset-slate-950 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Discord
          </a>
          
          <a
            href="https://github.com/ImFaris"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" /></svg>
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
