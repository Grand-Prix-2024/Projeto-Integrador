import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importando os ícones do Bootstrap
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
    { id: 7, nome: 'República 7', bairro: 'Jardim da Penha', estado: 'Vitória - ES', preco: 90.00, imagem: 'https://resizedimgs.vivareal.com/crop/614x297/named.images.sp/dfcc0f2396ae8572d728f177b11bfca4/casa-com-4-quartos-para-alugar-180m-no-nazareth-vit-ria.webp' },
    { id: 8, nome: 'República 8', bairro: 'Praia do Canto', estado: 'Vitória - ES', preco: 100.00, imagem: 'https://fotos.procureimovel.com.br/img_imovel/1348/488773/thumb/66f721bd8cce0.jpg' },
    { id: 9, nome: 'República 9', bairro: 'Centro', estado: 'Vila Velha - ES', preco: 60.00, imagem: 'https://imgbr.imovelwebcdn.com/avisos/2/30/02/24/46/93/360x266/4618570485.jpg?isFirstImage=true' },
  ];
}

function Home() {
  const republicas = getRepublicas();
  const [visibleCount, setVisibleCount] = useState(6); // Inicializa com 6 repúblicas visíveis

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 3); // Mostra mais 3 repúblicas a cada clique
  };

  return (
    <>
      <Navbar />
      
      <h2 className="text-center mb-4 mt-4">Encontrar pelas redondezas de:</h2>
      
      <div className="App">
        <div className="container my-4">
          <div className="d-flex justify-content-center mb-4">
            <div className="input-group" style={{ maxWidth: '1000px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar local..."
                style={{ borderRadius: '25px 0 0 25px' }} // Extremidades arredondadas à esquerda
              />
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por universidade"
                style={{ borderRadius: '0', width: '150px' }} // Sem bordas arredondadas no meio
              />
              <input
                type="number"
                className="form-control"
                placeholder="Pessoas"
                style={{ borderRadius: '0', width: '120px' }} // Sem bordas arredondadas no meio
              />
              <button
                className="btn"
                style={{
                  backgroundColor: '#FFE34C',
                  color: '#000',
                  border: '1px solid #FFE34C',
                  borderRadius: '0 25px 25px 0', // Extremidades arredondadas à direita
                }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          <div className="row">
            {republicas.slice(0, visibleCount).map((rep) => (
              <div key={rep.id} className="col-md-4 col-sm-6 mb-4">
                <div
                  className="republica-card"
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '80%',
                    height: '240px',
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
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                <div className="text-center mt-3">
                  <h6>
                    <a href="/casas" style={{ fontSize: '1rem', textDecoration: 'none', color: '#000' }}>
                      {rep.nome}
                    </a>
                  </h6>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#555' }}>
                    {rep.bairro}
                  </p>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#777' }}>
                    {rep.estado}
                  </p>
                  <p className="fw-bold mt-1" style={{ color: '#000', fontSize: '1rem' }}>
                    R$ {rep.preco.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Mostrar Mais */}
          {visibleCount < republicas.length && (
            <div className="text-center mt-4">
              <button
                className="btn"
                onClick={handleShowMore}
                style={{
                  backgroundColor: '#FFE34C',
                  color: '#000',
                  border: '1px solid #FFE34C',
                }}
              >
                Mostrar Mais
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Rodapé */}
      <footer className="text-center py-3 border-top" style={{ backgroundColor: '#FFE34C' }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="text-dark">
            © 2024 HIVE <a href="#" style={{ color: '#000' }}>Privacidade</a> ·
            <a href="#" style={{ color: '#000' }}>Termos</a> ·
            <a href="#" style={{ color: '#000' }}>Informações do site</a>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-globe me-2" style={{ color: '#000' }}></i> Português (BR)
            <i className="bi bi-currency-dollar mx-2" style={{ color: '#000' }}></i> BRL
            <a href="#" className="ms-2" style={{ color: '#000' }}><i className="bi bi-facebook"></i></a>
            <a href="#" className="ms-2" style={{ color: '#000' }}><i className="bi bi-twitter"></i></a>
            <a href="#" className="ms-2" style={{ color: '#000' }}><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Home;
