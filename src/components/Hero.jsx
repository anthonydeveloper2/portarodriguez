export default function Hero({ content }) {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-950 via-primary to-slate-900">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),transparent_30%)]" />
      <div className="relative text-center px-4 fade-in">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-accent mb-4">{content.subtitle}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="btn-primary">{content.btnProjects}</a>
            <a href="#contact" className="btn-secondary">{content.btnContact}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
