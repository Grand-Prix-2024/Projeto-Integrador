import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

const DetalhesDaEmpresa = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="content-wrapper d-flex flex-column min-vh-100">
                <Navbar />
                <Container className="mt-5 mb-4 flex-grow-1">
                    <Row className="justify-content-center">
                        <Col md={8} lg={6}>
                            <Card>
                                <Card.Header className="text-center">
                                    <h2>Informações da Plataforma</h2>
                                </Card.Header>
                                <Card.Body>
                                    <p>
                                        O Unisport é uma plataforma digital dedicada à divulgação de projetos sociais. Para
                                        projetos estabelecidos no Brasil.
                                    </p>
                                    <h5 className="mb-3">Unisport Plataforma Digital Ltda.</h5>
                                    <p>Av. Marechal Mascarenhas de Moraes, 2235</p>
                                    <p>CEP: 29052-121 - Bento Ferreira</p>
                                    <p>Vitória - ES - Brasil</p>
                                    <p><strong>CNPJ/ME:</strong> 35.297.604/0001-08</p>
                                    <h6>Entre em contato conosco:</h6>
                                    <p>
                                        <strong>E-mail:</strong>{' '}
                                        <a href="mailto:contato@hive.com" className="text-decoration-none">
                                            contato@unisport.com
                                        </a>
                                    </p>
                                </Card.Body>
                            </Card>
                            {/* Botão fora da caixa */}
                            <div className="text-center mt-4">
                                <Button
                                    href="/"
                                    size="sm"
                                    className="custom-button"
                                >
                                    Voltar para a Página Inicial
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className="text-center py-3 border-top" style={{ backgroundColor: '#78EB78', marginTop: 'auto' }}>
                <Container className="d-flex justify-content-between align-items-center">
                    <div style={{ color: '#000' }}>
                        © 2025 Unisport{' '}
                        <a href="/privacidade" style={{ color: '#000' }}>Privacidade</a> ·{' '}
                        <a href="/termos" style={{ color: '#000' }}>Termos</a> {' '}
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-globe me-2" style={{ color: '#000' }}></i> Português (BR)
                        <i className="bi bi-currency-dollar mx-2" style={{ color: '#000' }}></i> BRL
                        <a href="https://www.instagram.com/unisport" className="ms-2" style={{ color: '#000' }} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </Container>
            </footer>


            {/* Estilos do botão */}
            <style jsx>{`
                .custom-button {
                    background-color: #78EB78;
                    border-color: #78EB78;
                    color: #000;
                    padding: 0.4rem 0.8rem; /* Reduzindo o tamanho do botão */
                    font-size: 0.85rem; /* Ajustando o tamanho do texto */
                }

                .custom-button:hover {
                    background-color: #78EB78;
                    border-color: #78EB78;
                }

                .custom-button:focus {
                    box-shadow: none;
                }
            `}</style>
        </>
    );
};

export default DetalhesDaEmpresa;
