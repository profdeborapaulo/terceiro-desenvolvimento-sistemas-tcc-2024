import React from "react"; // Importa a biblioteca React para criar o componente.
import { Pie } from "react-chartjs-2"; // Importa o gráfico de pizza do Chart.js para exibir gráficos.
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js"; // Importa componentes específicos do Chart.js para criar gráficos.
import "../styles/frequencia.css"; // Importa o arquivo CSS específico para estilização do componente Frequencia.

// Registrar os componentes do Chart.js para usar em gráficos
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Frequencia = () => {
  // Define o componente funcional Frequencia.

  // Dados do gráfico
  const data = {
    labels: ["Faltas", "Frequência"], // Rótulos das seções do gráfico de pizza
    datasets: [
      {
        label: "Frequência e Faltas", // Legenda do gráfico
        data: [70, 30], // Dados a serem exibidos no gráfico, onde 70 representa Faltas e 30 representa Frequência
        backgroundColor: ["#8CA2BF", "#087E8B"], // Cores de fundo das seções do gráfico
        borderColor: ["#FFFFFF", "#FFFFFF"], // Cor das bordas das seções do gráfico
        borderWidth: 1, // Largura da borda das seções do gráfico
      },
    ],
  };

  // Opções do gráfico
  const options = {
    plugins: {
      legend: {
        position: "top", // Posição da legenda do gráfico
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            // Formatação do rótulo do tooltip
            let label = tooltipItem.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += Math.round(tooltipItem.raw) + "%"; // Adiciona o valor com '%' ao tooltip
            return label;
          },
        },
      },
    },
    responsive: true, // Torna o gráfico responsivo
    maintainAspectRatio: false, // Permite que o gráfico ajuste a proporção para caber no container
  };

  return (
    <div className="container-freq">
      {/* Container principal para o layout do gráfico de frequência */}
      <h2 className="title-freq">Frequência</h2>
      {/* Título do gráfico */}
      <div className="chart-container-freq">
        {/* Container para o gráfico */}
        <Pie data={data} options={options} />
        {/* Renderiza o gráfico de pizza com os dados e opções especificados */}
      </div>
      <div className="info-container-freq">
        {/* Container para informações adicionais abaixo do gráfico */}
        <div className="info-box-freq">
          {/* Caixa de informações para faltas atuais */}
          <h5>Faltas Atuais:</h5>
          <p>52</p>
        </div>
        <div className="info-box-freq">
          {/* Caixa de informações para faltas permitidas */}
          <h5>Faltas Permitidas:</h5>
          <p>100</p>
        </div>
      </div>
    </div>
  );
};

export default Frequencia;
