import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Users, Star, Trophy } from 'lucide-react';

const BrandActivations = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const activations = [
    {
      title: "Eventos Exclusivos",
      description: "Experiencias VIP en locaciones premium con influencers y personalidades destacadas",
      icon: <Sparkles className="w-8 h-8" />,
      details: [
        "Fiestas privadas",
        "Catas exclusivas",
        "Networking de alto nivel"
      ]
    },
    {
      title: "Comunidad Aurum",
      description: "Programa de membresía con beneficios especiales y acceso a eventos privados",
      icon: <Users className="w-8 h-8" />,
      details: [
        "Tarjeta VIP",
        "Descuentos especiales",
        "Acceso prioritario"
      ]
    },
    {
      title: "Colaboraciones",
      description: "Alianzas estratégicas con marcas premium y artistas reconocidos",
      icon: <Star className="w-8 h-8" />,
      details: [
        "Ediciones limitadas",
        "Productos exclusivos",
        "Contenido único"
      ]
    },
    {
      title: "Competencias",
      description: "Concursos y desafíos para la comunidad con premios exclusivos",
      icon: <Trophy className="w-8 h-8" />,
      details: [
        "Retos mensuales",
        "Premios especiales",
        "Reconocimiento VIP"
      ]
    }
  ];

  return (
    <section ref={ref} className="relative py-28 px-4 bg-gradient-to-b from-[#a8efec] to-[#f3fbfd] overflow-hidden">
      <div className="absolute inset-0 trama-pattern opacity-5" />
      <div className="absolute inset-0 degradado opacity-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-gobold mb-16 text-center text-[#204f9c]"
        >
          Activaciones de Marca
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {activations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all group"
            >
              <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-[#204f9c] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-gobold mb-4 text-[#204f9c]">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-square721 mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-500 font-square721">
                      <span className="w-2 h-2 bg-[#204f9c] rounded-full mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(32, 79, 156, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-brand-gradient rounded-full text-white font-gobold tracking-wider relative overflow-hidden group"
          >
            <span className="relative z-10">Calendario de Eventos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandActivations;