import { useState, useEffect } from 'react'

const WHATSAPP_LINK = 'https://wa.me/5543936180655?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Camerite.'

const navLinks = [
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Diferenciais', href: '#diferenciais' },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cam-base/90 backdrop-blur-xl border-b border-white/5'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <a href="#hero" className="flex items-center gap-2.5">
            <img src="/camerite-icon.svg" alt="Camerite" className="w-8 h-8" />
            <span className="text-xl font-display font-bold text-white">Camerite</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm !py-2.5 !px-6"
            >
              Fale Conosco
            </a>
          </div>

          <button
            className="md:hidden text-zinc-400 hover:text-white p-1.5"
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
          <div className="md:hidden border-t border-white/5 py-4 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.03] transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center mt-3 text-sm !py-3"
              onClick={() => setMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
