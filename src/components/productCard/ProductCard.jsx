

export const ProductCard = ({ id, nombre, precio, imagen }) => {

    return (
        <div className="card">
            <img className="card__image" src={ imagen } alt={ nombre } />
            <h2 className="card__title">{ nombre }</h2>
            <p className="card__price">${ precio }</p>
        </div>
    )
}
