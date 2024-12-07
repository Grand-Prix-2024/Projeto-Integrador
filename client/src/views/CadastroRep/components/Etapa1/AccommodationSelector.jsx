import React from "react";
import { useObjeto } from "../ObjectContext";

const AccommodationSelector = () => {
  const { objetoRepublica, setObjetoRepublica } = useObjeto();

  const options = [
    { name: "Casa", icon: <i className="bi bi-house-door feature-icon"></i> },
    { name: "Apartamento", icon: <i className="bi bi-building feature-icon"></i> },
  ];

  const alterarObjeto = (key, value) => {
    console.log(objetoRepublica);
    setObjetoRepublica((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div>
      <style>
        {`
          .features-container {
            display: flex;
            justify-content: center; /* Centraliza horizontalmente */
            align-items: center; /* Centraliza verticalmente */
            gap: 16px; /* Espaçamento entre os botões */
            margin: 0 auto; /* Centraliza na tela */
            max-width: 600px; /* Define uma largura máxima para o grupo */
          }

          .feature-btn {
            padding: 20px 40px; /* Tamanho do botão */
            text-align: center;
            background: #ffc107; /* Amarelo */
            color: #fff; /* Texto branco */
            border: 1px solid #ffc107;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            transition: background 0.3s, transform 0.2s;
            display: flex;
            flex-direction: column; /* Ícone acima do texto */
            align-items: center; /* Centraliza conteúdo do botão */
            gap: 10px; /* Espaço entre ícone e texto */
          }

          .feature-btn.active {
            background: #ffe082; /* Amarelo mais claro quando ativo */
            color: #000; /* Texto preto */
            border-color: #ffd54f;
          }

          .feature-btn:hover {
            background: #ffd54f; /* Fundo mais claro no hover */
            transform: scale(1.05); /* Zoom no hover */
          }

          .feature-icon {
            font-size: 32px; /* Tamanho do ícone */
          }

          .feature-text {
            font-size: 16px; /* Tamanho do texto */
            font-weight: bold;
          }

          .features-container-wrapper {
            display: flex;
            justify-content: center; /* Centraliza a wrapper na tela */
            align-items: center;
            min-height: 150px; /* Altura mínima para evitar colapsos */
          }
        `}
      </style>
      <div className="features-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`feature-btn ${objetoRepublica.name === option.name ? "active" : ""
              }`}
            onClick={() => {
              // Atualiza o objeto de estado para refletir a seleção
              alterarObjeto("name", option.name);
            }}
          >
            <span className="feature-icon">{option.icon}</span>
            <span className="feature-text">{option.name}</span>
          </button>
        ))}
      </div>

  
      {/* <div className="message">
        {objetoRepublica.name
          ? `Você selecionou: ${objetoRepublica.name}`
          : "Nenhuma acomodação selecionada."}
      </div> */}
    </div>
  );
};

export default AccommodationSelector;
