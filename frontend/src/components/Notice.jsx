import React, { Component } from "react";
import { Carousel, Button } from 'react-bootstrap';
import imagen7 from './images/Imagen7.jpg';
import imagen8 from './images/Imagen8.jpg';
import imagen9 from './images/Imagen9.jpg';
import "./styles/NoticeStyle.css";

export default class Notice extends Component {
    render() {
        return (
                <Carousel className="carrusel">
                    <Carousel.Item>
                        <img
                            src={imagen7}
                            alt="Beneficios"
                        />
                        <Carousel.Caption>
                            <h3>Beneficios de adoptar una mascota</h3>
                            <Button className="conoce1" href="/blog" variant="primary">¡Leer más!</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={imagen8}
                            alt="Ideal"
                        />

                        <Carousel.Caption>
                            <h3>¿Cuál es tu mascota ideal?</h3>
                            <Button className="conoce2" variant="primary" type="submit">¡Leer más!</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={imagen9}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Las razas más abandonadas en el mundo</h3>
                            <Button className="conoce3" variant="primary" type="submit">¡Leer más!</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        );
    }
}