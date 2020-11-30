import React, { Component } from "react";
import { Row, Table } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import imagen4 from './images/imagen4.jpg';
import imagen5 from './images/imagen5.jpg';
import Gato1 from './images/Gato1.jpg';
import Gato2 from './images/Gato2.jpg';
import Gato3 from './images/Gato3.jpg';
import Gato4 from './images/Gato4.jpg';
import Perro7 from './images/Perro7.jpg';
import Perro11 from './images/Perro11.jpg';
import "./styles/VerApadrinarStyle.css";

export default class VerApadrinar extends Component {
    state = {
        abierto: false,
    }

    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto });
    }

    render() {
        const modalStyles = {
            position: "absolute",
            top: '46%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
        return (
            <>
                <div className="listado">
                    <h1>Genera un cambio, ¡Apadríname!</h1>
                    <br></br>
                    <CardDeck>
                        <Row>
                            <Card>
                                <Card.Img variant="top" src={Gato1} />
                                <Card.Body>
                                   <a class="btn btn-primary">¡Conóceme!</a>                                
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={imagen5} />
                                <Card.Body>
                                     <Button onClick={this.abrirModal} color="primary" variant="primary">¡Conóceme!</Button>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro11} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Gato2} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                        </Row>
                        <br></br>
                        <Row>
                            <Card>
                                <Card.Img variant="top" src={Perro7} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Gato3} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Gato4} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={imagen4} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                        </Row>
                    </CardDeck>
                    <br></br>
                    <br></br>
                </div>
                <Modal size="lg" isOpen={this.state.abierto} style={modalStyles}>
                    <ModalHeader>
                        Situación: Necesito apoyo para los medicamentos por mi enfermedad
                    </ModalHeader>
                    <ModalBody>
                        <Table>
                            <tbody>
                                <tr>
                                    <td><img src={imagen5} className="Lucas" /><br></br><br></br>
                                        <Button href="/frmapadrinar" color="primary">Apadríname</Button> &nbsp;
                                        <Button color="danger" onClick={this.abrirModal}>Regresar</Button>
                                    </td>
                                    <td><h3>Nombre</h3>
                                        <p>Brisa</p>
                                        <h3>Características</h3>
                                        <p>Juguetón, pequeño, sociable</p>
                                        <h3>Raza</h3>
                                        <p>French Poddle</p>
                                        <h3>Estatura</h3>
                                        <p>20 cm</p>
                                        <h3>Peso</h3>
                                        <p>3 kg</p>
                                        <h3>Ciudad</h3>
                                        <p>Medellín</p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
