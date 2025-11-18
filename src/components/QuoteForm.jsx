import { useState } from "react"

function QuoteForm() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const form = new FormData(e.currentTarget)
      const payload = {
        name: form.get('name'),
        email: form.get('email'),
        car: form.get('car'),
        wrap: form.get('wrap'),
        message: form.get('message')
      }
      const res = await fetch(`${baseUrl}/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('✅ Request received — we’ll get back within 24h')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('❌ Could not send. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Get a quote</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-pink-500/60 to-transparent ml-6" />
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Your name" className="rounded-md border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-pink-500" />
            <input name="email" type="email" required placeholder="Email" className="rounded-md border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-pink-500" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="car" required placeholder="Car make & model" className="rounded-md border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-pink-500" />
            <input name="wrap" required placeholder="Wrap style (matte, chrome, camo...)" className="rounded-md border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-pink-500" />
          </div>
          <textarea name="message" rows="4" placeholder="Anything else?" className="rounded-md border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-pink-500" />
          <div className="flex items-center gap-3">
            <button className="rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(236,72,153,0.8)] hover:opacity-95">
              Send request
            </button>
            {status && <span className="text-sm text-pink-100/90">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default QuoteForm
