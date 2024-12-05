import React, { useState } from 'react';

const PropertyAd = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(70);
  const [description, setDescription] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length <= 12) {
      const newImages = files.map((file) => file);
      setImages((prevImages) => [...prevImages, ...newImages]);
    } else {
      alert('Você pode carregar no máximo 12 imagens.');
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, idx) => idx !== index));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
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
            placeholder="Ex: União Twink"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        {/* Campo para definir o preço */}
        <div className="mb-4">
          <label htmlFor="price" className="form-label">
            <h5>Valor</h5>
          </label>
          <div className="input-group">
            <span className="input-group-text">R$</span>
            <input
              id="price"
              type="number"
              className="form-control"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
          <small className="text-muted">
            Para o morador o valor sairá por R$ {(price * 1.10).toFixed(2)}
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
            value={description}
            onChange={handleDescriptionChange}
            rows="4"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default PropertyAd;
