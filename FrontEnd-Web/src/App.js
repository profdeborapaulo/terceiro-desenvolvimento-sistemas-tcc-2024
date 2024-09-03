import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../src/components/homePage";
import NoteWeb from "../src/components/AnotacoesWeb";
import RelatoCad from "../src/components/RelatoCad";
import Chamada from "../src/components/chamada";
import Frequencia from "../src/components/frequencia";
import Historico from "../src/components/historico";
import DashboardAluno from '../src/components/DashboardAluno';
import CadAdmin from "../src/components/CadAdmin";
import TabHora from "../src/components/TabHorario";
import RegisLog from "./components/RegisLog";
import DashboardProfe from '../src/components/DashboardProfe';
import DashboardAdmin from "../src/components/DashboardAdmin";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regislog" element={<RegisLog />} />
          <Route path="/anotacoes" element={<NoteWeb />} />
          <Route path="/relato-cad" element={<RelatoCad />} />
          <Route path="/chamada" element={<Chamada />} />
          <Route path="/frequencia" element={<Frequencia />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/dashboard-aluno" element={<DashboardAluno />} />
          <Route path="/dashboard-profe" element={<DashboardProfe />} />
          <Route path="/dashboard-admin" element={<DashboardAdmin />} />
          <Route path="/cad-admin" element={<CadAdmin />} />
          <Route path="/tab-hora" element={<TabHora />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
