import { BasketItem } from "./BasketItem"

export function BasketList(props) {
	const { order,
		handleBasketShow = Function.prototype,
		color = Function.prototype,
		removeFromBasket = Function.prototype,
		incQuantity = Function.prototype,
		decQuantity = Function.prototype,

	} = props

	console.log(order)

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
						removeFromBasket={removeFromBasket}
						key={item.id}
						{...item}
						incQuantity={incQuantity}
						decQuantity={decQuantity}
					/>
				))
				:
				<li className="collection-item">Корзина пустая...</li>}
			<li className="collection-item active">Общая стоимость: {totalPrice}грн.</li>
		</ul>
	)
}


