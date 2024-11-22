import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Card, Button, Image, CardText } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


function Perfil() {
  const [perfil, setPerfil] = useState([]);
  const id_usuario = localStorage.getItem("id_usuario");
  const nome = localStorage.getItem("nome");
  const sobrenome = localStorage.getItem("sobrenome");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  function trocarTela(){
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
      <Card style={{ width: '500px', height: '400px', padding: '50px', margin: '50px', borderRadius: '20px' }}>
        <Image
          src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2024/09/12114930/rapper-travis-scott-confirmado-atracao-rock-in-rio-scaled-1-620x620.webp" // Substitua pela URL real da imagem de perfil
          roundedCircle
          style={{ width: '150px', height: '150px', marginTop: '-20px' }}
        />
        <Card.Body>
          <Card.Title style={{ marginLeft: '-7px', marginTop: '20px' }} >{nome}</Card.Title>
          <Card.Subtitle style={{ marginLeft: '11px' }} className="mb-2 text-muted">{perfil?.descricao || 'Descrição não disponível'}</Card.Subtitle>
          <Card.Text style={{ marginLeft: '280px', marginBlockStart: '-180px' }}>
            <div style={{ marginBottom: '20px', fontSize: '18px' }} className=" justify-content-between">
              <span style={{ marginLeft: '-30px' }}>1 </span>
              <span>daniel</span>
            </div>
            <div style={{ marginBottom: '20px', fontSize: '18px' }} className=" justify-content-between">
              <span style={{ marginLeft: '-30px' }}>2 </span>
              <span>gabriel</span>
            </div>
            <div style={{ marginBottom: '20px', fontSize: '18px' }} className=" justify-content-between">
              <span style={{ marginLeft: '-30px' }}>3 </span>
              <span>emanoel</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '500px', height: '300px', padding: '20px', margin: '50px', borderRadius: '20px' }}>
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
      <Card className='position-absolute top-50 start-50"' style={{ width: '800px', height: '450px', marginLeft: '650px', marginBlockStart: '-370px', border: 'none' }}>
        <Card.Text>
          <div>
            <h1>{nome} {sobrenome}</h1>
            <h5 style={{ fontStyle: 'italic' }}>{perfil?.pronome || 'Pronome não informado'} <Button style={{ margin: '0px', marginTop: '-10px', marginLeft: '25px' }} variant="btn btn-warning" onClick={trocarTela}>Editar</Button></h5>
            <span>{perfil?.bio || 'Biografia não informada'}
            </span>
            <br />
            <br />
          </div>
        </Card.Text>
      </Card>
      <hr className='position-absolute top-50 start-50"' style={{ width: '800px', height: '600px', marginLeft: '650px', marginBlockStart: '115px' }} />
      <Card className='position top-50 start-50"' style={{ width: '250px', height: '300px', marginLeft: '650px', marginBlockStart: '-350px', borderRadius: '20px' }}>
        <Card.Text>
          <div>
            <span></span>
          </div>
        </Card.Text>
      </Card>
      <Card className='position top-50 start-50"' style={{ width: '500px', height: '300px', marginLeft: '950px', marginBlockStart: '-800px', marginTop: '-300px', border: 'none' }}>
        <Card.Text>
          <div>
            <span></span>
          </div>
        </Card.Text>
      </Card>
      <Card className='position top-50 start-50"' style={{ width: '300px', height: '820px', marginLeft: '1550px', marginBlockStart: '-818px', borderRadius: '20px' }}>
        <Card.Text>
          <div>
            <span></span>
          </div>
        </Card.Text>
      </Card>
      {/* <hr className='position top-50 start-50"' style={{ width: '800px', height:'300px', marginLeft:'650px', marginBlockEnd:'-725px', marginTop:'32px'}}/> */}
    </>

  )
};

export default Perfil;