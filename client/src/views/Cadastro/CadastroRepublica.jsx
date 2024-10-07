import React from 'react'
import './cadastroRepublica.css'

function CadastroRepublica() {
    return (
        <div>
            <div>
                <h3>Etapa 1</h3>
                <h1>Informe sobre sua acomodação</h1>
                <h2>Escolha qual melhor descreve seu espaço</h2>
                <button>Casa</button> <button>Apartamento</button>
                <h2>Distribuição oferecida aos moradores</h2>
                <div>
                    <button>
                        <h4>1 Quarto</h4>
                        <p>O morador tem um quarto só para ele</p>
                    </button>
                </div>
                <div>
                    <button>
                        <h4>1 Quarto Compartilhado</h4>
                        <p>O morador dorme em um quarto que pode ser compartilhado com outras pessoas</p>
                    </button>
                </div>
                
                <h2>Compartilhe mais informações essenciais</h2>
                {/* Moradores */}
                <div class="info-container">
                    <span class="label">Moradores</span>
                    <button class="btnQtd" onclick="updateQuantidade('moradores', 1)">+</button>
                    <span id="moradores" class="quantidade">3</span>
                    <button class="btnQtd" onclick="updateQuantidade('moradores', -1)">-</button>
                </div>

                {/* Quartos */}
                <div class="info-container">
                    <span class="label">Quartos</span>
                    <button class="btnQtd" onclick="updateQuantidade('quartos', 1)">+</button>
                    <span id="quartos" class="quantidade">2</span>
                    <button class="btnQtd" onclick="updateQuantidade('quartos', -1)">-</button>
                </div>

                {/* Banheiros */}
                <div class="info-container">
                    <span class="label">Banheiros</span>
                    <button class="btnQtd" onclick="updateQuantidade('banheiros', 1)">+</button>
                    <span id="banheiros" class="quantidade">1</span>
                    <button class="btnQtd" onclick="updateQuantidade('banheiros', -1)">-</button>
                </div>

                {/* Camas */}
                <div class="info-container">
                    <span class="label">Camas</span>
                    <button class="btnQtd" onclick="updateQuantidade('camas', 1)">+</button>
                    <span id="camas" class="quantidade">4</span>
                    <button class="btnQtd" onclick="updateQuantidade('camas', -1)">-</button>
                </div>
                
                <div>
                    <h3>Etapa 2</h3>
                    <h1>Faça sua república se destacar</h1>
                    <p>Adcione elementos para tornar sua acomodação mais interessante</p>

                    <h2>Informe o que sua moradinha tem a mais para oferecer</h2>
                    <button class="btn">
                        Wi-fi
                        <i></i> {/* icone */}
                    </button>
                    <button class="btn">
                        Televisão
                        <i></i> {/* icone */}
                    </button>
                    <button class="btn">
                        Cozinha
                        <i></i> {/* icone */}
                    </button>
                    <br></br>
                    <button class="btn">
                        Ar-condicionado
                        <i></i> {/* icone */}
                    </button>
                    <button class="btn">
                        Canto de estudo
                        <i></i> {/* icone */}
                    </button>
                    <button class="btn">
                        Chuveiro-elétrico
                        <i></i> {/* icone */}
                    </button>

                    <h2>Informe comodidades da sua moradia</h2>
                    <button class="btn">
                        Piscina
                        <i></i> {/* icone */}
                    </button>
                    <button class="btn">
                        Churrasqueira
                        <i></i> {/* icone */}
                    </button>
                    <button class="btn">
                        Academia
                        <i></i> {/* icone */}
                    </button>
                    <br></br>
                    <button class="btn">
                        Varanda
                        <i></i> {/* icone */}
                    </button>
                    <button class="btn">
                        Jardim
                        <i></i> {/* icone */}
                    </button>
                    <button class="btn">
                        Banheira
                        <i></i> {/* icone */}
                    </button>

                    <h2>Itens de seguranca</h2>
                    <button class="btn">
                        Extintor
                        <i></i> {/* icone */}
                    </button>
                    <button class="btn">
                        Cameras
                        <i></i> {/* icone */}
                    </button>
                    <button class="btn">
                        Alarmes
                        <i></i> {/* icone */}
                    </button>
                    <p>Câmeras de segurança que monitoram espaços internos não são permitidas, mesmo que estejam desligadas. É obrigatório informar sobre a presença de todas as câmeras de segurança na parte externa.</p>
                </div>
                <div>
                    <h3>Etapa 3</h3>
                    <h1>Vamos preparar seu anúncio</h1>
                    <p>Montar como seu anuncio vai aparecer para os interessados </p>
                    <h2>Adcione fotos do seu espaço</h2>
                    <p>imagens da faixada, do interior, quartos etc</p>
                    <div>
                        {/* conteiners de fotos */}
                    </div>
                    <h2>Nomeie sua moradia para o anúncio</h2>
                    <p>use sua criatividade!</p>
                    <input type="text" placeholder='Ex.: União Twink' />
                    <h2>Determine seu valor</h2>
                    <p>você podera alterar quando quiser</p>
                    <h1>R$ <input type="number" placeholder='70,00' /></h1>
                    <p>Para o morador o valor saira por R$ 75,63</p>
                </div>
                <div>
                    <h3>Etapa 4</h3>
                    <h1>Defina seu endereço</h1>
                    <p>configure a localizacao da acomodacao para ser encontrada.
                        os detalhes seram revelados apenas depois da negociacao</p>

                    <form action=""><input type="text" placeholder='País' /></form>
                    <br />
                    <form action="">
                        <input type="text" placeholder='CEP' /> <br />
                        <input type="text" placeholder='Endereço' /> <br />
                        <input type="text" placeholder='Bairro' /> <br />
                        <input type="text" placeholder='Cidade/Município' /> <br />
                        <input type="text" placeholder='Estadual' /> <br />
                        <input type="text" placeholder='Apartamento' /> <br />
                    </form>
                </div>
                <div>
                    <h1>Confirme pra gente</h1>
                    <p>utilize sua localizacao em tempo real para definir </p>

                    <button type="submit">Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default CadastroRepublica