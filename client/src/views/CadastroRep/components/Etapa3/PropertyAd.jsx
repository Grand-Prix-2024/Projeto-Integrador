import React, { useState, useEffect } from 'react';

const PropertyAd = ({ objetoRepublica = {}, setObjetoRepublica }) => {
  // Inicializa os estados com os valores de `objetoRepublica` ou valores padrão
  const [titulo, setTitulo] = useState(objetoRepublica.titulo || '');
  const [images, setImages] = useState(objetoRepublica.images || []);
  const [preco, setPreco] = useState(objetoRepublica.preco || 70);

  useEffect(() => {
    if (setObjetoRepublica) {
      setObjetoRepublica((prevObjeto) => ({
        ...prevObjeto,
        titulo,
        images,
        preco,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || preco <= 0 || images.length < 2) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('preco', preco);
    images.forEach((image, index) => {
      formData.append('imagens', image);
    });

    try {
      const resposta = await fetch(`${process.env.REACT_APP_BACKEND}/republicas`, {
        method: 'POST',
        body: formData,
      });

      if (!resposta.ok) {
        console.error('Erro ao cadastrar a república');
        alert('Erro ao cadastrar. Tente novamente.');
      } else {
        console.log('República cadastrada com sucesso');
        alert('República cadastrada com sucesso!');
        setTitulo('');
        setPreco(70);
        setImages([]);
        setObjetoRepublica({
          ...objetoRepublica,
          titulo: '',
          preco: 70,
          images: [],
        });
      }
    } catch (error) {
      console.error('Erro ao cadastrar a república', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded shadow bg-warning"
        style={{ width: '100%', maxWidth: '800px' }}
      >
        <h2 className="text-center mb-4">Cadastro de Propriedade</h2>

        {/* Área para adicionar fotos */}
        <div className="mb-4">
          <h6>Adicione fotos do seu espaço</h6>
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
            <h6>Nome do anúncio</h6>
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
            <h6>Valor</h6>
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
      </form>
    </div>
  );
};

export default PropertyAd;
