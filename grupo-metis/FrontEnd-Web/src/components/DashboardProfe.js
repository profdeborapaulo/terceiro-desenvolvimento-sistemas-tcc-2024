import React from "react"; // Importa a biblioteca React para criar o componente.
import "../styles/DashboardProfe.css"; // Importa o arquivo CSS específico para estilização do componente DashboardProfe.
import { Navigate, useNavigate } from "react-router-dom";

const DashboardProfe = () => {
  // Define o componente funcional DashboardProfe.
  const navigate = useNavigate();

  return (
    <div className="dashboard-profe">
      {/* Container principal para o layout do DashboardProfe */}

      <div className="header-profe">
        {/* Seção de cabeçalho que exibe a data atual */}
        <h1>Segunda-Feira, Ago 05, 2024</h1>
      </div>

      <div className="main-section-profe">
        {/* Seção principal que divide o conteúdo em duas seções: esquerda e direita */}

        {/* Seção Esquerda */}
        <div className="left-section-profe">
          <div className="top-section-profe">
            {/* Seção superior da esquerda contendo a agenda de aulas e botões */}

            {/* Aulas de Hoje Box */}
            <div className="bottom-section-profe">
              {/* Caixa para exibir as aulas de hoje */}
              <h2>Aulas de Hoje</h2>
              <p>Manhã</p>
              {/* Lista de aulas da manhã */}
              <div className="subject-profe">
                <span>Matemática 3° Médio</span>
                <span>7:10 AM</span>
              </div>
              <div className="subject-profe">
                <span>Matemática 1° Médio</span>
                <span>8:00 PM</span>
              </div>
              <div className="subject-profe">
                <span>Física 2° Médio</span>
                <span>8:50 AM</span>
              </div>
              <div className="subject-profe">
                <span>Matemática 2° Médio</span>
                <span>10:00 AM</span>
              </div>
              <p>Tarde</p>
              {/* Lista de aulas da tarde */}
              <div className="subject-profe">
                <span>Física 2° Médio</span>
                <span>14:50 PM</span>
              </div>
            </div>

            {/* Botões abaixo da seção */}
            <div className="buttons-section-profe">
              {/* Seção de botões para realizar ações */}
              <button
                className="btn-profe"
                onClick={() => navigate("/chamada")}
              >
                Fazer chamada
              </button>
              <button
                className="btn-profe"
                onClick={() => navigate("/anotacoes")}
              >
                Fazer anotações de aula
              </button>
            </div>
          </div>
        </div>

        {/* Seção Direita */}
        <div className="right-section-profe">
          {/* Seção à direita contendo caixas de estatísticas */}
          <div className="stat-box-profe">
            {/* Caixa de estatística para "Faltas Atuais" */}
            <p>Faltas Atuais</p>
            <span className="stat-number-profe">07</span>
            <p>Total</p>
          </div>
          <div className="stat-box-profe">
            {/* Caixa de estatística para "Aulas dadas" */}
            <p>Aulas dadas</p>
            <span className="stat-number-profe">77</span>
            <p>Total</p>
          </div>
          <div className="stat-box-profe">
            {/* Caixa de estatística para "Próximo fechamento de nota" */}
            <p>Próximo fechamento de nota</p>
            <span className="stat-number-profe">23</span>
            <p>Setembro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfe;
