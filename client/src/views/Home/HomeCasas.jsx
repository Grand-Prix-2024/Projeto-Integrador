import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import axios from "axios";

function HomeCasas() {
  const [adData, setAdData] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchAd() {
      try {
        const response = await axios.get("/api/casas/1"); // Rota para obter os dados
        setAdData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados do anúncio:", error);
      }
    }

    async function fetchComments() {
      try {
        const response = await axios.get("/api/comments/1"); // Rota para obter os comentários
        setComments(response.data);
      } catch (error) {
        console.error("Erro ao buscar os comentários:", error);
      }
    }

    fetchAd();
    fetchComments();
  }, []);

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

  if (!adData) {
    return (
      <div>
        <Navbar />
        <div className="container text-center mt-5">
          <p>Nenhum anúncio disponível no momento.</p>
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
              <h1 className="text-start text-dark mb-3">{adData.title}</h1>
              <p className="text-muted">
                <i className="bi bi-geo-alt-fill"></i> {adData.location}
              </p>
            </div>
          </div>

          {/* Galeria de imagens */}
          <div className="row g-4">
            <div className="col-lg-7">
              <img
                src={adData.photos[0]}
                alt="Foto maior"
                className="img-fluid rounded shadow-sm"
                style={{ ...imageStyle, height: "450px", objectFit: "cover" }}
              />
            </div>
            <div style={{ marginTop: "40px" }} className="col-lg-5">
              <div className="row g-4">
                {adData.photos.slice(1).map((photo, index) => (
                  <div className="col-6" key={index}>
                    <img
                      src={photo}
                      alt={`Foto menor ${index + 1}`}
                      className="img-fluid rounded shadow-sm"
                      style={{ ...imageStyle, height: "200px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detalhes da república */}
          <div className="d-flex align-items-center text-muted mb-4 pt-4">
            <i className="bi bi-people-fill me-3"></i>
            <span className="me-3">👥 {adData.vacancies} Vagas</span>
            <span className="me-3">{adData.room} Quarto(s)</span>
            <span className="me-3">{adData.beds} Cama(s)</span>
            <span>{adData.sharedBathroom ? "Banheiro compartilhado" : "Banheiro privado"}</span>
          </div>

          {/* Descrição e mapa */}
          <div className="row mt-5">
            <div className="col-lg-8">
              <div
                className="p-3 rounded shadow-sm"
                style={{ backgroundColor: "#f7f5f5", color: "#1a1717", maxWidth: "580px" }}
              >
                <p className="mb-0">
                  <strong>Descrição:</strong> {adData.description}
                </p>
              </div>
              <div className="mt-3">
                <iframe
                  title="Mapa da localização"
                  src={`https://www.google.com/maps?q=${adData.location.replace(
                    / /g,
                    "+"
                  )}&output=embed`}
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
                <div className="text-center mb-4">
                  <h3 className="mb-1">R$ {adData.price.toFixed(2)}/mês</h3>
                  <p className="text-muted">a negociar</p>
                  <button className="btn w-100 py-2" style={buttonStyle}>
                    Negociar
                  </button>
                </div>
                <hr />
                {adData.hosts.map((host, index) => (
                  <div key={index}>
                    <p className="text-muted mb-2">
                      <strong>Anfitrião{host.gender === "female" ? "a" : ""}:</strong>
                    </p>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={host.photo}
                        alt={host.name}
                        className="rounded-circle me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                      <p className="mb-0">{host.name}</p>
                    </div>
                  </div>
                ))}
                <hr />
                <button className="btn w-100 py-2" style={buttonStyle}>
                  Contactar
                </button>
              </div>
            </div>
          </div>

          {/* Comentários */}
          <div className="mt-5">
            <h3>Comentários</h3>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="mt-3 p-3 border rounded">
                  <p>
                    <strong>{comment.user}</strong>: {comment.text}
                  </p>
                </div>
              ))
            ) : (
              <p>Nenhum comentário disponível.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCasas;
