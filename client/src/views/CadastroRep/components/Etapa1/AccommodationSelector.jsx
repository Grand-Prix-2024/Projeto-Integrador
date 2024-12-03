import React, { useState } from "react";

const AccommodationSelector = () => {
  // Estado para rastrear a seleção do usuário
  const [selectedAccommodation, setSelectedAccommodation] = useState("");

  // Opções de acomodação
  const options = [
    { name: "Casa", icon: "🏠" },
    { name: "Apartamento", icon: "🏢" },
  ];

  return (
    <div>
      <style>
        {`
          .features-container {
            display: flex;
            justify-content: center; /* Centraliza os itens */
            gap: 16px; /* Espaçamento entre os botões */
            margin: 20px auto; /* Margem para centralizar */
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
            flex-direction: column;
            align-items: center;
            gap: 10px;
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

          .message {
            text-align: center;
            margin-top: 20px;
            font-size: 18px;
            color: #555;
          }
        `}
      </style>
      <div className="features-container">
        {/* Botões de seleção */}
        {options.map((option, index) => (
          <button
            key={index}
            className={`feature-btn ${
              selectedAccommodation === option.name ? "active" : ""
            }`}
            onClick={() => setSelectedAccommodation(option.name)}
          >
            <span className="feature-icon">{option.icon}</span>
            <span className="feature-text">{option.name}</span>
          </button>
        ))}
      </div>
      {/* Mensagem Condicional
      <div className="message">
        {selectedAccommodation
          ? `Você selecionou: ${selectedAccommodation}`
          : "Nenhuma acomodação selecionada."}
      </div> */}
    </div>
  );
};

export default AccommodationSelector;
