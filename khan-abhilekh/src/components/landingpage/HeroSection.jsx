import React from 'react';

// Sample Translation Data
const translations = {
  en: {
    title: "Revolutionizing Safety & Productivity in Coal Mines",
    subtitle: "Digital Shift Handover Log System and Safety Management Plan to Enhance Efficiency and Compliance",
  },
  bn: {
    title: "কোল মাইনসে নিরাপত্তা ও উৎপাদনশীলতা সংস্কার",
    subtitle: "ডিজিটাল শিফট হ্যান্ডওভার লগ সিস্টেম এবং সুরক্ষা ব্যবস্থাপনা পরিকল্পনা কার্যকারিতা এবং সম্মতি বাড়ানোর জন্য",
  },
  hi: {
    title: "कोयला खानों में सुरक्षा और उत्पादकता का सुधार",
    subtitle: "डिजिटल शिफ्ट हैंडओवर लॉग सिस्टम और सुरक्षा प्रबंधन योजना दक्षता और अनुपालन बढ़ाने के लिए",
  }
};

const HeroSection = ({ language }) => {
  const t = translations[language]; // Current translations

  return (
    <section className="relative h-screen bg-black">
      {/* Background overlay with image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('./assets/bg.jpg')" }}
      />

      {/* Content of the Hero Section */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 md:px-12">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {t.title.split(' & ').map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && <br />}
                {index === 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg mb-6">
            {t.subtitle}
          </p>

          {/* Diamond Image */}
          <img
            src="/assets/diamond.png"
            alt="Diamond Icon"
            className="mx-auto max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;