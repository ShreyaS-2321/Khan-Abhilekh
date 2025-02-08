import React, { useState } from 'react';
import Navbar from './landingpage/Navbar'; // Ensure correct path
import HeroSection from './landingpage/HeroSection';
import About from './landingpage/About';
import Features from './landingpage/Features';
import Report from './landingpage/Report';
import Footer from './landingpage/Footer';

// Sample Translation Data
const translations = {
  en: {
    navbar: "Home",
    heroSection: "Welcome to Our Website",
    about: "About Us",
    features: "Features",
    report: "Report",
    footer: "Contact Us",
  },
  bn: {
    navbar: "বাড়ি",
    heroSection: "আমাদের ওয়েবসাইটে স্বাগতম",
    about: "আমাদের সম্পর্কে",
    features: "বৈশিষ্ট্য",
    report: "রিপোর্ট",
    footer: "যোগাযোগ করুন",
  },
  hi: {
    navbar: "मुख्य पृष्ठ",
    heroSection: "हमारी वेबसाइट में आपका स्वागत है",
    about: "हमारे बारे में",
    features: "विशेषताएं",
    report: "रिपोर्ट",
    footer: "संपर्क करें",
  }
};

const Landing = () => {
  const [language, setLanguage] = useState('en'); // Default language

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const t = translations[language]; // Current translations

  return (
    <>
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <About language={language} />
      <Features language={language} />
      <Report language={language} />
      <Footer language={language} />
    </>
  );
};

export default Landing;