import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BrandEssence = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const pillars = [
    {
      title: "VISIÓN",
      description: "Revolucionar la experiencia nocturna mediante el lujo discreto y la sofisticación líquida",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M50 15 L75 85 L25 85 Z" 
            fill="none" 
            stroke="var(--color-primary)" 
            strokeWidth="4"
          />
          <circle cx="50" cy="50" r="10" fill="var(--color-primary)" />
        </svg>
      ),
      decorator: (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-[#204f9c] rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`
              }}
            />
          ))}
        </div>
      )
    },
    {
      title: "PROPÓSITO",
      description: "Crear un símbolo de estatus social que trascienda la necesidad de sustancias",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#204f9c" strokeWidth="4" strokeDasharray="5,3" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="#204f9c" strokeWidth="3" />
        </svg>
      ),
      decorator: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#204f9c] rounded-full filter blur-xl opacity-10" />
        </div>
      )
    },
    {
      title: "VALOR",
      description: "Elevación disruptiva a través del diseño y la experiencia sensorial",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M20 50 Q50 10 80 50 T20 50" 
            fill="none" 
            stroke="#204f9c" 
            strokeWidth="4"
          />
          <path 
            d="M30 50 Q50 20 70 50 T30 50" 
            fill="none" 
            stroke="#204f9c" 
            strokeWidth="3"
          />
        </svg>
      ),
      decorator: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#204f9c] to-transparent" />
        </div>
      )
    },
    {
      title: "ESTÉTICA",
      description: "Minimalismo radical con toques de lujo metálico y texturas táctiles",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="#204f9c" strokeWidth="4" />
          <line x1="25" y1="25" x2="75" y2="75" stroke="#204f9c" strokeWidth="3" />
          <line x1="75" y1="25" x2="25" y2="75" stroke="#204f9c" strokeWidth="3" />
        </svg>
      ),
      decorator: (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#204f9c]/30 to-transparent"
              style={{ top: `${25 + (i * 25)}%` }}
            />
          ))}
        </div>
      )
    },
    {
      title: "EXPERIENCIA",
      description: "Rituales de consumo que transforman lo ordinario en extraordinario",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M50 10 A40 40 0 0 1 50 90 A40 40 0 0 1 50 10" 
            fill="none" 
            stroke="#204f9c" 
            strokeWidth="4"
          />
          <circle cx="50" cy="30" r="5" fill="#204f9c" />
          <circle cx="50" cy="70" r="5" fill="#204f9c" />
        </svg>
      ),
      decorator: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-[#204f9c]/20" />
        </div>
      )
    },
    {
      title: "CULTURA",
      description: "Comunidad exclusiva que valora la sobriedad elegante y las conexiones auténticas",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="35" cy="50" r="15" fill="none" stroke="#204f9c" strokeWidth="4" />
          <circle cx="65" cy="50" r="15" fill="none" stroke="#204f9c" strokeWidth="4" />
          <path d="M35 50 Q50 65 65 50" fill="none" stroke="#204f9c" strokeWidth="3" />
        </svg>
      ),
      decorator: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#204f9c] rounded-full filter blur-lg opacity-10" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#204f9c] rounded-full filter blur-lg opacity-10" />
        </div>
      )
    }
  ];

  return (
    <section ref={ref} className="relative py-28 px-4 bg-gradient-to-b from-[#a8efec] to-[#f3fbfd] overflow-hidden">
      <div className="absolute inset-0 trama-pattern opacity-5" />
      <div className="absolute inset-0 degradado opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-gobold mb-16 text-center text-[#204f9c]"
        >
          ESENCIA AURUM
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative bg-white/30 backdrop-blur-sm p-8 rounded-2xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all h-full"
            >
              {pillar.decorator}
              
              <div className="relative z-10 flex flex-col items-center h-full">
                <div className="w-20 h-20 mb-6 text-[#204f9c]">
                  {pillar.icon}
                </div>
                
                <h3 className="text-2xl font-gobold mb-4 text-center text-[#204f9c]">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-600 text-center text-lg leading-relaxed font-square721">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-24 bg-white/30 backdrop-blur-sm p-12 rounded-2xl border border-[#204f9c]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 trama-pattern opacity-10" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-gobold mb-6 text-center text-[#204f9c]">
              MANIFIESTO
            </h3>
            
            <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto leading-relaxed mb-8 font-square721">
              En un mundo de excesos, elegimos la elegancia de la moderación. Donde otros ven simple hidratación, 
              nosotros creamos iconos de estatus. Cada lata es una declaración, cada sorbo un acto de distinción.
            </p>
            
            <div className="text-center">
              <span className="text-2xl text-[#204f9c] font-gobold italic">
                "El verdadero lujo es la claridad en un mundo intoxicado"
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
};

export default BrandEssence;