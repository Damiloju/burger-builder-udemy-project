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
				console.log(res);
				dispatch(purchaseBurgerSuccess(res.data.name, order));
			})
			.catch(err => {
				console.log(err);
				dispatch(purchaseBurgerSuccess(err));
			});
	};
};

export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT
	};
};
