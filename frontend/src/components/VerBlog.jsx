import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/VerBlogStyle.css";
import { Container } from 'react-bootstrap';
import blog1 from './images/blog1.png';


export default class VerBlog extends Component {
    render() {
        return (
            <>
                <Container className="notice1">
                    <h1> Beneficios para adoptar un perro o gato </h1>
                    <img src={blog1} className="blog1"/>
                    <h2>A través de la historia, las mascotas han sido grandes compañeras de la vida de las personas, compartiendo alegrías, pero también ayudando a superar momentos difíciles.</h2>
                    <p>Adoptar es un gran paso. Hay muchos aspectos que debes considerar previamente, desde elegir el tipo de mascota más adecuada para tu estilo de vida, hasta decidir dónde o con quién adoptar. Por eso queremos ayudarte para que ésta sea una de las mejores experiencias en tu vida y la de tu próximo amigo de cuatro patas.</p>
                    <p>Ante todo, debes tomar en cuenta la gran responsabilidad que representa tener a un animal de compañía dentro de tu vida, ya que desafortunadamente es común que algunos dueños que adquieren un cachorro o un gatito, de forma impulsiva decidan abandonarlo. Esto sucede por lo regular cuando se dan cuenta del compromiso a largo plazo que implica vivir con una mascota.</p><br></br>
                    <p>Los beneficios de adoptar una mascota son:</p>
                    <ul>
                        <li>
                            Una oportunidad de mejorar la calidad de vida de esa nueva mascota.
                           </li>
                        <li>
                            La mascota tendrá un vínculo afectivo muy especial contigo en agradecimiento por haberlo adoptado en tu vida.
                           </li>
                        <li>Estarás ayudando a otras mascotas en adopción, ya que contribuyes a reducir el número de perros y gatos que viven en los refugios, así como al apoyar el valioso trabajo de estas organizaciones.
                           </li>

                    </ul>
                    <p>Los beneficios de tener un perro o un gato en tu vida son:</p>
                    <ul>
                        <li>
                            Saber que llegarás a casa y tu mascota te recibirá con alegría. Lo cual te da una auténtica sensación de felicidad.
                           </li>
                        <li>
                            Tener a tu lado a un perro o un gato te ayuda a disminuir tus niveles de estrés con el simple hecho de estar en contacto con él.                           </li>
                        <li>
                            La presencia de una mascota ayuda a que los niños se hagan responsables al cuidar de otro ser vivo. Además, se ha descubierto que los niños que crecen con mascotas tienden a enfermarse con menor frecuencia.                           </li>
                        <li>
                        Tener una mascota puede ayudar a las personas a recuperarse de alguna etapa personal angustiante.
                        </li>
                        <li>
                        Los gatos son muy cariñosos y tienen un gran carácter, pero también valorarás su independencia, es decir, necesitan menos cuidados que otras mascotas.
                        </li>
                        <li>
                        Los perros te demostrarán lo que es un amor incondicional, además de que seguramente harán que tu vida sea mucho más activa.
                        </li><br></br>
                    </ul>
                    <p>Como sociedad, debemos fomentar la adopción de mascotas de forma responsable, para que el perro o gato (sobre todo en el caso de que sea adulto), no vuelva a verse expuesto a situaciones no deseadas como el abandono, y viva en un entorno definitivo, feliz y seguro.</p>

                </Container>
                <p id="biblio">tomado de: https://www.purina-latam.com/mx/purina/nota/perros/mascotas-en-adopcion-beneficios-y-requisitos-para-adoptar-un-perro-o-gato</p>

            </>
        );
    }
}
