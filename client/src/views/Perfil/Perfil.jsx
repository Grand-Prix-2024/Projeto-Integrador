import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Card, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import locaPin from './img/locaPin.png';
import chapeuGrad from './img/chapeuGrad.png';
import escola from './img/escola.png';
import lingua from './img/lingua.png';
import coracao from './img/coracao.png';
import casa from './img/casa.png';
import balao from './img/balao.png';

function Perfil() {
  const [perfil, setPerfil] = useState({});
  const [idade, setIdade] = useState('');
  const id_usuario = localStorage.getItem('id_usuario');
  const nome = localStorage.getItem('nome');
  const sobrenome = localStorage.getItem('sobrenome');
  const email = localStorage.getItem('email');
  const navigate = useNavigate();

  useEffect(() => {
    if (!id_usuario) {
      alert('Efetue Login');
      navigate('/login');
    } else {
      carregarPerfil();
    }
  }, []);

  const carregarPerfil = async () => {
    try {
      const resposta = await fetch(`${process.env.REACT_APP_BACKEND}/perfil/${id_usuario}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!resposta.ok) {
        throw new Error('Erro ao buscar os dados do perfil');
      }

      const dadosPerfil = await resposta.json();
      setPerfil(dadosPerfil);

      if (dadosPerfil.data_nasc) {
        setIdade(calcularIdade(dadosPerfil.data_nasc));
      }
    } catch (error) {
      console.error('Erro ao carregar o perfil:', error.message);
    }
  };

  const calcularIdade = (dataNasc) => {
    const partes = dataNasc.split('/');
    const nascimento = partes.length === 3
      ? new Date(`${partes[2]}-${partes[1]}-${partes[0]}`)
      : new Date(dataNasc);

    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  };

  const trocarTela = () => navigate('/editar-perfil');

  const imagemPerfil = perfil.caminho_foto_perfil
    ? `http://localhost:5000/public/${perfil.caminho_foto_perfil}`
    : 'https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg';

  return (
    <>
      <Navbar />
      <Card style={{ width: '500px', height: '350px', padding: '50px', margin: '50px', borderRadius: '20px', borderColor: 'black' }}>
        <Image
          src={imagemPerfil}
          roundedCircle
          style={{ width: '200px', height: '200px', marginTop: '-20px' }}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: '25px' }}>
            {nome} {sobrenome}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {perfil?.descricao || 'Descrição não disponível'}
          </Card.Subtitle>
          <Card.Text>
            <div style={{ marginBottom: '35px' }}>
              <img src={locaPin} alt="Localização" style={{ width: '25px', marginRight: '15px' }} />
              {perfil?.local_moradia || 'N/A'}
            </div>
            <div style={{ marginBottom: '35px' }}>
              <img src={chapeuGrad} alt="Curso" style={{ width: '25px', marginRight: '15px' }} />
              {perfil?.curso || 'N/A'}
            </div>
            <div style={{ marginBottom: '35px' }}>
              <img src={escola} alt="Faculdade" style={{ width: '25px', marginRight: '15px' }} />
              {perfil?.faculdade || 'N/A'}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '500px', height: '300px', margin: '50px', borderRadius: '20px', borderColor: 'black' }}>
        <Card.Body>
          <Card.Text>
            <h5>E-MAIL</h5>
            <h6>{email}</h6>
            <h5>TELEFONE</h5>
            <h6>{perfil?.telefone || 'Telefone não disponível'}</h6>
            <h5>INSTAGRAM</h5>
            <h6>{perfil?.redes || 'Rede social não disponível'}</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Button variant="danger" style={{ margin: '50px' }}>
        Denunciar perfil
      </Button>
      <Card style={{ width: '500px', height: '300px', marginLeft: '760px', marginTop: '-250px', border: 'none' }}>
        <Card.Text>
          <div style={{ marginTop: '65px' }}>
            <h5>
              <img src={balao} alt="Idade" style={{ width: '25px', marginRight: '5px' }} />
              IDADE: {idade || 'N/A'}
            </h5>
            <h5>
              <img src={lingua} alt="Idioma" style={{ width: '25px', marginRight: '5px' }} />
              IDIOMAS: {perfil?.idioma || 'N/A'}
            </h5>
            <h5>
              <img src={casa} alt="Moradia" style={{ width: '25px', marginRight: '5px' }} />
              MORA EM: {perfil?.local_moradia || 'N/A'}
            </h5>
            <h5>
              <img src={coracao} alt="Estado Civil" style={{ width: '25px', marginRight: '5px' }} />
              ESTADO CIVIL: {perfil?.estado_civil || 'N/A'}
            </h5>
          </div>
        </Card.Text>
      </Card>
    </>
  );
}

export default Perfil;
