import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Données pour les actualités
const newsItems = [
  {
    id: 1,
    title: "Nouveau brunch dans notre resto à Paris !",
    description: "Tous les weekends de 10h à 14h, venez découvrir notre formule brunch à 29,90€.",
    date: "15 octobre 2025",
    image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&q=80&w=800"
  }
];

// Données pour les spécialités
const specialties = [
  {
    id: 1,
    name: "Nigiri Mix",
    description: "6 pièces variées de nigiri",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&q=80&w=800",
    menuCategory: "Sushis",
    menuItemId: "nigiri-mix"
  },
  {
    id: 2,
    name: "Pad Thaï",
    description: "Nouilles de riz sautées au poulet et cacahuètes",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=800",
    menuCategory: "Thai",
    menuItemId: "pad-thai"
  },
  {
    id: 3,
    name: "Nouilles sautées",
    description: "Nouilles sautées au poulet et légumes",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
    menuCategory: "Plats",
    menuItemId: "nouilles-sautees"
  },
  {
    id: 4,
    name: "Gyoza",
    description: "6 raviolis japonais grillés",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
    menuCategory: "Plats",
    menuItemId: "gyoza"
  },
  {
    id: 5,
    name: "Curry vert",
    description: "Curry vert au lait de coco et poulet",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800",
    menuCategory: "Thai",
    menuItemId: "curry-vert"
  }
];

export default function Home() {
  const specialtiesRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (specialtiesRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = specialtiesRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (specialtiesRef.current) {
      const scrollAmount = 320;
      const currentScroll = specialtiesRef.current.scrollLeft;
      specialtiesRef.current.scrollTo({
        left: direction === 'left' 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount,
        behavior: 'smooth',
      });
      
      // Small timeout to let the scroll happen before checking
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <motion.section 
        className="flex items-center justify-center px-4 py-12 sm:py-16 md:py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#9b2226] mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Bienvenue au Asian Touch
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 lg:mb-10 px-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Découvrez notre cuisine asiatique raffinée, préparée avec passion et authenticité.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              to="/menu"
              className="inline-block bg-[#9b2226] text-white px-6 sm:px-8 py-3 rounded-lg font-medium
                       hover:bg-[#660708] transition-colors duration-200 text-sm sm:text-base md:text-lg"
            >
              Voir le menu
            </Link>
            <Link
              to="/restaurants"
              className="inline-block bg-white text-[#9b2226] border-2 border-[#9b2226] px-6 sm:px-8 py-3 rounded-lg font-medium
                       hover:bg-[#f9f5f0] transition-colors duration-200 text-sm sm:text-base md:text-lg"
            >
              Nos restaurants
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Specialties Slider Section */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#9b2226]">
              Nos Spécialités
            </h2>
            
            <div className="hidden md:flex space-x-2">
              <motion.button
                onClick={() => scroll('left')}
                className={`p-2 rounded-full ${canScrollLeft ? 'bg-[#9b2226] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                whileHover={canScrollLeft ? { scale: 1.1 } : {}}
                whileTap={canScrollLeft ? { scale: 0.9 } : {}}
                disabled={!canScrollLeft}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={() => scroll('right')}
                className={`p-2 rounded-full ${canScrollRight ? 'bg-[#9b2226] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                whileHover={canScrollRight ? { scale: 1.1 } : {}}
                whileTap={canScrollRight ? { scale: 0.9 } : {}}
                disabled={!canScrollRight}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
          
          <div 
            className="relative"
            onMouseEnter={checkScrollability}
          >
            <div 
              ref={specialtiesRef} 
              className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={checkScrollability}
            >
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.id}
                  className="flex-shrink-0 w-[250px] sm:w-[280px] snap-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                    <img 
                      src={specialty.image} 
                      alt={specialty.name} 
                      className="w-full h-36 sm:h-48 object-cover"
                    />
                    <div className="p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg font-bold text-[#9b2226] mb-1 sm:mb-2">{specialty.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{specialty.description}</p>
                      <Link 
                        to={`/menu?category=${specialty.menuCategory}&item=${specialty.menuItemId}`} 
                        className="mt-2 sm:mt-3 inline-block text-xs sm:text-sm font-medium text-[#9b2226] hover:underline"
                      >
                        Voir sur le menu
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile indicator dots */}
            <div className="flex justify-center space-x-2 mt-4 md:hidden">
              {specialties.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[#9b2226]' : 'bg-gray-300'}`}
                ></motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* News Section */}
      <motion.section 
        className="py-12 bg-[#f9f5f0]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#9b2226] text-center mb-10">
            Nos Actualités
          </h2>
          
          <div className="max-w-2xl mx-auto">
            {newsItems.map((news, index) => (
              <motion.div
                key={news.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#9b2226]">{news.title}</h3>
                    <span className="text-xs sm:text-sm text-gray-500">{news.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{news.description}</p>
                  <Link 
                    to="/restaurants" 
                    className="mt-4 inline-block text-sm sm:text-base font-medium text-[#9b2226] hover:underline"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    En savoir plus →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}