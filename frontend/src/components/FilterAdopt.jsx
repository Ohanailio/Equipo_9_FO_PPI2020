import React, { Component } from "react";
import { Form, Col } from 'react-bootstrap';
import "./styles/FilterStyle.css";

export default class FilterAdopt extends Component {
    render() {
        return (
            <>
                <fieldset id="filter" class="border p-1">
                    <legend id="legendfilter" class="w-auto">Queremos darte una buena experiencia</legend>
                    <div class="container">
                        <Form id="filteradopt">
                            <Form.Row>
                                <Form.Group as={Col} controlId="ControlVivienda">
                                    <Form.Label>Lugar de residencia</Form.Label>
                                    <Form.Control as="select">
                                        <option selected></option>
                                        <option>Casa</option>
                                        <option>Apartamento</option>
                                        <option>Aparta/estudio</option>
                                        <option>Finca</option>
                                        <option>Otra</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="exampleForm.ControlIngresos">
                                    <Form.Label>Ingresos económicos</Form.Label>
                                    <Form.Control as="select">
                                        <option selected></option>
                                        <option>Muy altos/Altos</option>
                                        <option>Estables</option>
                                        <option>Bajos</option>
                                        <option>Prefiero no decir</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group >
                                <Form.Label>¿Alguna alergia?</Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Sí"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="No"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="exampleForm.ControlCompa">
                                    <Form.Label>¿Con quién vives?</Form.Label>
                                    <Form.Control as="select">
                                        <option selected></option>
                                        <option>Solo(a)</option>
                                        <option>Pareja</option>
                                        <option>Familia</option>
                                        <option>Otro</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlCompa">
                                    <Form.Label>¿Con cuántos niños vives?</Form.Label>
                                    <Form.Control as="select">
                                        <option selected></option>
                                        <option>0</option>
                                        <option>1-2</option>
                                        <option>3-4</option>
                                        <option>5 o más</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group >
                                <Form.Label>¿Has tenido mascotas?</Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Sí"
                                        name="formHorizontalRadios2"
                                        id="formHorizontalRadios3"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="No"
                                        name="formHorizontalRadios2"
                                        id="formHorizontalRadios4"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlMascotas">
                                <Form.Label>¿Cuántas?</Form.Label>
                                <Form.Control as="select">
                                    <option selected></option>
                                    <option>0</option>
                                    <option>1-2</option>
                                    <option>3-4</option>
                                    <option>5 o más</option>
                                </Form.Control>
                            </Form.Group>
                            
                        </Form>
                        <a href="/veropciones" class="btn btn-primary">Ver opciones</a>
                    </div>
                    <br></br>
                </fieldset>

            </>
        );
    }
}