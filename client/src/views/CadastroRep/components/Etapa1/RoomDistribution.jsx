import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RoomDistribution = ({ rooms, onChange }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (type) => {
    setSelected(type);
    onChange(type); // Atualiza o estado no componente pai
  };

  const roomOptions = [
    {
      id: "private",
      title: "1 Quarto Individual",
      description: "O morador tem um quarto só pra ele.",
    },
    {
      id: "shared",
      title: "1 Quarto Compartilhado",
      description:
        "O morador dorme em um quarto compartilhado com outras pessoas.",
    },
  ];

  const buttons = useMemo(
    () =>
      roomOptions.map((option) => (
        <button
          key={option.id}
          className={`btn btn-custom ${
            selected === option.id ? "selected" : ""
          }`}
          onClick={() => handleSelect(option.id)}
          aria-pressed={selected === option.id}
        >
          <div className="d-flex flex-column align-items-start">
            <span className="fw-bold">{option.title}</span>
            <small>{option.description}</small>
          </div>
        </button>
      )),
    [selected]
  );

  return (
    <div>
      <style>
        {`
          .btn-custom {
            background-color: #e0e0e0; /* Cinza claro */
            color: #000; 
            border: none; /* Sem borda */
            transition: background 0.3s, color 0.3s;
            width: 800px; /* Largura fixa */
            height: 90px; /* Altura ajustada */
            padding: 10px 20px; /* Ajuste interno */
            font-size: 16px; /* Texto proporcional */
            border-radius: 8px; /* Bordas arredondadas */
            display: flex;
            align-items: center; /* Centraliza conteúdo verticalmente */
          }

          .btn-custom:hover {
            background-color: #d6d6d6; /* Cinza mais claro no hover */
          }

          .btn-custom.selected {
            background-color: #ffc107; /* Amarelo */
            color: #000; 
          }

          .button-container {
            display: flex;
            flex-direction: column;
            gap: 20px; /* Espaçamento entre os botões */
            align-items: center; /* Centraliza os botões horizontalmente */
          }
        `}
      </style>

      <div className="button-container">{buttons}</div>
    </div>
  );
};

export default RoomDistribution;
