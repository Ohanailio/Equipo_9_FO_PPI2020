import React, { Component } from "react";
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import imagen4 from './images/imagen4.jpg';
import imagen5 from './images/imagen5.jpg';
import imagen6 from './images/imagen6.jpg';
import Perro6 from './images/perro6.jpg';
import Perro8 from './images/Perro8.jpg';
import Perro9 from './images/Perro9.png';
import Perro12 from './images/Perro12.jpg';
import Gato14 from './images/Gato14.png';
import Gato10 from './images/Gato10.jpg';
import Gato11 from './images/Gato11.jpg';
import Gato12 from './images/Gato12.jpg';


import "./styles/VerApadrinarStyle.css";

export default class VerPerdidos extends Component {

    render() {
        return (
            <>
                <div className="listado">
                <fieldset class="border p-1">
                    <legend id="legendre">Reporta tu perdida</legend>
                    <a href="/frmperdidos" class="btn btn-primary">Formulario</a>
                </fieldset>
                <br></br>
                    <h1>Ayúdanos a volver a casa</h1>
                    <br></br>
                    <CardDeck>
                        <Row>
                            <Card>
                                <Card.Img variant="top" src={Perro6} />
                                <Card.Body>
                                   <a class="btn btn-primary">¡Conóceme!</a>                                
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro12} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>                               
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro8} />
                                <Card.Body>
                                <a href="/verperdidos" class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Gato10} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                        </Row>
                        <br></br>
                        <Row>
                            <Card>
                                <Card.Img variant="top" src={Perro9} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Gato11} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro12} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Gato12} />
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
