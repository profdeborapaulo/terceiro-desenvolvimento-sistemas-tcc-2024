import React from "react"; // Importa o React para criar o componente funcional.
import "../styles/RelatoCad.css";
import { useNavigate } from "react-router-dom"; // Importa o arquivo CSS para estilizar o componente RelatoCad.
import borda1 from "../assets/borda1.svg"; // Importa o arquivo SVG borda1 para uso como imagem.
import borda2 from "../assets/borda2.svg"; // Importa o arquivo SVG borda2 para uso como imagem.

function RelatoCad() {
  
  const navigate = useNavigate();

  return (
    <div className="container-RelatoCad">
      {/* Contêiner principal do componente */}
      <div className="image-top-left-RelatoCad">
        {/* Div para a imagem no canto superior esquerdo */}
        <img src={borda1} alt="SVG no canto superior esquerdo" />
        {/* Imagem SVG borda1 com texto alternativo */}
      </div>
      <div className="box-RelatoCad">
        {/* Caixa que contém o título e os botões */}
        <h2 className="title-home">O que você deseja?</h2>
        {/* Título dentro da caixa */}
        <div className="button-container-RelatoCad">
          {/* Contêiner para os botões */}
          <button className="button-RelatoCad" onClick={() => navigate("/dashboard-admin")}>Abrir Relatório</button>
          {/* Botão para abrir um relatório */}
          <button className="button-RelatoCad" onClick={() => navigate("/cad-admin")}>Fazer Cadastro</button>
          {/* Botão para realizar um cadastro */}
        </div>
      </div>
      
      <div className="image-bottom-right-RelatoCad">
        {/* Div para a imagem no canto inferior direito */}
        <img src={borda2} alt="SVG no canto inferior direito" />
        {/* Imagem SVG borda2 com texto alternativo */}
      </div>
    </div>
  );
}

export default RelatoCad;
// Exporta o componente RelatoCad para ser utilizado em outras partes da aplicação.
