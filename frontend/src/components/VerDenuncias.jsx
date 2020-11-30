import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/VerFundacionesStyle.css";
import logo from './images/logo.png';
import "./styles/VerDenunciaStyle.css";
import { Col, Form, Button} from 'react-bootstrap';

export default class VerDenuncias extends Component {
    render() {
        return (
            <>
            <fieldset id="fieldset2" class="border p-1">
                <legend id="legend2" class="w-auto">Cambiemos el mundo de forma positiva</legend>
                <div class="container">
                <img src={logo} className="Form-logo" />
                    <br></br>
                    <br></br>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGrid">
                                <Form.Label>Tipo de denuncia</Form.Label>
                                <Col>
                                    <Form.Check inline
                                        type="radio"
                                        label="Maltrato"
                                        name="formHorizontalRadios3"
                                        id="formHorizontalRadios5"
                                    />
                                    <Form.Check inline
                                        type="radio"
                                        label="Accidente"
                                        name="formHorizontalRadios3"
                                        id="formHorizontalRadios6"
                                    />
                                    <Form.Check inline
                                        type="radio"
                                        label="Abandono"
                                        name="formHorizontalRadios3"
                                        id="formHorizontalRadios7"
                                    />
                                    <Form.Check inline
                                        type="radio"
                                        label="Crias"
                                        name="formHorizontalRadios3"
                                        id="formHorizontalRadios8"
                                    />
                                </Col>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="exampleForm.ControlDenuncias">
                            <Form.Label>Describe tu denuncia</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridDirecc">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridTelef">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Form.Row>
                            
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </div>
                <br></br>
            </fieldset>
            </>
        );
    }
}
