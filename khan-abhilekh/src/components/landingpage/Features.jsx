import React from 'react';

// Sample Translation Data
const translations = {
  en: {
    features: [
      {
        title: 'Digital Shift Handover Log',
        description: 'Record and access shift details for seamless handover and accountability',
        imgSrc: '/assets/1 (2).png',
      },
      {
        title: 'Incident Reporting',
        description: 'Report and document incidents quickly for immediate action and review',
        imgSrc: '/assets/2.png',
      },
      {
        title: 'Performance Dashboard',
        description: 'Visualize mine’s key performance indicators with charts and graphs',
        imgSrc: '/assets/3.png',
      },
      {
        title: 'Emergency Alerts',
        description: 'Immediate alerts for emergencies with their importance level',
        imgSrc: '/assets/4.png',
      },
      {
        title: 'Evacuation & Hazard Mapping',
        description: 'Record and access shift details for seamless handover and accountability',
        imgSrc: '/assets/5.png',
      },
      {
        title: 'Personalized Performance Report',
        description: 'Personalized performance report will be available based on employee’s work',
        imgSrc: '/assets/6.png',
      },
      {
        title: 'Personalized AI Bot',
        description: 'A Personalized AI chatbot to help the workers with their queries',
        imgSrc: '/assets/7.png',
      },
      {
        title: 'Safety Video Tutorial',
        description: 'Video tutorials on safety to make the workers more aware',
        imgSrc: '/assets/8.png',
      },
    ]
  },
  bn: {
    features: [
      {
        title: 'ডিজিটাল শিফট হ্যান্ডওভার লগ',
        description: 'সাবলীল হ্যান্ডওভার এবং হিসাবের জন্য শিফট বিবরণ রেকর্ড এবং অ্যাক্সেস করুন',
        imgSrc: '/assets/1 (2).png',

      },
      {
        title: 'ঘটনার রিপোর্টিং',
        description: 'তারাতারি পদক্ষেপ এবং পর্যালোচনার জন্য ঘটনা রিপোর্ট এবং ডকুমেন্ট করুন',
        imgSrc: '/assets/2.png',

      },
      {
        title: 'পারফরম্যান্স ড্যাশবোর্ড',
        description: 'চার্ট এবং গ্রাফের সাথে খনির প্রধান কর্মক্ষমতা সূচকগুলি ভিজ্যুয়ালাইজ করুন',
        imgSrc: '/assets/3.png',

      },
      {
        title: 'জরুরি সতর্কতা',
        description: 'জরুরি পরিস্থিতির জন্য অবিলম্বে সতর্কতা তাদের গুরুত্ব স্তর সহ',
        imgSrc: '/assets/4.png',

      },
      {
        title: 'পলায়ন ও বিপদ মানচিত্রণ',
        description: 'সাবলীল হ্যান্ডওভার এবং হিসাবের জন্য শিফট বিবরণ রেকর্ড এবং অ্যাক্সেস করুন',
        imgSrc: '/assets/5.png',

      },
      {
        title: 'ব্যক্তিগত পারফরম্যান্স রিপোর্ট',
        description: 'কর্মচারীর কাজের উপর ভিত্তি করে একটি ব্যক্তিগত পারফরম্যান্স রিপোর্ট উপলব্ধ হবে',
        imgSrc: '/assets/6.png',

      },
      {
        title: 'ব্যক্তিগত AI বট',
        description: 'কর্মীদের প্রশ্নের সাথে সাহায্য করার জন্য একটি ব্যক্তিগত AI চ্যাটবট',
        imgSrc: '/assets/7.png',

      },
      {
        title: 'নিরাপত্তা ভিডিও টিউটোরিয়াল',
        description: 'কর্মীদের আরও সচেতন করার জন্য নিরাপত্তা সম্পর্কে ভিডিও টিউটোরিয়াল',
        imgSrc: '/assets/8.png',

      },
    ]
  },
  hi: {
    features: [
      {
        title: 'डिजिटल शिफ्ट हैंडओवर लॉग',
        description: 'सहज हैंडओवर और जिम्मेदारी के लिए शिफ्ट विवरण रिकॉर्ड और एक्सेस करें',
        imgSrc: '/assets/1 (2).png',

      },
      {
        title: 'घटना रिपोर्टिंग',
        description: 'तत्काल कार्रवाई और समीक्षा के लिए घटनाओं की रिपोर्ट और दस्तावेज़ करें',
        imgSrc: '/assets/2.png',

      },
      {
        title: 'प्रदर्शन डैशबोर्ड',
        description: 'चार्ट और ग्राफ़ के साथ खनन के प्रमुख प्रदर्शन संकेतकों को दृश्य बनाएं',
        imgSrc: '/assets/3.png',

      },
      {
        title: 'आपातकालीन अलर्ट',
        description: 'आपातकाल के लिए तुरंत अलर्ट, उनके महत्व स्तर के साथ',
        imgSrc: '/assets/4.png',

      },
      {
        title: 'निकासी और खतरों का मानचित्रण',
        description: 'सहज हैंडओवर और जिम्मेदारी के लिए शिफ्ट विवरण रिकॉर्ड और एक्सेस करें',
        imgSrc: '/assets/5.png',

      },
      {
        title: 'व्यक्तिगत प्रदर्शन रिपोर्ट',
        description: 'कर्मचारी के काम के आधार पर व्यक्तिगत प्रदर्शन रिपोर्ट उपलब्ध होगी',
        imgSrc: '/assets/6.png',

      },
      {
        title: 'व्यक्तिगत AI बॉट',
        description: 'कर्मचारियों के सवालों में मदद करने के लिए एक व्यक्तिगत AI चैटबॉट',
        imgSrc: '/assets/7.png',

      },
      {
        title: 'सुरक्षा वीडियो ट्यूटोरियल',
        description: 'कर्मचारियों को अधिक जागरूक बनाने के लिए सुरक्षा पर वीडियो ट्यूटोरियल',
        imgSrc: '/assets/8.png',
      },
    ]
  }
};

const Features = ({ language }) => {
  const features = translations[language].features; // Current translations

  return (
    <section className="flex flex-col items-center justify-center text-center pl-32 pr-32 px-6 py-12 bg-black text-white">
      <h1 className="text-4xl font-semibold mb-8">
        {translations[language].features[0].title} {/* Using the title as an example */}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="relative group bg-gray-800 p-6 rounded-lg">
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="w-full h-auto mb-4 transition-transform transform group-hover:scale-105"
            />
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;