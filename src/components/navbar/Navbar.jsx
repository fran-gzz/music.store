import { useState } from "react"

import { CartWidget } from "../cartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {    

    const [ toggle, setToggle ] = useState(false);

    const handleClick = () => {
        setToggle( !toggle );
    }

    return (
        <header className="navbar"> 
            <nav className="navbar__container">
                <Link className="navbar__brand" to='/'>
                <img src="https://img.icons8.com/ios-filled/30/222222/guitar-strings.png"/>
                    <span>music.store</span>
                </Link>
                <ul className={`navbar__links ${ toggle ? 'navbar__links--open' :'' }`}>
                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link "}
                        to='/'
                    >
                        Inicio
                    </NavLink>
                    
                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link "}
                        to='/guitarras'
                    >
                        Guitarras
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link "}
                        to='/efectos'
                    >
                        Pedales de efecto
                    </NavLink>
                </ul>
                <div className="navbar__main">
                    <a className="navbar__cta" href="#">Iniciar Sesión</a>
                    <CartWidget />
                    <i className={ toggle ? 'ri-close-line' : 'ri-menu-line'} id="menu-button" onClick={handleClick}></i>
                </div>
            </nav>
        </header>
    )
}
