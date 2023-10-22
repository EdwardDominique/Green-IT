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
import Reference6 from './pages/references/Reference6';
import Reference7 from './pages/references/Reference7';
import Reference8 from './pages/references/Reference8';
import AurelienMANCEAU from './pages/projects/AurelienMANCEAU';
import BassidikiHAIDARA from './pages/projects/BassidikiHAIDARA';
import EdouardDOMINIQUE from './pages/projects/EdouardDOMINIQUE';
import FlavienGAUTIER from './pages/projects/FlavienGAUTIER';
import GaspardCHARLES from './pages/projects/GaspardCHARLES';
import HenriqueDONG from './pages/projects/HenriqueDONG';
import HenriqueMARTINS from './pages/projects/HenriqueMARTINS';
import LeonardBONNEVILLE from './pages/projects/LeonardBONNEVILLE';
import LoicBOURNONVILLE from './pages/projects/LoicBOURNONVILLE';
import MaximeMOREL from './pages/projects/MaximeMOREL';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="AurelienMANCEAU" element={<AurelienMANCEAU />} />
          <Route path="BassidikiHAIDARA" element={<BassidikiHAIDARA />} />
          <Route path="EdouardDOMINIQUE" element={<EdouardDOMINIQUE />} />
          <Route path="FlavienGAUTIER" element={<FlavienGAUTIER />} />
          <Route path="GaspardCHARLES" element={<GaspardCHARLES />} />
          <Route path="HenriqueDONG" element={<HenriqueDONG />} />
          <Route path="HenriqueMARTINS" element={<HenriqueMARTINS />} />
          <Route path="LeonardBONNEVILLE" element={<LeonardBONNEVILLE />} />
          <Route path="LoicBOURNONVILLE" element={<LoicBOURNONVILLE />} />
          <Route path="MaximeMOREL" element={<MaximeMOREL />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="reference1" element={<Reference1 />} />
          <Route path="reference2" element={<Reference2 />} />
          <Route path="reference3" element={<Reference3 />} />
          <Route path="reference4" element={<Reference4 />} />
          <Route path="reference5" element={<Reference5 />} />
          <Route path="reference6" element={<Reference6 />} />
          <Route path="reference7" element={<Reference7 />} />
          <Route path="reference8" element={<Reference8 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
