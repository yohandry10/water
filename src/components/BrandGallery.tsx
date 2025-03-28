import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

const BrandGallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      original: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      title: "Experiencia Aurum #1",
      description: "Descubre la magia de la fotografía profesional"
    },
    {
      original: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      title: "Experiencia Aurum #2",
      description: "Captura momentos inolvidables"
    },
    {
      original: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      title: "Experiencia Aurum #3",
      description: "La excelencia en cada detalle"
    },
    {
      original: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      title: "Experiencia Aurum #4",
      description: "Innovación y creatividad"
    },
    {
      original: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      title: "Experiencia Aurum #5",
      description: "Calidad y profesionalismo"
    },
    {
      original: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      title: "Experiencia Aurum #6",
      description: "Tradición y modernidad"
    }
  ];

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  const visibleImages = getVisibleImages();

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
          Galería Visual
        </motion.h2>

        <div 
          className="relative"
          onKeyDown={handleKeyPress}
          tabIndex={0}
          role="region"
          aria-label="Galería de imágenes"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-8"
            >
              {visibleImages.map((image, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative overflow-hidden rounded-xl group bg-white/30 backdrop-blur-sm border border-[#204f9c]/20 hover:border-[#204f9c]/40 transition-all"
                >
                  <img
                    src={image.original}
                    alt={image.title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#204f9c]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-gobold text-white mb-2">{image.title}</h3>
                    <p className="text-white/90">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#204f9c] focus:ring-offset-2"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6 text-[#204f9c]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#204f9c] focus:ring-offset-2"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6 text-[#204f9c]" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`p-1 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#204f9c] focus:ring-offset-2 ${
                  currentIndex === index ? 'text-[#204f9c]' : 'text-gray-300'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
                aria-current={currentIndex === index ? 'page' : undefined}
              >
                <Circle className="w-3 h-3" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandGallery;