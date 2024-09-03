import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciar o estado do componente.
import '../styles/RegisLog.css'; // Importa o arquivo CSS para estilizar o componente RegisLog.
import { Navigate, useNavigate } from "react-router-dom";

function RegisLog() {
    // Define o componente funcional RegisLog.

    const [isActive, setIsActive] = useState(false);
    // Define o estado `isActive`, que controla se o formulário de registro está ativo ou não.

    const handleSignInClick = () => {
      setIsActive(false);
      // Função para ativar o formulário de login e desativar o formulário de registro.
    };
  
    const handleSignUpClick = () => {
      setIsActive(true);
      // Função para ativar o formulário de registro e desativar o formulário de login.
    };
  
    const navigate = useNavigate();

    return (
      <div
        className={`RegisLog-container ${isActive ? "RegisLog-active" : ""}`}
        id="container"
      >
        {/* Contêiner principal com classe condicional baseada no estado `isActive`. */}

        <div
          className={`RegisLog-form-container RegisLog-sign-up ${
            isActive ? "RegisLog-active" : ""
          }`}
        >
          {/* Formulário de registro, ativo se `isActive` for verdadeiro. */}
          <form>
            <h1>Se Registre</h1>
            {/* Título do formulário de registro */}
            <span>Se registre agora e tenha acesso a tudo</span>
            {/* Texto de instrução */}
            <input type="text" placeholder="Nome" />
            {/* Campo de entrada para o nome */}
            <input type="email" placeholder="Email" />
            {/* Campo de entrada para o email */}
            <input type="password" placeholder="Senha" />
            {/* Campo de entrada para a senha */}
            <button onClick={() => navigate("/")}>Registrar</button>
            {/* Botão para enviar o formulário de registro */}
          </form>
        </div>

        <div
          className={`RegisLog-form-container RegisLog-sign-in ${
            !isActive ? "RegisLog-active" : ""
          }`}
        >
          {/* Formulário de login, ativo se `isActive` for falso. */}
          <form>
            <h1>Faça Login</h1>
            {/* Título do formulário de login */}
            <span>Inicie agora com sua conta</span>
            {/* Texto de instrução */}
            <input type="email" placeholder="Email" />
            {/* Campo de entrada para o email */}
            <input type="password" placeholder="Senha" />
            {/* Campo de entrada para a senha */}
            <a href="#">Esqueceu sua senha?</a>
            {/* Link para recuperação de senha */}
            <button onClick={() => navigate("/")}>Logar</button>
            {/* Botão para enviar o formulário de login */}
          </form>
        </div>

        <div className="RegisLog-toggle-container">
          {/* Contêiner para o painel de alternância entre login e registro */}
          <div className="RegisLog-toggle">
            {/* Painel de alternância */}
            <div className="RegisLog-toggle-panel RegisLog-toggle-left">
              {/* Painel à esquerda para login */}
              <h1>Bem vindo de volta!</h1>
              {/* Título do painel de login */}
              <p>Entre com sua conta pessoal e continue usando</p>
              {/* Texto de instrução */}
              <button onClick={handleSignInClick}>Login</button>
              {/* Botão para ativar o formulário de login */}
            </div>
            <div className="RegisLog-toggle-panel RegisLog-toggle-right">
              {/* Painel à direita para registro */}
              <h1>Olá, tudo bem?</h1>
              {/* Título do painel de registro */}
              <p>
                Se Registre agora se ainda não tem uma conta e conheça nosso
                site
              </p>
              {/* Texto de instrução */}
              <button onClick={handleSignUpClick}>Registrar</button>
              {/* Botão para ativar o formulário de registro */}
            </div>
          </div>
        </div>
      </div>
    );
  } 

export default RegisLog;
// Exporta o componente RegisLog para ser utilizado em outras partes da aplicação.
