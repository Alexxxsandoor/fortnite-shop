import { GoodsItem } from "./GoodsItem";
import { useContext } from 'react';
import { ShopContext } from '../context'

function GoodsList(props) {
	const { color = Function.prototype } = props

	const { goods = [] } = useContext(ShopContext);

	if (!goods.length) {
		return <h4>Ничего нет :(</h4>
	}
	return (
		<div className="goods">
			{
				goods.map(item =>
					<GoodsItem key={item.id} color={color} {...item} />)
			}
		</div>
	)


}

export { GoodsList }