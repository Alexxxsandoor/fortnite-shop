import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context"

export function Cart() {
	const { order, handleBasketShow = Function.prototype } = useContext(ShopContext)

	const quantity = order.length

	return (
		<div className="cart deep-purple lighten-4 white-text" onClick={handleBasketShow}>
			<i className="material-icons">shopping_basket</i>
			{quantity ? <span className="cart-quantity">{quantity}</span> : null}
		</div>
	)
}