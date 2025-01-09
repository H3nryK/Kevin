import AppWrapper from './components/AppWrapper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/main_page';
import ExperiencePage from './pages/experince_page';
import  ProjectsPage from './pages/projects_page';
import Experience from './pages/exp_page';

const App = () => {

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <AppWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/volunteer" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Router>

      </AppWrapper>
    </div>
  );
};

export default App;