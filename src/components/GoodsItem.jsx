import React, { useContext } from "react"
import { ShopContext } from "../context";

function GoodsItem(props) {
	const {
		id,
		name,
		description,
		price,
		image,
		internalRarity,
		color = Function.prototype
	} = props

	const { buyOrder } = useContext(ShopContext)



	return (
		<div className="card">
			<div className="card-image">
				<img src={image} alt={name} />


			</div>
			<div className="card-content">
				<span className=
					{`goods-item card-title ${color(internalRarity)}`}>

					{name}
				</span>
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button className="btn" onClick={() => buyOrder({
					id,
					name,
					price,
					internalRarity,
				})}>Купить</button>
				<span className="right">{price} грн.</span>
			</div>
		</div>

	)

}

export { GoodsItem }
