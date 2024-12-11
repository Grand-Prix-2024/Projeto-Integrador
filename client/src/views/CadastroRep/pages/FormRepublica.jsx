import React, { useState, useEffect } from "react";
import AccommodationSelector from "../components/Etapa1/AccommodationSelector";
import RoomDistribution from "../components/Etapa1/RoomDistribution";
import EssentialInfo from "../components/Etapa1/EssentialInfo";
import HighlightFeatures from "../components/Etapa2/HighlightFeatures";
import PropertyAd from "../components/Etapa3/PropertyAd";
import DefinirEndereco from "../components/Etapa4/DefinirEndereco";
import Navbar from "../../../components/Navbar";
import { Button } from "react-bootstrap";
import { useObjeto } from "../components/ObjectContext";
import { useNavigate } from "react-router-dom";

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
  const { objetoRepublica, setObjetoRepublica } = useObjeto();
  const navigate = useNavigate();


  // TESTAR
  useEffect(() => {
    const idUsuario = localStorage.getItem('id_usuario');
    if (!idUsuario) {
      alert('Efetue Login');
      navigate('/login');
    }
    if (idUsuario) {
      setObjetoRepublica((prev) => ({
        ...prev,
        id_usuario: idUsuario,
      }));
    }
  }, []);

  const toggleFeature = (feature) => {
    setFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  useEffect(() => {
    setObjetoRepublica((prev) => ({
      ...prev,
      Features: features,
    }));
  }, [features]);

  const validarDados = (dados) => {
    const camposObrigatorios = ['name', 'pais', 'cep', 'endereco', 'bairro', 'cidade', 'estado'];
    for (let campo of camposObrigatorios) {
      if (!dados[campo] || dados[campo].trim() === '') {
        alert(`O campo ${campo} é obrigatório.`);
        return false;
      }
    }
    return true;
  };

  const cadastrarRepublica = async (infoRepublica) => {
    console.log(infoRepublica);
    console.log(objetoRepublica.image);
    const formData = new FormData();
    formData.append('infoRepublica', JSON.stringify(infoRepublica));
    
    
    if (objetoRepublica?.image) {
      formData.append('image', objetoRepublica.image);
    } else {
      console.warn('Nenhuma imagem foi fornecida.');  
    }

    console.log(Array.from(formData));

    if (!validarDados(infoRepublica)) {
      alert('Dados inválidos. Verifique as informações fornecidas.');
      return;
    }

    try {
      const resposta = await fetch(`${process.env.REACT_APP_BACKEND}/republicas`, {
        method: 'POST',
        body: formData,
      });

      if (!resposta.ok) {
        console.log('Erro ao cadastrar a república');
        alert('Erro ao cadastrar. Tente novamente.');
      } else {
        console.log('República cadastrada com sucesso');
        alert('República cadastrada com sucesso!');
        setObjetoRepublica({
          Features: [],
          pais: '',
          cep: '',
          endereco: '',
          bairro: '',
          cidade: '',
          estado: '',
          id_usuario: null,
          imagem: null,
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
        <style>
          {`
              .section {
                display: flex;
                flex-direction: column;
                justify-content: flex-start; /* Alinha o conteúdo ao topo */
                align-items: flex-start; /* Garante que os textos comecem à esquerda */
                margin-bottom: 20px;
                max-width: 800px; /* Define a largura máxima da div */
                margin-left: auto; /* Centraliza horizontalmente */
                margin-right: auto;
              }

              .section h5, .section h2, .section p {
                text-align: left; /* Garante que o texto fique alinhado à esquerda */
                margin: 0 0 10px 0; /* Espaçamento consistente */
              }
            `}
        </style>
        <div className="section mt-5">
          <h5>Etapa 1</h5>
          <h2>Informe sobre a sua acomodação</h2>
          <p>Selecione qual melhor descreve seu espaço</p>
        </div>
        <AccommodationSelector
          objetoRepublica={objetoRepublica}
          setObjetoRepublica={setObjetoRepublica}
          selected={accommodation}
          onSelect={setAccommodation}
        />

        <div className="section mt-5">
          <h2>Escolha o tipo de quarto</h2>
          <p>Selecione a opção que melhor descreve o quarto disponível</p>
          <RoomDistribution
            objetoRepublica={objetoRepublica}
            setObjetoRepublica={setObjetoRepublica}
            rooms={rooms}
            onChange={(type, value) => setRooms({ ...rooms, [type]: value })}
          />
        </div>

        <div className="section mt-5">
          <h3>Adicione informações essenciais</h3>
          <EssentialInfo
            objetoRepublica={objetoRepublica}
            setObjetoRepublica={setObjetoRepublica}
            values={essentialInfo}
            onUpdate={(key, value) => setEssentialInfo({ ...essentialInfo, [key]: value })}
          />
        </div>

        <div className="section mt-5">
          <h5>Etapa 2</h5>
          <h3>Faça sua república se destacar</h3>
          <p>Adicione elementos pra tornar sua acomodação mais interessante</p>
        </div>
        <HighlightFeatures
          objetoRepublica={objetoRepublica}
          setObjetoRepublica={setObjetoRepublica}
          onToggle={toggleFeature}
        />
        <div className="section mt-5">
          <h5>Etapa 3</h5>
          <h2 className="mb-4">Vamos preparar seu anúncio</h2>
          <p>Monte como seu anúncio vai aparecer para os interessados</p>
        </div>
        <PropertyAd
          objetoRepublica={objetoRepublica}
          setObjetoRepublica={setObjetoRepublica}
        />

        <div className="section mt-5">
          <h5>Etapa 5</h5>
          <h2>Defina seu endereço</h2>
          <p>Configure a localização da acomodação para ser encontrada</p>
        </div>
        <DefinirEndereco
          objetoRepublica={objetoRepublica}
          setObjetoRepublica={setObjetoRepublica}
        />
      </div>
      <div className="section mt-5">
        <Button
          variant="warning"
          className="float-center w-100"
          onClick={() => cadastrarRepublica(objetoRepublica)}
        >
          Confirmar
        </Button>
      </div>
    </>
  );
};

export default FormRepublica;
