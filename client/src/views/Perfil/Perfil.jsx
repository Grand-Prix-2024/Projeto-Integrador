import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, Button, Image, CardText } from 'react-bootstrap';
import locaPin from './img/locaPin.png';
import chapeuGrad from './img/chapeuGrad.png';
import escola from './img/escola.png';
import lingua from './img/lingua.png';
import coracao from './img/coracao.png';
import casa from './img/casa.png';
import balao from './img/balao.png';




function Perfil() {
  return (
    <>
      <Navbar />
      <Card style={{ width: '500px', height: '350px', padding: '50px', margin: '50px', borderRadius: '20px', borderColor: 'black' }}>
        <Image
          src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2024/09/12114930/rapper-travis-scott-confirmado-atracao-rock-in-rio-scaled-1-620x620.webp" // Substitua pela URL real da imagem de perfil
          roundedCircle
          style={{ width: '200px', height: '200px', marginTop: '-20px' }}
        />
        <Card.Body>
          <Card.Title style={{ marginLeft: '-7px', marginTop: '20px', fontSize: '25px' }} >[object Object]</Card.Title>
          <Card.Subtitle style={{ marginLeft: '26px', fontSize: '17px' }} className="mb-2 text-muted">CEO of Apple</Card.Subtitle>
          <Card.Text style={{ marginLeft: '260px', marginBlockStart: '-230px' }}>
            <div style={{ marginBottom: '35px', fontSize: '18px' }} className=" justify-content-between">
              <img src={locaPin} style={{ width: '25px', height: '25px', marginRight: '15px', marginTop: '-4px' }} />
              <span style={{ fontSize: '17px', }}>ES</span>
            </div>
            <div style={{ marginBottom: '35px', fontSize: '18px' }} className=" justify-content-between">
              <img src={chapeuGrad} style={{ width: '25px', height: '25px', marginRight: '15px', marginTop: '-4px' }} />
              {/* <span style={{ marginLeft: '-30px' }}>2 </span> */}
              <span style={{ fontSize: '17px', }}>Direito</span>
            </div>
            <div style={{ marginBottom: '35px', fontSize: '18px' }} className=" justify-content-between">
              <img src={escola} style={{ width: '25px', height: '25px', marginRight: '15px', marginTop: '-8px' }} />
              {/* <span style={{ marginLeft: '-30px' }}>3 </span> */}
              <span style={{ fontSize: '17px', }}>UFES</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '500px', height: '300px', padding: '20px', margin: '50px', borderRadius: '20px', borderColor: 'black' }}>
        <Card.Body>
          <Card.Title> </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle> */}
          <Card.Text>
            <div style={{ marginBottom: '-30px' }} className="d-flex ">
              <span style={{ marginBottom: '50px' }}>
                <h5>E-MAIL</h5>
                <h6>danielkallebmb@gmail.com</h6>
              </span>
            </div>
            <div className="d-flex ">
              <span style={{ marginBottom: '20px' }}>
                <h5>TELEFONE</h5>
                <h6>(027) 98892-0342</h6>
              </span>
            </div>
            <div className="d-flex ">
              <span>
                <h5>INSTAGRAM</h5>
                <h6>@travisscott</h6>
              </span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Button style={{ margin: '50px', marginTop: '0px' }} variant="btn btn-danger">Denunciar perfil</Button>
      <Card className='position-absolute top-50 start-50"' style={{ width: '800px', height: '400px', marginLeft: '750px', marginBlockStart: '-370px', border: 'none' }}>
        <Card.Text>
          <div>
            <h1>JACQUES BERMAN WEBSTER II</h1>
            <h5 style={{ fontStyle: 'italic' }}>ELE/DELE <Button style={{ margin: '0px', marginTop: '-2px', marginLeft: '25px' }} variant="btn btn-warning">Editar</Button>
            </h5>
            <br />
            <br />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus, quos ipsa voluptatum alias tempore. Tenetur reiciendis omnis ipsa autem,
              ullam expedita mollitia ut dolore sequi commodi vero exercitationem sapiente.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id excepturi exercitationem 
              aspernatur beatae natus pariatur laudantium reiciendis deleniti aut! Id impedit autem sequi maxime provident velit at asperiores incidunt.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ut? Molestias, amet dolorem eveniet, neque numquam possimus non 
              reiciendis est, fugiat mollitia ut maxime? Aliquid nam ipsam praesentium culpa consequatur?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, officia! Cupiditate nulla delectus est quas unde incidunt, architecto aliquam sed officiis 
              totam, consequuntur neque praesentium, quos doloremque esse alias voluptates!
            </span>
          </div>
        </Card.Text>
      </Card>
      <hr className='position-absolute top-50 start-50"' style={{ width: '800px', height: '600px', marginLeft: '750px', marginBlockStart: '35px' }} />
      <Card className='position top-50 start-50"' style={{ width: '150px', height: '200px', marginLeft: '750px', marginBlockStart: '-382px', borderColor: 'black' }}>
        <Card className='position top-50 start-50"' style={{ width: '132px', height: '130px', marginLeft: '8px', marginTop: '-90px', }}>
          <Image
            src="https://www.laut.de/Travis-Scott/Alben/Utopia-121583/travis-scott-utopia-228909.jpg?e1bef5"
            style={{ width: '132px', height: '130px', marginLeft: '-1px', }}// Substitua pela URL real da imagem de perfil      
          />
          <Card.Text>
            <div style={{ marginBlockStart: '14px', marginLeft: '40px', fontWeight: 'bold', fontSize: '14px' }}>
              UTOPIA
            </div>
          </Card.Text>
        </Card>
      </Card>
      <Card className='position top-50 start-50"' style={{ width: '500px', height: '300px', marginLeft: '980px', marginBlockStart: '-780px', marginTop: '-250px', border: 'none' }}>
        <Card.Text>
          <div style={{ marginTop: '65px' }}>
            <span>
              <h5 style={{ marginBottom: '25px', fontSize: '15px' }}><img src={balao} style={{ width: '25px', height: '25px', marginRight: '5px' }} />IDADE: 33 ANOS</h5>
            </span>
            <span>
              <h5 style={{ marginBottom: '25px', fontSize: '15px' }}><img src={lingua} style={{ width: '25px', height: '25px', marginRight: '5px' }} />IDIOMAS: FRANCÊS, INGLÊS</h5>
            </span>
            <span>
              <h5 style={{ marginBottom: '25px', fontSize: '15px' }}><img src={casa} style={{ width: '25px', height: '25px', marginRight: '5px' }} />MORA EM: HOUSTON, TEXAS, EUA</h5>
            </span>
            <span>
              <h5 style={{ marginBottom: '25px', fontSize: '15px' }}><img src={coracao} style={{ width: '25px', height: '25px', marginRight: '5px' }} />SOLTEIRO</h5>
            </span>
          </div>
        </Card.Text>
      </Card>
      {/* <Card className='position top-50 start-50"' style={{ width: '300px', height: '700px', marginLeft: '1550px', marginBlockStart: '-700px', borderColor:'black' }}>
        <Card.Text>
          <div>
            <span></span>
          </div>
        </Card.Text>
      </Card> */}
      {/* <hr className='position top-50 start-50"' style={{ width: '800px', height: '300px', marginLeft: '750px', marginBlockEnd: '-735px', marginTop: '10px' }} /> */}
    </>

  )
};

export default Perfil;