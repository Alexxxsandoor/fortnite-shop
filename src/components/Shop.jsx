import React, { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../config"
import { Preloader } from "./Preloader"
import { GoodsList } from "./GoodsList"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"

function Shop() {
	const [goods, setGoods] = useState([])
	const [loading, setLoading] = useState(true)
	const [order, setOrder] = useState([])
	const [isBasketShow, setBasketShow] = useState(false)
	const [alertName, setAlertName] = useState("")

	function handleBasketShow() {
		setBasketShow(!isBasketShow)
	}

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

	function buyOrder(item) {

		const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			}
			setOrder([...order, newItem])
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1
					}
				}
				else {
					return orderItem;
				}
			})
			setOrder(newOrder);
		}
		setAlertName(item.name)
	}

	function removeFromBasket(id) {
		setOrder(order.filter(item => item.id !== id))
	}

	function closeAlert() {
		setAlertName("")
	}

	function incQuantity(itemId) {
		const newOrder = order.map(el => {
			if (el.id === itemId) {
				const newQuantity = el.quantity + 1
				return {
					...el,
					quantity: newQuantity
				}
			} else {
				return el
			}

		});
		setOrder(newOrder)
	}

	function decQuantity(itemId) {
		const newOrder = order.map(el => {
			if (el.id === itemId) {
				const newQuantity = el.quantity - 1
				return {
					...el,
					quantity: newQuantity > 0 ? newQuantity : 0
				}
			} else {
				return el
			}

		});
		setOrder(newOrder)
	}

	useEffect(function getGoods() {
		fetch(API_URL,
			{
				headers: {
					Authorization: API_KEY,
				},
			}).then(response => response.json())
			.then(data => {
				data.featured && setGoods(data.featured);
				setLoading(false)
			})
	}, [])

	return (<main className="container content">
		<Cart quantity={order.length} handleBasketShow={handleBasketShow} />
		{loading ? <Preloader /> : <GoodsList goods={goods} buyOrder={buyOrder} color={color} />}
		{isBasketShow &&
			<BasketList
				order={order}
				handleBasketShow={handleBasketShow}
				color={color}
				removeFromBasket={removeFromBasket}
				incQuantity={incQuantity}
				decQuantity={decQuantity}
			/>}
		{
			alertName && <Alert name={alertName} closeAlert={closeAlert} />
		}
	</main>)
}

export { Shop }