import { useState, useEffect } from 'react';
import { 
  Hand,
  Moon, 
  Sun, 
  Type,
  Pause,
  Play,
  SpaceIcon,
  MousePointerClick,
  Keyboard
} from 'lucide-react';
import { useTheme } from '../contexts/theme-context';
import { BiFontSize } from "react-icons/bi";
import { TbLetterSpacing } from "react-icons/tb";

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [isDarkTheme, setIsDarkTheme] = useTheme();
  const [highContrast, setHighContrast] = useState(false);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState('normal');
  const [lineHeight, setLineHeight] = useState('normal');
  const [focusHighlight, setFocusHighlight] = useState(false);
  const [keyboardNav, setKeyboardNav] = useState(false);

  useEffect(() => {
    // Add keyboard navigation listener
    const handleKeyNav = (e) => {
      if (!keyboardNav) return;
      if (e.key === 'Tab') {
        document.querySelector(':focus')?.classList.add('ring-4', 'ring-blue-500');
      }
    };

    if (keyboardNav) {
      window.addEventListener('keydown', handleKeyNav);
    }

    return () => window.removeEventListener('keydown', handleKeyNav);
  }, [keyboardNav]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const adjustFontSize = (increment) => {
    const newSize = Math.max(0.8, Math.min(1.4, fontSize + increment));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}rem`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('contrast-150');
  };

  const toggleAnimations = () => {
    setIsAnimationPaused(!isAnimationPaused);
    document.documentElement.classList.toggle('motion-safe:animate-none');
  };

  const adjustLetterSpacing = () => {
    const spacings = ['normal', 'wide', 'wider'];
    const currentIndex = spacings.indexOf(letterSpacing);
    const nextSpacing = spacings[(currentIndex + 1) % spacings.length];
    setLetterSpacing(nextSpacing);
    document.documentElement.classList.remove('tracking-normal', 'tracking-wide', 'tracking-wider');
    document.documentElement.classList.add(`tracking-${nextSpacing}`);
  };

  const adjustLineHeight = () => {
    const heights = ['normal', 'relaxed', 'loose'];
    const currentIndex = heights.indexOf(lineHeight);
    const nextHeight = heights[(currentIndex + 1) % heights.length];
    setLineHeight(nextHeight);
    document.documentElement.classList.remove('leading-normal', 'leading-relaxed', 'leading-loose');
    document.documentElement.classList.add(`leading-${nextHeight}`);
  };

  const toggleFocusHighlight = () => {
    setFocusHighlight(!focusHighlight);
    document.documentElement.classList.toggle('focus-visible:ring-4');
  };

  const renderAccessibilityOption = (icon, label, value, onClick, options = null) => (
    <div className="flex items-center justify-between py-2">
      <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        {icon}
        {label}
      </span>
      {options ? (
        <select 
          onChange={(e) => onClick(e.target.value)}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700"
          value={value}
        >
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <button
          onClick={onClick}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label={`Toggle ${label}`}
        >
          {typeof value === 'boolean' ? (value ? 'On' : 'Off') : value}
        </button>
      )}
    </div>
  );

  return (
    <div className="fixed bottom-20 right-4 z-[999]">
      <button
        onClick={toggleMenu}
        className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300"
        aria-label="Accessibility Options"
      >
        <Hand className="w-6 h-6" />
      </button>

      <div className={`absolute bottom-full right-0 mb-2 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 space-y-2 min-w-[250px] max-h-[80vh] overflow-y-auto">
          {renderAccessibilityOption(
            <BiFontSize className="w-5 h-5" />,
            "Font Size",
            fontSize === 1 ? "Normal" : fontSize > 1 ? "Large" : "Small",
            () => adjustFontSize(fontSize === 1 ? 0.2 : fontSize > 1 ? -0.4 : 0.2)
          )}
          
          {renderAccessibilityOption(
            isDarkTheme ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />,
            "Theme",
            isDarkTheme ? "Dark" : "Light",
            () => setIsDarkTheme(!isDarkTheme)
          )}

          {renderAccessibilityOption(
            <Type className="w-5 h-5" />,
            "Contrast",
            highContrast,
            toggleHighContrast
          )}

          {renderAccessibilityOption(
            isAnimationPaused ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />,
            "Animations",
            !isAnimationPaused,
            toggleAnimations
          )}

          {renderAccessibilityOption(
            <TbLetterSpacing className="w-5 h-5" />,
            "Letter Spacing",
            letterSpacing,
            adjustLetterSpacing
          )}

          {renderAccessibilityOption(
            <SpaceIcon className="w-5 h-5" />,
            "Line Height",
            lineHeight,
            adjustLineHeight
          )}

          {renderAccessibilityOption(
            <MousePointerClick className="w-5 h-5" />,
            "Focus Highlight",
            focusHighlight,
            toggleFocusHighlight
          )}

          {renderAccessibilityOption(
            <Keyboard className="w-5 h-5" />,
            "Keyboard Nav",
            keyboardNav,
            () => setKeyboardNav(!keyboardNav)
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessibilityMenu;