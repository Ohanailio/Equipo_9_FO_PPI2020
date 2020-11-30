import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/VerAcercadeStyle.css";
import { Container } from 'react-bootstrap';
import Majo from './images/Majo.jpeg';
import Juanjo from './images/Juanjo.jpeg';


export default class VerAcercade extends Component {
    render() {
        return (
            <>
               <div>
                    <Container className="info">
                        <h1>Conoce nuestras redes sociales</h1>
                        <br></br>
                        <a className="fb-ic" href="https://www.facebook.com/ohana.ilio.52">
                            <i className="fa fa-facebook-f fa-lg white-text mr-md-6 mr-3 fa-2x">
                            </i>
                        </a>
                        <a className="ins-ic" href="https://www.instagram.com/ohana.ilio2020/">
                            <i className="fa fa-instagram fa-lg white-text mr-md-6 mr-3 fa-2x">
                            </i>
                        </a>
                        <a className="ins-ic" href="https://www.linkedin.com/in/ohana-ilio-2102051b4">
                            <i className="fa fa-linkedin fa-lg white-text mr-md-6 mr-3 fa-2x">
                            </i>
                        </a>
                        <a className="ins-ic" href="https://www.youtube.com/channel/UCvCEUvC84O5NRqIEkqSt0wQ">
                            <i className="fa fa-youtube fa-lg white-text mr-md-6 mr-3 fa-2x">
                            </i>
                            
                        </a>
                        <p>Haz clic en la red social que quieras</p>
                        <h2>Conócenos</h2>

                        <p>Somos un proyecto realizado por personas que quieren cambiar <br></br>
                            el mundo de forma positiva para todo aquel que desee participar <br></br>
                            en el mejoramiento de la calidad de vida de los animales abandonados, <br></br> 
                            por medio de adopciones, apadrinamiento o denuncias de maltratos.
                        </p>
                        <p>Maria José Torres S. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Juan José Morales M.</p>
                        <img src={Majo} />
                        &nbsp;
                        <img src={Juanjo} />
                    </Container>
                </div>
            </>
        );
    }
}
