import { Link } from "react-router-dom"


export const ProductCard = ({ id, nombre, precio }) => {

    const imagen = `/src/assets/${ id }.webp`

    return (
        <Link className="card" to={`/producto/${ id }`}>
            <img className="card__image" src={ imagen } alt={ nombre } />
            <h2 className="card__title">{ nombre }</h2>
            <p className="card__price">${ precio }</p>
        </Link>
    )
}
