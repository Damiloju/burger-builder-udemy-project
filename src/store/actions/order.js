import * as actionTypes from "../actions/actionsTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData: orderData
	};
};

export const purchaseBurgerfail = error => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAIL,
		error: error
	};
};

export const purchaseBurgerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_START
	};
};

export const purchaseBurger = order => {
	return dispatch => {
		dispatch(purchaseBurgerStart());
		axios
			.post("/orders.json", order)
			.then(res => {
				dispatch(purchaseBurgerSuccess(res.data.name, order));
			})
			.catch(err => {
				console.log(err);
				dispatch(purchaseBurgerfail(err));
			});
	};
};

export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT
	};
};

export const fetchOrdersSuccess = orders => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders: orders
	};
};

export const fetchOrdersfail = error => {
	return {
		type: actionTypes.FETCH_ORDERS_FAIL,
		error: error
	};
};

export const fetchOrdersStart = () => {
	return {
		type: actionTypes.FETCH_ORDERS_START
	};
};

export const fetchOrders = () => {
	return dispatch => {
		dispatch(fetchOrdersStart());
		axios
			.get("/orders.json")
			.then(res => {
				let fetchedData = [];
				for (let key in res.data) {
					fetchedData.push({
						...res.data[key],
						id: key
					});
				}
				dispatch(fetchOrdersSuccess(fetchedData));
			})
			.catch(err => {
				console.log(err);
				dispatch(fetchOrdersfail(err));
			});
	};
};
