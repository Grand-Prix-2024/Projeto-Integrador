import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from '../../components/Navbar';  // Certifique-se de que a Navbar esteja corretamente importada

const TermosDeServico = () => {
    return (
        <>
            <Navbar /> {/* Agora a Navbar está incluída corretamente */}
            <Container className="mt-5" style={{ paddingBottom: '3rem' }}>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card>
                            <Card.Header>
                                <h2>Termos de Serviço - Unisport</h2>
                                <p>Data de vigência: 21/11/2025</p>
                            </Card.Header>
                            <Card.Body>
                                <h5>1. Aceitação dos Termos</h5>
                                <p>
                                    Ao acessar ou utilizar o Unisport, você concorda em cumprir estes Termos de Serviço e todas as políticas
                                    relacionadas. Caso não concorde com qualquer um dos termos aqui descritos, por favor, não utilize os nossos
                                    serviços.
                                </p>

                                <h5>2. Modificações dos Termos</h5>
                                <p>
                                    O Unisport se reserva o direito de modificar, alterar ou atualizar estes Termos de Serviço a qualquer momento.
                                    Quaisquer alterações serão publicadas nesta página, e a data de vigência será atualizada. Recomendamos que
                                    você revise periodicamente os Termos de Serviço.
                                </p>

                                <h5>3. Uso do Site e dos Serviços</h5>
                                <ul>
                                    <li>O Unisport oferece uma plataforma para facilitar a comunicação entre estudantes e donos de repúblicas universitárias.</li>
                                    <li>Você deve ser maior de idade ou ter o consentimento de um responsável legal para utilizar nossos serviços.</li>
                                    <li>Você concorda em usar a plataforma de maneira legal e em conformidade com as normas locais.</li>
                                    <li>É proibido compartilhar informações falsas, fraudulentas ou enganosas, assim como comportamentos abusivos ou prejudiciais para outros usuários.</li>
                                </ul>

                                <h5>4. Registro e Conta de Usuário</h5>
                                <p>
                                    Para utilizar determinados serviços do Unisport, você pode ser solicitado a criar uma conta. Ao criar uma conta, você deve fornecer informações precisas, completas e atualizadas.
                                </p>
                                <p>
                                    Você é responsável por manter a confidencialidade de sua senha e por todas as atividades realizadas com sua conta.
                                </p>

                                <h5>5. Privacidade</h5>
                                <p>
                                    A nossa Política de Privacidade detalha como coletamos, usamos e protegemos seus dados pessoais. Ao utilizar os nossos serviços, você concorda com a coleta e o uso de seus dados conforme descrito na Política de Privacidade.
                                </p>

                                <h5>6. Responsabilidade do Usuário</h5>
                                <ul>
                                    <li>Você é responsável por todas as interações e negociações realizadas com outros usuários através da plataforma.</li>
                                    <li>O Unisport não se responsabiliza por acordos ou disputas entre os usuários, nem pela qualidade ou segurança das repúblicas ou das acomodações oferecidas.</li>
                                    <li>O Unisport não se responsabiliza por danos causados por terceiros.</li>
                                </ul>

                                <h5>7. Propriedade Intelectual</h5>
                                <p>
                                    O conteúdo e os materiais disponíveis no Unisport, incluindo textos, imagens, logotipos, design e software, são protegidos por direitos autorais e outras leis de propriedade intelectual.
                                </p>

                                <h5>8. Limitação de Responsabilidade</h5>
                                <p>
                                    O Unisport não se responsabiliza por danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da incapacidade de usar os serviços.
                                </p>

                                <h5>9. Rescisão de Conta</h5>
                                <p>
                                    O Unisport pode suspender ou encerrar sua conta a qualquer momento, sem aviso prévio, caso você viole qualquer um destes Termos de Serviço.
                                </p>

                                <h5>10. Lei Aplicável</h5>
                                <p>
                                    Estes Termos de Serviço são regidos pelas leis do [país ou estado aplicável]. Quaisquer disputas serão resolvidas pelos tribunais competentes.
                                </p>

                                <h5>11. Contato</h5>
                                <p>
                                    Se você tiver qualquer dúvida ou preocupação sobre estes Termos de Serviço, entre em contato conosco pelo e-mail: <a href="mailto:contato@unisport.com">contato@unisport.com</a>.
                                </p>

                                {/* Colocando o botão diretamente abaixo do conteúdo */}
                                <div className="text-center mt-4">
                                    <Button className="custom-button" href="/" size="sm">
                                        Voltar para a Página Inicial
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <footer className="text-center py-3 border-top" style={{ backgroundColor: '#78EB78', marginTop: 'auto' }}>
                <Container className="d-flex justify-content-between align-items-center">
                    <div style={{ color: '#000' }}>
                        © 2024 HIVE{' '}
                        <a href="/privacidade" style={{ color: '#000' }}>Privacidade</a> ·{' '}
                        <a href="/detalhes" style={{ color: '#000' }}>Informações do site</a>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-globe me-2" style={{ color: '#000' }}></i> Português (BR)
                        <i className="bi bi-currency-dollar mx-2" style={{ color: '#000' }}></i> BRL
                        <a href="#" className="ms-2" style={{ color: '#000' }}><i className="bi bi-instagram"></i></a>
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

export default TermosDeServico;
