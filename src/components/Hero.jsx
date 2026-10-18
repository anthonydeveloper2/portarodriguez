import Icon from './Icon'

export default function Hero({ content }) {
  return (
    <section className="hero-section relative flex items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hero-copy fade-in">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <p className="hero-subtitle text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm">{content.subtitle}</p>
          </div>
          <h1 className="hero-title mb-8 font-bold">{content.title}</h1>
          <p className="mb-10 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{content.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">{content.btnProjects}<span aria-hidden="true">↗</span></a>
            <a href="#contact" className="btn-secondary">{content.btnContact}</a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-slate-400">
            <span><strong className="mr-2 text-xl text-white">07+</strong> años creando</span>
            <span><strong className="mr-2 text-xl text-white">ES</strong> / <strong className="ml-1 text-xl text-white">PT</strong> idiomas</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(197,243,107,0.7)]" /> Disponible para proyectos</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl px-4 py-8 sm:px-10">
          <div className="hero-orbit absolute inset-0 m-auto aspect-square w-[92%] rounded-full" />
          <div className="hero-visual relative rounded-[2rem] p-5 sm:p-7">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent"><Icon name="code" className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-semibold text-white">anthony.dev</p>
                  <p className="text-xs text-slate-400">Full-stack developer</p>
                </div>
              </div>
              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">Portfolio</span>
            </div>

            <div className="mb-5 grid grid-cols-[1fr_auto] items-end gap-3">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-400">Construyendo experiencias</p>
                <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Ideas en movimiento<span className="text-accent">.</span></p>
              </div>
              <span className="mb-1 text-xs text-slate-500">01 / 03</span>
            </div>

            <div className="preview-window relative mb-5 h-44 overflow-hidden rounded-2xl border border-white/10 p-4 sm:h-52">
              <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(220,240,220,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(220,240,220,.07) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="absolute -right-4 -top-12 h-52 w-52 rounded-full border border-accent/20" />
              <div className="absolute -right-1 top-0 h-40 w-40 rounded-full border border-accent/20" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="relative rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Stack</p>
                  <p className="mt-1 text-xs font-medium text-white">Java · React · Cloud</p>
                </div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent shadow-[0_0_40px_rgba(197,243,107,0.15)]"><Icon name="sparkle" className="h-9 w-9" /></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {['Backend', 'Frontend', 'Infra'].map((label, index) => (
                <div key={label} className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className={`hero-code-line mb-3 h-1.5 rounded-full ${index === 0 ? 'accent' : ''}`} />
                  <p className="text-[11px] font-medium text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
