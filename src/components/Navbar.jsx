import { useState, useEffect } from 'react'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Camerite.'

const navLinks = [
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'Resultados', href: '#resultados' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <nav
        className="max-w-7xl mx-auto rounded-2xl border border-zinc-500/20 backdrop-blur-[10px] transition-all duration-500"
        style={{
          backgroundColor: 'rgba(41, 24, 78, 0.85)',
          boxShadow: '0px 0.6px 0.6px -1.25px rgba(0,0,0,0.11), 0px 2.3px 2.3px -2.5px rgba(0,0,0,0.1), 0px 10px 10px -3.75px rgba(0,0,0,0.04)',
        }}
      >
        <div className="px-5 sm:px-6">
          <div className="flex items-center justify-between h-[56px]">
            <a href="#hero" className="flex items-center gap-2">
              <img src="/camerite-symbol-white.svg" alt="" className="h-7" />
              <img src="/camerite-wordmark-white.svg" alt="Camerite" className="h-3.5" />
            </a>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-300 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white bg-cam-purple hover:bg-cam-purple-hover rounded-full px-5 py-2 transition-colors duration-300"
              >
                Fale Conosco
              </a>
            </div>

            <button
              className="md:hidden text-zinc-300 hover:text-white p-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden border-t border-white/10 py-4 space-y-1 animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-4 text-sm text-zinc-300 hover:text-white rounded-xl hover:bg-white/[0.06] transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-sm font-semibold text-white bg-cam-purple hover:bg-cam-purple-hover rounded-full px-5 py-3 mt-3 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
