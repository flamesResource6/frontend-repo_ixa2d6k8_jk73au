import { motion } from "framer-motion"

function SprayText({ children }) {
  return (
    <span className="relative inline-block">
      <span className="absolute -inset-2 -rotate-1 rounded-lg bg-[radial-gradient(60%_60%_at_50%_50%,rgba(236,72,153,0.35),transparent)] blur-md" />
      <span className="relative bg-gradient-to-b from-white to-pink-100 bg-clip-text text-transparent [text-shadow:0_6px_30px_rgba(236,72,153,0.45)]">
        {children}
      </span>
    </span>
  )
}

function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-72 bg-[radial-gradient(50%_40%_at_50%_100%,rgba(236,72,153,0.18),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl"
            >
              <SprayText>Graffiti-grade</SprayText> car wraps for urban legends
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 max-w-xl text-lg text-pink-100/90"
            >
              Street-born aesthetics. Studio-perfect installs. Turn your ride into a rolling canvas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#contact" className="rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(236,72,153,0.8)] hover:opacity-95">
                Get a custom quote
              </a>
              <a href="#gallery" className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Explore gallery
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-2xl shadow-pink-500/20"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-900/40 via-slate-900/10 to-slate-900/20" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/70">Featured build</p>
                <p className="-mt-1 text-2xl font-black text-white drop-shadow">Neon Tempest GT</p>
              </div>
              <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-white">Full-body wrap • Chrome accents</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
