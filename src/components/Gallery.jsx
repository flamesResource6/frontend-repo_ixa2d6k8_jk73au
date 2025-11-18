import { motion } from "framer-motion"

const images = [
  "https://images.unsplash.com/photo-1518306727298-4c17e1bf6946?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2069&auto=format&fit=crop",
]

function Gallery() {
  return (
    <section id="gallery" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Street gallery</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-fuchsia-500/60 to-transparent ml-6" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative h-56 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/40"
            >
              <img src={src} alt="build" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
