import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../../components"
import { useAppContext } from "../../context"
import { navData } from "../../data"


export const Navbar = () => {    
    const { user } = useAppContext();

    const [ toggle, setToggle ] = useState(false);

    const handleClick = () => setToggle( !toggle )

    return (
        
        <header className="navbar"> 
            <nav className="navbar__container">
                <Link className="navbar__brand" to='/'>
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/guitar-strings.png" alt="music.store logo"/>
                    <span>music.store</span>
                </Link>
                <ul className={`navbar__links ${ toggle ? 'navbar__links--open' :'' }`}>
                    <NavLink
                        onClick={ handleClick }
                        className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link "}
                        to='/'
                    >
                        Todos los productos
                    </NavLink>
                    { navData.map(( data, id ) => (
                        <NavLink 
                            key={ id }
                            onClick={ handleClick }
                            className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link "}
                            to={`/category/${ data.type }`}
                        >
                            { data.text }
                        </NavLink>
                    ))}
                </ul>
                <div className="navbar__main"> 
                    {
                        user.isLoggedIn 
                        ? <Link className="navbar__profile" to='/auth/profile'>
                            <p className="navbar__profile--name">{user.data.name}</p>
                            <i className="ri-user-fill navbar__profile--icon"></i>
                        </Link>
                        : <Link className="navbar__cta" to='/auth/login'> Iniciar Sesión </Link>
                    }
                    
                    <CartWidget />
                    <i className={ toggle ? 'ri-close-line' : 'ri-menu-line'} id="menu-button" onClick={ handleClick }></i>
                </div>
            </nav>
        </header>
    )
}
