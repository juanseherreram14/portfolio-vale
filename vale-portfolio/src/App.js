import Main from './Pages/Main';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProjects from './Pages/AllProjects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;