import React, { useState } from "react";

const EssentialInfo = ({ initialValues = {} }) => {
  const MIN_VALUE = 0;  // Limite inferior
  const MAX_VALUE = 10; // Limite superior

  // Inicializa os valores com 1 para cada item, se não forem passados valores iniciais
  const [values, setValues] = useState({
    Moradores: initialValues.Moradores || 1,
    Quartos: initialValues.Quartos || 1,
    Banheiros: initialValues.Banheiros || 1,
    Camas: initialValues.Camas || 1,
  });

  const onUpdate = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
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

          /* Estilo para o botão desabilitado */
          .btn-yellow:disabled {
            background-color: #ffe082; /* Amarelo mais claro */
            color: #000; /* Texto preto */
            border: 1px solid #ffe082; /* Borda do mesmo tom */
          }

          .btn-yellow:disabled:hover {
            background-color: #ffe082; /* Amarelo mais claro no hover */
            color: #000;
          }

          /* Garantir que o texto dentro dos botões de incremento/decremento seja preto */
          .btn-yellow span {
            color: #000; /* Cor preta para o texto */
          }
        `}
      </style>
      {["Moradores", "Quartos", "Banheiros", "Camas"].map((item, index) => (
        <div className="d-flex align-items-center my-2" key={index}>
          <span className="me-2">{item}</span>
          <button
            className="btn btn-yellow me-2"
            onClick={() => {
              if (values[item] > MIN_VALUE) {
                onUpdate(item, values[item] - 1);
              }
            }}
            disabled={values[item] <= MIN_VALUE} // Desabilita o botão de decremento se o valor for 0 ou menor
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
            disabled={values[item] >= MAX_VALUE} // Desabilita o botão de incremento se o valor for igual ou maior que o limite máximo
          >
            <span>+</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default EssentialInfo;

