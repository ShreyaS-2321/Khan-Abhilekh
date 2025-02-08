import React from 'react';

// Sample Translation Data
const translations = {
  en: {
    heading: "RECENT COAL INDIA REPORTS",
  },
  bn: {
    heading: "সম্প্রতি কয়লা ভারত রিপোর্ট",
  },
  hi: {
    heading: "हाल की कोल इंडिया रिपोर्ट",
  }
};

const Report = ({ language }) => {
  // Array of images for the right side
  const rightImages = [
    '/assets/r (1).png',
    '/assets/r (2).png',
    '/assets/r (3).png',
    '/assets/r (4).png',
  ];

  const t = translations[language]; // Current translations

  return (
    <section className="flex flex-col items-center justify-center text-center pt-20 pb-20 bg-black text-white">
      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-10">
        {t.heading}
      </h1>

      {/* Report Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 w-full mx-auto px-6 lg:px-0">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/assets/r.png"
            alt="Main Report"
            className="w-full h-auto"
          />
        </div>

        {/* Right Images */}
        <div className="flex flex-wrap justify-center lg:w-2/3 gap-4">
          {rightImages.map((src, index) => (
            <div key={index} className="w-1/2 md:w-1/3 lg:w-1/2 p-2">
              <div className="relative group">
                <img
                  src={src}
                  alt={`Report ${index + 1}`}
                  className="w-full h-auto transition-transform transform group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Report;