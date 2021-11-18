import { useState, useEffect } from "react";
import {  useDispatch } from "react-redux";
import {addUser} from "../../services/user";
import { addDataUser } from "../../features/userSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./logginYRegistro.css"




function AltaUsuario(props) {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 

  

  const enviarDatos = async() => {
    const data = {
      nombre: nombre,
      password: password, 
      email: email, 
      idEquipo:"",
      nombreEquipo:"",   
    };
    console.log("esto es el data de enviarDatos", data); 
  const res =await addUser(data);
  console.log("este es el console log del res en altaUsuario",res);
  if(res.stateFind === false){
    dispatch(addDataUser(res.data));
    
  }
  

  reset();
  };

 const reset=()=>{
   setNombre("");
   setPassword("");
   setEmail("");
 }


  return (
    <div className="fondo">
    <div className="cajaLogin">
      <div><h2>REGISTRATE</h2></div>
      <div className="inputLogin">
      <input type="text" value={nombre} placeholder="Nombre" name="nombre" onChange={(e) => setNombre(e.target.value)}/>
      <input type="password" value={password} placeholder="Introducir contraseña"name="password" onChange={(e) => setPassword(e.target.value)}/>
      <input type="text" value={email} placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <button onClick={enviarDatos} className="btnLogin">Registrar</button>
      <div className="linkRegistrar"> 
        
        <div><Link to="/">Inicie Sesión aqui</Link></div>
      </div>
      
      
      
    </div>
    </div>
  );
}

export default AltaUsuario;
