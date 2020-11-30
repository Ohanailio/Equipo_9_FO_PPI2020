import React, { Component } from "react";
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import imagen4 from './images/imagen4.jpg';
import imagen5 from './images/imagen5.jpg';
import imagen6 from './images/imagen6.jpg';
import Perro16 from './images/Perro16.jpg';
import Perro17 from './images/Perro17.jpg';
import Perro18 from './images/Perro18.jpg';
import Perro19 from './images/Perro19.jpg';
import Perro20 from './images/Perro20.jpg';
import Perro21 from './images/Perro21.jpg';
import Perro10 from './images/Perro10.jpg';
import Gato14 from './images/Gato14.png';
import Gato15 from './images/Gato15.jpg';
import "./styles/VerApadrinarStyle.css";

export default class MasDonaciones extends Component {

    render() {
        return (
            <>
                <div className="listado">
                    <h1>Necesitamos de tu ayuda</h1>
                    <br></br>
                    <CardDeck>
                        <Row>
                            <Card>
                                <Card.Img variant="top" src={Perro16} />
                                <Card.Body>
                                <a href="/verDonacion" class="btn btn-primary">¡Conóceme!</a>                            
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro18} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>                               
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro19} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>  
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro10} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                        </Row>
                        <br></br>
                        <Row>
                            <Card>
                                <Card.Img variant="top" src={Gato14} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Gato15} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro20} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro21} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                        </Row>
                    </CardDeck>
                    <br></br>
                    <br></br>
                </div>
            </>
        );
    }
}