import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ReferencesPage from "./pages/ReferencesPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/references" element={<ReferencesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
