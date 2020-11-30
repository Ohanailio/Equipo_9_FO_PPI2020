import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/InfoDonacionesStyle.css";
import { Table } from 'react-bootstrap';
import bancolombia from './images/bancolombia.png';
import nequi from './images/nequi.jpg';
import daviplata from './images/daviplata.png';
import efecty from './images/efecty.jpg';
import baloto from './images/baloto.png';
import payu from './images/payu.png';


export default class InfoDonaciones extends Component {

    render() {
        return (
            <>
                <div className="listado1">
                    <h1>Necesitamos de tu ayuda</h1>
                    <p>Los aportes económicos son importantes para pagar tratamientos veterinarios, transportes, medicamentos, recuperaciones, alimentación, esterilizaciones, insumos médicos, servicios públicos de guardería, mantenimiento del hogar, impresión de materiales de difusión.
                       <br></br> Cualquier aporte es de gran ayuda</p>
                    <fieldset id="filterdon" class="border p-1">
                        <div class="container">
                            <legend id="legendfilter" class="w-auto">Métodos de pago</legend>
                            <p>Conoce los diferentes métodos de pagos que tenemos para ti </p>
                            <Table responsive="sm" className="tablepagos">
                                <tbody>
                                    <tr>
                                        <td>Cuenta ahorros 000000000<br></br><img src={bancolombia} className="pagos" /></td>
                                        <td>Nequi 000 0000000<br></br><br></br><img src={nequi} className="pagos2" /></td>
                                        <td>Daviplata 000 0000000<br></br><br></br><img src={daviplata} className="pagos3" /></td>
                                    </tr>
                                    <tr>
                                        <td>Convenio Efecty No 000000 <br></br> Número para pago: 000000000000<br></br><br></br><img src={efecty} className="pagos4" /></td>
                                        <td>Convenio Baloto No 000000 <br></br> Número para pago: 000000000000<br></br><br></br><img src={baloto} className="pagos5" /></td>
                                        <td>PayU <br></br>Cuenta ahorros 000000000<br></br><img src={payu} className="pagos6" /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </fieldset>
                </div>
            </>
        );
    }
}
