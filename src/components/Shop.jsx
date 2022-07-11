import React, { useEffect, useContext } from "react"
import { API_KEY, API_URL } from "../config"

import { ShopContext } from "../context"

import { Preloader } from "./Preloader"
import { GoodsList } from "./GoodsList"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"

function Shop() {
	const { loading, order, isBasketShow, alertName, setGoods } = useContext(ShopContext)
	function color(type) {
		switch (type) {
			case "epic":
				return "deep-purple lighten-1"
			case "legendary":
				return "orange darken-3"
			case "rare":
				return "light-blue darken-4"
			default:
				return "blue-grey darken-1"
		}
	}
	useEffect(function getGoods() {
		fetch(API_URL,
			{
				headers: {
					Authorization: API_KEY,
				},
			}).then(response => response.json())
			.then(data => {
				setGoods(data.featured)
			})

		//eslint-disable-next-line
	}, [])
	return (<main className="container content">
		<Cart quantity={order.length} />
		{loading ? <Preloader /> : <GoodsList color={color} />}
		{isBasketShow &&
			<BasketList color={color} />}
		{
			alertName && <Alert />
		}
	</main>)
}

export { Shop }