import { SprayCan, Car, Sparkles } from "lucide-react"

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 text-white transition hover:bg-white/10">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white shadow-[0_10px_30px_-10px_rgba(236,72,153,0.8)]">
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
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Why roll with WrapFury</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-pink-500/60 to-transparent ml-6" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Feature icon={SprayCan} title="Graffiti DNA" desc="Authentic street art collabs. Real spray textures. Zero clip-art vibes." />
          <Feature icon={Car} title="Precision Installs" desc="Studio-grade wrapping with plotter-cut perfection and seamless edges." />
          <Feature icon={Sparkles} title="Premium Films" desc="Chrome, matte, satin, chameleon — from industry-leading brands only." />
        </div>
      </div>
    </section>
  )
}

export default Features
