export default function About({ content }) {
  return (
    <section id="about" className="py-20 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">{content.title}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-secondary p-8 rounded-3xl shadow-2xl shadow-black/20 border border-slate-800">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">{content.paragraph1}</p>
            <p className="text-lg text-gray-300 leading-relaxed">{content.paragraph2}</p>
          </div>

          <div className="space-y-4">
            {content.cards.map((card) => (
              <div key={card.title} className="card">
                <h3 className="text-xl font-semibold mb-2 text-accent">{card.title}</h3>
                <p className="text-gray-300">{card.text}</p>
                {card.subtext && <p className="text-gray-400 mt-2 text-sm">{card.subtext}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
