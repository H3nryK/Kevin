import { useState } from 'react';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoIosCloudDownload } from "react-icons/io";

const CTASection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleBookTime = () => {
    window.open('https://calendly.com/kevinobote49/15min', '_blank');
  };

  const handleDownloadCV = () => {
    window.open('/Kevin_Obote.pdf', '_blank');
  };

  const cards = [
    {
      id: 'booking',
      subtitle: 'Schedule a Meeting',
      icon: IoCalendarNumberOutline,
      action: handleBookTime,
      gradient: 'from-blue-500 to-indigo-600',
      hoverGradient: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'cv',
      subtitle: 'Download CV',
      icon: IoIosCloudDownload    ,
      action: handleDownloadCV,
      gradient: 'from-emerald-500 to-teal-600',
      hoverGradient: 'from-emerald-600 to-teal-700'
    }
  ];

  return (
    <section className="relative py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative"
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={card.action}
            >
              <div className={`
                absolute inset-0 bg-gradient-to-br ${activeCard === card.id ? card.hoverGradient : card.gradient}
                rounded-2xl transform transition-all duration-300
                ${activeCard === card.id ? 'scale-105 shadow-2xl' : 'scale-100 shadow-xl'}
              `} />
              
              <div className="relative p-6 h-full">
                <div className="bg-white/10 dark:bg-gray-800/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-white/90 dark:text-white text-xs uppercase tracking-wider">{card.subtitle}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;