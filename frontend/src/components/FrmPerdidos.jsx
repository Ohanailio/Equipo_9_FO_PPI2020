import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/FrmPerdidosStyle.css";
import logo from './images/logo.png';
import { Col, Form, Button } from 'react-bootstrap';

export default class VerPerdidos extends Component {

    render() {
        return (
            <>
            <fieldset id="filter" class="border p-1">
                <div class="container">
                <legend id="legendfilter" class="w-auto">Te ayudaremos con tu mascota</legend>
                    <img src={logo} className="Form-logo" />
                    <br></br>
                    <br></br>
                    <Form id="filterperd">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Nombre de tu mascota</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Raza</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>

                        </Form.Row>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Características</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Departamento</Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>Amazonas</option>
                                <option>Antioquia</option>
                                <option>Arauca</option>
                                <option>Antlantico</option>
                                <option>Bogota</option>
                                <option>Bolivar</option>
                                <option>Boyaca</option>
                                <option>Caldas</option>
                                <option>Caqueta</option>
                                <option>Casanare</option>
                                <option>Cauca</option>
                                <option>Cesar</option>
                                <option>Choco</option>
                                <option>Cordoba</option>
                                <option>Cundinamarca</option>
                                <option>Guainia</option>
                                <option>Guaviare</option>
                                <option>Huila</option>
                                <option>La Guajira</option>
                                <option>Magdalena</option>
                                <option>Meta</option>
                                <option>Nariño</option>
                                <option>Norte de Santander</option>
                                <option>Putumayo</option>
                                <option>Quindio</option>
                                <option>Risaralda</option>
                                <option>San andres y Providencia</option>
                                <option>Santander</option>
                                <option>Sucre</option>
                                <option>Tolima</option>
                                <option>Valle del Cauca</option>
                                <option>Vaupes</option>
                                <option>Vichada</option>
                                <option></option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>Leticia</option>
                                <option>Medellin</option>
                                <option>Arauca</option>
                                <option>Barranquilla</option>
                                <option>Bogota</option>
                                <option>Cartagena</option>
                                <option>Tunja</option>
                                <option>Manizales</option>
                                <option>Florencia</option>
                                <option>Yopal</option>
                                <option>Popayan</option>
                                <option>Valledupar</option>
                                <option>Quibdo</option>
                                <option>Monteria</option>
                                <option>Bogota</option>
                                <option>Inirida</option>
                                <option>San Jose De Guaviare</option>
                                <option>Neiva</option>
                                <option>Riohacha</option>
                                <option>Santa Marta</option>
                                <option>Villavicencio</option>
                                <option>Pasto</option>
                                <option>Cucuta</option>
                                <option>Mocoa</option>
                                <option>Armenia</option>
                                <option>Pereira</option>
                                <option>San andres</option>
                                <option>Bucaramanga</option>
                                <option>Sincelejo</option>
                                <option>Ibague</option>
                                <option>Cali</option>
                                <option>Mitu</option>
                                <option>Puerto Carreño</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Sube una foto de tu mascota" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>¿Dónde lo viste por última vez?</Form.Label>
                                <Form.Control type="text" placeholder="" />
                                <br></br>
                                <Form.Label>Danos una ubicación más exacta</Form.Label>
                                <br></br>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9693463.222976426!2d-76.44170039122939!3d4.004514732657098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1ses!2sco!4v1601189696636!5m2!1ses!2sco" width="300" height="300" frameborder="0"></iframe>
                            </Form.Group>
                    
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
