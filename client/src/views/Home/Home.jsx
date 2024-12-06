import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Função para obter as repúblicas do backend
async function getRepublicas() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND}/republicas`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar repúblicas:", error);
    return [];
  }
}

function Home() {
  const [republicas, setRepublicas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRepublicas();
      if (!data || data.length === 0) {
        // Caso não haja dados, cria uma lista de exemplo
        setRepublicas([
          {
            id: 1,
            nome: "República Universitária Alpha",
            bairro: "Centro",
            estado: "SP",
            preco: 750.0,
            imagem: "https://via.placeholder.com/300",
          },
        ]);
      } else {
        setRepublicas(data); // Atualiza o estado com os dados reais
      }
      setLoading(false); // Finaliza o carregamento
    };
    fetchData();
  }, []);

  const handleNavigate = (id) => {
    if (id) {
      navigate(`/casas/${id}`); // Garante que o id está sendo passado corretamente
    } else {
      console.error("ID da república está indefinido.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {/* Barra de busca */}
        <div className="container my-4">
          <h2 className="text-center mb-4">Encontrar pelas redondezas de:</h2>
          <div className="d-flex justify-content-center mb-4">
            <input
              type="text"
              className="form-control mx-2"
              placeholder="Buscar local..."
            />
            <input
              type="text"
              className="form-control mx-2"
              placeholder="Buscar por universidade"
            />
            <button className="btn btn-secondary">Filtrar</button>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="container">
          {loading ? (
            <div className="text-center mt-5">
              <h4>Carregando...</h4>
            </div>
          ) : republicas.length === 0 ? (
            <div className="text-center mt-5">
              <h4>Nenhuma república encontrada.</h4>
            </div>
          ) : (
            <div className="row">
              {republicas.map((rep) => (
                <div key={rep.id} className="col-md-4 mb-4">
                  <div
                    className="card republica-card"
                    style={{
                      transition: "transform 0.3s, box-shadow 0.3s",
                      cursor: "pointer",
                    }}
                    onClick={() => handleNavigate(rep.id)} // Corrige o problema do ID
                  >
                    <div
                      className="card-img-top"
                      style={{
                        height: "200px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={rep.imagem || "https://via.placeholder.com/150"} // Imagem padrão
                        alt={rep.nome}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          maxHeight: "200px",
                        }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title text-decoration-none text-dark">
                        {rep.nome}
                      </h5>
                      <p className="card-text">{rep.bairro}</p>
                      <p className="card-text">{rep.estado}</p>
                      <p className="fw-bold" style={{ color: "black" }}>
                        R$ {rep.preco}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;