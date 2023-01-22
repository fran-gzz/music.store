import { CartWidget } from "../cartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
    return (
        <header className="navbar"> 
            <nav className="navbar__container">
                <Link className="navbar__brand" to='/'>
                    guitar.store
                </Link>
                <ul className="navbar__wrapper">
                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar__item navbar__item--active" : "navbar__item "}
                        to='/'
                    >
                        Inicio
                    </NavLink>
                    
                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar__item navbar__item--active" : "navbar__item "}
                        to='/guitarras'
                    >
                        Guitarras
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar__item navbar__item--active" : "navbar__item "}
                        to='/efectos'
                    >
                        Pedales de efecto
                    </NavLink>
                </ul>
                <ul className="navbar__user">
                    <li className="navbar__item navbar__item--cta">
                        <a href="#">Iniciar Sesión</a>
                    </li>
                    <li className="navbar__item">
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
