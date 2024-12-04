import React, { useState } from "react";
import AccommodationSelector from "../components/Etapa1/AccommodationSelector";
import RoomDistribution from "../components/Etapa1/RoomDistribution";
import EssentialInfo from "../components/Etapa1/EssentialInfo";
import HighlightFeatures from "../components/Etapa2/HighlightFeatures";
import PropertyAd from "../components/Etapa3/PropertyAd";
import DefinirEndereco from "../components/Etapa4/DefinirEndereco";
import Navbar from "../../../components/Navbar";
import { useNavigate } from "react-router-dom"; // Para redirecionar após o envio
import axios from "axios"; // Para fazer requisições ao backend

const FormRepublica = () => {
  const [accommodation, setAccommodation] = useState("Casa");
  const [rooms, setRooms] = useState({ private: 1, shared: 1 });
  const [essentialInfo, setEssentialInfo] = useState({
    moradores: 0,
    quartos: 0,
    banheiros: 1,
    camas: 0,
  });
  const [features, setFeatures] = useState([]);
  const [endereco, setEndereco] = useState(""); // Exemplo de estado para endereço
  const navigate = useNavigate(); // Redirecionar para a página inicial

  const toggleFeature = (feature) => {
    setFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  // Função para enviar os dados ao backend
  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Montar o objeto com todos os dados do formulário
    const formData = {
      accommodation,
      rooms,
      essentialInfo,
      features,
      endereco, // Supondo que este valor seja preenchido em DefinirEndereco
    };

    try {
      // Fazer requisição POST para cadastrar os dados no backend
      await axios.post("http://seu-backend-url/republicas", formData);

      // Redirecionar para a página inicial
      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar república:", error);
      alert("Não foi possível cadastrar a república. Tente novamente.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}> {/* Adicione o formulário */}
          <div className="container mt-5">
            <h5>Etapa 1</h5>
            <h2>Informe sobre a sua acomodação</h2>
            <p>Selecione qual melhor descreve seu espaço</p>
            <AccommodationSelector
              selected={accommodation}
              onSelect={setAccommodation}
            />
          </div>

          <div className="container mt-5">
            <h2>Escolha o tipo de quarto</h2>
            <p>Selecione a opção que melhor descreve o quarto disponível</p>
            <RoomDistribution
              rooms={rooms}
              onChange={(type, value) =>
                setRooms({ ...rooms, [type]: value })
              }
            />
          </div>

          <div className="container mt-5">
            <h3>Adcione informações essenciais</h3>
            <EssentialInfo
              values={essentialInfo}
              onUpdate={(key, value) =>
                setEssentialInfo({ ...essentialInfo, [key]: value })
              }
            />
          </div>

          <div className="container mt-5">
            <h5>Etapa 2</h5>
            <h3>Faça sua república se destacar</h3>
            <p>Adicione elementos pra tornar sua acomodação mais interessante</p>
          </div>
          <HighlightFeatures features={features} onToggle={toggleFeature} />

          <h5>Etapa 3</h5>
          <h2 className="mb-4">Vamos preparar seu anúncio</h2>
          <p>Monte como seu anúncio vai aparecer para os interessados</p>
          <PropertyAd />

          <div className="container mt-5">
            <h5>Etapa 5</h5>
            <h2>Defina seu endereço</h2>
            <p>Configure a localização da acomodação para ser encontrada</p>
          </div>
          <DefinirEndereco onChange={(value) => setEndereco(value)} />

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-primary">
              Cadastrar República
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormRepublica;
