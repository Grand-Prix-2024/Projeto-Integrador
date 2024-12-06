import React, { useState } from "react";

const AccommodationSelector = () => {
  // Estado para rastrear a seleção do usuário
  const [selectedAccommodation, setSelectedAccommodation] = useState("");

  // Opções de acomodação
  const options = [
    { name: "Casa", icon: <i className="bi bi-house-door feature-icon"></i> },
    { name: "Apartamento", icon: <i className="bi bi-building feature-icon"></i> }, // Prédio (simbolizando apartamento)

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
            background: #FFE245; /* Amarelo atualizado */
            color: #fff; /* Texto branco */
            border: 1px solid #FFE245;
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

          .feature-btn .feature-icon {
            font-size: 32px; /* Tamanho do ícone */
            color: #fff; /* Ícone branco */
          }

          .feature-btn.active {
            background: #FFEB86; /* Amarelo mais claro quando ativo */
            color: #000; /* Texto preto */
            border-color: #FFEB86;
          }

          .feature-btn.active .feature-icon {
            color: #000; /* Ícone preto quando ativo */
          }

          .feature-btn:hover {
            background: #FFD834; /* Fundo mais escuro no hover */
            transform: scale(1.05); /* Zoom no hover */
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
            {option.icon}
            <span className="feature-text">{option.name}</span>
          </button>
        ))}
      </div>
      {/* Mensagem Condicional */}
      <div className="message">
        {selectedAccommodation
          ? `Você selecionou: ${selectedAccommodation}`
          : "Nenhuma acomodação selecionada."}
      </div>
    </div>
  );
};

export default AccommodationSelector;
