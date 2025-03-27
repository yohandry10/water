import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Users, Crown, Cake as Snake } from 'lucide-react';

const TargetAudience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const audiences = [
    {
      icon: <User className="w-8 h-8" />,
      title: "The Guy",
      description: "Dueños y administradores de discotecas de nivel medio-alto y alto.",
      motivation: "Ofrecer una experiencia exclusiva a sus clientes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "The Dog",
      description: "Asistentes de discotecas, especialmente hombres de 23 a 35 años.",
      motivation: "Hidratarse sin perder estilo, proyectar éxito y sofisticación."
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "The Queen",
      description: "Personas con alto poder adquisitivo que consumen productos exclusivos.",
      motivation: "Actúan como modelo aspiracional para otros consumidores."
    },
    {
      icon: <Snake className="w-8 h-8" />,
      title: "The Snake",
      description: "Administradores que toman decisiones por precio sin ver valor simbólico.",
      motivation: "Mantener bajos costos operativos sin considerar valor agregado."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80')] bg-fixed bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-gobold mb-16 text-center text-[#aceae8]"
        >
          The Dog Matrix
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-black/70 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20"
            >
              <div className="text-[#204f9c] mb-4">
                {audience.icon}
              </div>
              <h3 className="text-xl font-gobold mb-3 text-[#aceae8]">{audience.title}</h3>
              <p className="text-gray-300 mb-4 font-square721">{audience.description}</p>
              <p className="text-[#204f9c] italic font-square721">Motivación: {audience.motivation}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-gobold italic text-[#aceae8]">
            "No todos pueden tomar Aurum, pero todos quieren parecer que sí"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;