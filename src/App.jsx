import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import QuoteForm from './components/QuoteForm'

function App() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-fixed bg-center">
      <div className="min-h-screen bg-neutral-950/85">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(239,68,68,0.08),transparent_30%)]" />
        <Navbar />
        <main className="relative">
          <Hero />
          <Features />
          <Gallery />
          <QuoteForm />
          <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
            © {new Date().getFullYear()} WrapFury — Built for the streets
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
