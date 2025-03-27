import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, Star, Trophy } from 'lucide-react';

const BrandCommunity = () => {
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
          Únete al Clan Aurum
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all text-center group"
          >
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <Crown className="w-8 h-8 text-[#204f9c] mx-auto mb-4" />
              <h3 className="text-xl font-gobold mb-3 text-[#204f9c]">Acceso VIP</h3>
              <p className="text-gray-600 font-square721">
                Eventos exclusivos y experiencias únicas para miembros del clan.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all text-center group"
          >
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <Star className="w-8 h-8 text-[#204f9c] mx-auto mb-4" />
              <h3 className="text-xl font-gobold mb-3 text-[#204f9c]">Recompensas</h3>
              <p className="text-gray-600 font-square721">
                Merchandising exclusivo y beneficios especiales para miembros activos.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all text-center group"
          >
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <Trophy className="w-8 h-8 text-[#204f9c] mx-auto mb-4" />
              <h3 className="text-xl font-gobold mb-3 text-[#204f9c]">Reconocimiento</h3>
              <p className="text-gray-600 font-square721">
                Status especial y privilegios en locales asociados.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(32, 79, 156, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-brand-gradient rounded-full text-white font-gobold tracking-wider relative overflow-hidden group"
          >
            <span className="relative z-10">Únete Ahora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCommunity;