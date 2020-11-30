import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./styles/NavbarStyle.css";
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class Navbar2 extends Component {
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
        <Navbar className="fixed-top" id="Navb" expand="lg" bg="">
          <Navbar.Brand id="titulo" href="/home">
            <img src={logo} className="App-logo" />
          Ohana Ilio
                </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/home" className="nav-link">
                Inicio
              </Link>
              <Link to="/adoptar" className="nav-link">
                Adopción
              </Link>
              <Link to="/apadrina" className="nav-link">
                Apadrinar
              </Link>
              <Link to="/perdidos" className="nav-link">
                Perdidos
              </Link>
              <NavDropdown title="Donaciones" id="collasible-nav-dropdown">
                <Link to="/mascotas" className="nav-link">
                  Mascotas
              </Link>
                <NavDropdown.Divider />
                <Link to="/informacion" className="nav-link">
                  Información
              </Link>
              </NavDropdown>
              <NavDropdown title="Más" id="collasible-nav-dropdown">
                <Link to="/verFundaciones" className="nav-link">
                  Fundaciones
              </Link>
                <Link to="/denuncias" className="nav-link">
                  Denuncias
              </Link>
                <Link to="/contactanos" className="nav-link">
                  Contáctanos
              </Link>
                <NavDropdown.Divider />
                <Link to="/acercade" className="nav-link">
                  Acerca de nosotros
              </Link>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to="/perfil" className="nav-link">
                Perfil
          </Link>
              <Link onClick={this.abrirModal} className="nav-link">
                Cerrar sesión
          </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar >
        <Modal size="lg" isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>
            Cerrar sesión
        </ModalHeader>
          <ModalBody>
          <p>¿Estás seguro que deseas finalizar sesión?</p>
            <center>
              <Button color="primary" href="/welcome">Hasta pronto</Button> &nbsp;
              <Button color="danger" onClick={this.abrirModal} >Regresar</Button>
            </center>

          </ModalBody>
        </Modal>
      </>
    );
  }
}
