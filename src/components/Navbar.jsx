import { useState } from 'react'

export default function Navbar({ content, lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const selectLanguage = (code) => {
    setLang(code)
    setLangOpen(false)
  }

  return (
    <nav className="bg-secondary/95 backdrop-blur-xl sticky top-0 z-50 shadow-2xl shadow-black/20 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-accent tracking-[0.15em] fade-in">PORTFOLIO</a>

          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <a href="#about" className="hover:text-accent transition duration-300">{content.about}</a>
            <a href="#skills" className="hover:text-accent transition duration-300">{content.skills}</a>
            <a href="#projects" className="hover:text-accent transition duration-300">{content.projects}</a>
            <a href="#contact" className="hover:text-accent transition duration-300">{content.contact}</a>
            <div className="relative">
              <button
                className="btn-secondary"
                onClick={() => setLangOpen(!langOpen)}
              >
                {content.languages.find((item) => item.code === lang)?.label || 'Idioma'}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl shadow-black/30 py-2">
                  {content.languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => selectLanguage(item.code)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-slate-900 hover:text-accent"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button 
            className="md:hidden text-3xl text-gray-300 hover:text-accent transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 text-gray-300">
            <a href="#about" className="block hover:text-accent transition duration-300">{content.about}</a>
            <a href="#skills" className="block hover:text-accent transition duration-300">{content.skills}</a>
            <a href="#projects" className="block hover:text-accent transition duration-300">{content.projects}</a>
            <a href="#contact" className="block hover:text-accent transition duration-300">{content.contact}</a>
            <div className="pt-4 border-t border-slate-800">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">Idiomas</p>
              <div className="grid grid-cols-1 gap-2">
                {content.languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      selectLanguage(item.code)
                      setIsOpen(false)
                    }}
                    className="w-full rounded-2xl bg-slate-950 px-4 py-2 text-left text-sm text-gray-300 hover:bg-slate-900"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
