import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/ConsulPerdStyle.css";
import Perro8 from './images/Perro8.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Button, Form, Table } from 'react-bootstrap';


export default class ConsulPerd extends Component {

    render() {
        return (
            <>
                <Jumbotron bsPrefix className="mascota">
                    <img src={Perro8} />
                    <br></br>
                    <br></br>
                    <div className="infomascota">
                        <Table responsive="sm">
                            <tbody>
                                <tr>
                                    <td>Nombre: Nemo</td>
                                    <td>Raza: Pastor</td>
                                    <td>Departamento: Antioquia</td>
                                    <td>Ciudad: Medellín</td>
                                </tr>
                                <tr>
                                    <td colSpan="4">Características: Pelo blanco, grande, juguetón, amigable.</td>
                                </tr>
                                <tr>
                                    <td colSpan="4">Visto última vez: Calle 110 #00-00</td>
                                </tr>
                                <tr>
                                </tr>
                            </tbody>
                        </Table>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInfo">
                                <Form.Label>Compartir información:</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form>
                        <Button className="teninfo" variant="primary" type="submit">Enviar</Button>
                        &nbsp;
                        <a href="/perdidos" class="btn btn-danger">Volver</a>
                    </div>
                </Jumbotron>
            </>
        );
    }
}
