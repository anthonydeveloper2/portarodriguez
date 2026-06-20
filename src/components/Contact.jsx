import { useState } from 'react'

export default function Contact({ content }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert(content.alert || 'Gracias por tu mensaje!')
  }

  return (
    <section id="contact" className="py-20 px-4 bg-primary">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title">{content.title}</h2>

        <div className="bg-secondary p-8 rounded-3xl shadow-2xl shadow-black/20 border border-slate-800">
          <p className="text-gray-300 mb-8 text-center">{content.intro}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">{content.labels.name}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary border border-accent rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-white"
                placeholder={content.placeholders.name}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">{content.labels.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary border border-accent rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-white"
                placeholder={content.placeholders.email}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">{content.labels.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-primary border border-accent rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-white resize-none"
                placeholder={content.placeholders.message}
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              {content.button}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-secondary space-y-3">
            <p className="text-center text-gray-400">{content.social}</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-accent hover:text-sky-300">GitHub</a>
              <a href="#" className="text-accent hover:text-sky-300">LinkedIn</a>
              <a href="#" className="text-accent hover:text-sky-300">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
