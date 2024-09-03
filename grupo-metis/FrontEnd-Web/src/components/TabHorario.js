import React, { useState } from 'react'; // Importa React e useState para gerenciar o estado do componente
import '../styles/TabHorario.css'; // Importa o arquivo CSS para estilização do componente
import icone from '../assets/icone.png'; // Importa a imagem do ícone para uso nas listas de usuários
import { useNavigate } from "react-router-dom"; // Importa o arquivo CSS para estilizar o componente RelatoCad.

const TabHora = () => {
  // Estado para controlar o tipo de usuário selecionado
  const [usuario, setUsuario] = useState('Responsável');

  // Função para alterar o tipo de usuário selecionado
  const handleUsuarioChange = (tipo) => {
    setUsuario(tipo);
  };

  const navigate = useNavigate();

  return (
    <div className="container-Tab">
      {/* Contêiner principal do componente */}
      
      <aside className="sidebar-Tab">
        {/* Barra lateral contendo a lista de usuários */}
        <div className="back-button-Tab">
          {/* Botão para voltar */}
          <button className="voltar">&#8592;</button>
        </div>
        <h2>Cadastro</h2>
        {/* Título da seção */}
        <ul className="usuario-list-Tab">
          {/* Lista de tipos de usuários */}
          <li
            className={usuario === "Aluno" ? "active" : ""}
            onClick={() => handleUsuarioChange("Aluno")}
          >
            <img src={icone} alt="Aluno" className="usuario-icon" />
            Aluno
          </li>
          <li
            className={usuario === "Responsável" ? "active" : ""}
            onClick={() => handleUsuarioChange("Responsável")}
          >
            <img src={icone} alt="Responsável" className="usuario-icon" />
            Responsável
          </li>
          <li
            className={usuario === "Professor" ? "active" : ""}
            onClick={() => handleUsuarioChange("Professor")}
          >
            <img src={icone} alt="Professor" className="usuario-icon" />
            Professor
          </li>
        </ul>
      </aside>

      <main className="form-container-Tab">
        {/* Seção principal contendo o formulário */}
        <h1>Matéria</h1>
        {/* Título do formulário */}
        <p>Adicione as informações escolares nos campos abaixo:</p>
        {/* Instrução para o usuário */}
        
        <form className="form-Tab">
          {/* Formulário para entrada de dados */}
          <div className="form-periodo-Tab">
            <label>Periodo:</label>
            {/* Rótulo para o campo de período */}
            <input type="text" required />
            {/* Campo de entrada para o período */}
          </div>
          <div className="form-materia-Tab">
            <label>Matéria:</label>
            {/* Rótulo para o campo de matéria */}
            <input type="password" required />
            {/* Campo de entrada para a matéria (considerando o tipo como senha, possivelmente um erro) */}
          </div>
          <button type="submit" className="btn-confirmar-Tab" onClick={() => navigate("/dashboard-admin")}>
            CONFIRMAR
          </button>
          {/* Botão para enviar o formulário */}
        </form>
      </main>
    </div>
  );
};

export default TabHora;
