import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, Shield, Star } from 'lucide-react';

const BrandTerritory = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
          Territorio de Marca
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all"
          >
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-gobold mb-4 text-[#204f9c]">Territorio Emocional</h3>
              <p className="text-gray-600 font-square721">
                El consumidor no compra agua, compra apariencia, experiencia y validación social. 
                La experiencia sensorial y visual es lo que prima.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all"
          >
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-gobold mb-4 text-[#204f9c]">Propuesta Estratégica</h3>
              <p className="text-gray-600 font-square721">
                Crear una categoría de lujo silencioso, donde el agua no es solo hidratación, 
                sino una declaración estética de pertenencia a la élite.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all">
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <Crown className="w-8 h-8 text-[#204f9c] mb-4" />
              <h3 className="text-xl font-gobold mb-3 text-[#204f9c]">Heritage Brands</h3>
              <p className="text-gray-600 font-square721">
                Tradicionales, enfocadas en pureza y precio accesible.
              </p>
            </div>
          </div>

          <div className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all">
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <Star className="w-8 h-8 text-[#204f9c] mb-4" />
              <h3 className="text-xl font-gobold mb-3 text-[#204f9c]">Stars</h3>
              <p className="text-gray-600 font-square721">
                Productos premium asociados a fiesta, poder y glamour.
              </p>
            </div>
          </div>

          <div className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all">
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <Shield className="w-8 h-8 text-[#204f9c] mb-4" />
              <h3 className="text-xl font-gobold mb-3 text-[#204f9c]">Rebels</h3>
              <p className="text-gray-600 font-square721">
                Disruptivos globales que redefinen categorías.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandTerritory;