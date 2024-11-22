import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, Button, Image, CardText } from 'react-bootstrap';



function Perfil() {
  return (
   <>
    <Navbar/>
    <Card style={{ width: '500px', height:'400px' ,  padding: '50px', margin:'50px', borderRadius:'20px' }}>
      <Image 
        src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2024/09/12114930/rapper-travis-scott-confirmado-atracao-rock-in-rio-scaled-1-620x620.webp" // Substitua pela URL real da imagem de perfil
        roundedCircle 
        style={{ width: '150px', height: '150px', marginTop:'-20px'}} 
      />
      <Card.Body>
        <Card.Title style={{marginLeft:'-7px', marginTop:'20px'}} >[object Object]</Card.Title>
        <Card.Subtitle style={{marginLeft:'11px'}} className="mb-2 text-muted">CEO of Apple</Card.Subtitle>
        <Card.Text style={{marginLeft:'280px', marginBlockStart:'-180px'}}>
          <div style={{marginBottom:'20px', fontSize:'18px'}}  className=" justify-content-between">
            <span style={{marginLeft:'-30px'}}>1 </span>
            <span>daniel</span>
          </div>
          <div style={{marginBottom:'20px', fontSize:'18px'}} className=" justify-content-between">
            <span style={{marginLeft:'-30px'}}>2 </span>
            <span>gabriel</span>
          </div>
          <div style={{marginBottom:'20px', fontSize:'18px'}} className=" justify-content-between">
            <span style={{marginLeft:'-30px'}}>3 </span>
            <span>emanoel</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '500px', height:'300px' ,  padding: '20px', margin:'50px', borderRadius:'20px' }}>
      <Card.Body>
        <Card.Title> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle> */}
        <Card.Text>
          <div style={{marginBottom:'-30px'}} className="d-flex ">
            <span style={{marginBottom:'50px'}}>
              <h5>E-MAIL</h5>
              <h6>danielkallebmb@gmail.com</h6>
            </span>     
          </div>
          <div className="d-flex ">
            <span  style={{marginBottom:'20px'}}>
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
    <Button style={{ margin:'50px', marginTop:'0px'}} variant="btn btn-danger">Denunciar perfil</Button>
    <Card className='position-absolute top-50 start-50"' style={{ width: '800px', height:'450px', marginLeft:'650px', marginBlockStart:'-370px', border:'none'}}>
      <Card.Text>
        <div>
          <h1>JACQUES BERMAN WEBSTER II</h1>
          <h5 style={{fontStyle:'italic'}}>ELA/DELA <Button style={{ margin:'0px', marginTop:'-10px', marginLeft:'25px'}} variant="btn btn-warning">Editar</Button></h5>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus, quos ipsa voluptatum alias tempore. Tenetur reiciendis omnis ipsa autem, 
            ullam expedita mollitia ut dolore sequi commodi vero exercitationem sapiente.
            </span>
            <br />
            <br />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et, deleniti minus mollitia soluta ducimus sint odio repudiandae corrupti corporis 
              magnam molestiae, iusto necessitatibus, vitae laudantium odit. Voluptatum, iste atque.
              </span>
        </div>
      </Card.Text>
    </Card>
    <hr className='position-absolute top-50 start-50"' style={{ width: '800px', height:'600px', marginLeft:'650px', marginBlockStart:'115px'}}/>
    <Card className='position top-50 start-50"' style={{ width: '250px', height:'300px', marginLeft:'650px', marginBlockStart:'-350px',borderRadius:'20px'}}>
      <Card.Text>
        <div>
          <span></span>
        </div>
      </Card.Text>
    </Card>
    <Card className='position top-50 start-50"' style={{ width: '500px', height:'300px', marginLeft:'950px', marginBlockStart:'-800px', marginTop:'-300px', border:'none'}}>
      <Card.Text>
        <div>
          <span></span>
        </div>
      </Card.Text>
    </Card>
    <Card className='position top-50 start-50"' style={{ width: '300px', height:'820px', marginLeft:'1550px', marginBlockStart:'-818px',  borderRadius:'20px'}}>
      <Card.Text>
        <div>
          <span></span>
        </div>
      </Card.Text>
    </Card>
    {/* <hr className='position top-50 start-50"' style={{ width: '800px', height:'300px', marginLeft:'650px', marginBlockEnd:'-725px', marginTop:'32px'}}/> */}
   </>
   
  )
};

export default Perfil;