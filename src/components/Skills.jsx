export default function Skills({ content }) {
  return (
    <section id="skills" className="py-20 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">{content.title}</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((skill) => (
            <div key={skill.id} className="card border border-slate-800 p-6 space-y-4 hover:-translate-y-1 transform transition duration-300 fade-in">
              <div className="icon-badge">{skill.icon}</div>
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
