import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PagePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-[#a8efec] to-[#f3fbfd]"
        >
          <div className="relative">
            {/* Círculos giratorios */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-72 h-72 relative"
            >
              {/* Círculo exterior */}
              <motion.div
                className="absolute inset-0 border-4 border-[#204f9c] rounded-full"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Círculo medio */}
              <motion.div
                className="absolute inset-4 border-4 border-[#204f9c]/70 rounded-full"
                animate={{ 
                  rotate: -360,
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Círculo interior */}
              <motion.div
                className="absolute inset-8 border-4 border-[#204f9c]/40 rounded-full"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Logo central */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="/logo.png" 
                  alt="Logo Aurum" 
                  className="w-48 h-48 object-contain drop-shadow-lg"
                />
              </motion.div>
            </motion.div>
            
            {/* Texto de carga */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="space-y-2">
                <motion.p
                  className="text-[#204f9c]/80 font-medium text-lg"
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [20, 0, -20]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0
                  }}
                >
                  Tómalo.
                </motion.p>
                <motion.p
                  className="text-[#204f9c]/80 font-medium text-lg"
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [20, 0, -20]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                >
                  Mírate.
                </motion.p>
                <motion.p
                  className="text-[#204f9c]/80 font-medium text-lg"
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [20, 0, -20]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                  }}
                >
                  Destaca.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PagePreloader; 