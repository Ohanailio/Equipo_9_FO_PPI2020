import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./styles/NavbarStyle.css";
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class Navbar3 extends Component {
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
      width: '500px',
      transform: 'translate(-50%, -50%)'
    }
    return (
      <>
        <Navbar className="fixed-top" id="Navb" expand="lg" bg="">
          <Navbar.Brand id="titulo" href="/welcome">
            <img src={logo} className="App-logo" />
          Ohana Ilio
                </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/welcome" className="nav-link">
                Inicio
              </Link>
              <Link to="#" className="nav-link">
                Conócenos
              </Link>
              <Link to="#" className="nav-link">
                Ayúdanos
              </Link>
            </Nav>
            <Nav>
              <Link to="/registro" className="nav-link">
                Registrate
          </Link>
              <Link onClick={this.abrirModal} className="nav-link">
                Iniciar sesión
          </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar >
        <Modal size="lg" isOpen={this.state.abierto} style={modalStyles}>
            <ModalHeader>
              Iniciar sesión
            </ModalHeader>
          <ModalBody>
          <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="" />
                <a href="#">Olvide mi contraseña</a>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
            </Form>
            <center>
              <Button color="primary" href="/home">Ingresar</Button> &nbsp;
              <Button color="danger" onClick={this.abrirModal} >Cancelar</Button>
            </center>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
