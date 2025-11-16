import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Projects, Experience, Skills, Contact } from './components/Sections'

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} Your Name — Built with care.</p>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App