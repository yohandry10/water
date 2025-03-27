import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DogMatrix = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const personas = [
    {
      title: "The Guy",
      description: "Dueños y administradores de discotecas de nivel medio-alto y alto.",
      motivation: "Ofrecer una experiencia exclusiva a sus clientes.",
      icon: "👑"
    },
    {
      title: "The Dog",
      description: "Asistentes de discotecas, especialmente hombres de 23 a 35 años.",
      motivation: "Hidratarse sin perder estilo, proyectar éxito y sofisticación.",
      icon: "🐕"
    },
    {
      title: "The Queen",
      description: "Personas con alto poder adquisitivo que consumen productos exclusivos.",
      motivation: "Actúan como modelo aspiracional para otros consumidores.",
      icon: "👸"
    },
    {
      title: "The Snake",
      description: "Administradores que toman decisiones por precio sin ver valor simbólico.",
      motivation: "Mantener bajos costos operativos sin considerar valor agregado.",
      icon: "🐍"
    }
  ];

  return (
    <section ref={ref} className="relative py-28 px-4 bg-[url('/banner.png')] bg-cover bg-fixed bg-center overflow-hidden">
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a8efec]/80 to-[#f3fbfd]/80" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-gobold mb-16 text-center text-[#004da0]"
        >
          The Dog Matrix
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#a8efec] to-[#f3fbfd] p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{persona.icon}</span>
                <h3 className="text-2xl font-gobold text-[#004da0] group-hover:text-[#004da0]/80 transition-colors duration-500">
                  {persona.title}
                </h3>
              </div>

              <p className="text-[#004da0] mb-6 font-square721">
                {persona.description}
              </p>

              <div className="bg-white/30 backdrop-blur-sm p-4 rounded-xl">
                <p className="text-[#004da0] font-square721 italic">
                  Motivación: {persona.motivation}
                </p>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#004da0]/20 group-hover:border-[#004da0]/40 rounded-tr-xl transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#004da0]/20 group-hover:border-[#004da0]/40 rounded-bl-xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl text-[#004da0] font-gobold italic">
            "No todos pueden tomar Aurum, pero todos quieren parecer que sí"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DogMatrix; 