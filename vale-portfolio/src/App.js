import Main from './Pages/Main';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProjects from './Pages/AllProjects';
import './App.css';
import MainProject1 from './Pages/MainProject1';
import MainProject2 from './Pages/MainProject2';
import MainProject3 from './Pages/MainProject3';
import MainProject4 from './Pages/MainProject4';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/MainProject1" element={<MainProject1 />} />
            <Route path="/MainProject2" element={<MainProject2 />} />  
            <Route path="/MainProject3" element={<MainProject3 />} />      
            <Route path="/MainProject4" element={<MainProject4 />} />            
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;