import React, { useState } from "react"; // Importa a biblioteca React e o hook useState para gerenciar o estado do componente.
import { Dropdown } from "react-bootstrap"; // Importa o componente Dropdown da biblioteca react-bootstrap para criar menus suspensos.
import "../styles/historico.css"; // Importa o arquivo CSS específico para estilizar o componente Historico.
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS padrão do Bootstrap para garantir que os componentes do Bootstrap sejam estilizados corretamente.
import { Navigate, useNavigate } from "react-router-dom";

const Historico = () => {
  // Define o componente funcional Historico.

  // Estado para armazenar o mês selecionado no dropdown.
  const [turma, setTurma] = useState("Escolha um mês");

  // Função para atualizar o estado do mês selecionado.
  const handleTurmaSelect = (eventKey) => {
    setTurma(eventKey);
  };

  // Estado para armazenar os registros de presença.
  const [registros, setRegistros] = useState([
    { id: 1, data: "01/08/2024", justificativa: "", status: "Ausente" },
    { id: 2, data: "02/08/2024", justificativa: "", status: "Presente" },
    { id: 3, data: "03/08/2024", justificativa: "", status: "Ausente" },
    { id: 4, data: "04/08/2024", justificativa: "", status: "Presente" },
    // Adicione mais registros conforme necessário
  ]);

  // Função para atualizar o status de um registro específico.
  const handleStatusChange = (id, value) => {
    setRegistros((prevRegistros) =>
      prevRegistros.map((registro) =>
        registro.id === id ? { ...registro, status: value } : registro
      )
    );
  };

  // Função para atualizar a justificativa de um registro específico.
  const handleJustificativaChange = (id, value) => {
    setRegistros((prevRegistros) =>
      prevRegistros.map((registro) =>
        registro.id === id ? { ...registro, justificativa: value } : registro
      )
    );
  };

  const navigate = useNavigate();

  return (
    <div className="container-histo">
      {/* Container principal para o componente Historico */}
      <h2 className="title-histo">Histórico</h2>
      {/* Título da seção */}
      <div className="form-histo">
        {/* Container para o dropdown e a tabela */}
        <Dropdown onSelect={handleTurmaSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-turma-histo">
            {turma}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* Itens do dropdown para selecionar o mês */}
            <Dropdown.Item eventKey="Janeiro">Janeiro</Dropdown.Item>
            <Dropdown.Item eventKey="Fevereiro">Fevereiro</Dropdown.Item>
            <Dropdown.Item eventKey="Março">Março</Dropdown.Item>
            <Dropdown.Item eventKey="Abril">Abril</Dropdown.Item>
            <Dropdown.Item eventKey="Maio">Maio</Dropdown.Item>
            <Dropdown.Item eventKey="Junho">Junho</Dropdown.Item>
            <Dropdown.Item eventKey="Julho">Julho</Dropdown.Item>
            <Dropdown.Item eventKey="Agosto">Agosto</Dropdown.Item>
            <Dropdown.Item eventKey="Setembro">Setembro</Dropdown.Item>
            <Dropdown.Item eventKey="Outubro">Outubro</Dropdown.Item>
            <Dropdown.Item eventKey="Novembro">Novembro</Dropdown.Item>
            <Dropdown.Item eventKey="Dezembro">Dezembro</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Tabela de registros */}
        <table className="table-histo">
          <thead>
            <tr>
              <th>Data</th>
              <th>Justificativa</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.data}</td>
                {/* Campo para justificar a ausência */}
                <td>
                  <input
                    type="text"
                    value={registro.justificativa}
                    onChange={(e) =>
                      handleJustificativaChange(registro.id, e.target.value)
                    }
                    placeholder="Digite a justificativa"
                  />
                </td>
                {/* Seleção do status */}
                <td>
                  <select
                    value={registro.status}
                    onChange={(e) =>
                      handleStatusChange(registro.id, e.target.value)
                    }
                  >
                    <option value="Presente">Presente</option>
                    <option value="Atraso">Atraso</option>
                    <option value="Saída">Saída</option>
                    <option value="Faltou">Faltou</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Botão para enviar as alterações */}
        <button className="submit-button-histo" onClick={()=> navigate("/dashboard-aluno")}>Enviar</button>
      </div>
    </div>
  );
};

export default Historico;
