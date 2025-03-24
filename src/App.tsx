import React from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Github, Linkedin, Mail, Phone, MapPin, Calendar, Building, GraduationCap } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ProjectCarousel } from './components/ProjectCarousel';
import { projects } from './data/projects';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skills = [
  "Java", "JavaScript", "TypeScript", "Python", "PHP", "C#", "C++",
  "React", "Angular", "Node.js", "Spring Boot", "Laravel",
  "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
  "TensorFlow", "Keras", "PyTorch", "Machine Learning"
];

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              className="w-64 h-64 mx-auto mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="https://i.pinimg.com/736x/3a/d9/46/3ad946a5d09e0afdb7d02823ccfde72c.jpg"
                alt="Donato Nicolás Ayala Osorio"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hola, soy{' '}
              <span className="gradient-text">
                Donato Nicolás Ayala Osorio
              </span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl mb-12 text-[var(--text)]/80 max-w-4xl mx-auto leading-relaxed tracking-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Ingeniero de Software especializado en desarrollo Full Stack, 
              arquitectura de software, computación en la nube e inteligencia artificial.
            </motion.p>
            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="button-primary">
                <Download className="w-5 h-5 inline-block mr-2" />
                Descargar CV
              </button>
              <button className="button-secondary">
                <Send className="w-5 h-5 inline-block mr-2" />
                Contáctame
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 bg-[var(--accent)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">Sobre mí</h2>
            <p className="text-2xl leading-relaxed text-[var(--text)]/80 mb-12">
              Soy un ingeniero de sistemas apasionado por crear soluciones tecnológicas innovadoras 
              que impacten positivamente en la vida de las personas. Mi enfoque se centra en el 
              desarrollo Full Stack, la arquitectura de software y la inteligencia artificial.
            </p>
            <p className="text-xl leading-relaxed text-[var(--text)]/60">
              Con experiencia en el desarrollo de aplicaciones empresariales y sistemas escalables,
              me especializo en crear soluciones robustas y eficientes que resuelven problemas
              complejos de manera elegante y efectiva.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Tecnologías y Habilidades</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-[var(--accent)]">
        <div className="max-w-[90rem] mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Proyectos Destacados
          </motion.h2>
          <motion.p
            className="text-xl text-[var(--text)]/80 text-center mb-16 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Una selección de proyectos que demuestran mi experiencia en desarrollo de software,
            arquitectura y tecnologías emergentes.
          </motion.p>
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Experiencia Profesional
          </motion.h2>
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="card" variants={fadeInUp}>
              <div className="flex items-start gap-6">
                <Building className="w-12 h-12 text-[var(--primary)]" />
                <div>
                  <h3 className="text-2xl font-semibold">Centro de estudios Andino</h3>
                  <p className="text-[var(--text)]/60 text-lg mb-2">Desarrollador Full Stack</p>
                  <div className="flex items-center gap-6 text-sm text-[var(--text)]/60 mb-4">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Pasto
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> 10.2022 – 12.2024
                    </span>
                  </div>
                  <p className="text-[var(--text)]/80 text-lg leading-relaxed">
                    Diseñé y desarrollé soluciones tecnológicas innovadoras para el centro de estudios, 
                    mejorando significativamente la accesibilidad y usabilidad de las plataformas educativas. 
                    Implementé arquitecturas escalables y sistemas de gestión de datos que optimizaron los 
                    procesos académicos y administrativos.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="card" variants={fadeInUp}>
              <div className="flex items-start gap-6">
                <Building className="w-12 h-12 text-[var(--primary)]" />
                <div>
                  <h3 className="text-2xl font-semibold">Cognitios</h3>
                  <p className="text-[var(--text)]/60 text-lg mb-2">Practicante de desarrollo Full Stack</p>
                  <div className="flex items-center gap-6 text-sm text-[var(--text)]/60 mb-4">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Bogotá
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> 02.2023-05.2023
                    </span>
                  </div>
                  <p className="text-[var(--text)]/80 text-lg leading-relaxed">
                    Participé en el desarrollo de soluciones empresariales utilizando tecnologías modernas.
                    Contribuí a la optimización de código y la implementación de mejoras que agilizaron los
                    procesos de desarrollo. Trabajé en equipo utilizando metodologías ágiles y herramientas
                    de colaboración modernas.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-4 bg-[var(--accent)]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Educación
          </motion.h2>
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="card" variants={fadeInUp}>
              <div className="flex items-start gap-6">
                <GraduationCap className="w-12 h-12 text-[var(--primary)]" />
                <div>
                  <h3 className="text-2xl font-semibold">Universidad Javeriana</h3>
                  <p className="text-[var(--text)]/60 text-lg">Maestría en Arquitectura de Software</p>
                  <p className="text-[var(--text)]/60">2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="card" variants={fadeInUp}>
              <div className="flex items-start gap-6">
                <GraduationCap className="w-12 h-12 text-[var(--primary)]" />
                <div>
                  <h3 className="text-2xl font-semibold">Universidad Mariana</h3>
                  <p className="text-[var(--text)]/60 text-lg">Ingeniero de Sistemas</p>
                  <p className="text-[var(--text)]/60">2024</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Conectemos
          </motion.h2>
          <motion.div 
            className="flex flex-col items-center gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a 
              href="mailto:donatonicolasayalaosorio@gmail.com"
              className="flex items-center gap-4 text-lg text-[var(--text)]/80 hover:text-[var(--text)] transition-colors"
              variants={fadeInUp}
            >
              <Mail className="w-6 h-6" />
              donatonicolasayalaosorio@gmail.com
            </motion.a>
            <motion.a 
              href="tel:+573188401253"
              className="flex items-center gap-4 text-lg text-[var(--text)]/80 hover:text-[var(--text)] transition-colors"
              variants={fadeInUp}
            >
              <Phone className="w-6 h-6" />
              +57 318 840 1253
            </motion.a>
            <motion.div 
              className="flex items-center gap-4 text-lg text-[var(--text)]/80"
              variants={fadeInUp}
            >
              <MapPin className="w-6 h-6" />
              Cali - Colombia
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex justify-center gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://github.com"
              className="text-[var(--text)]/80 hover:text-[var(--text)] transition-colors"
              variants={fadeInUp}
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/donatonicolasayalaosorio/"
              className="text-[var(--text)]/80 hover:text-[var(--text)] transition-colors"
              variants={fadeInUp}
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;