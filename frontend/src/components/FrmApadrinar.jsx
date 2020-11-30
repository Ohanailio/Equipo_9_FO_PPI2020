import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/FrmAdoptarStyle.css";
import { Col, Form, Button } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class FrmApadrinar extends Component {
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
                <fieldset id="fieldregisadop" class="border p-2">
                    <legend id="legendregisadop" class="w-auto">Formulario de apadrinamiento<br></br></legend>
                    <center><p>Nota: Este formulario debe ser realizado por un mayor de 18 años a totalidad</p></center>
                    <div >
                        <br></br>
                        <br></br>
                        <Form className="containerfrmadop">
                            <h1>Sobre ti</h1>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Nombre completo</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Edad</Form.Label>
                                    <Form.Control type="number" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Identificación</Form.Label>
                                    <Form.Control type="number" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Ocupación</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridUsuario">
                                    <Form.Label>Número Fijo</Form.Label>
                                    <Form.Control type="number" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridUsuario">
                                    <Form.Label>Celular</Form.Label>
                                    <Form.Control type="number" placeholder="" />
                                </Form.Group>
                            </Form.Row>
                            <h1>Sobre tu aporte</h1>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <br></br>
                                    <Form.Label>Cantidad a aportar</Form.Label>
                                    <Form.Control type="number" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <br></br>
                                    <Form.Label>Seleccione la frecuencia del aporte</Form.Label>
                                    <Col sm={10}>
                                        <Form.Check inline
                                            type="radio"
                                            label="Quincenal"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check inline
                                            type="radio"
                                            label="Mensual"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Check inline
                                            type="radio"
                                            label="Trimestral"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                        />
                                        <Form.Check inline
                                            type="radio"
                                            label="Anual"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios4"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>¿Durante cuánto tiempo deseas apadrinar?</Form.Label>
                                    <Col sm={10}>
                                        <Form.Check inline
                                            type="radio"
                                            label="3 meses"
                                            name="formHorizontalRadios2"
                                            id="formHorizontalRadios5"
                                        />
                                        <Form.Check inline
                                            type="radio"
                                            label="6 meses"
                                            name="formHorizontalRadios2"
                                            id="formHorizontalRadios6"
                                        />
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Check inline
                                            type="radio"
                                            label="1 año"
                                            name="formHorizontalRadios2"
                                            id="formHorizontalRadios7"
                                        />
                                        <Form.Check inline
                                            type="radio"
                                            label="Más de 1 año"
                                            name="formHorizontalRadios2"
                                            id="formHorizontalRadios8"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Selecciona el medio de contribución </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check inline
                                            type="radio"
                                            label="Bancolombia"
                                            name="formHorizontalRadios3"
                                            id="formHorizontalRadios9"
                                        />
                                        <Form.Check inline
                                            type="radio"
                                            label="PayU"
                                            name="formHorizontalRadios3"
                                            id="formHorizontalRadios13"
                                        />
                                    </Col>
                                    <Col sm={10}>

                                        <Form.Check inline
                                            type="radio"
                                            label="Efecty"
                                            name="formHorizontalRadios3"
                                            id="formHorizontalRadios12"
                                        />
                                        <Form.Check inline
                                            type="radio"
                                            label="Baloto"
                                            name="formHorizontalRadios3"
                                            id="formHorizontalRadios14"
                                        />
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Check inline
                                            type="radio"
                                            label="Nequi"
                                            name="formHorizontalRadios3"
                                            id="formHorizontalRadios10"
                                        />
                                        <Form.Check inline
                                            type="radio"
                                            label="Daviplata"
                                            name="formHorizontalRadios3"
                                            id="formHorizontalRadios11"
                                        />

                                    </Col>
                                </Form.Group>
                            </Form.Row>
                            <center>
                                <Button onClick={this.abrirModal} variant="primary">
                                    Enviar solicitud
                        </Button>
                            </center>
                        </Form>
                    </div>
                    <br></br>
                </fieldset>
                <Modal size="lg" isOpen={this.state.abierto} style={modalStyles}>
                    <ModalHeader>
                        Tener en cuenta
                    </ModalHeader>
                    <ModalBody>
                        <p>No solo la adopción es una forma de ayudar a todos aquellos animales que necesitan otra oportunidad. El apadrinamiento es una de las mejores opciones para quienes no pueden tener una mascota, y es una buena opción para poner nuestro granito de arena en la protección animal.</p>
                        <p>Tu donativo puede marcar la diferencia en la vida de estos peludos.</p>
                        <b>Despues de analizar tu solicitud nos comunicaremos contigo para más información</b>
                    </ModalBody>
                    <ModalFooter>
                        <Button href="/apadrina" variant="primary">Acepto</Button> &nbsp;
                            <Button variant="danger" onClick={this.abrirModal}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
