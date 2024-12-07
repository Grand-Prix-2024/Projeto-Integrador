import React from "react";

const HighlightFeatures = ({ objetoRepublica, setObjetoRepublica, onToggle }) => {
  // Lista de itens organizados por seções
  const sections = [
    {
      title: "Tecnologia e Comodidade",
      items: [
        { name: "Wi-fi", icon: <i className="bi bi-wifi feature-icon"></i> },
        { name: "Televisão", icon: <i className="fas fa-tv feature-icon"></i> },
        { name: "Cozinha", icon: <i className="bi bi-cup feature-icon"></i> },
        { name: "Ar-condicionado", icon: <i className="bi bi-snow feature-icon"></i> },
        { name: "Canto de estudo", icon: <i className="bi bi-pencil feature-icon"></i> },
        { name: "Chuveiro quente", icon: <i className="bi bi-droplet feature-icon"></i> },
      ],
    },
    {
      title: "Conforto e Lazer",
      items: [
        { name: "Piscina", icon: <i className="bi bi-water feature-icon"></i> },
        { name: "Churrasqueira", icon: <i className="fas fa-fire feature-icon"></i> },
        { name: "Academia", icon: <i className="fas fa-dumbbell feature-icon"></i> },
        { name: "Varanda", icon: <i className="fas fa-chair feature-icon"></i> },
        { name: "Jardim", icon: <i className="bi bi-tree feature-icon"></i> },
        { name: "Banheira", icon: <i className="bi bi-droplet-half feature-icon"></i> },
      ],
    },
    {
      title: "Segurança",
      items: [
        { name: "Extintor", icon: <i className="fas fa-fire-extinguisher feature-icon"></i> },
        { name: "Câmeras", icon: <i className="bi bi-camera feature-icon"></i> },
        { name: "Alarmes", icon: <i className="bi bi-bell feature-icon"></i> },
      ],
    },
  ];

  const handleToggle = (name) => {
    // Atualiza o objeto global com a alternância da feature
    setObjetoRepublica((prevObjeto) => {
      const updatedFeatures = prevObjeto.Features.includes(name)
        ? prevObjeto.Features.filter((feature) => feature !== name)
        : [...prevObjeto.Features, name];

      return {
        ...prevObjeto,
        Features: updatedFeatures,
      };
    });
  };

  return (
    <div>
      <style>
        {`
          .section-container {
            margin-bottom: 40px;
          }

          .section-title {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
            color: #333;
          }

          .features-container {
            display: flex;
            flex-wrap: wrap; /* Permite quebra de linha */
            justify-content: center; /* Centraliza os itens */
            gap: 16px; /* Espaçamento entre os itens */
            max-width: 800px; /* Limite de largura */
            margin: 0 auto; /* Centraliza o container na tela */
          }

          .feature-btn {
            flex: 0 1 calc(33.333% - 16px); /* Mantém 3 itens por linha */
            max-width: calc(33.333% - 16px);
            padding: 20px;
            text-align: center;
            background: #ffc107; /* Amarelo inicial */
            color: #fff; /* Texto branco */
            border: 1px solid #ffc107;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.3s, color 0.3s, transform 0.2s;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .feature-btn.active {
            background: #ffe082; /* Fundo mais claro quando ativo */
            color: #000; /* Texto preto para contraste */
            border-color: #ffd54f; /* Borda levemente mais clara */
          }

          .feature-btn:hover {
            background: #ffecb3; /* Fundo mais claro no hover */
            color: #000; /* Texto preto */
            transform: scale(1.05); /* Leve efeito de zoom */
          }

          .feature-icon {
            font-size: 32px; /* Aumentado para destacar os emojis */
          }

          .feature-text {
            font-size: 16px; /* Tamanho do texto */
            font-weight: bold;
          }
        `}
      </style>

      <div>
        {sections.map((section, index) => (
          <div key={index} className="section-container">
            {/* Título da seção */}
            <div className="section-title">{section.title}</div>

            {/* Botões da seção */}
            <div className="features-container">
              {section.items.map((item, idx) => (
                <button
                  key={idx}
                  className={`feature-btn ${
                    objetoRepublica.Features && objetoRepublica.Features.includes(item.name) ? "active" : ""
                  }`}
                  onClick={() => handleToggle(item.name)}
                >
                  <span className="feature-icon">{item.icon}</span> {/* Emoji como ícone */}
                  <span className="feature-text">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="features-container">
          Câmeras de segurança que monitoram espaços internos não são permitidas, mesmo que estejam desligadas.
          É obrigatório informar sobre a presença de todas as câmeras de segurança na parte externa.
        </div>
      </div>
    </div>
  );
};

export default HighlightFeatures;
