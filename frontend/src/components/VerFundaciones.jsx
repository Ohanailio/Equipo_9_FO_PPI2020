import React, { Component } from "react";
import { Accordion, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import imagen4 from './images/imagen4.jpg';
import Corporacionraya from './images/Corporacionraya.png';
import FBA from './images/FBA.jpg';
import Fundacionbelloanimal from './images/Fundacionbelloanimal.jpg';
import Fundacionalmanimal from './images/Fundacionalmaanimal.png';
import ORCA from './images/ORCA.jpg';
import Card from 'react-bootstrap/Card';
import "./styles/VerFundacionesStyle.css";

export default class VerFundaciones extends Component {
    render() {
        return (
            <>
                <div className="listado">
                    <h1>Fundaciones cerca de ti</h1>
                    <br></br>
                    <Accordion defaultActiveKey="0" >
                        <Card>
                            <Accordion.Toggle as={Card.Header} className="infofunda" eventKey="0">
                            Corporación Raya
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Table className="datofunda">
                                        <tbody>
                                            <tr>
                                                <td><img src={Corporacionraya} /></td>
                                                <td>Dirección: Carrera 71 # 78A 17<br></br>
                                                Teléfono: 256 57 91 / 300 816 19 47<br></br>
                                                Sitio Web: <a href="https://www.corporacionraya.org/">www.corporacionraya.org/</a><br></br>
                                                Correo Electrónico: info@corporacionraya.org<br></br>
    </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} className="infofunda" eventKey="1">
                                    Fundación Almanimal
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Table className="datofunda">
                                        <tbody>
                                            <tr>
                                                <td><img src={Fundacionalmanimal} /></td>
                                                <td>Dirección: Calle 37 # 34 - 52, San José de La Montaña.<br></br>
                                                Teléfono: +57 312 2289068<br></br>
                                                Sitio Web: <a href="https://www.almanimalmed.wixsite.com/almanimalmed">www.almanimalmed.wixsite.com/almanimalmed</a><br></br>
                                                Facebook: <a href="https://www.facebook.com/fundacion.almanimal.3">www.facebook.com/fundacion.almanimal.3</a><br></br>
                                                Instagram: <a href="https://www.instagram.com/fundacionalmanimal">www.instagram.com/fundacionalmanimal</a></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} className="infofunda" eventKey="2">
                            Fundación Bello Animal
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <Table className="datofunda">
                                        <tbody>
                                            <tr>
                                                <td><img src={Fundacionbelloanimal} /></td>
                                                <td>: Dirección: Calle 47 # 54B - 26, Bello<br></br>
                                                Teléfono: +57 320 640 09 25<br></br>
                                                Facebook: <a href="https://www.facebook.com/Fundacion-Bello-Animal-146843915488942;">www.facebook.com/Fundacion-Bello-Animal-146843915488942;</a><br></br>
                                                Instagram: <a href="https://www.instagram.com/fundacionbelloanimal">www.instagram.com/fundacionbelloanimal</a></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} className="infofunda" eventKey="3">
                            Fundación Bienestar Animal
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <Table className="datofunda">
                                        <tbody>
                                            <tr>
                                                <td><img src={FBA} /></td>
                                                <td>Dirección: Calle 66 # 74BB - 53, Medellín<br></br>
                                                Teléfono: +57-4 260 02 88<br></br>
                                                Facebook: <a href="https://www.facebook.com/fundacion.bienestar">www.facebook.com/fundacion.bienestar</a><br></br>
                                                Instagram: <a href="https://www.instagram.com/fundacionbienestar">www.instagram.com/fundacionbienestar</a></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} className="infofunda" eventKey="4">
                            Fundación ORCA
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <Table className="datofunda">
                                        <tbody>
                                            <tr>
                                                <td><img src={ORCA} /></td>
                                                <td>Dirección: Cl. 41 #72-24.<br></br>
                                                Teléfono: 4121962 <br></br>
                                                Sitio Web: <a href="https://www.fundacionorca.org">www.fundacionorca.org</a><br></br>
                                                Facebook: <a href="https://www.facebook.com/fundacionorca">www.facebook.com/fundacionorca</a><br></br>
                                                Instagram: <a href="https://www.instagram.com/fundacionorca">www.instagram.com/fundacionorca</a></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} className="infofunda" eventKey="5">
                            Holamascota
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    <Table className="datofunda">
                                        <tbody>
                                            <tr>
                                                <td><img src={imagen4} /></td>
                                                <td>Dirección: Carrera 70 # 32B - 34, Medellín<br></br>
                                                Teléfono: 57-4 265 31 17 / +57 313 850 40 43<br></br>
                                                Sitio Web: <a href="https://www.holamascota.com">www.holamascota.com</a><br></br>
                                                Facebook: <a href="https://www.facebook.com/holamascotaweb">www.facebook.com/holamascotaweb</a><br></br>
                                                Instagram: <a href="https://www.instagram.com/hola.mascota">www.instagram.com/hola.mascota</a></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} className="infofunda" eventKey="6">
                           Fundación La Perla
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    <Table className="datofunda">
                                        <tbody>
                                            <tr>
                                                <td><img src={imagen4} /></td>
                                                <td>Carrera 112 # 12 - 01, Corregimiento Altavista, Medellín.<br></br>
                                                Teléfono: +57-4 342 02 75 / +57 311 798 73 03<br></br>
                                                Sitio Web: <a href="https://www.medellin.gov.co/laperla">www.medellin.gov.co/laperla</a><br></br>
                                                Facebook: <a href="http://www.facebook.com/pages/Centro-de-Bienestar-Animal-La-Perlawww.facebook.com/fundacion.almanimal.3">www.facebook.com/pages/Centro-de-Bienestar-Animal-La-Perla</a><br></br>
                                                Correo Electronico: <a href="adopciones.laperla@medellin.gov.co / cbalaperla@medellin.gov.co">adopciones.laperla@medellin.gov.co / cbalaperla@medellin.gov.co</a></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} className="infofunda" eventKey="7">
                            Sociedad Protectora de Animales
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                    <Table className="datofunda">
                                        <tbody>
                                            <tr>
                                                <td><img src={imagen4} /></td>
                                                <td>DCarrera 75 # 65 - 176, Medellín.<br></br>
                                                Teléfono: +57-4 260 00 01<br></br>
                                                Facebook: <a href="http://www.facebook.com/sociedadprotectoradeanimales">www.facebook.com/sociedadprotectoradeanimales</a><br></br>
                                                Horario de Atención: lunes a viernes, 9AM a 6PM / sábado, 9AM a 1PM</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                    <br></br>
                    <br></br>
                </div>
            </>
        );
    }
}
