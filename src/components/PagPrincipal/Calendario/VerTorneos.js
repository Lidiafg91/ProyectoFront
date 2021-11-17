import React, { useState, useEffect } from "react";
import { traerTorneo } from "../../../services/user";
import {  useSelector  } from "react-redux";
import { selectDataUser } from "../../../features/userSlice";
import { addGanador } from "../../../services/user";

function VerTorneos() {
    const [mostrarTorneo, setMostrarTorneo] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [botonGanador, setBotonGanador] = useState(false);
    const datosUsuario = useSelector(selectDataUser);
    
    

    useEffect( async() => { 
      
        const torneoTraido = await traerTorneo();
        setMostrarTorneo(torneoTraido);
       
      }, []); 
      
      console.log("PUES AQUI ESTA", mostrarTorneo);

      const cambiarResultado = (event,index) => {
        const prueba = resultados;
        prueba.splice(0, 1, event.target.value); 
        // prueba.push(event.target.value)  
        setResultados(prueba);
        console.log("PROBANDO LA PRUEBA",resultados);
        setBotonGanador(true);
        console.log("index cambiarResultado",index)
      };
      
      const enviarGanador = async() => {
        const data = {
          resultados: resultados,
        };
        const res = await addGanador(data);
        console.log("----ENVIAR GANADOR---", data); 
        setBotonGanador(false);
        
      };

     
    
    return (
        <div>
            {mostrarTorneo.map((data) => (
        <div>
          <div>{data.nombreTorneo}</div>
          <div>
            {data.arrayPartidas.map((equipos, index) => {
              return (
                <>
                  <div>
                    {equipos.equipo1}
                    {" "}{" "+"<-----VS----->"+" "}{" "}
                    {equipos.equipo2}{" "}
                    {datosUsuario.admin? (<select value={resultados[index]} onChange={(event)=>cambiarResultado(event,index)}>
                    <option selected >Seleccionar Ganador</option>
                        <option value={equipos.equipo1}>{equipos.equipo1}</option>
                        <option value={equipos.equipo2}>{equipos.equipo2}</option>  
                    </select>)  
                    :
                   <div></div>
                    }
                    
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ))}
       {botonGanador === true && (<button onClick={enviarGanador}>Enviar Ganador</button>)}
        </div>
    )
}

export default VerTorneos
