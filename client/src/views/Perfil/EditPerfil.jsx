import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Image } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import ImgPerfil from './ImgPerfil.jsx';


const idPerfil = 0;

function EditarPerfil() {
  const [formData, setFormData] = useState({
    descricao: '',
    pronome: '',
    telefone: '',
    redes: '',
    bio: '',
    idioma: '',
    estado_civil: '',
    local_moradia: '',
    curso: '',
    faculdade: ''
  });

  const navigate = useNavigate();
  const id_usuario = localStorage.getItem("id_usuario");

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const resposta = await fetch(`${process.env.REACT_APP_BACKEND}/perfil/${id_usuario}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!resposta.ok) {
          throw new Error('Erro ao buscar os dados do perfil');
        }

        const perfil = await resposta.json();
        setFormData(perfil);
      } catch (error) {
        console.error('Erro ao consultar o perfil:', error.message);
      }
    }

    carregarPerfil();
  }, [id_usuario]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const salvarPerfil = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch(`${process.env.REACT_APP_BACKEND}/perfil/${id_usuario}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!resposta.ok) {
        const erro = await resposta.text();
        throw new Error(`Erro ao salvar: ${erro}`);
      }

      const atualizado = await resposta.json();
      alert('Perfil atualizado com sucesso!');
      window.location.href = navigate(`/perfil/${id_usuario}`);
    } catch (error) {
      console.error('Erro ao salvar o perfil:', error.message);
      alert('Erro ao salvar o perfil. Tente novamente.');
    }
  };

  // Verifica se caminho_foto_perfil é um arquivo e gera o URL, caso contrário usa uma imagem padrão
  const imagemPerfil = formData.caminho_foto_perfil && formData.caminho_foto_perfil instanceof File
    ? URL.createObjectURL(formData.caminho_foto_perfil)
    : "https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg"; // Imagem padrão

  return (
    <>
      <Navbar />
      <Card style={{ width: '400px', padding: '30px', margin: '50px auto', borderRadius: '20px' }}>
        <Image
          src={`http://localhost:5000/public/${formData.caminho_foto_perfil}`}
          roundedCircle
          style={{ width: '200px', height: '200px', marginTop: '-20px', marginLeft: '65px' }}
        />
        <ImgPerfil formData={formData} setFormData={setFormData} />
      </Card>
      <Card style={{ width: '600px', padding: '30px', margin: '50px auto', borderRadius: '20px' }}>
        <Card.Body>
          <Card.Title>Insira as informações do perfil:</Card.Title>
          <Form onSubmit={salvarPerfil}>
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pronome</Form.Label>
              <Form.Control
                type="text"
                name="pronome"
                value={formData.pronome}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Redes Sociais</Form.Label>
              <Form.Control
                type="text"
                name="redes"
                value={formData.redes}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Idioma</Form.Label>
              <Form.Control
                type="text"
                name="idioma"
                value={formData.idioma}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Estado Civil</Form.Label>
              <Form.Control
                type="text"
                name="estado_civil"
                value={formData.estado_civil}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Local de Moradia</Form.Label>
              <Form.Control
                type='text'
                name="local_moradia"
                value={formData.local_moradia}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Curso</Form.Label>
              <Form.Control
                type="text"
                name="curso"
                value={formData.curso}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Faculdade</Form.Label>
              <Form.Control
                type="text"
                name="faculdade"
                value={formData.faculdade}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Música Favorita</Form.Label>
              <Form.Control
                type="text"
                name="musicaFavorita"
                value={formData.musicaFavorita}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default EditarPerfil;
