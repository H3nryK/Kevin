import { useState, useEffect } from 'react';
import { FaPersonArrowUpFromLine } from "react-icons/fa6";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-[999] p-3 rounded-full bg-blue-600 text-white shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <FaPersonArrowUpFromLine size={24} />
    </button>
  );
};

export default BackToTop;
