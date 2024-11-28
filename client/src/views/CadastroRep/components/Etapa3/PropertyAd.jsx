import React, { useState } from 'react';

const PropertyAd = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(70);

  // Função para gerenciar o upload de imagens
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length <= 5) {
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImages]);
    } else {
      alert('Você pode carregar no máximo 5 imagens');
    }
  };

  // Função para remover uma imagem
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, idx) => idx !== index));
  };

  // Funções para gerenciar os campos de entrada
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || price <= 0) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
    // Lógica para enviar os dados do formulário
    alert('Anúncio enviado!');
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {/* Área para adicionar fotos */}
        <div className="mb-4">
          <p>Adicione fotos do seu espaço</p>
          <div className="d-flex gap-2 flex-wrap">
            {images.map((image, index) => (
              <div key={index} className="position-relative">
                <img
                  src={image}
                  alt={`Uploaded ${index}`}
                  className="rounded"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                {/* Botão de remoção */}
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
            <label
              htmlFor="imageUpload"
              className="d-flex justify-content-center align-items-center bg-warning border rounded"
              style={{
                width: '120px',
                height: '120px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px dashed #f0ad4e',
              }}
            >
              <span className="fs-3">+</span>
              <input
                id="imageUpload"
                type="file"
                multiple
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <p>{images.length} {images.length === 1 ? 'imagem' : 'imagens'} carregadas</p>
        </div>

        {/* Campo para nomear o anúncio */}
        <div className="mb-4">
          <p>Nomeie sua moradia para o anúncio</p>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: União Twink"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        {/* Campo para definir o preço */}
        <div className="mb-4">
          <p>Determine seu valor</p>
          <div className="d-flex align-items-center">
            <span className="me-2">R$</span>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={handlePriceChange}
              style={{ width: '100px' }}
            />
          </div>
          <small>Para o morador o valor sairá por R$ {(price * 0.95).toFixed(2)}</small>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!title || price <= 0 || images.length === 0}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default PropertyAd;

