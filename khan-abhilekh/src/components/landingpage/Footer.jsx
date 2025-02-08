import React from 'react';

// Sample Translation Data
const translations = {
  en: {
    footerText: "All rights reserved | copyright @ 2024",
    companyName: "KHAN ABHILEKH",
  },
  bn: {
    footerText: "সর্বস্বত্ব সংরক্ষিত | কপিরাইট @ ২০২৪",
    companyName: "খান অভিলেখ",
  },
  hi: {
    footerText: "सर्वाधिकार सुरक्षित | कॉपीराइट @ 2024",
    companyName: "खान अभिलेख",
  }
};

const Footer = ({ language }) => {
  const t = translations[language]; // Current translations

  return (
    <footer className="bg-[#151414] text-white py-6 flex flex-col items-center justify-center pt-10">
      {/* Logo Image */}
      <img 
        src="/assets/logo.png" 
        alt="Logo" 
        className="mb-4"
      />
      {/* Footer Text */}
      <p className="text-center text-sm">
        {t.footerText} <strong>{t.companyName}</strong>
      </p>
    </footer>
  );
};

export default Footer;