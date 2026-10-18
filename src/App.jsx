import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      download: 'Descargar CV',
      languages: [
        { code: 'pt', label: 'Português' },
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' }
      ]
    },
    hero: {
      subtitle: 'Desarrollador full-stack · español / português',
      title: 'Transformo ideas en experiencias digitales.',
      description: 'Desarrollo proyectos con Java, Python, JavaScript, TypeScript, PHP, MySQL y MongoDB. Combino backend sólido con interfaces modernas para crear experiencias potentes y fáciles de usar.',
      btnProjects: 'Ver proyectos',
      btnContact: 'Hablemos'
    },
    about: {
      title: 'Sobre mí',
      paragraph1: 'Soy Anthony Rodriguez, desarrollador full-stack especializado en crear productos digitales de principio a fin. Combino backend robusto con interfaces limpias, rápidas y fáciles de usar.',
      paragraph2: 'Trabajo con Java, Python, JavaScript, TypeScript, PHP, MySQL y MongoDB. Además, gestiono VPS/VDS, hosting, redes corporativas y administración de sistemas, lo que me permite entregar proyectos completos y listos para producción.',
      cards: [
        { title: 'Stack principal', text: 'Java · Python · PHP · JavaScript · TypeScript', subtext: 'Bases de datos: MySQL, MongoDB' },
        { title: 'Desarrollo', text: 'Backend, APIs REST, microservicios y automatización', subtext: 'Frontend moderno con React, Tailwind y experiencia UX' },
        { title: 'Idiomas', text: 'Español · Portugués', subtext: 'Comunicación técnica y soporte en ambos idiomas' }
      ]
    },
    skills: {
      title: 'Habilidades clave',
      items: [
        { id: 1, icon: 'java', title: 'Java', description: 'Desarrollo backend escalable con Spring y APIs.' },
        { id: 2, icon: 'python', title: 'Python', description: 'Automatización, scripts y microservicios.' },
        { id: 3, icon: 'javascript', title: 'JavaScript', description: 'Interfaces interactivas y SPAs modernas.' },
        { id: 4, icon: 'typescript', title: 'TypeScript', description: 'Código seguro y mantenible para web apps.' },
        { id: 5, icon: 'mysql', title: 'MySQL', description: 'Modelado relacional y consultas optimizadas.' },
        { id: 6, icon: 'mongodb', title: 'MongoDB', description: 'Bases de datos NoSQL para datos flexibles.' },
        { id: 7, icon: 'infrastructure', title: 'Infraestructura', description: 'VPS/VDS, hosting, servidores, firewalls y redes corporativas.' }
      ]
    },
    projects: {
      title: 'Proyectos destacados',
      list: [
        { id: 1, icon: 'shopping-bag', title: 'Sistema de Gestión de Ventas', description: 'Aplicación full-stack con Java, MySQL y una interfaz moderna para controlar pedidos y clientes.', tags: ['Java', 'MySQL', 'React', 'REST API'], linkText: 'Ver en GitHub →' },
        { id: 2, icon: 'boxes', title: 'Inventario Inteligente', description: 'Servicio de inventario con Node.js, MongoDB y TypeScript, optimizado para escalabilidad.', tags: ['Node.js', 'MongoDB', 'TypeScript', 'API'], linkText: 'Ver en GitHub →' }
      ]
    },
    contact: {
      title: 'Contacto',
      intro: 'Estoy disponible para nuevos proyectos full-stack. Escríbeme en español o portugués.',
      labels: { name: 'Nombre', email: 'Email', message: 'Mensaje' },
      placeholders: { name: 'Tu nombre', email: 'tu@email.com', message: 'Cuéntame tu proyecto...' },
      button: 'Enviar mensaje',
      social: 'O conecta conmigo en:'
    },
    footer: '© 2025'
  },
  pt: {
    nav: {
      about: 'Sobre mim',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
      download: 'Baixar CV',
      languages: [
        { code: 'pt', label: 'Português' },
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' }
      ]
    },
    hero: {
      subtitle: 'Desenvolvedor full-stack · espanhol / português',
      title: 'Transformo ideias em experiências digitais.',
      description: 'Desenvolvo projetos com Java, Python, JavaScript, TypeScript, PHP, MySQL e MongoDB. Combino backend sólido com interfaces modernas para criar experiências poderosas e fáceis de usar.',
      btnProjects: 'Ver projetos',
      btnContact: 'Vamos conversar'
    },
    about: {
      title: 'Sobre mim',
      paragraph1: 'Sou Anthony Rodriguez, desenvolvedor full-stack especializado em criar produtos digitais de ponta a ponta. Combino backend robusto com interfaces limpas, rápidas e fáceis de usar.',
      paragraph2: 'Trabalho com Java, Python, JavaScript, TypeScript, PHP, MySQL e MongoDB. Também gerencio VPS/VDS, hosting, redes corporativas e administração de sistemas, por isso posso entregar soluções completas de software e infraestrutura.',
      cards: [
        { title: 'Stack principal', text: 'Java · Python · PHP · JavaScript · TypeScript', subtext: 'Bancos de dados: MySQL, MongoDB' },
        { title: 'Desenvolvimento', text: 'Backend, APIs REST, microsserviços e automação', subtext: 'Frontend moderno com React, Tailwind e experiência UX' },
        { title: 'Idiomas', text: 'Espanhol · Português', subtext: 'Comunicação técnica e suporte em ambos os idiomas' }
      ]
    },
    skills: {
      title: 'Habilidades chave',
      items: [
        { id: 1, icon: 'java', title: 'Java', description: 'Desenvolvimento backend escalável com Spring e APIs.' },
        { id: 2, icon: 'python', title: 'Python', description: 'Automação, scripts e microsserviços.' },
        { id: 3, icon: 'javascript', title: 'JavaScript', description: 'Interfaces interativas e SPAs modernas.' },
        { id: 4, icon: 'typescript', title: 'TypeScript', description: 'Código seguro e sustentável para web apps.' },
        { id: 5, icon: 'mysql', title: 'MySQL', description: 'Modelagem relacional e consultas otimizadas.' },
        { id: 6, icon: 'mongodb', title: 'MongoDB', description: 'Bancos de dados NoSQL para dados flexíveis.' },
        { id: 7, icon: 'infrastructure', title: 'Infraestrutura', description: 'VPS/VDS, hosting, servidores, firewalls e redes corporativas.' }
      ]
    },
    projects: {
      title: 'Projetos em destaque',
      list: [
        { id: 1, icon: 'shopping-bag', title: 'Sistema de Gestão de Vendas', description: 'Aplicação full-stack com Java, MySQL e uma interface moderna para controlar pedidos e clientes.', tags: ['Java', 'MySQL', 'React', 'REST API'], linkText: 'Ver no GitHub →' },
        { id: 2, icon: 'boxes', title: 'Inventário Inteligente', description: 'Serviço de inventário com Node.js, MongoDB e TypeScript, otimizado para escalabilidade.', tags: ['Node.js', 'MongoDB', 'TypeScript', 'API'], linkText: 'Ver no GitHub →' }
      ]
    },
    contact: {
      title: 'Contato',
      intro: 'Estou disponível para novos projetos full-stack. Escreva-me em espanhol ou português.',
      labels: { name: 'Nome', email: 'Email', message: 'Mensagem' },
      placeholders: { name: 'Seu nome', email: 'seu@email.com', message: 'Conte-me sobre seu projeto...' },
      button: 'Enviar mensagem',
      social: 'Ou conecte-se comigo em:'
    },
    footer: '© 2025'
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      download: 'Download CV',
      languages: [
        { code: 'pt', label: 'Português' },
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' }
      ]
    },
    hero: {
      subtitle: 'Full-stack developer · Spanish / Portuguese',
      title: 'I turn ideas into digital experiences.',
      description: 'I develop projects with Java, Python, JavaScript, TypeScript, PHP, MySQL and MongoDB. I combine solid backend with modern interfaces to create powerful and easy-to-use experiences.',
      btnProjects: 'View projects',
      btnContact: 'Let’s talk'
    },
    about: {
      title: 'About me',
      paragraph1: 'I am Anthony Rodriguez, a full-stack developer focused on building digital products from idea to launch. I combine robust backends with clean, fast, and easy-to-use interfaces.',
      paragraph2: 'I work with Java, Python, JavaScript, TypeScript, PHP, MySQL and MongoDB. I also manage VPS/VDS, hosting, corporate networks and systems administration, so I can deliver full software and infrastructure solutions.',
      cards: [
        { title: 'Core stack', text: 'Java · Python · PHP · JavaScript · TypeScript', subtext: 'Databases: MySQL, MongoDB' },
        { title: 'Development', text: 'Backend, REST APIs, microservices and automation', subtext: 'Modern frontend with React, Tailwind and UX experience' },
        { title: 'Languages', text: 'Spanish · Portuguese', subtext: 'Technical communication and support in both languages' }
      ]
    },
    skills: {
      title: 'Key skills',
      items: [
        { id: 1, icon: 'java', title: 'Java', description: 'Scalable backend development with Spring and APIs.' },
        { id: 2, icon: 'python', title: 'Python', description: 'Automation, scripting and microservices.' },
        { id: 3, icon: 'javascript', title: 'JavaScript', description: 'Interactive interfaces and modern SPAs.' },
        { id: 4, icon: 'typescript', title: 'TypeScript', description: 'Secure and maintainable code for web apps.' },
        { id: 5, icon: 'mysql', title: 'MySQL', description: 'Relational modeling and optimized queries.' },
        { id: 6, icon: 'mongodb', title: 'MongoDB', description: 'NoSQL databases for flexible data.' },
        { id: 7, icon: 'infrastructure', title: 'Infrastructure', description: 'VPS/VDS, hosting, servers, firewalls and corporate networks.' }
      ]
    },
    projects: {
      title: 'Featured projects',
      list: [
        { id: 1, icon: 'shopping-bag', title: 'Sales Management System', description: 'Full-stack application with Java, MySQL and a modern interface to manage orders and clients.', tags: ['Java', 'MySQL', 'React', 'REST API'], linkText: 'View on GitHub →' },
        { id: 2, icon: 'boxes', title: 'Smart Inventory', description: 'Inventory service with Node.js, MongoDB and TypeScript, optimized for scalability.', tags: ['Node.js', 'MongoDB', 'TypeScript', 'API'], linkText: 'View on GitHub →' }
      ]
    },
    contact: {
      title: 'Contact',
      intro: 'I am available for new full-stack projects. Write to me in Spanish or Portuguese.',
      labels: { name: 'Name', email: 'Email', message: 'Message' },
      placeholders: { name: 'Your name', email: 'example@gmail.com', message: 'Tell me about your project...' },
      button: 'Send message',
      social: 'Or connect with me on:'
    },
    footer: '© 2025'
  }
}

function App() {
  const [lang, setLang] = useState('es')
  const [isLoading, setIsLoading] = useState(true)
  const content = translations[lang]

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 10000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && (
        <div className="page-loader" role="status" aria-label="Cargando portafolio">
          <div className="loader-mark" aria-hidden="true"><span>A</span><i /></div>
          <p className="loader-caption">ANTHONY RODRIGUEZ <span>·</span> PORTAFOLIO</p>
          <div className="loader-track" aria-hidden="true"><span /></div>
        </div>
      )}
      {!isLoading && (
        <div className="page-enter w-full overflow-x-hidden">
          <Navbar content={content.nav} lang={lang} setLang={setLang} />
          <Hero content={content.hero} />
          <About content={content.about} />
          <Skills content={content.skills} />
          <Projects content={content.projects} />
          <Contact content={content.contact} />
          <Footer content={content.footer} />
        </div>
      )}
    </>
  )
}

export default App
