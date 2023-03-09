import { Link } from "react-router-dom"
import { navData } from "../../data"


export const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__container">
                <article className="footer__about">
                    <h3 className="footer__title">Acerca de</h3>
                    <p>
                        Music.store es un proyecto realizado para el curso de React JS en coderhouse. Este proyecto está creado utilizando Vite + React y Firebase/Firestore como base de datos, además de otras dependencias.
                    </p>
                    
                        
                    <a href="https://github.com/FranGonzalez-dev/music.store" target='_blank'>Visita el repositorio</a>
                    
                </article>

                <article className="footer__links">
                    <h3 className="footer__title">Categorías</h3>
                    <ul>
                        <li>
                            <Link to='/'>
                                Todos los productos
                            </Link>
                        </li>
                        {
                            navData.map( (data, id) => (
                                <li key={ id }>
                                    <Link to={`/category/${ data.type }`}>
                                        { data.text }
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </article>
            </section>
            
            <div className="footer__bottom">
                <a href="https://portfolio-frangonzalez.vercel.app/" target='_blank'>
                    made by <span>franz</span> 
                </a>
            </div>
        </footer>
    )
}
