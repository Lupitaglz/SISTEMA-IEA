import { Routes, Route } from "react-router-dom";
import React from "react";
import Contenido from "./components/Contenido";
/*import {Tabla} from "./components/Tabla"; */
import './index.css'
import Tabla from "./components/Tabla";
import Indicador4 from "./components/Indicador4";
import { Login } from "./components/Login";
import Indicador3 from "./components/Indicador3";
import Indicador5 from "./components/Indicador5";
import Indicador6 from "./components/Indicador6";
import Indicador7 from "./components/Indicador7";
import Indicador8 from "./components/Indicador8";
import Indicador9 from "./components/Indicador9";

export function App(){
    return(
        <div className="uno">

            <Routes>
                <Route path="/" element={ <Contenido/> }/>
                <Route path="Indicador3" element={ < Indicador3/>}/>
                <Route path="Indicador4" element={ <Indicador4/> }/>
                <Route path="Indicador5" element={ < Indicador5/>}/>
                <Route path="Indicador6" element={ < Indicador6/>}/>
                <Route path="Indicador7" element={ < Indicador7/>}/>
                <Route path="Indicador8" element={ < Indicador8/>}/>
                <Route path="Indicador9" element={ < Indicador9/>}/>
                <Route path="Login" element={ <Login/> }/>
            
            
            </Routes>
      {/*<Contenido/> */}
        
        </div>
        
    )
}