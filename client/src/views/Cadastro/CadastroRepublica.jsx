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
                <div class="contador">
                    <h4>
                        Moradores
                        <button id="menos">-</button>
                        <span id="quantidade">0</span>
                        <button id="mais">+</button>
                    </h4>
                    <h4>
                        Quartos
                        <button id="menos">-</button>
                        <span id="quantidade">0</span>
                        <button id="mais">+</button>
                    </h4>
                    <h4>
                        Banheiros
                        <button id="menos">-</button>
                        <span id="quantidade">0</span>
                        <button id="mais">+</button>
                    </h4>
                    <h4>
                        Camas
                        <button id="menos">-</button>
                        <span id="quantidade">0</span>
                        <button id="mais">+</button>
                    </h4>
                </div>
                <div>
                    <h3>Etapa 2</h3>
                    <h1>Faça sua república se destacar</h1>
                    <p>Adcione elementos para tornar sua acomodação mais interessante</p>

                    <h2>Informe o que sua moradinha tem a mais para oferecer</h2>
                    <button>
                        Wi-fi
                        <i></i> {/* icone */}
                    </button>
                    <button>
                        Televisão
                        <i></i> {/* icone */}
                    </button>
                    <button>
                        Cozinha
                        <i></i> {/* icone */}
                    </button>
                    <br></br>
                    <button>
                       Ar-condicionado
                        <i></i> {/* icone */}
                    </button>
                    <button>
                        Canto de estudo
                        <i></i> {/* icone */}
                    </button>
                    <button>
                        Chuveiro-elétrico
                        <i></i> {/* icone */}
                    </button>

                    <h2>Informe comodidades da sua moradia</h2>
                    <button>
                        Piscina
                        <i></i> {/* icone */}
                    </button>
                    <button>
                        Churrasqueira
                        <i></i> {/* icone */}
                    </button>
                    <button>
                        Academia
                        <i></i> {/* icone */}
                    </button>
                    <br></br>
                    <button>
                       Varanda
                        <i></i> {/* icone */}
                    </button>
                    <button>
                        Jardim
                        <i></i> {/* icone */}
                    </button>
                    <button>
                        Banheira
                        <i></i> {/* icone */}
                    </button>

                    <h2>Itens de seguranca</h2>
                    <button>
                        Extintor
                        <i></i> {/* icone */}
                    </button>
                    <button>
                        Cameras
                        <i></i> {/* icone */}
                    </button>
                    <button>
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
                    <input type="text" placeholder='Ex.: União Twink'/>
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
                    <input type="text" placeholder='CEP'/> <br />
                    <input type="text" placeholder='Endereço'/> <br />
                    <input type="text" placeholder='Bairro'/> <br />
                    <input type="text" placeholder='Cidade/Município'/> <br />
                    <input type="text" placeholder='Estadual'/> <br />
                    <input type="text" placeholder='Apartamento'/> <br />
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