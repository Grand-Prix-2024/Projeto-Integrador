import React, { useState } from "react";
import { useObjeto } from "../ObjectContext"; // Supondo que este seja o caminho correto

const EssentialInfo = () => {
  const { objetoRepublica, setObjetoRepublica } = useObjeto(); // Pegando valores do contexto

  const MIN_VALUE = 0; // Limite inferior
  const MAX_VALUE = 10; // Limite superior

  const [values, setValues] = useState({
    Moradores: objetoRepublica.Moradores || 1,
    Quartos: objetoRepublica.Quartos || 1,
    Banheiros: objetoRepublica.Banheiros || 1,
    Camas: objetoRepublica.Camas || 1,
  });

  const onUpdate = (key, value) => {
    const numericValue = Math.max(MIN_VALUE, Math.min(MAX_VALUE, parseInt(value, 10) || 0));
    setValues((prevValues) => ({
      ...prevValues,
      [key]: numericValue,
    }));
    setObjetoRepublica((prevObjeto) => ({
      ...prevObjeto,
      [key]: numericValue,
    }));
  };


  return (
    <div>
      <style>
        {`
          .btn-yellow {
            background-color: #ffc107; /* Amarelo escuro */
            color: #fff; /* Texto branco */
            border: 1px solid #ffc107;
            transition: background 0.3s, color 0.3s;
          }

          .btn-yellow:hover {
            background-color: #e0a800; /* Amarelo mais escuro no hover */
            border-color: #e0a800;
            color: #fff;
          }

          .btn-yellow:disabled {
            background-color: #ffe082; /* Amarelo mais claro */
            color: #000; /* Texto preto */
            border: 1px solid #ffe082; /* Borda do mesmo tom */
          }

          .btn-yellow span {
            color: #000; /* Cor preta para o texto */
          }

          /* Estilo para as divisões */
          .item-container {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #f9f9f9; /* Fundo leve */
            width: 800px; /* Largura fixa */
          }

          .componentes {
            display: flex;
            flex-direction: column; /* Empilha os itens verticalmente */
            align-items: center;    /* Centraliza horizontalmente */
            justify-content: center; /* Centraliza verticalmente */
            min-height: 30vh;      /* Ocupa toda a altura da tela */
          }
        `}
      </style>
      <div className="componentes">
        {["Moradores", "Quartos", "Banheiros", "Camas"].map((item, index) => (
          <div className="item-container" key={index}>
            <div className="d-flex align-items-center justify-content-between">
              <span>{item}</span>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-yellow me-2"
                  onClick={() => {
                    if (values[item] > MIN_VALUE) {
                      onUpdate(item, values[item] - 1);
                    }
                  }}
                  disabled={values[item] <= MIN_VALUE}
                >
                  <span>-</span>
                </button>
                <span>{values[item]}</span>
                <button
                  className="btn btn-yellow ms-2"
                  onClick={() => {
                    if (values[item] < MAX_VALUE) {
                      onUpdate(item, values[item] + 1);
                    }
                  }}
                  disabled={values[item] >= MAX_VALUE}
                >
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialInfo;
