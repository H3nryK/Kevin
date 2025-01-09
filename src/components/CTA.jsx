import { useState } from 'react';
import { Calendar, FileDown } from 'lucide-react';

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
      title: "Let's Talk",
      subtitle: 'Schedule a Meeting',
      description: 'Book a 15-minute call to discuss potential opportunities and collaborations',
      icon: Calendar,
      action: handleBookTime,
      gradient: 'from-blue-500 to-indigo-600',
      hoverGradient: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'cv',
      title: 'My Experience',
      subtitle: 'Download CV',
      description: 'Get a detailed overview of my skills, experience, and achievements',
      icon: FileDown,
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
                  <h2 className="text-white dark:text-white text-2xl font-bold">{card.title}</h2>
                  <p className="text-white/80 dark:text-white/80 text-sm leading-relaxed">{card.description}</p>
                </div>
                
                <div className={`
                  mt-6 inline-flex items-center text-white dark:text-white text-sm font-medium
                  transform transition-all duration-300
                  ${activeCard === card.id ? 'translate-x-2' : 'translate-x-0'}
                `}>
                  Learn more
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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