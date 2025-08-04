import Main from './Pages/Main';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProjects from './Pages/AllProjects';
import './App.css';
import MainProject1 from './Pages/MainProject1';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/MainProject1" element={<MainProject1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;