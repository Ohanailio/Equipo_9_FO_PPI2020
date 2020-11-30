import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/FrmRegistroStyle.css";
import logo from './images/logo.png';
import { Col, Form, Button} from 'react-bootstrap';

export default class FrmRegistro extends Component {
    render() {
        return (
            <>
            <fieldset id="fieldregis" class="border p-1">
                <legend id="legendregis" class="w-auto">Regístrate</legend>
                <div class="container">
                    <img src={logo} className="Form-logo" />
                    <br></br>
                    <br></br>
                    <Form>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Con tus redes sociales</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col}>
                            <div id="iconos">
                                <a href="#"><span>Facebook</span></a>
                                <a href="#"><span>Twitter</span></a>
                                <a href="#"><span>Google+</span></a>
                            </div>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridUsuario">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Confirmar Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Registrarse
                        </Button>
                    </Form>
                </div>
                <br></br>
            </fieldset>
            </>
        );
    }
}
