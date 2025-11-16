import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkCls = 'text-sm md:text-[15px] text-slate-600 hover:text-slate-900 transition-colors'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 border-b border-slate-200/60' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-slate-900">Your Name</a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#projects" className={linkCls}>Projects</a>
            <a href="#experience" className={linkCls}>Experience</a>
            <a href="#skills" className={linkCls}>Skills</a>
            <a href="#contact" className={linkCls}>Contact</a>
            <a href="/resume.pdf" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition-colors">Resume</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-300 text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-3">
              <a onClick={() => setOpen(false)} href="#projects" className={linkCls}>Projects</a>
              <a onClick={() => setOpen(false)} href="#experience" className={linkCls}>Experience</a>
              <a onClick={() => setOpen(false)} href="#skills" className={linkCls}>Skills</a>
              <a onClick={() => setOpen(false)} href="#contact" className={linkCls}>Contact</a>
              <a onClick={() => setOpen(false)} href="/resume.pdf" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm w-max">Resume</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar