import { Animated, Button, Loader } from "../../components"
import { useProfile } from "../../hooks";



export const Profile = () => {

	const { user, orders, handleLogout, isLoading } = useProfile();


  	return (
		<Animated>
		{
			( user.isLoggedIn )
			? (
				<article className="profile__container">
					<div className="profile">
						<div className="profile__header">
							<i className="ri-user-fill profile__header--icon"/>
							<h1 className='profile__header--title'>
								{ user.data.name }
							</h1>
						</div>
						<div className="profile__body">
							<p className="profile__body--item">
								Email: <span>{ user.data.email }</span>
							</p>
							<p className="profile__body--item">
								Teléfono: <span>{ user.data.phone }</span>
							</p>
							<Button text="Cerrar Sesión" action={ handleLogout }/>
						</div>
					</div>
					<div className="orders">
						<h2 className="orders__title">Mis ordenes</h2>
						{
							isLoading ? <Loader />
							:
							<table className="table">
							<thead className="table__head">
								<tr>
									<th>ID</th>
									<th>Nombre</th>
									<th>Total productos</th>
									<th>Precio total</th>
								</tr>
							</thead>
							<tbody >
								{orders.map( order => (
								<tr key={order.id} className='table__row'>
									<td className="table__cell">{order.id}</td>
									<td className="table__cell">{order.buyer.name}</td>
									<td className="table__cell">{order.items.length}</td>
									<td className="table__cell"> ${ order.totalPrice } </td>
								</tr>
								))}
							</tbody>
						</table>
						}
					</div>
				</article>
			)
			: (
				<div className="container">
					<article className="empty">
						<p className="title">¡Debes iniciar sesión!</p>
						<Button type="link" direction="/auth/login" text="Iniciar Sesión"/>
					</article>
				</div>
			)
		}
		</Animated>
  	)
}
