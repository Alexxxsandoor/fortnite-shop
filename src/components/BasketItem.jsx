import { useContext } from "react"
import { ShopContext } from "../context"

export function BasketItem(props) {
	const {
		id,
		name,
		price,
		quantity,
		internalRarity,
		color = Function.prototype,
	} = props
	const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);
	return (
		<li className={`collection-item basket-goods  ${color(internalRarity)} white-text`}>
			"{name}"
			<i className="material-icons black basket-quantity" onClick={() => decQuantity(id)}>
				remove
			</i>x {quantity}шт.
			<i className="material-icons black basket-quantity" onClick={() => incQuantity(id)}>
				add
			</i> = {quantity * price} грн.
			<span className="secondary-content item-delete" onClick={() => removeFromBasket(id)} >
				<i className="material-icons black">
					close
				</i>
			</span>
		</li>
	)
}