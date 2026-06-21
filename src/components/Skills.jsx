const skillLogos = {
  1: <span className="skill-logo java">☕</span>,
  2: <span className="skill-logo python">🐍</span>,
  3: <span className="skill-logo js">JS</span>,
  4: <span className="skill-logo ts">TS</span>,
  5: <span className="skill-logo mysql">My</span>,
  6: <span className="skill-logo mongodb">MDB</span>,
  7: <span className="skill-logo infra">⚙️</span>
}

export default function Skills({ content }) {
  return (
    <section id="skills" className="py-20 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">{content.title}</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Lenguajes y tecnologías que uso para construir proyectos sólidos, modernos y confiables.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((skill) => (
            <div key={skill.id} className="card border border-slate-800 p-6 space-y-4 hover:-translate-y-1 transform transition duration-300 fade-in">
              <div className="icon-badge">
                {skillLogos[skill.id] || skill.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="text-gray-400 mt-2">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
