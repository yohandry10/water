import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="relative py-28 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 trama-pattern opacity-5" />
      <div className="absolute inset-0 degradado opacity-10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-gobold mb-16 text-center text-[#aceae8]"
        >
          Únete al Clan
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-[#204f9c]/20"
        >
          <div className="absolute inset-0 trama-pattern opacity-5" />
          <div className="absolute inset-0 degradado opacity-10" />
          
          <form className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[#aceae8] font-gobold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black/20 border border-[#204f9c]/20 rounded-lg text-white font-square721 focus:outline-none focus:border-[#204f9c]/40"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#aceae8] font-gobold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black/20 border border-[#204f9c]/20 rounded-lg text-white font-square721 focus:outline-none focus:border-[#204f9c]/40"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-[#aceae8] font-gobold mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-black/20 border border-[#204f9c]/20 rounded-lg text-white font-square721 focus:outline-none focus:border-[#204f9c]/40"
                placeholder="¿Sobre qué nos quieres hablar?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#aceae8] font-gobold mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-black/20 border border-[#204f9c]/20 rounded-lg text-white font-square721 focus:outline-none focus:border-[#204f9c]/40 resize-none"
                placeholder="Tu mensaje aquí..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-brand-gradient rounded-full text-white font-gobold hover:scale-105 transition-transform"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-[#aceae8]/80 max-w-2xl mx-auto font-square721">
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarnos.
            Nuestro equipo estará encantado de atenderte.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 