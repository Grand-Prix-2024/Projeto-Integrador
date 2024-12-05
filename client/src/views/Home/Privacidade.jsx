import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from '../../components/Navbar';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <Container className="mt-5" style={{ paddingBottom: '3rem' }}>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center mb-4">Termo de Privacidade - HIVE</Card.Title>

                                <h5>1. Coleta de Dados Pessoais</h5>
                                <p>
                                    Ao utilizar nosso site, podemos coletar as seguintes informações pessoais:
                                    <ul>
                                        <li>Nome completo</li>
                                        <li>E-mail</li>
                                        <li>Número de telefone</li>
                                        <li>Data de Nascimento</li>
                                        <li>CPF</li>
                                    </ul>
                                </p>

                                <h5>2. Uso dos Dados Pessoais</h5>
                                <p>
                                    Os dados coletados são utilizados para:
                                    <ul>
                                        <li>Mostrar informações sobre serviços, novidades e ofertas</li>
                                        <li>Melhorar a experiência de navegação e personalizar o conteúdo do site</li>
                                        <li>Realizar análises para aprimorar nossos serviços</li>
                                        <li>Cumprir com obrigações legais e regulatórias</li>
                                    </ul>
                                </p>

                                <h5>3. Compartilhamento de Dados</h5>
                                <p>
                                    Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir com obrigações legais.
                                </p>

                                <h5>4. Segurança dos Dados</h5>
                                <p>
                                    Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acessos não autorizados, uso indevido ou alteração. No entanto, nenhum método de transmissão ou armazenamento eletrônico é 100% seguro, e não podemos garantir a segurança absoluta dos dados.
                                </p>

                                <h5>5. Cookies</h5>
                                <p>
                                    Utilizamos cookies para melhorar a experiência do usuário, analisar o tráfego do site e oferecer conteúdos personalizados. Os cookies são pequenos arquivos armazenados no seu dispositivo que nos permitem reconhecer sua navegação. Você pode configurar seu navegador para desativar os cookies, mas isso pode afetar a funcionalidade do site.
                                </p>

                                <h5>6. Seus Direitos</h5>
                                <p>
                                    Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Se desejar exercer esses direitos, entre em contato conosco através dos canais disponíveis no site.
                                </p>

                                <h5>7. Alterações no Termo de Privacidade</h5>
                                <p>
                                    Este Termo de Privacidade pode ser atualizado periodicamente. As alterações serão publicadas nesta página com a data da última atualização. Recomendamos que você consulte regularmente para estar ciente das mudanças.
                                </p>

                                <h5>8. Contato</h5>
                                <p>
                                    Caso tenha dúvidas sobre este Termo de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco por meio do e-mail: <a href="mailto:contato@hive.com">contato@hive.com</a>.
                                </p>

                                <footer className="text-center mt-4">
                                    <small><strong>Última atualização:</strong> 12/12/2024</small>
                                </footer>

                                <div className="text-center mt-4">
                                    <Button className="custom-button" href="/" size="sm">
                                        Voltar para a Página Inicial
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <style jsx>{`
                    .custom-button {
                        background-color: #FFE34C;
                        border-color: #FFE34C;
                        color: #000;
                        padding: 0.4rem 0.8rem; /* Reduzindo o tamanho do botão */
                        font-size: 0.85rem; /* Ajustando o tamanho do texto */
                    }

                    .custom-button:hover {
                        background-color: #d4b200;
                        border-color: #d4b200;
                    }

                    .custom-button:focus {
                        box-shadow: none;
                    }
                `}</style>
            </Container>

            <footer className="text-center py-3 border-top" style={{ backgroundColor: '#FFE34C', marginTop: 'auto' }}>
                <Container className="d-flex justify-content-between align-items-center">
                    <div style={{ color: '#000' }}>
                        © 2024 HIVE{' '}
                        <a href="#" style={{ color: '#000' }}>Termos</a> ·{' '}
                        <a href="#" style={{ color: '#000' }}>Informações do site</a>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-globe me-2" style={{ color: '#000' }}></i> Português (BR)
                        <i className="bi bi-currency-dollar mx-2" style={{ color: '#000' }}></i> BRL
                        <a href="#" className="ms-2" style={{ color: '#000' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="ms-2" style={{ color: '#000' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="ms-2" style={{ color: '#000' }}><i className="bi bi-instagram"></i></a>
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default PrivacyPolicy;
