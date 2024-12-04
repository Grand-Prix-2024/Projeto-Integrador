import React, { useState } from "react";
import AccommodationSelector from "../components/Etapa1/AccommodationSelector";
import RoomDistribution from "../components/Etapa1/RoomDistribution";
import EssentialInfo from "../components/Etapa1/EssentialInfo";
import HighlightFeatures from "../components/Etapa2/HighlightFeatures";
import PropertyAd from "../components/Etapa3/PropertyAd";
import DefinirEndereco from "../components/Etapa4/DefinirEndereco";
import Navbar from "../../../components/Navbar";
import { Button } from "react-bootstrap";

const FormRepublica = () => {
  const [accommodation, setAccommodation] = useState("Casa");
  const [rooms, setRooms] = useState({ private: 1, shared: 1 });
  const [essentialInfo, setEssentialInfo] = useState({
    moradores: 0,
    quartos: 0,
    banheiros: 1,
    camas: 0,
  });
  const [objetoRepublica, setObjetoRepublica] = useState({
    Features: [] // Inicialize como array vazio ou com valores que você espera
  });

  const [features, setFeatures] = useState([]);

  const toggleFeature = (feature) => {
    setFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const cadastrarRepublica = async (infoRepublica) => {
    try {
      const resposta = await fetch(`${process.env.REACT_APP_BACKEND}/republicas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(infoRepublica),
      });

      if (!resposta.ok) {
        console.log('Erro ao cadastrar a república');
        alert('Erro ao cadastrar. Tente novamente.');
      } else {
        console.log('República cadastrada com sucesso');
        alert('República cadastrada com sucesso!');
        // Resetar estado após cadastro bem-sucedido
        setObjetoRepublica({
          Features: [],
        });
        setAccommodation("Casa");
        setRooms({ private: 1, shared: 1 });
        setEssentialInfo({
          moradores: 0,
          quartos: 0,
          banheiros: 1,
          camas: 0,
        });
      }
    } catch (error) {
      console.error('Erro ao cadastrar a república', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container mt-5">
          <h5>Etapa 1</h5>
          <h2>Informe sobre a sua acomodação</h2>
          <p>Selecione qual melhor descreve seu espaço</p>
          <AccommodationSelector
            objetoRepublica={objetoRepublica}
            setObjetoRepublica={setObjetoRepublica}
            selected={accommodation}
            onSelect={setAccommodation}
          />
        </div>

        <div className="container mt-5">
          <h2>Escolha o tipo de quarto</h2>
          <p>Selecione a opção que melhor descreve o quarto disponível</p>
          <RoomDistribution
            objetoRepublica={objetoRepublica}
            setObjetoRepublica={setObjetoRepublica}
            rooms={rooms}
            onChange={(type, value) => setRooms({ ...rooms, [type]: value })}
          />
        </div>

        <div className="container mt-5">
          <h3>Adicione informações essenciais</h3>
          <EssentialInfo
            objetoRepublica={objetoRepublica}
            setObjetoRepublica={setObjetoRepublica}
            values={essentialInfo}
            onUpdate={(key, value) => setEssentialInfo({ ...essentialInfo, [key]: value })}
          />
        </div>

        <div className="container mt-5">
          <h5>Etapa 2</h5>
          <h3>Faça sua república se destacar</h3>
          <p>Adicione elementos pra tornar sua acomodação mais interessante</p>
        </div>
        <HighlightFeatures
          objetoRepublica={objetoRepublica}
          setObjetoRepublica={setObjetoRepublica}
          onToggle={toggleFeature}
        />

        <h5>Etapa 3</h5>
        <h2 className="mb-4">Vamos preparar seu anúncio</h2>
        <p>Monte como seu anúncio vai aparecer para os interessados</p>
        <PropertyAd
          objetoRepublica={objetoRepublica}
          setObjetoRepublica={setObjetoRepublica}
        />

        <div className="container mt-5">
          <h5>Etapa 5</h5>
          <h2>Defina seu endereço</h2>
          <p>Configure a localização da acomodação para ser encontrada</p>
        </div>
        <DefinirEndereco
          objetoRepublica={objetoRepublica}
          setObjetoRepublica={setObjetoRepublica}
        />
      </div>
      <div className="container">
        <Button
          variant="warning"
          className="float-center w-50"
          onClick={() => cadastrarRepublica(objetoRepublica)}
        >
          Confirmar
        </Button>
      </div>
    </>
  );
};

export default FormRepublica;
