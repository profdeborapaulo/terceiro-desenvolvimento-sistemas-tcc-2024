import React from 'react'; // Importa a biblioteca React para criar o componente.
import '../styles/DashboardAdmin.css'; // Importa o arquivo CSS específico para estilização do componente Dashboard.

const DashboardAdmin = () => {
  // Define o componente funcional Dashboard.

  return (
    <div className="dashboard-Admin">
      {/* Container principal para o layout do Dashboard */}

      <div className="header-Admin">
        {/* Seção de cabeçalho que exibe a data atual */}
        <h1>Segunda-Feira, Ago 05, 2024</h1>
      </div>

      <section className="main-section-Admin">
        {/* Seção principal que contém o conteúdo do Dashboard */}

        <div className="left-section-Admin">
          {/* Seção à esquerda que inclui estatísticas e agenda */}

          <div className="top-section-Admin">
            {/* Seção superior da esquerda com caixas de estatísticas */}
            <div className="stat-box-Admin">
              {/* Caixa de estatística para "Atividades completas" */}
              <h2></h2>
              <p className="stat-number-Admin"></p>
              <p></p>
            </div>
            <div className="stat-box-Admin">
              {/* Caixa de estatística para "Aulas Assistidas" */}
              <h2></h2>
              <p className="stat-number-Admin"></p>
              <p></p>
            </div>
            <div className="stat-box-Admin">
              {/* Caixa de estatística para "Atrasos" */}
              <h2></h2>
              <p className="stat-number-Admin"></p>
              <p></p>
            </div>
          </div>

          <section className="bottom-section-Admin">
            {/* Seção inferior da esquerda com a agenda de matérias do dia */}
            <h2></h2>
            <div className="subject-Admin">
              {/* Detalhes sobre uma matéria */}
              <p></p>
              <p></p>
            </div>
            <div className="subject-Admin">
              {/* Detalhes sobre outra matéria */}
              <p></p>
              <p></p>
            </div>
            <div className="subject-Admin">
              {/* Detalhes sobre outra matéria */}
              <p></p>
              <p></p>
            </div>
          </section>
        </div>

        <div className="right-section-Admin">
          {/* Seção à direita com atividades recentes e trabalhos */}
          <section className="recent-activities-Admin">
            {/* Seção para atividades recentes */}
            <h2></h2>
            <ul>
              {/* Lista de atividades recentes */}
              <li><span></span></li>
              <li><span></span></li>
              <li><span></span></li>
            </ul>
          </section>

          <section className="works-Admin">
            {/* Seção para trabalhos a serem feitos */}
            <h2></h2>
            <div className="work-Admin"></div>
            <div className="work-Admin"></div>
            <div className="work-Admin"></div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DashboardAdmin;
