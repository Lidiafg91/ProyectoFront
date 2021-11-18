import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./menu.css";


function Menu () {
      
      return (
        <>
       <div className="MenuPrincipal">
         <h1>Menu</h1>
        <div><Link to="/Noticias"><button className="btnMenu">NOTICIAS</button></Link></div>
        <div><Link to="/Equipos"><button className="btnMenu">EQUIPOS</button></Link></div>
        <div><Link to="/Clasificacion"><button className="btnMenu">CLASIFICACIÓN</button></Link></div>
        <div><Link to="/Perfil"><button className="btnMenu">PERFIL</button></Link></div>
        <div><Link to="/Calendario"><button className="btnMenu">CALENDARIO</button></Link></div>
       </div>    
        </>
      );
}
  export default Menu;