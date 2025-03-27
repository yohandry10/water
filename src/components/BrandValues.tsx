import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, Eye, Sparkles, Heart, Gem, Star, Shield } from 'lucide-react';

const BrandValues = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const values = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Elevación Visual",
      description: "Todo lo que creamos debe elevar la estética del consumidor."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Acceso Estratégico",
      description: "Democratizamos el lujo sin vulgarizarlo."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Disrupción Silenciosa",
      description: "No gritamos. Redefinimos. Hacemos que el agua compita con el alcohol."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hedonismo Consciente",
      description: "Celebramos el deseo y la noche, pero sin perder el control."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Elegancia Disruptiva",
      description: "Creamos tendencias a través de la sofisticación y el diseño minimalista."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Presencia Magnética",
      description: "Cada detalle está diseñado para atraer miradas y generar influencia social."
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
          Valores de Marca
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all group"
            >
              <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-[#204f9c] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-gobold mb-3 text-[#204f9c]">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-square721">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
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

export default BrandValues;