import { useAppContext } from "../../context"


export const Delete = ({ name } ) => {
    const { removeFromCart } = useAppContext()
    return (
        <i className="ri-close-fill card__delete" onClick={() => removeFromCart( name )}/>
    )
}
