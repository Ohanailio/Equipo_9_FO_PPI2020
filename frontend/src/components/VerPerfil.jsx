import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/VerPerfilStyle.css";
import CardDeck from 'react-bootstrap/CardDeck';
import superheroe from './images/superheroe.png';
import { Card, Button, Table, Form, Col, Row } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class VerDenuncias extends Component {
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
                <center>
                    <CardDeck className="profile">
                        <Card>
                            <center>
                                <br></br>
                                <Card.Img variant="top" src={superheroe} class="rounded-circle" width="150" />
                            </center>
                            <Card.Body>
                                <center>
                                    <Card.Title>Majo2003</Card.Title>
                                </center>
                                <Card.Text>
                                    <ul>
                                        <li>Nombre(s): Maria josé</li>
                                        <li>Apellido(s): Torres Sánchez</li>
                                        <li>Email: majotorressanchez@gmail.com</li>
                                    </ul>
                                </Card.Text>
                                <Button variant="primary" type="submit">
                                    Cambiar contraseña
                        </Button>
                        &nbsp;
                        <Button variant="primary" type="submit">
                                    Cambiar avatar
                        </Button>
                                <center>
                                    <br></br>
                                    <Button variant="danger" type="submit">
                                        Cerrar cuenta
                        </Button>
                                </center>

                            </Card.Body>
                        </Card>
                        <Card className="profileanimal">
                            <Card.Body>
                                <center>
                                    <Card.Title>Mis mascotas</Card.Title>
                                </center>
                                <Card.Text>
                                    <Table className="Mismascotas">
                                        <tbody>
                                            <tr>
                                                <td>Nombre: Pelusa</td>
                                                <td>Raza: Criollo</td>
                                                <td>Edad: 2 años</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Text>
                                <Button onClick={this.abrirModal} variant="success" type="submit">
                                    Añadir mascota
                        </Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </center>
                <Modal size="sm" isOpen={this.state.abierto} style={modalStyles}>
                    <ModalHeader>
                        Añadir mascota
            </ModalHeader>
                    <ModalBody>
                        <Form>
                            <Form.Group controlId="formBasic">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Raza</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Edad</Form.Label>
                                <Form.Control type="email" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tiempo</Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>Días</option>
                                <option>Meses</option>
                                <option>Años</option>
                            </Form.Control>
                        </Form.Group>
                        </Form.Row>
                        </Form>
                        <center>
                            <Button variant="primary" href="/home">Ingresar</Button> &nbsp;
              <Button variant="danger" onClick={this.abrirModal} >Cancelar</Button>
                        </center>
                    </ModalBody>
                </Modal>


            </>

        );
    }
}
