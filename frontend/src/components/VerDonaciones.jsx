import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/VerDonacionesStyle.css";
import imagen4 from './images/imagen4.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Table } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import bancolombia from './images/bancolombia.png';
import nequi from './images/nequi.jpg';
import daviplata from './images/daviplata.png';
import efecty from './images/efecty.jpg';
import baloto from './images/baloto.png';
import payu from './images/payu.png';
import Perro16 from './images/Perro16.jpg';

export default class VerDonaciones extends Component {
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
                <Jumbotron bsPrefix className="mascota">
                    <img src={Perro16} />
                    <br></br>
                    <br></br>
                    <div className="infomascota">
                        <Table responsive="sm">
                            <tbody>
                                <tr>
                                    <td>Nombre: Zeus</td>
                                    <td>Raza: Bull Terrier</td>
                                </tr>
                                <tr>
                                    <td colSpan="4">Características: Pelo blanco, grande, tiimido, amigable.</td>
                                </tr>
                                <tr>
                                    <td colSpan="4">Situación: Tratamiento por gastroenteritis</td>
                                </tr>

                            </tbody>
                        </Table>
                        <h3>Ayuda por pago virtual</h3>
                        <Table className="Metpago">
                            <tbody>
                                <tr>
                                    <a href="#"><img src={bancolombia} className="pagos" /></a>
                                    <a href="#"><img src={nequi} className="pagos2" /></a> &nbsp;
                                    <a href="#"><img src={daviplata} className="pagos3" /></a><br></br>
                                    <a href="#"><img src={efecty} className="pagos4" /></a>
                                    <a href="#"><img src={baloto} className="pagos5" /></a>
                                    <a href="#"><img src={payu} className="pagos6" /></a>
                                </tr>
                            </tbody>
                        </Table>
                        <Button onClick={this.abrirModal} className="teninfo" color="primary" variant="primary" type="submit">Pregúntanos</Button>
                        &nbsp;
                        <Button href="/mascotas" color="danger">Volver</Button>
                    </div>
                </Jumbotron>
                <Modal size="sm" isOpen={this.state.abierto} style={modalStyles}>
                    <ModalHeader>
                        Llámanos o escríbenos
                    </ModalHeader>
                    <ModalBody>
                            <center>
                            <p>3131021011 - 9181942</p>
                            <Button color="danger" onClick={this.abrirModal}>Regresar</Button>
                            </center>

                    </ModalBody>
                </Modal>
            </>
        );
    }
}
