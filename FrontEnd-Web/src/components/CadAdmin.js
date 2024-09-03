import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado do componente.
import '../styles/CadAdmin.css'; // Importa o arquivo CSS específico para estilização do componente.
import icone from '../assets/icone.png'; // Importa a imagem do ícone a ser usado na lista de usuários.
import { Navigate, useNavigate } from "react-router-dom";

const CadAdmin = () => {
  // Define o componente funcional CadAdmin.

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState('Responsável'); 
  // Cria o estado 'usuario' com o valor inicial "Responsável", que controla o tipo de usuário selecionado.

  // Função para atualizar o tipo de usuário selecionado.
  const handleUsuarioChange = (tipo) => {
    setUsuario(tipo);
  };

  return (
    <div className="container-Admin">
      {/* Container principal para o layout do componente */}

      <aside className="sidebar-Admin">
        {/* Barra lateral contendo a navegação e opções de seleção de usuário */}
        
        <div className="back-button-Admin">
          {/* Botão para voltar */}
          <button className="voltar">&#8592;</button>
          {/* Símbolo de seta para a esquerda, representando o botão de voltar */}
        </div>

        <h2>Cadastro</h2>
        {/* Título da seção de cadastro */}

        <ul className="usuario-list-Admin">
          {/* Lista de opções de usuário */}

          <li
            className={usuario === 'Aluno' ? 'active' : ''}
            onClick={() => handleUsuarioChange('Aluno')}
          >
            {/* Item de lista para selecionar "Aluno" */}
            <img src={icone} alt="Aluno" className="usuario-icon" />
            Aluno
          </li>

          <li
            className={usuario === 'Responsável' ? 'active' : ''}
            onClick={() => handleUsuarioChange('Responsável')}
          >
            {/* Item de lista para selecionar "Responsável" */}
            <img src={icone} alt="Responsável" className="usuario-icon" />
            Responsável
          </li>

          <li
            className={usuario === 'Professor' ? 'active' : ''}
            onClick={() => handleUsuarioChange('Professor')}
          >
            {/* Item de lista para selecionar "Professor" */}
            <img src={icone} alt="Professor" className="usuario-icon" />
            Professor
          </li>
        </ul>
      </aside>

      <main className="form-container-Admin">
        {/* Container principal para o formulário */}

        <h1>Cadastro {usuario}</h1>
        {/* Cabeçalho que mostra o tipo de usuário selecionado no formulário */}

        <p>Adicione as informações nos campos abaixo:</p>
        {/* Texto explicativo para o usuário */}

        <form className="form-Admin">
          {/* Formulário para cadastro */}

          <div className="form-nome-Admin">
            {/* Campo para nome completo */}
            <label>Nome completo:</label>
            <input type="text" required />
          </div>

          <div className="form-row-Admin">
            {/* Linha contendo campos para telefone e email */}
            <div className="form-tel-Admin">
              {/* Campo para telefone */}
              <label>Telefone:</label>
              <input type="tel" required />
            </div>

            <div className="form-email-Admin">
              {/* Campo para email */}
              <label>Email:</label>
              <input type="email" required />
            </div>
          </div>

          <div className="form-row-Admin">
            {/* Linha contendo campos para data de nascimento, RG e CPF */}
            <div className="form-nasc-Admin">
              {/* Campo para data de nascimento */}
              <label>Data de nascimento:</label>
              <input type="date" required />
            </div>

            <div className="form-rg-Admin">
              {/* Campo para RG */}
              <label>RG:</label>
              <input type="text" required />
            </div>

            <div className="form-cpf-Admin">
              {/* Campo para CPF */}
              <label>CPF:</label>
              <input type="text" required />
            </div>
          </div>

          <div className="form-senha-Admin">
            {/* Campo para senha */}
            <label>Senha:</label>
            <input type="password" required />
          </div>

          <div className="senha-requisitos-Admin">
            {/* Requisitos para a senha */}
            <p>* Pelo menos 8 caracteres</p>
            <p>* Letras maiúsculas e minúsculas</p>
            <p>* Caracteres especiais e números</p>
          </div>

          <button type="submit" className="btn-confirmar-Admin" onClick={()=> navigate("/dashboard-admin")}>
            CONFIRMAR
          </button>
          {/* Botão para confirmar o cadastro */}
        </form>
      </main>
    </div>
  );
};

export default CadAdmin;