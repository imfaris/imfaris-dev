import Link from "next/link";

export default function Buy() {
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
            Get Access
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 rounded-full mb-4"></div>
        </div>

        {/* Back to Home button (smaller, left-aligned) */}
        <div className="mb-4 w-full flex justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950 shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Home
          </Link>
        </div>

        {/* Products section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mt-8">
          {/* SIM App */}
          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/30 transition-all duration-300 opacity-60 cursor-not-allowed">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-emerald-300 mb-3">SIM Controller</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Local network control panel for gaming centers and shops to manage machines
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Gaming machine control</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Time-based sessions</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Admin control panel</span>
                </div>
              </div>
              <button
                className="w-full py-4 px-6 rounded-xl bg-slate-900/50 text-slate-500 font-medium text-lg border border-slate-800 cursor-not-allowed backdrop-blur-sm relative"
                disabled
              >
                Coming Soon
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-700">Soon</span>
              </button>
            </div>
          </div>

          {/* Alioth Bot */}
          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/30 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-300 mb-3">Alioth Bot</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Enhanced Discord ticket system with AI responses, FAQs, and content management
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">AI automated responses</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">FAQ management system</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Content downloads & links</span>
                </div>
              </div>
              <button
                className="w-full py-4 px-6 rounded-xl bg-slate-900/50 text-slate-500 font-medium text-lg border border-slate-800 cursor-not-allowed backdrop-blur-sm relative"
                disabled
              >
                Coming Soon
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-700">Soon</span>
              </button>
            </div>
          </div>
        </div>

        {/* ...removed duplicate Back to Home button at the bottom... */}
      </main>
    </div>
  );
}
