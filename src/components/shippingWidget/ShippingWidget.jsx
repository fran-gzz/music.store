
export const ShippingWidget = ({ envio = false }) =>
    envio ? (
    <div className="card__shipping">
        <div className="card__shipping--icons">
            <i className="ri-menu-3-line"></i>
            <i className="ri-truck-fill"></i>
        </div>
        <p>Envío Gratis</p>
    </div>
) : null;