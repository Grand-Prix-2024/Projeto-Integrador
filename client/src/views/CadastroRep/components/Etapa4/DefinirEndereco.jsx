import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const DefinirEndereco = ({ objetoRepublica, setObjetoRepublica }) => {
  return (
    <Container className="mt-4 centered-form">
      <Form>
        <Form.Group className="mb-3" controlId="formCountry">
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            placeholder="País"
            value={objetoRepublica.pais}
            onChange={(e) => setObjetoRepublica({ ...objetoRepublica, pais: e.target.value })}
            required
          />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCEP">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                type="text"
                placeholder="CEP"
                value={objetoRepublica.cep}
                onChange={(e) => setObjetoRepublica({ ...objetoRepublica, cep: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formEndereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Endereço"
                value={objetoRepublica.endereco}
                onChange={(e) => setObjetoRepublica({ ...objetoRepublica, endereco: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBairro">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bairro"
                value={objetoRepublica.bairro}
                onChange={(e) => setObjetoRepublica({ ...objetoRepublica, bairro: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCidade">
              <Form.Label>Cidade/Município</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cidade/Município"
                value={objetoRepublica.cidade}
                onChange={(e) => setObjetoRepublica({ ...objetoRepublica, cidade: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Estado"
                value={objetoRepublica.estado}
                onChange={(e) => setObjetoRepublica({ ...objetoRepublica, estado: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formApartamento">
              <Form.Label>Apartamento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apartamento"
                value={objetoRepublica.apto}
                onChange={(e) => setObjetoRepublica({ ...objetoRepublica, apto: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <h5>Confirme pra gente</h5>
        <p>Utilize sua localização em tempo real para definir</p>
        <Form.Check
          type="switch"
          id="locationSwitch"
          label=""
          className="mb-3"
        />
        <div className="map-container mb-3" style={{ height: "300px", backgroundColor: "#f5f5f5", border: "1px solid #ddd" }}>
          <p className="text-center pt-5">Mapa interativo aqui</p>
        </div>
      </Form>

      <style>{`
        /* Estilos para centralizar o formulário e definir seu tamanho */
        .centered-form {
          max-width: 800px;         /* Largura fixa */
        }

        /* Estilo das labels */
        .form-label {
          font-weight: 600;          /* Fonte mais forte */
          font-size: 1.1rem;         /* Tamanho de fonte maior */
          color: #333;               /* Cor escura para contraste */
          margin-bottom: 0.5rem;     /* Espaço abaixo da label */
        }
      `}</style>
    </Container>
  );
};

export default DefinirEndereco;
