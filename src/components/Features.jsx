import { Layers, PaintBucket, Shield } from "lucide-react"

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 text-white transition hover:bg-white/10">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-red-600 to-neutral-700 text-white shadow-[0_10px_30px_-10px_rgba(239,68,68,0.8)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Wrap performance, street attitude</h2>
          <div className="ml-6 h-px flex-1 bg-gradient-to-r from-red-600/60 to-transparent" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Feature icon={Layers} title="Pro-grade films" desc="3M, Avery Dennison, HEXIS. Matte, gloss, satin, chrome and textured finishes." />
          <Feature icon={PaintBucket} title="Print + custom" desc="Full color prints, graffiti layouts, stripe kits, sunstrips and branding." />
          <Feature icon={Shield} title="Durable protection" desc="UV stable inks, scratch resistance and clean removability that protects OEM paint." />
        </div>
      </div>
    </section>
  )
}

export default Features
