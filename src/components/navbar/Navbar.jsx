import { CartWidget } from "../cartWidget/CartWidget"


export const Navbar = () => {
    return (
        <header className="navbar"> 
            <nav className="navbar__container">
                <a href="#" className="navbar__brand">music.store</a>
                <ul className="navbar__wrapper">
                    <li className="navbar__item">
                        <a href="#">Inicio</a>
                    </li>
                    <li className="navbar__item">
                       <a href="#">Productos</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#">Contacto</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#">Blog</a>
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
