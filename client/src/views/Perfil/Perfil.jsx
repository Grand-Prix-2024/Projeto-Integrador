import React from 'react';
import Navbar from '../../components/Navbar';
import './styles.module.css'
import PerfilHeader from './PerfilHeader.jsx';
import { Card, Button, Image, CardText } from 'react-bootstrap';


function Perfil() {
  return (
   <>
    <Navbar/>
    <Card style={{ width: '700px', height:'600px' ,  padding: '70px', margin:'50px' }}>
      <Image 
        src="https://via.placeholder.com/100" // Substitua pela URL real da imagem de perfil
        roundedCircle 
        style={{ width: '200px', height: '200px', margin: 'auto' }} 
      />
      <Card.Body>
        <Card.Title>[object Object] Doe</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">CEO of Apple</Card.Subtitle>
        <Card.Text>
          <div className="d-flex justify-content-between">
            <span>Detail 1</span>
            <span>32</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Detail 2</span>
            <span>40</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Detail 3</span>
            <span>50</span>
          </div>
        </Card.Text>
        <Button variant="primary">View Public Profile</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '700px', height:'600px' ,  padding: '70px', margin:'50px' }}>
      <Card.Body>
        <Card.Title> </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          <div className="d-flex justify-content-between">
            <span></span>
            <span></span>
          </div>
          <div className="d-flex justify-content-between">
            <span></span>
            <span></span>
          </div>
          <div className="d-flex justify-content-between">
            <span></span>
            <span></span>
          </div>
        </Card.Text>
      </Card.Body>     
    </Card>
    <Button style={{ margin:'50px', marginTop:'-20px'}} variant="btn btn-danger">Denunciar perfil</Button>
    <Card className='position-absolute top-50 start-50"' style={{ width: '1200px', height:'600px', marginLeft:'900px', marginBlockStart:'-607px'}}>
      <Card.Text>
        <div>
          <span></span>
        </div>
      </Card.Text>
    </Card>
    <hr className='position-absolute top-50 start-50"' style={{ width: '1200px', height:'600px', marginLeft:'900px', marginBlockEnd:'-607px'}}/>
    <Card className='position top-50 start-50"' style={{ width: '300px', height:'300px', marginLeft:'900px', marginBlockStart:'-719px'}}>
      <Card.Text>
        <div>
          <span></span>
        </div>
      </Card.Text>
    </Card>
    <Card className='position top-50 start-50"' style={{ width: '800px', height:'300px', marginLeft:'1300px', marginBlockStart:'-800px', marginTop:'-300px'}}>
      <Card.Text>
        <div>
          <span></span>
        </div>
      </Card.Text>
    </Card>
    <hr className='position top-50 start-50"' style={{ width: '1200px', height:'300px', marginLeft:'900px', marginBlockEnd:'-715px', marginTop:'23px'}}/>
   </>
   
  )
};

export default Perfil;