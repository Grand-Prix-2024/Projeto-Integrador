import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import {useNavigate, useParams} from 'react-router-dom';

function EditarPerfil() {
  const [formData, setFormData] = useState({
    descricao: '',
    telefone: '',
    redes: '',
    bio: ''
  });
  
  const navigate = useNavigate();

  const id_perfil = useParams();

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const resposta = await fetch(`http://localhost:5000/perfil/${id_perfil}`, {
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
  }, [id_perfil]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const salvarPerfil = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch(`http://localhost:5000/perfil/${id_perfil}`, {
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
      window.location.href = navigate(`/perfil/${id_perfil}`);; 
    } catch (error) {
      console.error('Erro ao salvar o perfil:', error.message);
      alert('Erro ao salvar o perfil. Tente novamente.');
    }
  };

  return (
    <>
      <Navbar />
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
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="text"
                name="redes"
                value={formData.redes}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Biografia</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="bio"
                value={formData.bio}
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
