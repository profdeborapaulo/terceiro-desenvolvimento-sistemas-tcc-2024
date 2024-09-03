import React from 'react'; // Importa a biblioteca React para criar o componente.
import '../styles/DashboardAluno.css'; // Importa o arquivo CSS específico para estilização do componente Dashboard.

const DashboardAluno = () => {
  // Define o componente funcional Dashboard.

  return (
    <div className="dashboard-Aluno">
      {/* Container principal para o layout do Dashboard */}

      <div className="header-Aluno">
        {/* Seção de cabeçalho que exibe a data atual */}
        <h1>Segunda-Feira, Ago 05, 2024</h1>
      </div>

      <section className="main-section-Aluno">
        {/* Seção principal que contém o conteúdo do Dashboard */}

        <div className="left-section-Aluno">
          {/* Seção à esquerda que inclui estatísticas e agenda */}

          <div className="top-section-Aluno">
            {/* Seção superior da esquerda com caixas de estatísticas */}
            <div className="stat-box-Aluno">
              {/* Caixa de estatística para "Atividades completas" */}
              <h2>Atividades completas</h2>
              <p className="stat-number-Aluno">7</p>
              <p>2 em Andamento</p>
            </div>
            <div className="stat-box-Aluno">
              {/* Caixa de estatística para "Aulas Assistidas" */}
              <h2>Aulas Assistidas</h2>
              <p className="stat-number-Aluno">87</p>
              <p>Na média</p>
            </div>
            <div className="stat-box-Aluno">
              {/* Caixa de estatística para "Atrasos" */}
              <h2>Atrasos</h2>
              <p className="stat-number-Aluno">22</p>
              <p>Dentro do Permitido</p>
            </div>
          </div>

          <section className="bottom-section-Aluno">
            {/* Seção inferior da esquerda com a agenda de matérias do dia */}
            <h2>Matéria de Hoje</h2>
            <div className="subject-Aluno">
              {/* Detalhes sobre uma matéria */}
              <p>Matemática</p>
              <p>9:00 AM</p>
            </div>
            <div className="subject-Aluno">
              {/* Detalhes sobre outra matéria */}
              <p>Ciências</p>
              <p>5:00 PM</p>
            </div>
            <div className="subject-Aluno">
              {/* Detalhes sobre outra matéria */}
              <p>Biologia</p>
              <p>7:00 AM</p>
            </div>
          </section>
        </div>

        <div className="right-section-Aluno">
          {/* Seção à direita com atividades recentes e trabalhos */}
          <section className="recent-activities-Aluno">
            {/* Seção para atividades recentes */}
            <h2>Atividades Recentes</h2>
            <ul>
              {/* Lista de atividades recentes */}
              <li>Realizar Login <span>8:12</span></li>
              <li>Cadastro de Usuário <span>7:52</span></li>
              <li>Frequência <span>9:22</span></li>
            </ul>
          </section>

          <section className="works-Aluno">
            {/* Seção para trabalhos a serem feitos */}
            <h2>Trabalhos</h2>
            <div className="work-Aluno">Questões Espanhol</div>
            <div className="work-Aluno">Lista de Matemática</div>
            <div className="work-Aluno">Prova TI</div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DashboardAluno;
