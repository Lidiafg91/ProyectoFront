import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Menu () {
      
      return (
        <>
       <div className="MenuPrincipal">
         <h1>Menu</h1>
        <div><Link to="/Noticias"><button>NOTICIAS</button></Link></div>
        <div><Link to="/Equipos"><button>EQUIPOS</button></Link></div>
        <div><Link to="/Clasificacion"><button>CLASIFICACIÓN</button></Link></div>
        <div><Link to="/Perfil"><button>PERFIL</button></Link></div>
        <div><Link to="/Calendario"><button>CALENDARIO</button></Link></div>
       </div>    
        </>
      );
    

}
  export default Menu;