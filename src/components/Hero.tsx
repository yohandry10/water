import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Efecto Parallax Profundo */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yPos, opacity }}
      >
        <div className="absolute inset-0 bg-[url('../public/banner.png')] bg-cover bg-center scale-125" />
        
        {/* Efecto de partículas */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#004da0]/80"
            initial={{ 
              opacity: 0,
              x: Math.random() * 100,
              y: Math.random() * 100,
              rotate: Math.random() * 360,
              scale: 1.5
            }}
            animate={{
              opacity: [0, 0.8, 0],
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100 + 200],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </motion.div>
        ))}
      </motion.div>

      {/* Efecto de luz central */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.15 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[var(--color-secondary)] rounded-full blur-3xl pointer-events-none"
      />

      {/* Contenido principal */}
      <div className="relative h-full flex flex-col items-center justify-start text-center px-4 z-10 pt-48">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-gobold mb-6 tracking-tighter"
            initial={{ letterSpacing: "0.5em" }}
            animate={inView ? { letterSpacing: "0.05em" } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.img
              src="/logo.png"
              alt="AQUA AURUM"
              className="h-36 md:h-48 mx-auto"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto font-square721 text-[#004da0]"
            style={{ 
              textShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)"
            }}
          >
            "El accesorio líquido para quienes dominan la noche sin perder el control"
          </motion.p>
        </motion.div>

        {/* Solo botón Únete al Clan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(32, 79, 156, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-brand-gradient rounded-full text-white font-gobold tracking-wider relative overflow-hidden group"
          >
            <span className="relative z-10">Únete al Clan</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Indicador de scroll premium */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <div className="w-8 h-12 border-2 border-[#004da0]/80 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="w-1 h-3 bg-[#004da0]/80 rounded-full"
          />
        </div>
        <span className="text-xs text-[#004da0]/60 tracking-widest mt-2 font-square721">EXPLORAR</span>
      </motion.div>

      {/* Efectos de borde */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#004da0]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#004da0]/50 to-transparent" />
      </div>
    </div>
  );
};

export default Hero;
