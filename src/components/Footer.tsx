import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: SiTiktok, name: 'TikTok', href: '#' },
    { icon: Youtube, name: 'YouTube', href: '#' }
  ];

  const footerLinks = [
    { text: 'Inicio', href: '#' },
    { text: 'Productos', href: '#' },
    { text: 'Sobre Nosotros', href: '#' },
    { text: 'Contacto', href: '#' }
  ];

  return (
    <footer className="bg-[#8bebe9] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo y lema */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <img src="/logo.png" alt="Aurum" className="h-20 md:h-24" />
            <p className="text-[#004da0] font-square721 text-lg max-w-sm">
              "El accesorio líquido para quienes dominan la noche sin perder el control"
            </p>
          </div>

          {/* Enlaces */}
          <nav className="flex flex-col gap-4">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ x: 5 }}
                className="text-[#004da0] hover:text-[#004da0]/80 transition-colors font-square721 text-lg"
              >
                {link.text}
              </motion.a>
            ))}
          </nav>

          {/* Redes sociales con efectos modernos */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="relative group"
                >
                  <div className="relative flex items-center justify-center w-14 h-14 border-2 border-[#004da0] rounded-full overflow-hidden transition-all duration-500 ease-out group-hover:border-[#004da0]/0">
                    {/* Fondo animado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#004da0] to-[#8bebe9] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                    
                    {/* Brillo superior */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20 transform -skew-y-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    
                    {/* Icono */}
                    <div className="relative z-10 text-[#004da0] group-hover:text-white transition-colors duration-500 ease-out">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-[#004da0]/60 font-square721 text-sm">
            © {new Date().getFullYear()} Aurum. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;