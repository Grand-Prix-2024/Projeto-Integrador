import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RoomDistribution = ({ rooms, onChange }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (type) => {
    setSelected(type);
    onChange(type); // Atualiza o estado no componente pai
  };

  return (
    <div>
      <style>
        {`
          .btn-custom {
            background-color: #fff; /* Branco */
            color: #000; /* Texto preto */
            border: 2px solid #000; /* Borda preta */
            transition: background 0.3s, color 0.3s;
            padding: 15px 20px; /* Tamanho confortável */
            font-size: 16px; /* Tamanho do texto */
          }

          .btn-custom:hover {
            background-color: #f5f5f5; /* Cinza claro no hover */
          }

          .btn-custom.selected {
            background-color: #ffc107; /* Amarelo */
            color: #000; /* Texto preto */
            border-color: #ffc107; /* Borda amarela */
          }

          .button-container {
            display: flex;
            flex-direction: column;
            gap: 20px; /* Espaçamento entre os botões */
          }
        `}
      </style>

      <div className="button-container">
        <button
          className={`btn btn-custom ${
            selected === "private" ? "selected" : ""
          }`}
          onClick={() => handleSelect("private")}
        >
          <div className="d-flex flex-column align-items-start">
            <span className="fw-bold">1 Quarto Individual</span>
            <small>O morador tem um quarto só pra ele.</small>
          </div>
        </button>

        <button
          className={`btn btn-custom ${
            selected === "shared" ? "selected" : ""
          }`}
          onClick={() => handleSelect("shared")}
        >
          <div className="d-flex flex-column align-items-start">
            <span className="fw-bold">1 Quarto Compartilhado</span>
            <small>
              O morador dorme em um quarto compartilhado com outras pessoas.
            </small>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RoomDistribution;
