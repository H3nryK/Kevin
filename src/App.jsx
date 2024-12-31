import { useState } from 'react';
import Navbar from './components/Navbar';
import AppWrapper from './components/AppWrapper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/main';
import ExperiencePage from './pages/experince_page';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`min-h-screen bg-gray-900 text-white`}>
      <AppWrapper>
        <Navbar 
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