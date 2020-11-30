import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/FrmAdoptarStyle.css";
import { Col, Form, Button } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class FrmAdoptar extends Component {
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
                    <legend id="legendregisadop" class="w-auto">Formulario de adoción<br></br></legend>
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
                                <Form.Group as={Col} controlId="formGridUsuario">
                                    <Form.Label>¿Por qué quieres adoptar?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Form.Row>
                            <h1>Sobre tu vivienda</h1>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Vives en casa o departamento?, Si es departamento, ¿permiten mascotas en el edificio?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Tu vivienda es propia o alquilada?, Si es alquilada, ¿Tienes permiso del dueño?,
                                            </Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridUsuario">
                                    <Form.Label>¿Tienes rejas o cercas que impidan que tu mascota escape o que se la roben?</Form.Label>
                                    <Form.Control as="select">
                                        <option></option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </Form.Control>
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Tienes espacio suficiente para una mascota?, ¿A qué áreas de tu hogar tendrá
                                            acceso?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Form.Row>
                            <h1>Sobre tu familia</h1>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Cuántas personas viven contigo?, ¿Algún familiar enfermo?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Hay niños o personas de edad avanzada?, ¿Todos están de acuerdo en tener una
                                            mascota?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridUsuario">
                                    <br></br>
                                    <Form.Label>¿Alguno es alérgico al pelo de mascotas?</Form.Label>
                                    <Form.Control as="select">
                                        <option></option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </Form.Control>
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Hay alguna mujer embarazada o que planee tener un hijo pronto? ¿Aceptarán a tu
                                            mascota cuándo nazca el bebé?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Form.Row>
                            <h1>Sobre la mascota</h1>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Has tenido otras mascotas antes?, ¿Qué pasó con ellas?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Tienes otras mascotas actualmente en la casa? (¿Cuántas?, tipo y edad)</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridUsuario">
                                    <Form.Label>¿Qué opinas cuando observas que algunas familias tienen a sus mascotas fuera de su casa?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Qué opinas cuando observas que las personas sacan a pasear a sus mascotas
                                            sin cadena o correa y los llevan caminando a su lado?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Cuentas con un presupuesto para cubrir los gastos de la mascota que deseas
                                            adoptar?</Form.Label>
                                    <Form.Control as="select">
                                        <option></option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Conoces los cuidados que requiere una mascota como la que deseas adoptar?
                                            Descríbelos</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Qué medios utilizarás para educar a tu mascota sobre sus necesidades básicas?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Estás dispuesto (a) a comprender y educar a su mascota en las travesuras que
                                            incurra en el transcurso de adaptación?</Form.Label>
                                    <Form.Control as="select">
                                        <option></option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Cuando estés fuera de casa, ¿Dónde estará tu mascota? ¿Se quedará sola en casa?
                                                ¿Qué cantidad de tiempo pasaría sola?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <br></br>
                                    <Form.Label>¿Dónde dormirá?, ¿Quién la sacará a pasear? ¿Qué comerá?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <br></br>
                                    <Form.Label>¿Qué harás con tu mascota si tienes que viajar lejos?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>¿Qué circunstancias justificaría que usted renuncie a su mascota?, ¿La entregaría
                                                de regreso a la fundación?</Form.Label>
                                    <Form.Control type="text" placeholder="" />
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
                        <p>Adoptar una mascota es una decisión seria, implica alegrías, innumerables recompensas y
                        responsabilidades, como velar por la alimentación, salud y seguridad del animalito durante
                        toda su vida (que oscila entre 10 hasta 18 años), brindarle amor, compañía y no
                        abandonarlo si nos vamos de viaje o nos mudamos de casa. NOS RESERVAMOS el
                        derecho de dar en adopción luego de evaluar este formulario.</p>
                        <b>Despues de analizar tu solicitud nos comunicaremos contigo para más información</b>
                    </ModalBody>
                    <ModalFooter>
                            <Button href="/veropciones" variant="primary">Acepto</Button> &nbsp;
                            <Button variant="danger" onClick={this.abrirModal}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
