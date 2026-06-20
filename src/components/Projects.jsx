export default function Projects({ content }) {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">{content.title}</h2>
        <p className="text-center text-slate-400 mb-10 max-w-3xl mx-auto">
          Proyectos de ejemplo que muestran el estilo y la arquitectura del trabajo. Aún no están publicados en GitHub.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {content.list.map((project) => (
            <div key={project.id} className="card group hover:-translate-y-1 transform transition duration-300">
              <div className="project-preview mb-6 overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-4 shadow-inner shadow-black/20">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-2.5 w-24 rounded-full bg-slate-800" />
                  <div className="flex gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
                  <div className="rounded-3xl bg-gradient-to-br from-cyan-500/20 to-sky-500/10 p-4">
                    <div className="h-28 rounded-3xl bg-slate-900/90 mb-4" />
                    <div className="space-y-3">
                      <div className="h-4 w-3/4 rounded-full bg-slate-900/90" />
                      <div className="h-4 w-1/2 rounded-full bg-slate-900/90" />
                      <div className="h-3 w-full rounded-full bg-slate-900/90" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-12 rounded-3xl bg-slate-900/90" />
                    <div className="h-12 rounded-3xl bg-slate-900/90" />
                    <div className="h-12 rounded-3xl bg-slate-900/90" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="icon-badge">{project.icon}</div>
                <h3 className="text-2xl font-bold text-accent group-hover:text-sky-300">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-950 text-accent text-sm rounded-full border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-sm text-slate-500">No publicado en GitHub aún</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
