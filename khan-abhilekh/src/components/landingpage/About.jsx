import React from 'react';

// Sample Translation Data
const translations = {
  en: {
    heading: "ABOUT US",
    text: (
      <>
        <span className="italic font-extrabold">Khan Abhilekh</span> is an innovative project aimed at revolutionizing coal mine management through a 
        digital logbook solution. Our platform enhances safety, productivity, and compliance by streamlining 
        shift handovers, real-time alerts, and maintenance schedules, empowering coal mines to operate 
        efficiently while adhering to safety standards and best practices.
      </>
    ),
    imgAlt: "About Us",
  },
  bn: {
    heading: "আমাদের সম্পর্কে",
    text: (
      <>
        <span className="italic font-extrabold">খান অভিলেখ</span> একটি উদ্ভাবনী প্রকল্প যা কয়লা খনি ব্যবস্থাপনায় বিপ্লব ঘটানোর লক্ষ্য নিয়ে কাজ করছে 
        একটি ডিজিটাল লগবুক সমাধানের মাধ্যমে। আমাদের প্ল্যাটফর্ম নিরাপত্তা, উৎপাদনশীলতা এবং সম্মতি বৃদ্ধি করে 
        শিফট হ্যান্ডওভার, রিয়েল-টাইম অ্যালার্ম এবং রক্ষণাবেক্ষণ সময়সূচী স্ট্রিমলাইন করে, কয়লা খনিগুলিকে কার্যকরভাবে পরিচালিত করতে 
        সক্ষম করে এবং নিরাপত্তা মান এবং সেরা অনুশীলনের সাথে মেনে চলে।
      </>
    ),
    imgAlt: "আমাদের সম্পর্কে",
  },
  hi: {
    heading: "हमारे बारे में",
    text: (
      <>
        <span className="italic font-extrabold">खान अभिलेख</span> एक अभिनव परियोजना है जो कोयला खदान प्रबंधन में क्रांति लाने का लक्ष्य रखती है 
        एक डिजिटल लॉगबुक समाधान के माध्यम से। हमारा प्लेटफॉर्म सुरक्षा, उत्पादकता और अनुपालन को बढ़ाता है 
        शिफ्ट हैंडओवर, रीयल-टाइम अलर्ट और रखरखाव शेड्यूल को स्ट्रीमलाइन करके, कोयला खदानों को कुशलतापूर्वक संचालित करने में सक्षम बनाता है 
        और सुरक्षा मानकों और सर्वोत्तम प्रथाओं के अनुसार पालन करता है।
      </>
    ),
    imgAlt: "हमारे बारे में",
  }
};

const About = ({ language }) => {
  const t = translations[language]; // Current translations

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-12 bg-black text-white">
      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-6">
        {t.heading}
      </h1>

      {/* Text Body */}
      <p className="text-base md:text-lg mb-6 leading-relaxed max-w-4xl">
        {t.text}
      </p>

      {/* Image */}
      <img src="/assets/about.png" alt={t.imgAlt} className="max-w-xl" />
    </section>
  );
};

export default About;