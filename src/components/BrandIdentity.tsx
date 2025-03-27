import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, Shield, Star, Disc3 } from 'lucide-react';

const BrandIdentity = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const identityItems = [
    {
      title: "PROPÓSITO DE MARCA",
      description: "Revolucionamos la experiencia nocturna. En un mundo obsesionado con el alcohol, creamos un nuevo código de poder social.",
      icon: <Crown className="w-12 h-12" />
    },
    {
      title: "VALOR CENTRAL",
      description: "Elegancia Disruptiva. Empoderamos mediante la estética calculada y el magnetismo silencioso.",
      icon: <Star className="w-12 h-12" />
    },
    {
      title: "POSICIONAMIENTO",
      description: "Para la élite emergente que domina mediante presencia, no excesos. La lata que defines tu posición social.",
      icon: <Shield className="w-12 h-12" />
    },
    {
      title: "PROMESA",
      description: "Te transformamos en el punto focal del ambiente. Mientras otros pierden el control, tú acumulas poder social.",
      icon: <Disc3 className="w-12 h-12" />
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
          Identidad de Marca
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {identityItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all"
            >
              <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-[#204f9c] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-gobold mb-3 text-[#204f9c]">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-square721">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 bg-white/30 backdrop-blur-sm p-12 rounded-xl border border-[#204f9c]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 trama-pattern opacity-10" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-gobold mb-4 text-center text-[#204f9c]">
              Mantra Interno
            </h3>
            <p className="text-2xl font-square721 italic text-gray-600 text-center">
              "No vendemos agua, vendemos estatus visual"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandIdentity;