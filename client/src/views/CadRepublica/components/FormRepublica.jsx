import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormRepublica({ tipo, handleSubmit, textoBotao, id, titulo }) {
  const navigate = useNavigate();

  const [tipo_republica, setTipo_republica] = useState('');
  const [tipo_distribuicao, setTipo_distribuicao] = useState('');
  const [qtd_moradores, setQtd_moradores] = useState('');
  const [qtd_quartos, setQtd_quartos] = useState('');
  const [qtd_banheiros, setQtd_banheiros] = useState('');
  const [qtd_camas, setQtd_camas] = useState('');
  const [wifi, setWifi] = useState('');
  const [televisao, setTelevisao] = useState('');
  const [cozinha, setCozinha] = useState('');
  const [ar_condicionado, setAr_condicionado] = useState('');
  const [canto_de_estudo, setCanto_de_estudo] = useState('');
  const [chuveiro_quente, setChuveiro_quente] = useState('');
  const [banheira, setBanheira] = useState('');
  const [extintor, setExtintor] = useState('');
  const [camera, setCamera] = useState('');
  const [alarme, setAlarme] = useState('');
  const [piscina, setPiscina] = useState('');
  const [churrasqueira, setChurrasqueira] = useState('');
  const [academia, setAcademia] = useState('');
  const [varanda, setVaranda] = useState('');
  const [jardim, setJardim] = useState('');

  useEffect(() => {
    if (id) {
      baixarRepublicas(id);
      //setTimeout()
    };
  }, [])

  async function baixarRepublicas(id) {
    try {
      const resposta = await fetch(`http://localhost:5000/republicas/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!resposta) {
        throw new Error('Erro ao buscar os republicas');
      } else {
        const respostaJSON = await resposta.json();
        setTipo_republica(respostaJSON.tipo_republica);
        setTipo_distribuicao(respostaJSON.tipo_distribuicao);
        setQtd_moradores(respostaJSON.qtd_moradores);
        setQtd_quartos(respostaJSON.qtd_quartos);
        setQtd_banheiros(respostaJSON.qtd_banheiros);
        setQtd_camas(respostaJSON.qtd_camas);
        setWifi(respostaJSON.wifi);
        setTelevisao(respostaJSON.televisao);
        setCozinha(respostaJSON.cozinha);
        setAr_condicionado(respostaJSON.ar_condicionado);
        setCanto_de_estudo(respostaJSON.canto_de_estudo);
        setChuveiro_quente(respostaJSON.chuveiro_quente);
        setExtintor(respostaJSON.extintor);
        setBanheira(respostaJSON.banheira);
        setCamera(respostaJSON.camera);
        setAlarme(respostaJSON.alarme);
        setPiscina(respostaJSON.piscina);
        setChurrasqueira(respostaJSON.churrasqueira);
        setAcademia(respostaJSON.academia);
        setVaranda(respostaJSON.varanda);
        setJardim(respostaJSON.jardim);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function submit(e) {
    e.preventDefault();
    const republica = {
      tipoRepublica: tipo_republica,
      tipoDistribuicao: tipo_distribuicao,
      qtdMoradores: qtd_moradores,
      qtdQuartos: qtd_quartos,
      banheiros: qtd_banheiros,
      qtdCamas: qtd_camas,
      wifi: wifi,
      televisao: televisao,
      cozinha: cozinha,
      arCondicionado: ar_condicionado,
      cantoDeEstudo: canto_de_estudo,
      chuveiroQuente: chuveiro_quente,
      extintor: extintor,
      banheira: banheira,
      camera: camera,
      alarme: alarme,
      piscina: piscina,
      churrasqueira: churrasqueira,
      academia: academia,
      varanda: varanda,
      jardim: jardim,
      chave: null
    }
    handleSubmit(republica, id);
    navigate(`/gestao_republica/${tipo}`)
  }

  return (
    <>
      <div class="container my-4">
        {/* Contêiner do Bootstrap para centralizar e limitar a largura do conteúdo, com margem vertical de 4 unidades  */}

        {/* Título da página  */}
        <h5>Etapa 1</h5> {/* Título principal da etapa */}
        <h1>Informe sobre sua acomodação</h1> {/*Subtítulo para explicar a ação ao usuário */}

        <div className="row mt-3 justify-content-center">
          <div className="col-3 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-house"></i> Casa
            </button>
          </div>
          <div className="col-3 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-building"></i> Apartamento
            </button>
          </div>
        </div>

        <form onSubmit={submit} className="mt-4">
          {/* Distribuição oferecida aos moradores */}
          <h3 className="fs-5">Distribuição oferecida aos moradores:</h3>

          {/* Opções de quartos */}
          <div className="card mt-3">
            <div className="card-body">
              <h6>1 Quarto</h6>
              <p>O morador tem um quarto só para ele.</p>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h6>1 Quarto compartilhado</h6>
              <p>O morador dorme em um quarto que pode ser compartilhado com outras pessoas.</p>
            </div>
          </div>

          {/* Informações essenciais */}
          <h3 className="fs-5 mt-4">Compartilhe mais informações essenciais:</h3>
          <div>
            
          </div>
          {/* Moradores */}
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="moradores" className="me-5">Moradores</label>
            <div className="input-group" style={{ width: "100px" }}>
              <button className="btn btn-outline-secondary" type="button" onClick={() => diminuir('moradores')}>-</button>
              <input type="number" id="moradores" className="form-control text-center" min="0" value="0" />
              <button className="btn btn-outline-secondary" type="button" onClick={() => aumentar('moradores')}>+</button>
            </div>
          </div>

          {/* Quartos */}
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="moradores" className="me-5">Quartos</label>
            <div className="input-group" style={{ width: "100px" }}>
              <button className="btn btn-outline-secondary" type="button" onClick={() => diminuir('quartos')}>-</button>
              <input type="number" id="moradores" className="form-control text-center" min="0" value="0" />
              <button className="btn btn-outline-secondary" type="button" onClick={() => aumentar('quartos')}>+</button>
            </div>
          </div>

          {/* Banheiros */}
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="moradores" className="me-5">Banheiros</label>
            <div className="input-group" style={{ width: "100px" }}>
              <button className="btn btn-outline-secondary" type="button" onClick={() => diminuir('banheiros')}>-</button>
              <input type="number" id="moradores" className="form-control text-center" min="0" value="0" />
              <button className="btn btn-outline-secondary" type="button" onClick={() => aumentar('banheiros')}>+</button>
            </div>
          </div>

          {/* Camas */}
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="moradores" className="me-5">Camas</label>
            <div className="input-group" style={{ width: "100px" }}>
              <button className="btn btn-outline-secondary" type="button" onClick={() => diminuir('camas')}>-</button>
              <input type="number" id="moradores" className="form-control text-center" min="0" value="0" />
              <button className="btn btn-outline-secondary" type="button" onClick={() => aumentar('camas')}>+</button>
            </div>
          </div>

          {/* Botões de ação 
          <a className="btn btn-danger mt-3 float-start" href="#">Cancelar</a>
          <button className="btn btn-warning mt-3 float-end" type="submit">Confirmar</button> */}
        </form>

        <h5>Etapa 2</h5> {/* Título principal da etapa */}
        <h1>Faça sua república se destacar</h1>
        <p className="text-muted">Adicione elementos pra tornar sua acomodação mais interessante</p>
        <div className="container col-sm-12 col-md-8 col-lg-6 mt-5">

        </div>
        {/* O que sua moradia oferece a mais */}
        <h3 className="text-center fs-2 mt-4">Informe o que sua moradia tem a mais pra oferecer</h3>
        <div className="row mt-3 justify-content-center">
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-wifi"></i> Wi-Fi
            </button>
          </div>
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-tv"></i> Televisão
            </button>
          </div>
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-house-door"></i> Cozinha
            </button>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-snow"></i> Ar-condicionado
            </button>
          </div>
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-journal-bookmark"></i> Canto de estudo
            </button>
          </div>
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-shower"></i> Chuveiro quente
            </button>
          </div>
        </div>

        {/* O que sua moradia oferece a mais */}
        <h3 className="text-center fs-2 mt-4">Informe comodidades da sua moradia</h3>
        <div className="row mt-3 justify-content-center">
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-wifi"></i> Piscina
            </button>
          </div>
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-tv"></i> Churrasqueira
            </button>
          </div>
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-house-door"></i> Academia
            </button>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-snow"></i> Varanda
            </button>
          </div>
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-journal-bookmark"></i> Jardim
            </button>
          </div>
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-shower"></i> Banheira
            </button>
          </div>
        </div>

        {/* O que sua moradia oferece a mais */}
        <h3 className="text-center fs-2 mt-4">Itens de segurança</h3>
        <div className="row mt-3  justify-content-center">
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-wifi"></i> Extintor
            </button>
          </div>
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-wifi"></i> Câmeras
            </button>
          </div>
          <div className="col-2 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-wifi"></i> Alarmes
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
      {/* Cabeçalho da seção */}
      <div>
        <h4>Etapa 3</h4>
        <h2>Vamos preparar seu anuncio</h2>
        <p>Montar como seu anuncio vai aparecer para os interessados</p>
      </div>
      
      {/* Instruções para adicionar fotos */}
      <div className="mt-4">
        <h5>Adicione fotos do seu espaço</h5>
        <p className="text-muted justify-content-center">imagens da fachada, do interior, quartos etc</p>
      </div>

      {/* Grid para os boxes de fotos */}
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="photo-box">+</div>
        </div>
        <div className="col-md-3">
          <div className="photo-box">+</div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-2">
          <div className="photo-box">+</div>
        </div>
        <div className="col-md-2">
          <div className="photo-box">+</div>
        </div>
        <div className="col-md-2">
          <div className="photo-box">+</div>
        </div>
      </div>

      {/* Campo para nomear a moradia */}
      <div className="mt-4">
        <h5>Nomeie sua moradia para o anuncio</h5>
        <p className="text-muted">use sua criatividade!</p>
        <input type="text" className="form-control" placeholder="Ex.: União Twink" />
      </div>

      <div>
        <div className="justify-content-center">
          <h5>Determine seu valor</h5>
          <p>Você poderá alterar quando quiser</p>
        </div>

        <div className="input-group" style={{ width: "100px" }}> 
            <h1>R$</h1>
            <input type="number" />
            <button>edit</button>
        </div>
      </div>

      {/* Estilo inline para os boxes de foto */}
      <style jsx>{`
        .photo-box {
          width: 100%;
          height: 150px;
          background-color: #ffd966;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2em;
          color: #333;
          border: 2px dashed #aaa;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
    </>
  
)
}

export default FormRepublica
