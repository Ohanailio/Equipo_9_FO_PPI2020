import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Adoptar from "./pages/Adoptar.jsx";
import VerOpciones from "./pages/VerOpciones.jsx";
import VerApadrinar from "./pages/Apadrinar.jsx";
import VerPerdidos from "./pages/Perdidos.jsx";
import Perdidos2 from "./pages/Perdidos2.jsx";
import Perdidos3 from "./pages/Perdidos3.jsx";
import Donaciones1 from "./pages/Donaciones1.jsx";
import Donaciones3 from "./pages/Donaciones3.jsx";
import Donaciones11 from "./pages/Donaciones11.jsx";
import Fundaciones from "./pages/Fundaciones.jsx";
import Denuncias from "./pages/Denuncias.jsx";
import Contactanos from "./pages/Contactanos.jsx";
import Welcome from "./pages/Welcome.jsx";
import Acercade from "./pages/Acercade.jsx";
import Registro from "./pages/Registro.jsx";
import Perfil from "./pages/Perfil.jsx";
import Blog from "./pages/Blog.jsx";
import Adoptar2 from "./pages/Adoptar2.jsx";
import Apadrinar2 from "./pages/Apadrinar2.jsx";
//import Layout from "./Layout";
import Navbar4 from "./components/Navbar3";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar4/>
      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/adoptar" component={Adoptar} />
        <Route exact path="/veropciones" component={VerOpciones} />
        <Route exact path="/apadrina" component={VerApadrinar} />
        <Route exact path="/perdidos" component={VerPerdidos} />
        <Route exact path="/frmperdidos" component={Perdidos2} />
        <Route exact path="/verperdidos" component={Perdidos3} />
        <Route exact path="/mascotas" component={Donaciones1} />
        <Route exact path="/informacion" component={Donaciones3} />
        <Route exact path="/verDonacion" component={Donaciones11} />
        <Route exact path="/verFundaciones" component={Fundaciones} />
        <Route exact path="/denuncias" component={Denuncias} />
        <Route exact path="/contactanos" component={Contactanos} />
        <Route exact path="/acercade" component={Acercade} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/frmadoptar" component={Adoptar2} />
        <Route exact path="/frmapadrinar" component={Apadrinar2} />
        
      </Switch>
    </BrowserRouter>
  );
}
