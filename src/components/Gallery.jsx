import { motion } from "framer-motion"

const images = [
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1471444928139-48c5bf5173a2?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2069&auto=format&fit=crop",
]

function Gallery() {
  return (
    <section id="gallery" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Recent wraps</h2>
          <div className="ml-6 h-px flex-1 bg-gradient-to-r from-red-600/60 to-transparent" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative h-56 w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40"
            >
              <img src={src} alt="wrap build" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
