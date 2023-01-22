import { CartWidget } from "../cartWidget/CartWidget"


export const Navbar = () => {
    return (
        <header className="navbar"> 
            <nav className="navbar__container">
                <a href="#" className="navbar__brand">guitar.store</a>
                <ul className="navbar__wrapper">
                    <li className="navbar__item">
                        <a href="#">Inicio</a>
                    </li>
                    <li className="navbar__item">
                       <a href="#">Guitarras</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#">Pedales de efecto</a>
                    </li>
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
