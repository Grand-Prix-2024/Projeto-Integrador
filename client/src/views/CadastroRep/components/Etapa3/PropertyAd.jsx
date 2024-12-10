import React, { useState, useEffect } from 'react';

const PropertyAd = ({ objetoRepublica = {}, setObjetoRepublica }) => {
  // Inicializa os estados com os valores de `objetoRepublica` ou valores padrão
  const [titulo, setTitulo] = useState(objetoRepublica.titulo || '');
  const [image, setImage] = useState(objetoRepublica.image || null);
  const [preco, setPreco] = useState(objetoRepublica.preco || 70);
  const [descricao, setDescricao] = useState(objetoRepublica.descricao || '');

  useEffect(() => {
    if (setObjetoRepublica) {
      setObjetoRepublica((prevObjeto) => ({
        ...prevObjeto,
        titulo,
        image,
        preco,
        descricao,
      }));
    } else {
      console.error('setObjetoRepublica não está definido');
    }
  }, [titulo, image, preco, descricao, setObjetoRepublica]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Obtém apenas o primeiro arquivo selecionado
    if (file) {
      setImage(file);
      setObjetoRepublica((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setObjetoRepublica((prev) => ({
      ...prev,
      image: null,
    }));
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

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="p-4 rounded shadow bg-warning"
        style={{ width: '100%', maxWidth: '800px' }}
      >
        {/* Área para adicionar uma foto */}
        <div className="mb-4">
          <h5>Adicione uma foto do seu espaço</h5>
          <p>Imagem da fachada, do interior, ou de um quarto.</p>
          <div className="d-flex flex-column align-items-center">
            {image && (
              <div className="position-relative mb-3">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded"
                  className="rounded"
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="position-absolute top-0 end-0 bg-danger text-white rounded-circle border-0"
                  style={{
                    width: '30px',
                    height: '30px',
                    fontSize: '18px',
                    padding: '0',
                    cursor: 'pointer',
                  }}
                >
                  x
                </button>
              </div>
            )}
            {!image && (
              <label
                htmlFor="imageUpload"
                className="d-flex justify-content-center align-items-center bg-light border rounded"
                style={{
                  width: '200px',
                  height: '200px',
                  cursor: 'pointer',
                  border: '2px dashed #6c757d',
                }}
              >
                <span className="fs-3 text-muted">+</span>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
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