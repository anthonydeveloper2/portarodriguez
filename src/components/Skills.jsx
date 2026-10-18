import Icon from './Icon'

const skillLogos = {
  1: '/icons/java.svg',
  2: '/icons/python.svg',
  3: '/icons/javascript.svg',
  4: '/icons/typescript.svg',
  5: '/icons/mysql.svg',
  6: '/icons/mongodb.svg'
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
          {content.items.map((skill, index) => (
            <div key={skill.id} style={{ animationDelay: `${index * 90}ms` }} className="card border border-slate-800 p-6 space-y-4 hover:-translate-y-1 transform transition duration-300 fade-in">
              <div className="icon-badge">
                {skillLogos[skill.id]
                  ? <img className="skill-logo-img" src={skillLogos[skill.id]} alt={`${skill.title} logo`} loading="lazy" />
                  : <Icon name="server" className="h-6 w-6" />}
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
