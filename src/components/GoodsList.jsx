import { GoodsItem } from "./GoodsItem";


function GoodsList(props) {
	const { buyOrder, goods = [], color = Function.prototype } = props;

	if (!goods.length) {
		return <h4>Ничего нет :(</h4>
	}
	return (
		<div className="goods">
			{
				goods.map(item =>
					<GoodsItem key={item.id} {...item} buyOrder={buyOrder} color={color} />)
			}
		</div>
	)


}

export { GoodsList }