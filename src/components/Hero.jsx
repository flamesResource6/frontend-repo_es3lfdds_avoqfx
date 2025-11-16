import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-600">Full‑Stack Developer</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-3 text-slate-900">I build reliable, scalable products for the web</h1>
          <p className="mt-5 text-slate-600 max-w-xl">I specialize in PHP, Laravel, Vue.js, TailwindCSS, MySQL and Nginx — shipping performant apps and clean developer experiences. Inspired by playful, modern design.</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm hover:bg-slate-800 transition-colors">See Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-slate-300 text-slate-800 px-5 py-2.5 text-sm hover:bg-slate-100 transition-colors">Get in touch</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/70 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default Hero