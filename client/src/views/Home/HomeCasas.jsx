import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function HomeCasas() {
  const [adData, setAdData] = useState(null);
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAd() {
      try {
        const response = await axios.get(`http://localhost:5000/republicas/${id}`);
        if (response.data) {
          setAdData(response.data);
          fetchUser(response.data.id_usuario);
        } else {
          console.error("República não encontrada.");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do anúncio:", error);
      }
    }

    async function fetchUser(userId) {
      try {
        const response = await axios.get(`http://localhost:5000/usuarios/${userId}`);
        if (response.data) {
          setUserData(response.data);
        } else {
          console.error("Usuário não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    }

    fetchAd();
  }, [id]);

  const imageStyle = {
    border: "2px solid #FFE34C",
    borderRadius: "8px",
    transition: "transform 0.3s ease",
  };

  const buttonStyle = {
    backgroundColor: "#FFE34C",
    borderColor: "#FFE34C",
    color: "black",
  };

  const handleContactClick = () => {
    if (adData && adData.id_usuario) {
      navigate(`/perfil/${adData.id_usuario}`);
    } else {
      console.error("ID do usuário não encontrado.");
    }
  };

  if (!adData) {
    return (
      <div>
        <Navbar />
        <div className="container text-center mt-5">
          <p>Carregando informações da república...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container mt-5">
          <div className="row mb-4">
            <div className="col-lg-12">
              <h1 className="text-start text-dark mb-3">{adData.titulo}</h1>
              <p className="text-muted">
                <i className="bi bi-geo-alt-fill"></i> {adData.bairro}, {adData.estado}
              </p>
            </div>
          </div>

          {/* Exibição da imagem principal */}
          <div className="row g-4">
            <div className="col-lg-12 text-center">
              <img
                src={`http://localhost:5000/public/${adData.caminhoFoto}`}
                alt="Foto principal da república"
                className="img-fluid rounded shadow-sm"
                style={{ ...imageStyle, height: "450px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Detalhes da república */}
          <div className="d-flex align-items-center text-muted mb-4 pt-4">
            <i className="bi bi-people-fill me-3"></i>
            <span className="me-3">👥 {adData.qtd_moradores || 0} Vagas</span>
            <span className="me-3">{adData.qtd_quartos || 0} Quarto(s)</span>
            <span className="me-3">{adData.qtd_camas || 0} Cama(s)</span>
            <span className="me-3"> Piscina: {(adData.wifi || 0) > 0 ? "Sim" : "Não"}</span>
            <span className="me-3"> {(adData.televisao || 0) > 0 && (
              <div>Televisao: Sim</div>
            )}</span>
            <span className="me-3"> {(adData.cozinha || 0) > 0 && (
              <div>Cozinha: Sim</div>
            )}</span>
            <span className="me-3"> {(adData.ar_condicionado || 0) > 0 && (
              <div>Ar-Condicionado: Sim</div>
            )}</span>
            <span className="me-3"> {(adData.canto_de_estudo || 0) > 0 && (
              <div>Canto de Estudo: Sim</div>
            )}</span>
            <span>{adData.banheiroCompartilhado ? "Banheiro compartilhado" : "Banheiro privado"}</span>
          </div>

          {/* Descrição e mapa */}
          <div className="row mt-5">
            <div className="col-lg-8">
              <div
                className="p-3 rounded shadow-sm"
                style={{ backgroundColor: "#f7f5f5", color: "#1a1717", maxWidth: "580px" }}
              >
                <p className="mb-0">
                  <strong>Descrição:</strong> {adData.descricao}
                </p>
              </div>
              <div className="mt-3">
                <iframe
                  title="Mapa da localização"
                  src={`https://www.google.com/maps?q=${adData.bairro.replace(/ /g, "+")}&output=embed`}
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow border-0 p-4">
                {/* Preço */}
                <div className="text-center mb-4">
                  <h3 className="mb-1">R$ {adData.preco || 0}/mês</h3>
                  <p className="text-muted">a negociar</p>
                </div>

                {/* Informações do usuário */}
                {userData && (
                  <div className="text-center mb-4">
                    <img
                      src={`http://localhost:5000/public/${userData.caminho_foto_perfil}`}
                      alt="Foto de perfil do usuário"
                      className="rounded-circle shadow-sm"
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                    <h5 className="mt-2">{userData.nome}</h5>
                  </div>
                )}

                <hr />

                {/* Botão contactar */}
                <button
                  className="btn w-100 py-2"
                  style={buttonStyle}
                  onClick={handleContactClick}
                >
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCasas;
