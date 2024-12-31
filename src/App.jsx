import { useState } from 'react';
import Navbar from './components/Navbar';
import AppWrapper from './components/AppWrapper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/main';
import ExperiencePage from './pages/experience_page';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`min-h-screen bg-gray-900 text-white`}>
      <AppWrapper>
        <Navbar 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />

        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/experience" element={<ExperiencePage />} />
          </Routes>
        </Router>

      </AppWrapper>
    </div>
  );
};

export default App;