import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Equipos() {
    return (
        <div>
            <h1>Equipos</h1>
            <div><Link to="/CrearEquipo"><button>Crear equipo</button></Link></div>
        <div><Link to="/BuscadorEquipos"><button>Unirse equipo</button></Link></div>
        </div>
    )
}
