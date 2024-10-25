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

        {/* <Botões de seleção: Casa ou Apartamento  */}
        <div class="d-flex justify-content-around my-4">
          {/* Div com flexbox para posicionar os botões de maneira uniforme horizontalmente */}
          <button type="button" class="btn btn-outline-primary">
            {/* Botão estilizado com `btn-outline-primary` para criar um botão com bordas azuis */}
            <i class="bi bi-house">Casa</i> {/*Casa Ícone de casa e texto "Casa"*/}
          </button>
          <button type="button" class="btn btn-outline-primary">
            <i class="bi bi-building">Apartamento</i>  {/*Apartamento  Ícone de prédio e texto "Apartamento"  */}
          </button>
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

          {/* Moradores */}
          <label className="form-label mt-2">Moradores</label>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" id="decreaseMoradores">-</button>
            <input type="text" className="form-control text-center" value={qtd_moradores} onChange={(e) => setQtd_moradores(e.target.value)} />
            <button className="btn btn-outline-secondary" type="button" id="increaseMoradores">+</button>
          </div>

          {/* Quartos */}
          <label className="form-label mt-2">Quartos</label>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" id="decreaseQuartos">-</button>
            <input type="text" className="form-control text-center" value={qtd_quartos} onChange={(e) => setQtd_quartos(e.target.value)} />
            <button className="btn btn-outline-secondary" type="button" id="increaseQuartos">+</button>
          </div>

          {/* Banheiros */}
          <label className="form-label mt-2">Banheiros</label>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" id="decreaseBanheiros">-</button>
            <input type="text" className="form-control text-center" value={qtd_banheiros} onChange={(e) => setQtd_banheiros(e.target.value)} />
            <button className="btn btn-outline-secondary" type="button" id="increaseBanheiros">+</button>
          </div>

          {/* Camas */}
          <label className="form-label mt-2">Camas</label>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" id="decreaseCamas">-</button>
            <input type="text" className="form-control text-center" value={qtd_camas} onChange={(e) => setQtd_camas(e.target.value)} />
            <button className="btn btn-outline-secondary" type="button" id="increaseCamas">+</button>
          </div>

          {/* Botões de ação 
          <a className="btn btn-danger mt-3 float-start" href="#">Cancelar</a>
          <button className="btn btn-warning mt-3 float-end" type="submit">Confirmar</button>*/}
        </form>

        <h5>Etapa 2</h5> {/* Título principal da etapa */}
        <h1>Faça sua república se destacar</h1>
        <p className="text-muted">Adicione elementos pra tornar sua acomodação mais interessante</p>
        <div className="container col-sm-12 col-md-8 col-lg-6 mt-5">

        </div>
        {/* O que sua moradia oferece a mais */}
        <h3 className="text-center fs-2 mt-4">Informe o que sua moradia tem a mais pra oferecer</h3>
        <div className="row mt-3">
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-wifi"></i> Wi-Fi
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-tv"></i> Televisão
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-house-door"></i> Cozinha
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-snow"></i> Ar-condicionado
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-journal-bookmark"></i> Canto de estudo
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-shower"></i> Chuveiro quente
            </button>
          </div>
        </div>

        {/* O que sua moradia oferece a mais */}
        <h3 className="text-center fs-2 mt-4">Informe comodidades da sua moradia</h3>
        <div className="row mt-3">
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-wifi"></i> Piscina
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-tv"></i> Churrasqueira
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-house-door"></i> Academia
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-snow"></i> Varanda
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-journal-bookmark"></i> Jardim
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-shower"></i> Banheira
            </button>
          </div>
        </div>

        {/* O que sua moradia oferece a mais */}
        <h3 className="text-center fs-2 mt-4">Itens de segurança</h3>
        <div className="row mt-3">
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-wifi"></i> Extintor
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-wifi"></i> Câmeras
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-warning w-100 py-3">
              <i className="bi bi-wifi"></i> Alarmes
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormRepublica