import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlassWater, Music, Users } from 'lucide-react';

const BrandExperience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80')] bg-fixed bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-gobold mb-16 text-center text-brand-gradient"
        >
          La Experiencia Aurum
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative bg-black/70 backdrop-blur-sm p-8 rounded-xl border border-[var(--color-primary)]/20 overflow-hidden group hover:border-[var(--color-primary)]/40 transition-all"
          >
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <GlassWater className="w-8 h-8 text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-gobold mb-3 text-[var(--color-secondary)]">Ritual de Consumo</h3>
              <p className="text-gray-300 font-square721">
                Una coreografía social que transforma el acto de beber en una declaración de estatus.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative bg-black/70 backdrop-blur-sm p-8 rounded-xl border border-[var(--color-primary)]/20 overflow-hidden group hover:border-[var(--color-primary)]/40 transition-all"
          >
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <Music className="w-8 h-8 text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-gobold mb-3 text-[var(--color-secondary)]">Activaciones</h3>
              <p className="text-gray-300 font-square721">
                Experiencias exclusivas que refuerzan nuestra presencia en la escena nocturna.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative bg-black/70 backdrop-blur-sm p-8 rounded-xl border border-[var(--color-primary)]/20 overflow-hidden group hover:border-[var(--color-primary)]/40 transition-all"
          >
            <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10">
              <Users className="w-8 h-8 text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-gobold mb-3 text-[var(--color-secondary)]">Comunidad</h3>
              <p className="text-gray-300 font-square721">
                El Clan Aurum: una comunidad exclusiva para quienes entienden el poder del estatus visual.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-square721 italic text-[var(--color-secondary)]">
            "Los que beben Aurum no siguen la fiesta, la dominan"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandExperience;