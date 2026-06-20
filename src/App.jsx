import { useState } from 'react'
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
      title: 'Tengo 20 años y construyo soluciones digitales desde los 13 años.',
      description: 'Desarrollo proyectos con Java, Python, JavaScript, TypeScript, PHP, MySQL y MongoDB. Combino backend sólido con interfaces modernas para crear experiencias potentes y fáciles de usar.',
      btnProjects: 'Ver proyectos',
      btnContact: 'Hablemos'
    },
    about: {
      title: 'Sobre mí',
      paragraph1: 'Soy un desarrollador full-stack de 20 años con más de 7 años de experiencia en tecnología. Comencé a tocar estos temas a los 13 años y desde entonces construyo aplicaciones que combinan backend robusto con interfaces limpias y responsivas.',
      paragraph2: 'Trabajo con Java, Python, JavaScript, TypeScript, PHP, MySQL y MongoDB. También gestiono VPS/VDS, hosting, redes corporativas y administración de sistemas, por lo que puedo entregar soluciones completas de software e infraestructura.',
      cards: [
        { title: 'Stack principal', text: 'Java · Python · PHP · JavaScript · TypeScript', subtext: 'Bases de datos: MySQL, MongoDB' },
        { title: 'Desarrollo', text: 'Backend, APIs REST, microservicios y automatización', subtext: 'Frontend moderno con React, Tailwind y experiencia UX' },
        { title: 'Idiomas', text: 'Español · Portugués', subtext: 'Comunicación técnica y soporte en ambos idiomas' }
      ]
    },
    skills: {
      title: 'Habilidades clave',
      items: [
        { id: 1, icon: '☕', title: 'Java', description: 'Desarrollo backend escalable con Spring y APIs.' },
        { id: 2, icon: '🐍', title: 'Python', description: 'Automatización, scripts y microservicios.' },
        { id: 3, icon: '🟨', title: 'JavaScript', description: 'Interfaces interactivas y SPAs modernas.' },
        { id: 4, icon: '🟦', title: 'TypeScript', description: 'Código seguro y mantenible para web apps.' },
        { id: 5, icon: '🐘', title: 'MySQL', description: 'Modelado relacional y consultas optimizadas.' },
        { id: 6, icon: '🍃', title: 'MongoDB', description: 'Bases de datos NoSQL para datos flexibles.' },
        { id: 7, icon: '🌐', title: 'Infraestructura', description: 'VPS/VDS, hosting, servidores, firewalls y redes corporativas.' }
      ]
    },
    projects: {
      title: 'Proyectos destacados',
      list: [
        { id: 1, icon: '🛒', title: 'Sistema de Gestión de Ventas', description: 'Aplicación full-stack con Java, MySQL y una interfaz moderna para controlar pedidos y clientes.', tags: ['Java', 'MySQL', 'React', 'REST API'], linkText: 'Ver en GitHub →' },
        { id: 2, icon: '📦', title: 'Inventario Inteligente', description: 'Servicio de inventario con Node.js, MongoDB y TypeScript, optimizado para escalabilidad.', tags: ['Node.js', 'MongoDB', 'TypeScript', 'API'], linkText: 'Ver en GitHub →' }
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
      title: 'Tenho 20 anos e construo soluções digitais desde os 13 anos.',
      description: 'Desenvolvo projetos com Java, Python, JavaScript, TypeScript, PHP, MySQL e MongoDB. Combino backend sólido com interfaces modernas para criar experiências poderosas e fáceis de usar.',
      btnProjects: 'Ver projetos',
      btnContact: 'Vamos conversar'
    },
    about: {
      title: 'Sobre mim',
      paragraph1: 'Sou um desenvolvedor full-stack de 20 anos com mais de 7 anos de experiência em tecnologia. Comecei a mexer nesses temas aos 13 anos e desde então construo aplicações que combinam backend robusto com interfaces limpas e responsivas.',
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
        { id: 1, icon: '☕', title: 'Java', description: 'Desenvolvimento backend escalável com Spring e APIs.' },
        { id: 2, icon: '🐍', title: 'Python', description: 'Automação, scripts e microsserviços.' },
        { id: 3, icon: '🟨', title: 'JavaScript', description: 'Interfaces interativas e SPAs modernas.' },
        { id: 4, icon: '🟦', title: 'TypeScript', description: 'Código seguro e sustentável para web apps.' },
        { id: 5, icon: '🐘', title: 'MySQL', description: 'Modelagem relacional e consultas otimizadas.' },
        { id: 6, icon: '🍃', title: 'MongoDB', description: 'Bancos de dados NoSQL para dados flexíveis.' },
        { id: 7, icon: '🌐', title: 'Infraestrutura', description: 'VPS/VDS, hosting, servidores, firewalls e redes corporativas.' }
      ]
    },
    projects: {
      title: 'Projetos em destaque',
      list: [
        { id: 1, icon: '🛒', title: 'Sistema de Gestão de Vendas', description: 'Aplicação full-stack com Java, MySQL e uma interface moderna para controlar pedidos e clientes.', tags: ['Java', 'MySQL', 'React', 'REST API'], linkText: 'Ver no GitHub →' },
        { id: 2, icon: '📦', title: 'Inventário Inteligente', description: 'Serviço de inventário com Node.js, MongoDB e TypeScript, otimizado para escalabilidade.', tags: ['Node.js', 'MongoDB', 'TypeScript', 'API'], linkText: 'Ver no GitHub →' }
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
      title: 'I am 20 years old and build digital solutions since I was 13.',
      description: 'I develop projects with Java, Python, JavaScript, TypeScript, PHP, MySQL and MongoDB. I combine solid backend with modern interfaces to create powerful and easy-to-use experiences.',
      btnProjects: 'View projects',
      btnContact: 'Let’s talk'
    },
    about: {
      title: 'About me',
      paragraph1: 'I am a 20-year-old full-stack developer with over 7 years of experience in technology. I started working with these topics at 13 years old and since then I build applications that combine robust backend with clean and responsive interfaces.',
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
        { id: 1, icon: '☕', title: 'Java', description: 'Scalable backend development with Spring and APIs.' },
        { id: 2, icon: '🐍', title: 'Python', description: 'Automation, scripting and microservices.' },
        { id: 3, icon: '🟨', title: 'JavaScript', description: 'Interactive interfaces and modern SPAs.' },
        { id: 4, icon: '🟦', title: 'TypeScript', description: 'Secure and maintainable code for web apps.' },
        { id: 5, icon: '🐘', title: 'MySQL', description: 'Relational modeling and optimized queries.' },
        { id: 6, icon: '🍃', title: 'MongoDB', description: 'NoSQL databases for flexible data.' },
        { id: 7, icon: '🌐', title: 'Infrastructure', description: 'VPS/VDS, hosting, servers, firewalls and corporate networks.' }
      ]
    },
    projects: {
      title: 'Featured projects',
      list: [
        { id: 1, icon: '🛒', title: 'Sales Management System', description: 'Full-stack application with Java, MySQL and a modern interface to manage orders and clients.', tags: ['Java', 'MySQL', 'React', 'REST API'], linkText: 'View on GitHub →' },
        { id: 2, icon: '📦', title: 'Smart Inventory', description: 'Inventory service with Node.js, MongoDB and TypeScript, optimized for scalability.', tags: ['Node.js', 'MongoDB', 'TypeScript', 'API'], linkText: 'View on GitHub →' }
      ]
    },
    contact: {
      title: 'Contact',
      intro: 'I am available for new full-stack projects. Write to me in Spanish or Portuguese.',
      labels: { name: 'Name', email: 'Email', message: 'Message' },
      placeholders: { name: 'Your name', email: 'you@email.com', message: 'Tell me about your project...' },
      button: 'Send message',
      social: 'Or connect with me on:'
    },
    footer: '© 2025'
  }
}

function App() {
  const [lang, setLang] = useState('es')
  const content = translations[lang]

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar content={content.nav} lang={lang} setLang={setLang} />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Skills content={content.skills} />
      <Projects content={content.projects} />
      <Contact content={content.contact} />
      <Footer content={content.footer} />
    </div>
  )
}

export default App
