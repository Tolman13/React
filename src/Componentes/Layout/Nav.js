import React from "react";
import '../Styles/Nav.css';
import { NavLink } from "react-router-dom";
const Nav = (props)=>
{
    return (
    <nav>
          <div>
            <ul>
                <li><NavLink to ="/" className={({isActive})=> isActive? "activo":undefined  }>Home</NavLink></li>
                <li><NavLink to ="/cotizaciones"className={({isActive})=> isActive? "activo":undefined  }>Cotizaciones</NavLink></li>
                <li><NavLink to ="/servicios"className={({isActive})=> isActive? "activo":undefined  }>Servicios</NavLink></li>
                <li><NavLink to ="/contacto"className={({isActive})=> isActive? "activo":undefined  }>ContactoPage</NavLink></li>
                <li><NavLink to ="/descargas"className={({isActive})=> isActive? "activo":undefined  }>Descargas</NavLink></li>

            </ul> </div>
      </nav>


    )
}
export default Nav;