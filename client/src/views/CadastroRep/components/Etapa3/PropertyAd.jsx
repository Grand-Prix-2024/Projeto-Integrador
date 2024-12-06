import React, { useState, useEffect } from 'react';

const PropertyAd = ({ objetoRepublica = {}, setObjetoRepublica }) => {
  // Inicializa os estados com os valores de `objetoRepublica` ou valores padrão
  const [titulo, setTitulo] = useState(objetoRepublica.titulo || '');
  const [images, setImages] = useState(objetoRepublica.images || []);
  const [preco, setPreco] = useState(objetoRepublica.preco || 70);
  const [Features, setFeatures] = useState(objetoRepublica.Features || []);
  const [descricao, setDescricao] = useState(objetoRepublica.descricao || '');

  useEffect(() => {
    if (setObjetoRepublica) {
      setObjetoRepublica((prevObjeto) => ({
        ...prevObjeto,
        titulo,
        images,
        preco,
        descricao,
      }));
    } else {
      console.error('setObjetoRepublica não está definido');
    }
  }, [titulo, images, preco, setObjetoRepublica]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length <= 12) {
      setImages((prevImages) => {
        const newImages = [...prevImages, ...files];
        return newImages;
      });
    } else {
      alert('Você pode carregar no máximo 12 imagens.');
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((_, idx) => idx !== index);
      return updatedImages;
    });
  };

  const handleTitleChange = (e) => {
    setTitulo(e.target.value);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPreco(newPrice);
  };

  const handleDescriptionChange = (e) => {
    setDescricao(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const idUsuario = localStorage.getItem('id_usuario');
    console.log('ID do usuário:', idUsuario); // Verifique se está correto

    if (!idUsuario) {
      alert('ID do usuário não encontrado. Faça login novamente.');
      return;
    }

    // Envie o ID do usuário junto com os outros dados
    const formData = {
      titulo: titulo,
      preco: preco,
      id_usuario: idUsuario,
      Features: Features,
      images: images,
      descricao: descricao,
    };

    try {
      const resposta = await fetch(`${process.env.REACT_APP_BACKEND}/republicas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!resposta.ok) {
        console.error('Erro ao cadastrar a república');
        alert('Erro ao cadastrar. Tente novamente.');
      } else {
        alert('República cadastrada com sucesso!');
        // Limpe os campos após a submissão bem-sucedida
        setTitulo('');
        setPreco(70);
        setImages([]);
        setFeatures([]);
        setObjetoRepublica({ titulo: '', preco: 70, images: [], Features: [] });
      }
    } catch (error) {
      console.error('Erro ao cadastrar a república', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="p-4 rounded shadow bg-warning"
        style={{ width: '100%', maxWidth: '800px' }}
      >

        {/* Área para adicionar fotos */}
        <div className="mb-4">
          <h5>Adicione fotos do seu espaço</h5>
          <p>Imagens da fachada, do interior, quartos etc.</p>
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            {images.map((image, index) => (
              <div key={index} className="position-relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index}`}
                  className="rounded"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="position-absolute top-0 end-0 bg-danger text-white rounded-circle border-0"
                  style={{
                    width: '25px',
                    height: '25px',
                    fontSize: '16px',
                    padding: '0',
                    cursor: 'pointer',
                  }}
                >
                  x
                </button>
              </div>
            ))}
            {images.length < 12 && (
              <label
                htmlFor="imageUpload"
                className="d-flex justify-content-center align-items-center bg-light border rounded"
                style={{
                  width: '120px',
                  height: '120px',
                  cursor: 'pointer',
                  border: '2px dashed #6c757d',
                }}
              >
                <span className="fs-3 text-muted">+</span>
                <input
                  id="imageUpload"
                  type="file"
                  multiple
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
          <p className="text-center mt-2">
            {images.length} de 12 imagens carregadas
          </p>
        </div>

        {/* Campo para nomear o anúncio */}
        <div className="mb-4">
          <label htmlFor="title" className="form-label">
            <h5>Nome do anúncio</h5>
          </label>
          <input
            id="title"
            type="text"
            className="form-control"
            placeholder="Ex: Casa"
            value={titulo}
            onChange={handleTitleChange}
          />
        </div>

        {/* Campo para definir o preço */}
        <div className="mb-4">
          <label htmlFor="price" className="form-label">
            <h5>Valor</h5>
            <h5>Valor</h5>
          </label>
          <div className="input-group">
            <span className="input-group-text">R$</span>
            <input
              id="price"
              type="number"
              className="form-control"
              value={preco}
              onChange={handlePriceChange}
            />
          </div>
          <small className="text-muted">
            Para o morador o valor sairá por R$ {(preco * 1.10).toFixed(2)}
          </small>
        </div>

        {/* Campo para descrição */}
        <div className="mb-4">
          <label htmlFor="description" className="form-label">
            <h5>Descrição</h5>
          </label>
          <textarea
            id="description"
            className="form-control"
            placeholder="Descreva sua propriedade (detalhes sobre quartos, localização, facilidades, etc.)"
            value={descricao}
            onChange={handleDescriptionChange}
            rows="4"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default PropertyAd;
