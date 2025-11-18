import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import QuoteForm from './components/QuoteForm'

function App() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-fixed bg-center">
      <div className="min-h-screen bg-slate-950/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.12),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.12),transparent_30%)]" />
        <Navbar />
        <main className="relative">
          <Hero />
          <Features />
          <Gallery />
          <QuoteForm />
          <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
            © {new Date().getFullYear()} WrapFury — Made for the streets
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
