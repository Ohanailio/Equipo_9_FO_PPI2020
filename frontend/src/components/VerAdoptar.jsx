import React, { Component } from "react";
import { Row, Table } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import imagen4 from './images/imagen4.jpg';
import imagen5 from './images/imagen5.jpg';
import imagen6 from './images/imagen6.jpg';
import Perro1 from './images/Perro1.jpg';
import Perro3 from './images/Perro3.jpg';
import perro4 from './images/perro4.jpg';
import perro5 from './images/perro5.jpg';
import Perro16 from './images/Perro16.jpg';
import "./styles/VerAdoptarStyle.css";

export default class VerAdoptar extends Component {
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
                    <h1>Adopta con amor</h1>
                    <br></br>
                    <CardDeck>
                        <Row>
                            <Card>
                                <Card.Img variant="top" src={imagen4} />
                                <Card.Body>
                                    <Button onClick={this.abrirModal} color="primary" variant="primary">¡Conóceme!</Button>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro16} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={imagen6} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={Perro1} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                        </Row>
                        <br></br>
                        <Row>
                            <Card>
                                <Card.Img variant="top" src={Perro3} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={perro4} />
                                <Card.Body>
                                    <a class="btn btn-primary">¡Conóceme!</a>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={perro5} />
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
                        Mi presentación
                    </ModalHeader>
                    <ModalBody>
                        <Table>
                            <tbody>
                                <tr>
                                    <td><img src={imagen4} className="Lucas" /><br></br><br></br>
                                        <Button href="/frmadoptar" color="primary">Adóptame</Button> &nbsp;
                                        <Button color="danger" onClick={this.abrirModal}>Regresar</Button>
                                    </td>
                                    <td><h3>Nombre</h3>
                                        <p>Lucas</p>
                                        <h3>Características</h3>
                                        <p>Pelo blanco, grande, juguetón, amigable</p>
                                        <h3>Raza</h3>
                                        <p>Samoyedo</p>
                                        <h3>Estatura</h3>
                                        <p>60 cm</p>
                                        <h3>Peso</h3>
                                        <p>12 kg</p>
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
