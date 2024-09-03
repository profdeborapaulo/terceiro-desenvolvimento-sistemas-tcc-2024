import React, { useState } from "react"; // Importa React e useState do pacote 'react'
import { Dropdown } from "react-bootstrap"; // Importa o componente Dropdown da biblioteca 'react-bootstrap'
import "../styles/AnotacoesWeb.css"; // Importa o arquivo CSS para estilização
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap para estilos
import { Navigate, useNavigate } from "react-router-dom";

const NoteWeb = () => {

  const navigate = useNavigate();

  // Define o estado inicial para 'turma' e 'aula' com valores padrão
  const [turma, setTurma] = useState("Escolha a turma");
  const [aula, setAula] = useState("Escolha a aula");

  // Função para atualizar o estado de 'turma' quando um item do dropdown é selecionado
  const handleTurmaSelect = (eventKey) => {
    setTurma(eventKey);
  };

  // Função para atualizar o estado de 'aula' quando um item do dropdown é selecionado
  const handleAulaSelect = (eventKey) => {
    setAula(eventKey);
  };

  return (
    <div className="container-note"> {/* Container principal do componente */}
      <h2 className="title-note">Anotações</h2> {/* Título do componente */}
      <div className="form-note"> {/* Container do formulário */}
        {/* Dropdown para selecionar a turma */}
        <Dropdown onSelect={handleTurmaSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-turma">
            {turma} {/* Exibe o valor selecionado ou o texto padrão */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* Itens do dropdown para seleção da turma */}
            <Dropdown.Item eventKey="1° Médio">1° Médio</Dropdown.Item>
            <Dropdown.Item eventKey="2° Médio">2° Médio</Dropdown.Item>
            <Dropdown.Item eventKey="3° Médio">3° Médio</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Dropdown para selecionar a aula */}
        <Dropdown onSelect={handleAulaSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-aula">
            {aula} {/* Exibe o valor selecionado ou o texto padrão */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* Itens do dropdown para seleção da aula */}
            <Dropdown.Item eventKey="Matemática">Matemática</Dropdown.Item>
            <Dropdown.Item eventKey="Física">Física</Dropdown.Item>
            <Dropdown.Item eventKey="Química">Química</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Área de texto para anotações */}
        <textarea
          placeholder="Faça uma anotação sobre a sua aula" /* Texto exibido quando o campo está vazio */
          className="textarea-note" /* Classe CSS para estilização */
        />

        {/* Botão de envio */}
        <button className="submit-button-note" onClick={()=> navigate("/dashboard-profe")}>Enviar</button>
      </div>
    </div>
  );
};

export default NoteWeb; // Exporta o componente para ser utilizado em outros arquivos
