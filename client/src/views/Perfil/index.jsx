import React from 'react'
import './stylllo.css';
import foto from "./img/dawdawd.png"



function Perfil() {
  return (
    <div className="container_geral">
      <div className="container_perfil">
        <div className="barracima">
          <h1>Hive</h1>
          <h2>Anuncie uma republica</h2>
        </div>
        <div className="img">
          <div className="img_pt1">
            <img src={foto} alt="" />
            <div className="nome1">
              <h1>REBECCA</h1>
              <h2>estudante</h2>
            </div>
          </div>
          <div className="img_pt2">
            <div className='agua'>AGUA</div>
            <div className='pedra'>PEDRA</div>
            <div className='fogo'>FOGO</div>
          </div>
        </div>
        <div className="infos">
        </div>
      </div>
      <div className="container_texto">
        <div className="name_texto">
          <h1>REBECCA AMORIM MENDES</h1>
          <p><b><i>ELA/DELA</i></b></p>
        </div>
        <div className="descricao_texto">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ullam dignissimos pariatur, vitae placeat alias, in unde aliquid ad autem recusandae optio voluptates eum obcaecati culpa consequatur dolor nam distinctio?</p>
        </div>
        <hr className='ks' />
        <div className="caixa">
          <div className="caixa_music">
          </div>
          <div className="caixa_texto">
            <div className="box1">IDADE:</div>
            <div className="box2">IDIOMAS:</div>
            <div className="box3">MORA EM:</div>
            <div className="box4">STATUS SOCIAL:</div>
          </div>
        </div>
        <hr />
      </div>

    </div>

  )
}

export default Perfil