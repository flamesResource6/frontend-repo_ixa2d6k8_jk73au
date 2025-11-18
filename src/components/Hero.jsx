import { motion } from "framer-motion"

function GraffitiMark() {
  return (
    <svg viewBox="0 0 300 80" className="w-full max-w-md">
      <defs>
        <filter id="roughen">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
      <path d="M10 60 C 80 10, 120 100, 200 20" stroke="#ef4444" strokeWidth="14" fill="none" strokeLinecap="round" filter="url(#roughen)"/>
      <path d="M30 65 L 290 25" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="6" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-72 bg-[radial-gradient(50%_40%_at_50%_100%,rgba(255,255,255,0.06),transparent)]" />
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
              Unleash the wrap
              <span className="relative ml-3 inline-block">
                <span className="absolute -inset-1 rotate-[-2deg] rounded bg-red-600/30 blur-sm" />
                <span className="relative text-red-500">Fury</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 max-w-xl text-lg text-white/80"
            >
              High-precision car wraps with gritty, urban attitude. Matte, gloss, satin, chrome and printed graffiti layouts—engineered to turn heads.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#contact" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(239,68,68,0.8)] hover:bg-red-500">
                Get a custom quote
              </a>
              <a href="#gallery" className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">
                See wraps in action
              </a>
            </motion.div>

            <div className="mt-6 opacity-80">
              <GraffitiMark />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-2xl shadow-red-600/20"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-neutral-900/50 via-neutral-900/20 to-neutral-900/10" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/70">Signature build</p>
                <p className="-mt-1 text-2xl font-black text-white drop-shadow">Urban Phantom RS</p>
              </div>
              <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-white">Full wrap • Matte black + red accents</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
