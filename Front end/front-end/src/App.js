import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ReferencesPage from "./pages/ReferencesPage";
import Reference1 from './pages/references/Reference1';
import Reference2 from './pages/references/Reference2';
import Reference3 from './pages/references/Reference3';
import Reference4 from './pages/references/Reference4';
import Reference5 from './pages/references/Reference5';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="reference1" element={<Reference1 />} />
          <Route path="reference2" element={<Reference2 />} />
          <Route path="reference3" element={<Reference3 />} />
          <Route path="reference4" element={<Reference4 />} />
          <Route path="reference5" element={<Reference5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
