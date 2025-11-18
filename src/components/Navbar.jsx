import { Menu, ShoppingCart } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-pink-500/20 bg-slate-900/60 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(236,72,153,0.6)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="/" className="group inline-flex items-center gap-3">
              <div className="relative">
                <span className="absolute -inset-1 rounded-full bg-pink-500/40 blur-lg"></span>
                <span className="relative block h-9 w-9 rounded-md bg-gradient-to-br from-pink-500 to-fuchsia-600 ring-1 ring-white/10" />
              </div>
              <div className="leading-tight">
                <span className="block text-xl font-extrabold tracking-tight text-white [text-shadow:0_4px_18px_rgba(236,72,153,0.45)]">
                  WrapFury
                </span>
                <span className="block -mt-1 text-[10px] uppercase tracking-[0.25em] text-pink-300/80">Urban Car Wraps</span>
              </div>
            </a>

            <nav className="hidden gap-8 md:flex">
              <a href="#gallery" className="text-sm font-semibold text-white/80 hover:text-white">Gallery</a>
              <a href="#features" className="text-sm font-semibold text-white/80 hover:text-white">Why Us</a>
              <a href="#contact" className="text-sm font-semibold text-white/80 hover:text-white">Get a Quote</a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10">
                <ShoppingCart className="h-4 w-4" />
                Cart
              </button>
              <button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
