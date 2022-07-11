import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer"

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isBasketShow: false,
	alertName: '',


}

export const ContexProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState)

	value.closeAlert = () => {
		dispatch({ type: 'CLOSE_ALERT' })
	}

	value.removeFromBasket = (itemId) => {
		dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } })
	}
	value.handleBasketShow = () => {
		dispatch({ type: 'HANDLE_BASKET_SHOW' })
	}

	value.buyOrder = (item) => {
		dispatch({ type: 'BUY_ORDER', payload: item })
	}

	value.incQuantity = (itemId) => {
		dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } })
	}

	value.decQuantity = (itemId) => {
		dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } })
	}

	value.setGoods = (data) => {
		dispatch({ type: 'SET_GOODS', payload: data })
	}


	return <ShopContext.Provider value={value}>
		{children}
	</ShopContext.Provider>
}