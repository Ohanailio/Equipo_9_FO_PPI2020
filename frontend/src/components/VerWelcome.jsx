import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import imagen1 from './images/imagen1.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./styles/VerWelcomeStyles.css";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import imagen4 from './images/imagen4.jpg';
import imagen5 from './images/imagen5.jpg';
import perro5 from './images/perro5.jpg';
import imagen6 from './images/imagen6.jpg';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


export default class VerWelcome extends Component {

    render() {
        return (
            <>
            <Jumbotron bsPrefix>
                <center>
                <img src={imagen1} className="App-jumbo" />
                   <br></br>
                   <br></br>
                    <h1> Cambiemos el mundo una huellita a la vez </h1>
                    <p>
                     Dales la vida que se merecen y juntos seamos parte del cambio mejorando la vida de cada mascota.
                    </p>
                </center>
            </Jumbotron>
            <div className="containerhacer">
             <h1> Nosotros </h1>
             <br></br>
             <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>Lo que hacemos</Card.Title>
                            <Card.Text>
                            Cada mascota merece su debida atención, dejaremos a cada una en las mejores manos y en las mejores condiciones por medio de diferentes filtros; Además, con apoyo de las fundaciones cubriremos muchas de las necesidades básicas de las mascotas como es su salud y alimentación, estas serán impulsada por los padrinos que quieran hacer parte de nuestra familia.                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Lo que queremos</Card.Title>
                            <Card.Text>
                            Nuestro principal objetivo es promover la adopción, acabar con el maltrato animal y reducir el índice de abandono elevado que hay actualmente en nuestro país. 
                        </Card.Text>
                        <Card.Text className="motimis">
                        ¡No solo nuestro país, el de nuestros animales también! 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
             <br></br>
             <br></br>
             <h1> Principales experiencias </h1>
             <br></br>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={imagen4}/>
                        <Card.Body>
                            <Card.Title>Conviértete en dueño</Card.Title>
                            <Card.Text>
                                Dale una segunda oportunidad a un animal que ha sufrido un proceso de abandono, y en ocasiones maltrato. Acogelo en tu casa de por vida y darle la estabilidad, los cuidados y el cariño que necesita.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={perro5}/>
                        <Card.Body>
                            <Card.Title>Vuélvete padrino</Card.Title>
                            <Card.Text>
                                 Perfecto para quienes no pueden adoptar por diversas razones; sin embargo, desean ayudar a un animal. Con una cantidad mensual de dinero se pueden cubrir los costos médicos, alimentación y hospedaje.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imagen6}/>
                        <Card.Body>
                            <Card.Title>Contribuye a ellos</Card.Title>
                            <Card.Text>
                                Es una maravillosa manera de apoyar a las mascotas a obtener la nutrición y salud que necesitan mientras están a la espera de una adopción.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imagen5}/>
                        <Card.Body>
                            <Card.Title>Ayuda en su búsqueda</Card.Title>
                            <Card.Text>
                              Brinda información valiosa que nos ayude a encontrar de nuevo su familia u hogar. Además, puedes reportar tu mascota perdida para buscarla juntos.
                          </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br></br>
            </div>
            <br></br>
            <MDBFooter color="cyan" className="font-small darken-2 pt-0">
      <MDBContainer className="Footer">
        <MDBRow>
          <MDBCol md="12" className="py-1">
            <div className="mb-2 flex-center">
              <a className="fb-ic" href="https://www.facebook.com/ohana.ilio.52">
                <i className="fa fa-facebook-f fa-lg white-text mr-md-6 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic" href="https://www.instagram.com/ohana.ilio2020/">
                <i className="fa fa-instagram fa-lg white-text mr-md-6 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic" href="https://www.linkedin.com/in/ohana-ilio-2102051b4">
                <i className="fa fa-linkedin fa-lg white-text mr-md-6 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic" href="https://www.youtube.com/channel/UCvCEUvC84O5NRqIEkqSt0wQ">
                <i className="fa fa-youtube fa-lg white-text mr-md-6 mr-3 fa-2x">
                </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Ohana Ilio por Maria José Torres y Juan José Morales
        </MDBContainer>
      </div>
    </MDBFooter>
            </>
        );
    }
}