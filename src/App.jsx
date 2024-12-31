import { useState } from 'react';
import Navbar from './components/Navbar';
import AppWrapper from './components/AppWrapper';
import FloatingCTA from './components/CTA';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/main_page';
import ExperiencePage from './pages/experince_page';
import  ProjectsPage from './pages/projects_page';
import Experience from './pages/exp_page';

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
            <Route path="/volunteer" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Router>

        <FloatingCTA />

      </AppWrapper>
    </div>
  );
};

export default App;