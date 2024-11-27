import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Card, Button, Image, CardText } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import locaPin from './img/locaPin.png';
import chapeuGrad from './img/chapeuGrad.png';
import escola from './img/escola.png';
import lingua from './img/lingua.png';
import coracao from './img/coracao.png';
import casa from './img/casa.png';
import balao from './img/balao.png';


function Perfil() {
  const [perfil, setPerfil] = useState([]);
  const id_usuario = localStorage.getItem("id_usuario");
  const nome = localStorage.getItem("nome");
  const sobrenome = localStorage.getItem("sobrenome");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  function trocarTela() {
    navigate('/editar-perfil');
  }

  useEffect(() => {
    baixarPerfil();
  }, []);

  async function baixarPerfil() {
    try {
      if (!id_usuario) {
        throw new Error("ID do usuário não encontrado");
      }

      const resposta = await fetch(`http://localhost:5000/perfil/${id_usuario}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!resposta.ok) {
        throw new Error('Erro ao buscar os dados do perfil');
      }

      const consulta = await resposta.json();
      setPerfil(consulta);
    } catch (error) {
      console.error('Erro ao consultar o perfil:', error.message);
    }
  }

  return (
    <>
      <Navbar />
      <Card style={{ width: '500px', height: '350px', padding: '50px', margin: '50px', borderRadius: '20px', borderColor: 'black' }}>
        <Image
          src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2024/09/12114930/rapper-travis-scott-confirmado-atracao-rock-in-rio-scaled-1-620x620.webp" // Substitua pela URL real da imagem de perfil
          roundedCircle
          style={{ width: '200px', height: '200px', marginTop: '-20px' }}
        />
        <Card.Body>
          <Card.Title style={{ marginLeft: '2px', marginTop: '20px', fontSize: '25px' }} >{nome}</Card.Title>
          <Card.Subtitle style={{ marginLeft: '26px', fontSize: '17px' }} className="mb-2 text-muted">{perfil?.descricao || 'Descrição não disponível'}</Card.Subtitle>
          <Card.Text style={{ marginLeft: '260px', marginBlockStart: '-230px' }}>
            <div style={{ marginBottom: '35px', fontSize: '18px' }} className=" justify-content-between">
              <img src={locaPin} style={{ width: '25px', height: '25px', marginRight: '15px', marginTop: '-4' }} />
              <span style={{ fontSize: '17px' }}>{perfil?.local_moradia || 'N/A'}</span>
            </div>
            <div style={{ marginBottom: '35px', fontSize: '18px' }} className=" justify-content-between">
              <img src={chapeuGrad} style={{ width: '25px', height: '25px', marginRight: '15px', marginTop: '-4' }} />
              <span style={{ fontSize: '17px' }}>{perfil?.curso || 'N/A'}</span>
            </div>
            <div style={{ marginBottom: '35px', fontSize: '18px' }} className=" justify-content-between">
              <img src={escola} style={{ width: '25px', height: '25px', marginRight: '15px', marginTop: '-4' }} />
              <span style={{ fontSize: '17px' }}>{perfil?.faculdade || 'N/A'}</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '500px', height: '300px', padding: '20px', margin: '50px', borderRadius: '20px', borderColor: 'black' }}>
        <Card.Body>
          <Card.Title> </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle> */}
          <Card.Text>
            <div style={{ marginBottom: '-30px' }} className="d-flex ">
              <span style={{ marginBottom: '50px' }}>
                <h5>E-MAIL</h5>
                <h6>{email}</h6>
              </span>
            </div>
            <div className="d-flex ">
              <span style={{ marginBottom: '20px' }}>
                <h5>TELEFONE</h5>
                <h6>{perfil?.telefone || 'Telefone não disponível'}</h6>
              </span>
            </div>
            <div className="d-flex ">
              <span>
                <h5>INSTAGRAM</h5>
                <h6>{perfil?.redes || 'Redes sociais não disponíveis'}</h6>
              </span>

            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Button style={{ margin: '50px', marginTop: '0px' }} variant="btn btn-danger">Denunciar perfil</Button>
      <Card className='position-absolute top-50 start-50"' style={{ width: '800px', height: '400px', marginLeft: '750px', marginBlockStart: '-370px', border: 'none' }}>
        <Card.Text>
          <div>
            <h1>{nome} {sobrenome}</h1>
            <h5 style={{ fontStyle: 'italic' }}>{perfil?.pronome || 'Pronome não informado'} <Button style={{ margin: '0px', marginTop: '-2px', marginLeft: '25px' }} variant="btn btn-warning" onClick={trocarTela}>Editar</Button></h5>
            <br />
            <br />
            <span>{perfil?.bio || 'Biografia não informada'}
            </span>
          </div>
        </Card.Text>
      </Card>
      <hr className='position-absolute top-50 start-50"' style={{ width: '800px', height: '600px', marginLeft: '750px', marginBlockStart: '35px' }} />
      <Card className='position top-50 start-50"' style={{ width: '150px', height: '200px', marginLeft: '750px', marginBlockStart: '-382px', borderColor: 'black' }}>
        <Card className='position top-50 start-50"' style={{ width: '132px', height: '130px', marginLeft: '8px', marginTop: '-90px', }}>
          <Image
            src="https://www.laut.de/Travis-Scott/Alben/Utopia-121583/travis-scott-utopia-228909.jpg?e1bef5"
            style={{ width: '132px', height: '130px', marginLeft: '-1px', }}// Substitua pela URL real da imagem de perfil      
          />
          <Card.Text>
            <div style={{ marginBlockStart: '14px', marginLeft: '40px', fontWeight: 'bold', fontSize: '14px' }}>
              UTOPIA
            </div>
          </Card.Text>
        </Card>
      </Card>
      <Card className='position top-50 start-50"' style={{ width: '500px', height: '300px', marginLeft: '980px', marginBlockStart: '-780px', marginTop: '-250px', border: 'none' }}>
        <Card.Text>
          <div style={{ marginTop: '65px' }}>
            <span>
              <h5 style={{ marginBottom: '25px', fontSize: '15px' }}><img src={balao} style={{ width: '25px', height: '25px', marginRight: '5px' }} />IDADE: 33 ANOS</h5>
            </span>
            <span>
              <h5 style={{ marginBottom: '25px', fontSize: '15px' }}><img src={lingua} style={{ width: '25px', height: '25px', marginRight: '5px' }} />IDIOMAS:{perfil?.idioma || 'N/A'}</h5>
            </span>
            <span>
              <h5 style={{ marginBottom: '25px', fontSize: '15px' }}><img src={casa} style={{ width: '25px', height: '25px', marginRight: '5px' }} />MORA EM: HOUSTON, TEXAS, EUA</h5>
            </span>
            <span>
              <h5 style={{ marginBottom: '25px', fontSize: '15px' }}><img src={coracao} style={{ width: '25px', height: '25px', marginRight: '5px' }} />SOLTEIRO: {perfil?.estado_civil || 'N/A'}</h5>
            </span>
          </div>
        </Card.Text>
      </Card>
      {/* <hr className='position top-50 start-50"' style={{ width: '800px', height:'300px', marginLeft:'650px', marginBlockEnd:'-725px', marginTop:'32px'}}/> */}
    </>
  )
};

export default Perfil;