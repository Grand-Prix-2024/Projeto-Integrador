import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Image } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import SpotifyMusicSelector from '../SpotifyMusicSelector.jsx'; // Importa o componente de música
import { useNavigate } from 'react-router-dom';

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
    faculdade: '',
    musicaFavorita: '',
    caminho_foto_perfil: '',
    spotify_track: ''
  });

  const [selectedFile, setSelectedFile] = useState(null); // Estado para armazenar o arquivo selecionado
  const [selectedTrack, setSelectedTrack] = useState(null); // Estado para armazenar a música selecionada
  const navigate = useNavigate();
  const id_usuario = localStorage.getItem("id_usuario");

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const resposta = await fetch(`http://localhost:5000/perfil/${id_usuario}`, {
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

        // Se houver uma música salva, converte para objeto se necessário
        if (perfil.spotify_track) {
          const trackData = typeof perfil.spotify_track === 'string'
            ? JSON.parse(perfil.spotify_track)
            : perfil.spotify_track;
          setSelectedTrack(trackData);
        }
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file); // Atualiza o estado do arquivo
  };

  const handleMusicSelect = (track) => {
    if (track) {
      const formattedTrack = {
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album_image: track.album.images[0].url
      };
      setSelectedTrack(formattedTrack);
    } else {
      setSelectedTrack(null);
    }
  };

  const salvarPerfil = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    const profileData = { ...formData };
    profileData.spotify_track = selectedTrack; // Usa diretamente o selectedTrack

    formDataToSend.append('infoPerfil', JSON.stringify(profileData));
    if (selectedFile) {
      formDataToSend.append('image', selectedFile);
    }

    try {
      const resposta = await fetch(`http://localhost:5000/perfil/${id_usuario}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!resposta.ok) {
        const erro = await resposta.text();
        throw new Error(`Erro ao salvar: ${erro}`);
      }

      alert('Perfil atualizado com sucesso!');
      navigate(`/perfil/${id_usuario}`);
    } catch (error) {
      console.error('Erro ao salvar o perfil:', error.message);
      alert('Erro ao salvar o perfil. Tente novamente.');
    }
  };

  const imagemPerfil = formData.caminho_foto_perfil
    ? `http://localhost:5000/public/${formData.caminho_foto_perfil}`
    : "https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg";

  return (
    <>
      <Navbar />
      <Card style={{ width: '400px', padding: '30px', margin: '50px auto', borderRadius: '20px' }}>
        <Image
          src={imagemPerfil}
          roundedCircle
          style={{ width: '200px', height: '200px', marginTop: '-20px', marginLeft: '65px' }}
        />
        <Form.Group controlId="formFile" className="mt-3">
          <Form.Label>Alterar foto de perfil</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
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
                type="text"
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
              <SpotifyMusicSelector
                onMusicSelect={handleMusicSelect}
                selectedTrack={selectedTrack}
                defaultTrack={selectedTrack} // Usa o selectedTrack como defaultTrack
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
