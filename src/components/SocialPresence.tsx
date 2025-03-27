import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, TrendingUp, MessageCircle, Share2, Send, Sparkles } from 'lucide-react';

const SocialPresence = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'club',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', type: 'club', message: '' });
  };

  const socialStrategies = [
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Estética Visual",
      description: "Feed negro, blanco y azul. Reels tipo editoriales de perfume."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Contenido Viral",
      description: "Slow motion de rituales de consumo y experiencias exclusivas."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Frases Impactantes",
      description: "'Tomar agua nunca fue tan atractivo', '¿Eso es agua? No. Es poder.'"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Retos Sociales",
      description: "#AurumChallenge y comparativas visuales con otras bebidas."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-[#a8efec] to-[#f3fbfd]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-gobold mb-16 text-center text-[#204f9c]"
        >
          Presencia Digital
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {socialStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/30 backdrop-blur-sm p-8 rounded-xl border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all"
            >
              <div className="text-[#204f9c] mb-4">
                {strategy.icon}
              </div>
              <h3 className="text-xl font-gobold mb-3 text-[#204f9c]">{strategy.title}</h3>
              <p className="text-gray-600 font-square721">{strategy.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-[#204f9c]/20">
            <h3 className="text-3xl font-gobold mb-8 text-center text-[#204f9c]">Únete al Movimiento Aurum</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-[#204f9c]">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/50 border border-[#204f9c]/20 rounded-lg focus:outline-none focus:border-[#204f9c] transition-colors text-gray-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#204f9c]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/50 border border-[#204f9c]/20 rounded-lg focus:outline-none focus:border-[#204f9c] transition-colors text-gray-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="block text-sm font-medium text-[#204f9c]">
                  Tipo de Contacto
                </label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 bg-white/50 border border-[#204f9c]/20 rounded-lg focus:outline-none focus:border-[#204f9c] transition-colors text-gray-600"
                >
                  <option value="club">Club/Discoteca</option>
                  <option value="distributor">Distribuidor</option>
                  <option value="influencer">Influencer</option>
                  <option value="press">Prensa</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-[#204f9c]">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 border border-[#204f9c]/20 rounded-lg focus:outline-none focus:border-[#204f9c] transition-colors text-gray-600 resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 bg-brand-gradient rounded-full text-white font-gobold tracking-wider relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(32, 79, 156, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : submitted ? (
                    'Mensaje Enviado!'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialPresence;