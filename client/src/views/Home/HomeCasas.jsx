    import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';

function Homecasas() {
    const imageStyle = {
        border: '2px solid #FFE34C', // Nova cor amarela
        borderRadius: '8px', // Bordas mais arredondadas para um toque mais suave
        transition: 'transform 0.3s ease', // Transição suave para o efeito
    };

    const buttonStyle = {
        backgroundColor: '#FFE34C', // Nova cor amarela
        borderColor: '#FFE34C', // Para borda consistente
        color: 'black', // Texto em preto para contraste
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="container mt-5">
                    {/* Título */}
                    <div className="row mb-4">
                        <div className="col-lg-12">
                            <h1 className="text-start text-dark mb-3">República 1</h1>
                            <p className="text-muted"><i className="bi bi-geo-alt-fill"></i> Maria Ortiz - Vitória, ES</p>
                        </div>
                    </div>

                    {/* Imagens organizadas */}
                    <div className="row g-4">
                        {/* Imagem maior à esquerda */}
                        <div className="col-lg-7">
                            <img
                                src="https://a0.muscache.com/im/pictures/hosting/Hosting-904219153097374942/original/b12d0e7f-8510-44d9-96ed-8a09c49f6449.jpeg?im_w=1200&im_format=avif"
                                alt="Foto maior"
                                className="img-fluid rounded shadow-sm"
                                style={{ ...imageStyle, height: '450px', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Quatro imagens menores à direita */}
                        <div style={{ marginTop: '40px' }} className="col-lg-5">
                            <div className="row g-4">
                                <div className="col-6">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTA0MjE5MTUzMDk3Mzc0OTQy/original/abde2381-e8e8-4432-84e5-359d5b8ae865.jpeg?im_w=1440&im_format=avif"
                                        alt="Foto menor 1"
                                        className="img-fluid rounded shadow-sm"
                                        style={{ ...imageStyle, height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="col-6">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTA0MjE5MTUzMDk3Mzc0OTQy/original/d5d50c5e-58c9-4df9-be0b-eb75e44c73f0.jpeg?im_w=1440&im_format=avif"
                                        alt="Foto menor 2"
                                        className="img-fluid rounded shadow-sm"
                                        style={{ ...imageStyle, height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="col-6">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTA0MjE5MTUzMDk3Mzc0OTQy/original/f9a5c1d0-75e5-4b60-acb5-56d8362fb8b9.jpeg?im_w=1440&im_format=avif"
                                        alt="Foto menor 3"
                                        className="img-fluid rounded shadow-sm"
                                        style={{ ...imageStyle, height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="col-6">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/hosting/Hosting-904219153097374942/original/05473c48-e87a-4e2a-905f-f6ee15ff62e6.jpeg?im_w=1200&im_format=avif"
                                        alt="Foto menor 4"
                                        className="img-fluid rounded shadow-sm"
                                        style={{ ...imageStyle, height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detalhes da república */}
                    <div className="d-flex align-items-center text-muted mb-4 pt-4">
                        <i className="bi bi-people-fill me-3"></i>
                        <span className="me-3"> 👥3 Vagas</span>
                        <span className="me-3">1 Quarto</span>
                        <span className="me-3">2 Camas</span>
                        <span>1 Banheiro compartilhado</span>
                    </div>

                    {/* Descrição e informações */}
                    <div className="row mt-5">
                        <div className="col-lg-8">
                            <div className="p-3 rounded shadow-sm"
                                style={{ backgroundColor: '#f7f5f5', color: '#1a1717', maxWidth: '580px' }}>
                                <p className="mb-0">
                                    <p>Descrição:</p>
                                    Nossa república é um espaço acolhedor e dinâmico, onde a convivência harmoniosa é a base para o nosso dia a dia. Somos majoritariamente homens, mas temos um ambiente aberto e inclusivo, onde aceitamos também mulheres e pessoas não-binárias.
                                    Buscamos pessoas responsáveis e respeitosas, com o intuito de criar um lar compartilhado, em que todos se sintam à vontade para viver, estudar e crescer juntos.
                                    Se você procura um lugar tranquilo, com boa convivência e respeito mútuo, nossa república é a escolha certa!
                                </p>
                            </div>
                        </div>

                        {/* Informações de preço e anfitriões */}
                        <div className="col-lg-4">
                            <div className="card shadow border-0 p-4">
                                {/* Preço */}
                                <div className="text-center mb-4">
                                    <h3 className="mb-1">R$ 70,00/mês</h3>
                                    <p className="text-muted">a negociar</p>
                                    <button className="btn w-100 py-2" style={buttonStyle}>Negociar</button>
                                </div>

                                <hr />

                                {/* Anfitriões */}
                                <div>
                                    <p className="text-muted mb-2"><strong>Anfitrião:</strong></p>
                                    <div className="d-flex align-items-center mb-3">
                                        <img
                                            src="https://img.a.transfermarkt.technology/portrait/big/68290-1697056482.png?lm=1" // URL da foto do Emanoeles
                                            alt="Emanoeles"
                                            className="rounded-circle me-3"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <p className="mb-0">Emanoel Júnior</p>
                                    </div>

                                    <hr />

                                    <p className="text-muted mb-2"><strong>Anfitriã:</strong></p>
                                    <div className="d-flex align-items-center mb-3">
                                        <img
                                            src="https://www.famousbirthdays.com/faces/marquezine-bruna-image.jpg"
                                            className="rounded-circle me-3"
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <p className="mb-0">Anna Julya Marquezine</p>
                                    </div>
                                </div>

                                <hr />

                                {/* Botão contactar */}
                                <button className="btn w-100 py-2" style={buttonStyle}>Contactar</button>
                            </div>
                        </div>
                    </div>

                    {/* Comentários */}
                    <div className="row mt-5">
                        <h4 className="mb-4">Comentários:</h4>
                        <div className="col-lg-12">
                            <div className="card p-4 shadow-sm">
                                <div className="d-flex align-items-center mb-4">
                                    <img
                                        src="https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.somosfanaticos.fans%2Fjpg%2Fbr%2Ffull%2FSFBR_20230703_SFBR_17195_Mercado-da-bola-Gabigol-recusa-proposta-da-Arabia-Saudita-e-prioriza-acerto-com-outro-grande-clube-Flamengo-topa-vender-scaled-e1687952940315.jpg&width=1200&height=740"
                                        className="rounded-circle me-3"
                                        style={{
                                            width: '45px',
                                            height: '45px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div>
                                        <p className="mb-0"><strong>Abel</strong></p>
                                        <p className="text-muted small mb-0">Morou há 1 ano</p>
                                    </div>
                                </div>
                                <p className="text-muted">
                                    Fui acolhido com muito carinho, e a república se tornou um ambiente de acolhimento e conforto. Os anfitriões são excepcionais!


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homecasas;
