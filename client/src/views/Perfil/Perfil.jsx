import React from 'react';
import Navbar from '../../components/Navbar';
import './styles.module.css'
import { Card, Button, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

function Perfil (){
  return (
    
    <div className="">
      <Navbar/>
      <Card className="p-4 shadow-sm">
        <Row>
          {/* Coluna esquerda */}
          <Col md={4} className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Foto de Perfil"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px' }}
            />
            <h4>Rebecca</h4>
            <p>Estudante</p>
            <p>ES, Direito, UFES</p>
            <ListGroup className="mb-3">
              <ListGroupItem>
                <strong>E-mail:</strong> <br />
                kalebe@yahoo.com
              </ListGroupItem>
              <ListGroupItem>
                <strong>Telefone:</strong> <br />
                27 9996-6031
              </ListGroupItem>
              <ListGroupItem>
                <strong>Rede:</strong> <br />
                @k.moreira
              </ListGroupItem>
            </ListGroup>
            <Button variant="danger">Denunciar conta</Button>
          </Col>

          {/* Coluna direita */}
          <Col md={8}>
            <h2>REBECCA AMORIM MENDES</h2>
            <p><strong>Ela/Dela</strong></p>
            <Button variant="warning" className="mb-3">Editar</Button>

            <p>
              Da simplicidade do interior para os horizontes ilimitados da capital.<br />
              Deixei para trás os campos tranquilos do interior para mergulhar no estudo do Direito...
            </p>

            <p>Me chamo Becca e trilho meu caminho na UFES com o objetivo firme de me tornar uma advogada criminalista.</p>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <strong>🔊 Magnetic</strong>
              </div>
              <div>
                <span>20 anos</span> | <span>Idiomas: Italiano</span> | <span>Solteira</span>
              </div>
            </div>

            <h5>Avaliações de Rebecca:</h5>
            <div className="d-flex">
              <Card className="me-3" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Raniery</Card.Title>
                  <Card.Text>
                    "Clara, acrescentou muito no convívio da república! Teremos saudades."
                  </Card.Text>
                  <footer className="blockquote-footer">Outubro 2022</footer>
                </Card.Body>
              </Card>

              <Card className="me-3" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Katarina</Card.Title>
                  <Card.Text>
                    "Uma ótima colega. Muito calma e organizada. Adoramos sua presença!"
                  </Card.Text>
                  <footer className="blockquote-footer">Maio 2023</footer>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Perfil;