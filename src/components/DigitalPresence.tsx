import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, TrendingUp, MessageSquare, Share2 } from 'lucide-react';

const DigitalPresence = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const content = [
    {
      title: "Estética Visual",
      description: "Feed negro, blanco y azul. Reels tipo editoriales de perfume.",
      icon: <Instagram className="w-8 h-8" />
    },
    {
      title: "Contenido Viral",
      description: "Slow motion de rituales de consumo y experiencias exclusivas.",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Frases Impactantes",
      description: '"Tomar agua nunca fue tan atractivo", "¿Eso es agua? No. Es poder."',
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      title: "Retos Sociales",
      description: "#AurumChallenge y comparativas visuales con otras bebidas.",
      icon: <Share2 className="w-8 h-8" />
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
          Presencia Digital
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {content.map((item, index) => (
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
                <p className="text-gray-600 font-square721">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalPresence; 