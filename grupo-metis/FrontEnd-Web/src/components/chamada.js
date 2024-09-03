import React, { useState } from "react"; // Importa React e o hook useState para gerenciamento de estado.
import { Dropdown } from "react-bootstrap"; // Importa o componente Dropdown da biblioteca react-bootstrap para criar menus suspensos.
import "../styles/chamada.css"; // Importa o arquivo CSS específico para estilização do componente.
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap para aplicar estilos padrão aos componentes.
import { Navigate, useNavigate } from "react-router-dom";

const Chamada = () => {
  // Define o componente funcional Chamada.

  const navigate = useNavigate();

  const [turma, setTurma] = useState("Escolha a turma"); 
  // Cria o estado 'turma' com o valor inicial "Escolha a turma", para controlar a turma selecionada.

  const [aula, setAula] = useState("Escolha a aula"); 
  // Cria o estado 'aula' com o valor inicial "Escolha a aula", para controlar a aula selecionada.

  const handleTurmaSelect = (eventKey) => {
    // Função para atualizar o estado da turma com o valor selecionado no dropdown.
    setTurma(eventKey);
  };

  const handleAulaSelect = (eventKey) => {
    // Função para atualizar o estado da aula com o valor selecionado no dropdown.
    setAula(eventKey);
  };

  // Lista de alunos para exemplo
  const students = [
    { id: 1, name: "Raphael", present: false, absent: false },
    { id: 2, name: "Marina", present: false, absent: false },
    { id: 3, name: "Pedro L", present: false, absent: false },
    { id: 4, name: "Pedro H", present: false, absent: false },
    { id: 5, name: "Maria", present: false, absent: false },
    { id: 6, name: "Weslley", present: false, absent: false },
    { id: 7, name: "Walace", present: false, absent: false },
  ];
  // Lista de alunos com estado inicial de presença e ausência como false.

  return (
    <div className="container-chama">
      {/* Container principal para o layout do componente */}

      <h2 className="title-chama">Chamada</h2>
      {/* Título da seção de chamada */}

      <div className="form-chama">
        {/* Div que contém o formulário de chamada */}

        <Dropdown onSelect={handleTurmaSelect}>
          {/* Componente Dropdown para seleção da turma */}
          <Dropdown.Toggle variant="success" id="dropdown-turma">
            {turma}
            {/* Exibe o valor atual da turma selecionada */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* Menu suspenso com opções de turma */}
            <Dropdown.Item eventKey="1° Médio">1° Médio</Dropdown.Item>
            <Dropdown.Item eventKey="2° Médio">2° Médio</Dropdown.Item>
            <Dropdown.Item eventKey="3° Médio">3° Médio</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Tabela de chamada */}
        <table className="table-chama">
          {/* Tabela para marcar presença e ausência dos alunos */}
          <thead>
            <tr>
              <th>Nome do Aluno</th>
              <th>Presente</th>
              <th>Ausente</th>
            </tr>
          </thead>
          <tbody>
            {/* Corpo da tabela, onde cada linha corresponde a um aluno */}
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                {/* Nome do aluno */}
                <td>
                  <input type="checkbox" />
                  {/* Checkbox para marcar presença */}
                </td>
                <td>
                  <input type="checkbox" />
                  {/* Checkbox para marcar ausência */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Botão de enviar */}
        <button className="submit-button-chama" onClick={()=> navigate("/dashboard-profe")}>Enviar</button>
        {/* Botão para enviar os dados de presença e ausência */}
      </div>
    </div>
  );
};

export default Chamada;
