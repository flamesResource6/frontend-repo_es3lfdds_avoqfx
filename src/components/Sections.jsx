function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{title}</h2>
      {subtitle && <p className="text-slate-600 mt-2">{subtitle}</p>}
    </div>
  )
}

export function Projects() {
  const items = [
    {
      title: 'Gov Service Portal',
      desc: 'E‑services platform built with Laravel + Vue, optimized for high traffic and accessibility.',
      tags: ['Laravel', 'Vue', 'MySQL', 'Nginx'],
      link: '#',
    },
    {
      title: 'Inventory & Billing',
      desc: 'Multi‑tenant inventory management with role-based access and real-time reporting.',
      tags: ['Laravel', 'Tailwind', 'MySQL'],
      link: '#',
    },
    {
      title: 'Project Showcase',
      desc: 'Personal lab projects exploring UI, DX, and performance patterns.',
      tags: ['Vue', 'Vite', 'Tailwind'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle title="Selected Work" subtitle="Personal and government projects I contributed to" />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-slate-200 p-5 hover:shadow-lg transition-all bg-white">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <svg className="text-slate-400 group-hover:text-slate-900 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-slate-100 text-slate-700 rounded-full px-2.5 py-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const items = [
    {
      company: 'Government Digital Service',
      role: 'Full‑Stack Developer',
      time: '2023 — 2024',
      points: [
        'Delivered secure citizen-facing portals handling thousands of daily users',
        'Implemented CI/CD, caching and Nginx tuning to improve reliability',
        'Collaborated with multi‑disciplinary teams and strict QA processes',
      ],
    },
    {
      company: 'Freelance',
      role: 'Full‑Stack Engineer',
      time: '2022 — Present',
      points: [
        'Designed and shipped end‑to‑end web products with Laravel + Vue',
        'Built component libraries and internal tools using Tailwind',
        'Led deployments and monitoring with Docker and Nginx',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle title="Experience" />
        <div className="grid gap-6">
          {items.map((e, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{e.role}</h3>
                  <p className="text-slate-600">{e.company}</p>
                </div>
                <p className="text-sm text-slate-500">{e.time}</p>
              </div>
              <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
                {e.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const items = ['PHP', 'Laravel', 'Vue.js', 'TailwindCSS', 'MySQL', 'Nginx', 'REST', 'Vite', 'Docker']
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle title="Skills" />
        <div className="flex flex-wrap gap-3">
          {items.map((s) => (
            <span key={s} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold">Let’s build something</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">Open for freelance/remote roles and collaborations. I reply within 24 hours.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:you@example.com" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm hover:bg-slate-100 transition-colors">Email Me</a>
          <a href="https://github.com/" target="_blank" className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm hover:bg-white/10 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm hover:bg-white/10 transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default { Projects, Experience, Skills, Contact }