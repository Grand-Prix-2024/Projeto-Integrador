import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

function getRepublicas() {
  return [
    { id: 1, nome: 'República 1', bairro: 'Maria Ortiz', estado: 'Vitória - ES', preco: 70.00, imagem: 'https://imgbr.imovelwebcdn.com/avisos/2/29/60/73/76/40/360x266/2460335707.jpg?isFirstImage=true' },
    { id: 2, nome: 'República 2', bairro: 'Campo Grande', estado: 'Cariacica - ES', preco: 70.00, imagem: 'https://imgs.nestimg.com/casa_sobrado_para_loca_o_em_londrinapr_jardim_santo_antonio_5_quartos_4300002720174786401.jpg' },
    { id: 3, nome: 'República 3', bairro: 'Jardim Camburi', estado: 'Vitória - ES', preco: 70.00, imagem: 'https://i.mgfserv.com/300x180/aHR0cHM6Ly9jZG51c28uY29tLzIwMzM2LzIwMjQvMTAvMTI3NTc0YTA4NTFjNWJlMDFiY2Q0MjEzZjAwOTVhNjIuanBn.jpg' },
    { id: 4, nome: 'República 4', bairro: 'Itapuã', estado: 'Vila Velha - ES', preco: 80.00, imagem: 'https://imgbr.imovelwebcdn.com/avisos/2/29/92/05/60/67/720x532/4443546401.jpg?isFirstImage=true' },
    { id: 5, nome: 'República 5', bairro: 'Barra da Tijuca', estado: 'Rio de Janeiro - RJ', preco: 75.00, imagem: 'https://cdnuso.com/13937/2024/07/893481598f430d88104cd6c32e53eb93.jpg' },
    { id: 6, nome: 'República 6', bairro: 'São Miguel', estado: 'São Paulo - SP', preco: 85.00, imagem: 'https://imovelguide.com.br/images/condominio-do-edificio-giovanni-giacomin-TTDpUS.jpg' },
  ];
}

function Home() {
  const republicas = getRepublicas();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="App">

        <div className="container my-4">
          <h2 className="text-center mb-4">Encontrar pelas redondezas de:</h2>
          <div className="d-flex justify-content-center mb-4">
            <input type="text" className="form-control mx-2" placeholder="Buscar local..." />
            <input type="text" className="form-control mx-2" placeholder="Buscar por universidade" />
            <button className="btn btn-secondary">Filtrar</button>
          </div>
          <div className="row">
            {republicas.map((rep) => (
              <div key={rep.id} className="col-md-4 mb-4">
                <div
                  className="card republica-card"
                  style={{
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                >
                  <div
                    className="card-img-top"
                    style={{
                      height: '200px',
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={rep.imagem}
                      alt={rep.nome}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        maxHeight: '200px',
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title"><a href="/casas">{rep.nome}</a></h5>
                    <p className="card-text">{rep.bairro}</p>
                    <p className="card-text">{rep.estado}</p>
                    <p className="fw-bold" style={{ color: 'black' }}>R$ {rep.preco.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
