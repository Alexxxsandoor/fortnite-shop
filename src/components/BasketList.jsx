import { BasketItem } from "./BasketItem"
import { useContext } from "react"
import { ShopContext } from "../context"

export function BasketList(props) {
	const { color } = props
	const { order = [], handleBasketShow } = useContext(ShopContext)


	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity;
	}, 0)

	return (
		<ul className="collection basket-list ">
			<li className="collection-item active">Корзина <span class="secondary-content close-basket" onClick={handleBasketShow}>
				<i class="material-icons">
					close
				</i>
			</span></li>
			{order.length
				?
				order.map(item => (
					<BasketItem
						color={color}
						key={item.id}
						{...item}
					/>
				))
				:
				<li className="collection-item">Корзина пустая...</li>}
			<li className="collection-item active">Общая стоимость: {totalPrice}грн.</li>
		</ul>
	)
}


