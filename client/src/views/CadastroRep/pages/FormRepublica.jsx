import React, { useState } from "react";
import AccommodationSelector from "../components/Etapa1/AccommodationSelector";
import RoomDistribution from "../components/Etapa1/RoomDistribution";
import EssentialInfo from "../components/Etapa1/EssentialInfo";
import HighlightFeatures from "../components/Etapa2/HighlightFeatures";
import PropertyAd from "../components/Etapa3/PropertyAd";

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

  const toggleFeature = (feature) => {
    setFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  return (
    <div className="container">
      <h5>Etapa 1</h5>
      <h2>Informe sobre a sua acomodação</h2>
      <p>Selecione qual melhor descreve seu espaço</p>
      <AccommodationSelector selected={accommodation} onSelect={setAccommodation} />

      <h2>Escolha o tipo de quarto</h2>
      <p>Selecione a opção que melhor descreve o quarto disponível</p>
      <RoomDistribution rooms={rooms} onChange={(type, value) => setRooms({ ...rooms, [type]: value })} />

      <h3>Adcione informções essenciais</h3>
      <EssentialInfo
        values={essentialInfo}
        onUpdate={(key, value) => setEssentialInfo({ ...essentialInfo, [key]: value })}
      />

      <h5>Etapa 2</h5>
      <h3>Faca sua republica se destacar</h3>
      <p>Adicione elementos pra tornar sua acomodacao mais interessante</p>
      <HighlightFeatures features={features} onToggle={toggleFeature} />

      <h5>Etapa 3</h5>
      <h3>Vamos preparar seu anuncio</h3>
      <p>Montar como seu anuncio vai aparecer para os interessados</p>

      <h5>Etapa 4</h5>
      <div className="container mt-5">
        <h2 className="mb-4">Vamos preparar seu anúncio</h2>
        <p>Monte como seu anúncio vai aparecer para os interessados</p>
      </div>
      <PropertyAd />
    </div>
  );
};

export default FormRepublica;