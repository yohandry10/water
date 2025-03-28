import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BrandEssence from './components/BrandEssence';
import BrandIdentity from './components/BrandIdentity';
import BrandTerritory from './components/BrandTerritory';
import TargetAudience from './components/TargetAudience';
import BrandValues from './components/BrandValues';
import BrandExperience from './components/BrandExperience';
import RitualSection from './components/RitualSection';
import BrandGallery from './components/BrandGallery';
import BrandActivations from './components/BrandActivations';
import BrandCommunity from './components/BrandCommunity';
import SocialPresence from './components/SocialPresence';
import Footer from './components/Footer';
import PagePreloader from './components/PagePreloader';

const App = () => {
  return (
    <div className="relative">
      <PagePreloader />
      <Navbar />
      <Hero />
      <BrandEssence />
      <BrandIdentity />
      <BrandTerritory />
      <TargetAudience />
      <BrandValues />
      <BrandExperience />
      <RitualSection />
      <BrandGallery />
      <BrandActivations />
      <BrandCommunity />
      <SocialPresence />
      <Footer />
    </div>
  );
};

export default App;