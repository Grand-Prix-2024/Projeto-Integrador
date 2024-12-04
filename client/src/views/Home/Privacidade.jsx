import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from '../../components/Navbar';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <Container className="mt-5">
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
                                    </ul>
                                </p>

                                <h5>2. Uso dos Dados Pessoais</h5>
                                <p>
                                    Os dados coletados são utilizados para:
                                    <ul>
                                        <li>Processar e confirmar reservas ou solicitações</li>
                                        <li>Enviar informações sobre serviços, novidades e ofertas</li>
                                        <li>Melhorar a experiência de navegação e personalizar o conteúdo do site</li>
                                        <li>Realizar análises para aprimorar nossos serviços</li>
                                        <li>Cumprir com obrigações legais e regulatórias</li>
                                    </ul>
                                </p>

                                <h5>3. Compartilhamento de Dados</h5>
                                <p>
                                    Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir com obrigações legais ou em casos de parcerias específicas para a prestação de serviços (como plataformas de pagamento).
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
                                    Você tem o direito de acessar, corrigir, excluir ou bloquear suas informações pessoais a qualquer momento. Se desejar exercer esses direitos, entre em contato conosco através dos canais disponíveis no site.
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
                                    <Button className="custom-button" href="/" size="lg">
                                        Voltar para o Início
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
          color: #000; /* Para garantir que o texto seja legível */
        }

        .custom-button:hover {
          background-color: #d4b200; /* Efeito hover para o botão */
          border-color: #d4b200;
        }

        .custom-button:focus {
          box-shadow: none; /* Remover o contorno do botão ao focar */
        }
      `}</style>
            </Container >
        </>
    );
}

export default PrivacyPolicy;
