import React from "react"; // Importa a biblioteca React para criar componentes.
import "../styles/homePage.css"; // Importa o arquivo CSS para estilizar o componente HomePage.
import borda1 from "../assets/borda1.svg"; // Importa a imagem SVG para o canto superior esquerdo.
import borda2 from "../assets/borda2.svg"; // Importa a imagem SVG para o canto inferior direito.
import teacher from "../assets/teacher.svg"; // Importa a imagem SVG representando um professor.
import estudante from "../assets/estudante.svg"; // Importa a imagem SVG representando um estudante.
import { Navigate, useNavigate } from "react-router-dom";

function HomePage() {
  // Define o componente funcional HomePage.
  const navigate = useNavigate();
  
  return (
    <div className="container-home">
      {/* Container principal para o conteúdo da HomePage */}
      
      <div className="image-top-left-home">
        {/* Container para a imagem no canto superior esquerdo */}
        <img src={borda1} alt="SVG no canto superior esquerdo" />
        {/* Imagem SVG importada com descrição alternativa */}
      </div>

      <div className="image-top-right-home">
        {/* Container para a imagem no canto superior direito */}
        <img src={teacher} alt="SVG representando um professor" />
        {/* Imagem SVG importada com descrição alternativa */}
      </div>

      <div className="box-home">
        {/* Container para a caixa central com título e botões */}
        <h2 className="title-home">Você é Aluno ou Professor?</h2>
        {/* Título da seção */}
        <div className="button-container-home">
          {/* Container para os botões */}
          <button className="button-home" onClick={() => navigate("/dashboard-aluno")}>Aluno</button>
          {/* Botão para selecionar a opção "Aluno" */}
          <button className="button-home" onClick={() => navigate("/dashboard-profe")}>Professor</button>
          {/* Botão para selecionar a opção "Professor" */}
          <button className="button-home" onClick={() => navigate("/dashboard-admin")}>Administrador</button>
          {/* Botão para selecionar a opção "Administrador" */}
        </div>
      </div>

      <div className="image-bottom-right-home">
        {/* Container para a imagem no canto inferior direito */}
        <img src={borda2} alt="SVG no canto inferior direito" />
        {/* Imagem SVG importada com descrição alternativa */}
      </div>

      <div className="image-bottom-left-home">
        {/* Container para a imagem no canto inferior esquerdo */}
        <img src={estudante} alt="SVG representando um estudante" />
        {/* Imagem SVG importada com descrição alternativa */}
      </div>
    </div>
  );
}

export default HomePage;
// Exporta o componente HomePage para ser utilizado em outras partes da aplicação.
