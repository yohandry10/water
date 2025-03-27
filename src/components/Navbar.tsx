import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [lastScrollY, scrollY]);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Producto', href: '#producto' },
    { label: 'Esencia', href: '#esencia' },
    { label: 'Comunidad', href: '#comunidad' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="fixed top-8 right-48 z-50"
        >
          <ul className="flex items-center gap-14">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="relative group flex flex-col items-center"
                >
                  <span className="text-[#004da0] font-square721 text-2xl tracking-wider group-hover:text-[#004da0] transition-all duration-500">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-2 left-1/2 w-2 h-2 bg-[#004da0] rounded-full transform -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                  <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-[#004da0] transform -translate-x-1/2 group-hover:w-full transition-all duration-500 ease-out" />
                  <motion.div
                    className="absolute -inset-x-6 -inset-y-4 bg-[#004da0]/5 rounded-lg opacity-0 transform scale-95"
                    animate={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar; 