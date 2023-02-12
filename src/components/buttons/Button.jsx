import { Link } from "react-router-dom"


export const ButtonContainer = ({ children, type = 'row' }) => {
    return (
        <div className={`button__container button__container--${type}`}>
            { children }
        </div>
    )
}

export const Button = ({ type = 'button', color = 'primary', text = '...', action = null, direction='' }) => (
    type === 'link'
    ?
        <Link className={`button button--${color}`} to={direction}>
            { text }
        </Link>
    :   
        <button className={`button button--${color}`} onClick={ action }>
            { text }
        </button>
)
    