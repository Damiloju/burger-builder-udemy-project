import * as actionTypes from "../actions/actionsTypes";

const initialState = {
	orders: [],
	fetchedOrders: [],
	loading: false,
	purchased: false,
	error: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PURCHASE_BURGER_START:
			return purchaseBurgerStart(state);
		case actionTypes.PURCHASE_BURGER_SUCCESS:
			return purchaseBurgerSuccess(state, action);
		case actionTypes.PURCHASE_BURGER_FAIL:
			return purchaseBurgerFail(state);
		case actionTypes.PURCHASE_INIT:
			return purchaseInit(state);
		case actionTypes.FETCH_ORDERS_START:
			return fetchOrdersStart(state);
		case actionTypes.FETCH_ORDERS_SUCCESS:
			return fetchOrdersSuccess(state, action);
		case actionTypes.FETCH_ORDERS_FAIL:
			return fetchOrdersFail(state);
		default:
			return state;
	}
};

const purchaseBurgerStart = state => {
	return {
		...state,
		loading: true
	};
};

const purchaseBurgerSuccess = (state, action) => {
	const newOrder = {
		...action.orderData,
		id: action.orderId
	};
	return {
		...state,
		loading: false,
		orders: state.orders.concat(newOrder),
		purchased: true
	};
};

const purchaseBurgerFail = state => {
	return {
		...state,
		loading: false
	};
};

const purchaseInit = state => {
	return {
		...state,
		purchased: false
	};
};

const fetchOrdersStart = state => {
	return {
		...state,
		loading: true
	};
};

const fetchOrdersFail = state => {
	return {
		...state,
		loading: false,
		error: true
	};
};

const fetchOrdersSuccess = (state, action) => {
	return {
		...state,
		loading: false,
		fetchedOrders: action.orders,
		error: false
	};
};

export default reducer;
