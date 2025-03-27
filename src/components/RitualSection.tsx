import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlassWater, HandMetal, Eye, Camera } from 'lucide-react';

const RitualSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const steps = [
    {
      icon: <GlassWater className="w-8 h-8" />,
      title: "Apertura Ritual",
      description: "El clásico 'pssst' audible que marca el inicio de un momento especial."
    },
    {
      icon: <HandMetal className="w-8 h-8" />,
      title: "Postura Elegante",
      description: "Cuello hacia atrás, mirada hacia arriba, movimiento lento y calculado."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Mirada Post-trago",
      description: "Segura, confiada, sin sonreír. Proyectando poder y control."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Momento Visual",
      description: "La lata se convierte en un accesorio de estatus para fotos y validación social."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80')] bg-fixed bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-gobold mb-16 text-center text-brand-gradient"
        >
          El Ritual Aurum
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative bg-black/70 backdrop-blur-sm p-8 rounded-xl border border-[var(--color-primary)]/20 overflow-hidden group hover:border-[var(--color-primary)]/40 transition-all"
            >
              <div className="absolute inset-0 trama-pattern opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="absolute inset-0 degradado opacity-10 group-hover:opacity-20 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-[var(--color-primary)] mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-gobold mb-3 text-[var(--color-secondary)]">
                  {step.title}
                </h3>
                <p className="text-gray-300 font-square721">
                  {step.description}
                </p>
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
          <p className="text-2xl font-square721 italic text-[var(--color-secondary)]">
            "Tómalo. Mírate. Destaca."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RitualSection;