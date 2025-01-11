import { useState } from "react";
import { FaUniversalAccess } from "react-icons/fa";

const AccessibilityOptions = ({ onFontSizeChange, onThemeToggle, onContrastToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-20 right-4 z-[999]">
      {/* Floating Button */}
      <button
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        onClick={togglePanel}
      >
        <FaUniversalAccess size={24} />
      </button>

      {/* Accessibility Options Panel */}
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 mt-2 w-64">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Accessibility Options</h3>
          <div className="space-y-4">
            {/* Font Size Controls */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Font Size</span>
              <div className="flex gap-2">
                <button
                  onClick={() => onFontSizeChange("increase")}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded shadow hover:scale-105"
                >
                  A+
                </button>
                <button
                  onClick={() => onFontSizeChange("decrease")}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded shadow hover:scale-105"
                >
                  A-
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">High Contrast</span>
              <button
                onClick={onContrastToggle}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded shadow hover:scale-105"
              >
                Toggle
              </button>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Dark Mode</span>
              <button
                onClick={onThemeToggle}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded shadow hover:scale-105"
              >
                Toggle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityOptions;
