// import AltaContacto from './AltaContactos';
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from "react-router-dom";
import AltaUsuario from "./components/loggin/AltaUsuario";
import Loggin from "./components/loggin/Loggin";
import CajaDerecha from "./components/PagPrincipal/CajaDerecha";
import Clasificacion from "./components/PagPrincipal/Clasificacion";
import Equipos from "./components/PagPrincipal/Equipos";
import HeaderPagPrincipal from "./components/PagPrincipal/HeaderPagPrincipal";
import Menu from "./components/PagPrincipal/Menu";
import Noticias from "./components/PagPrincipal/Noticias";
import Perfil from "./components/PagPrincipal/Perfil";
import Calendario from "./components/PagPrincipal/Calendario";
import CrearEquipo from "./components/PagPrincipal/Equipos/CrearEquipo";
import BuscadorEquipos from "./components/PagPrincipal/Equipos/BuscadorEquipos";
import {  useDispatch, useSelector  } from "react-redux";
import { loggin, addDataUser, selectLogged } from "./features/userSlice";
import { useEffect } from "react";
import {getUser} from "./services/user";

function App() {
// useState pintarloggin(true/false)
const dispatch = useDispatch();
const logged = useSelector(selectLogged);
console.log(logged);
console.log("edu hola")
console.log("edu hola 2");
console.log("enrique hola");


useEffect( async() => {  
  
  if(document.cookie != ""){
  var ca = document.cookie.split(';'); 
  console.log("ca SIN corchete",ca);
  let nom = ca[0].split("="); 
  console.log("este es nom", nom[1]);
  console.log("ca CON corchete",ca[1]);
   let pass = ca[1].split("="); 
   console.log("este es pass", pass[1]);
   const res = await getUser(nom[1], pass[1]);
   console.log("patatas", res);  

  if(nom[1] === res.data[0].nombre && pass[1] === res.data[0].password && window.location.href != "http://localhost:3000/Noticias"){  
  dispatch(addDataUser(res.data[0]));
  dispatch(loggin(true));  
  }
    }
      }, []); 

    console.log("logged", logged)
    
  return (
   
         <>       
         {logged === true && (
           <div className="fondoHomePage">
           <div  className="buscadorPrincipal"> 
           <HeaderPagPrincipal/>
           </div>
           <div className="cuerpo">
               <Router>
               <div className="Menu">
               <Menu/>
              </div>
                 <Route  exact path="/">
                   <div className="fondo"><Noticias /></div>
                 </Route>
                 <Switch> 
                 <Route path="/Noticias">
                   <div className="fondo"><Noticias /></div>
                 </Route>
                 <Route  path="/Loggin">
                   <div className="fondo"><Loggin /></div>
                 </Route>
                 <Route  path="/Equipos">
                   <div ><Equipos/></div>
                 </Route>
                 <Route  path="/CrearEquipo">
                   <div ><CrearEquipo/></div>
                 </Route>
                 <Route  path="/BuscadorEquipos">
                   <div ><BuscadorEquipos/></div>
                 </Route>
                 <Route  path="/Clasificacion">
                   <div ><Clasificacion/></div>
                 </Route>
                 <Route  path="/Perfil">
                   <div ><Perfil/></div>
                 </Route>
                 <Route  path="/Calendario">
                   <div ><Calendario/></div>
                 </Route>
                 </Switch>
             </Router>
             <div className="cajaDrchaPrincipal"> 
             <CajaDerecha/>
             </div>
           </div>
         </div>   
         )}
          {logged === false && (
                <div>
                <Router>
                  <Switch> 
                  <Route  exact path="/">
                    <div className="fondo"><Loggin /></div>
                  </Route>
                  <Route  path="/AltaUsuario">
                    <div className="fondo"><AltaUsuario /></div>
                    
                  </Route>
                  <Redirect from="*" to="/" />
                  </Switch>
                </Router>
                </div>
         )}                
     </>   
  );
}

export default App;
