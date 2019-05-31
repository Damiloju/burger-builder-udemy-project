import * as actionTypes from "../actions/actionsTypes";

const initialState = {
	ingredients: null,
	totalPrice: 4,
	error: false
};

const INGREDIENTS_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			return addIngredient(state, action);
		case actionTypes.REMOVE_INGREDIENT:
			return removeIngredient(state, action);
		case actionTypes.SET_INGREDIENTS:
			return setIngredient(state, action);
		case actionTypes.FETCH_INGREDIENTS_FAILED:
			return fetchIngredientsFailed(state);
		default:
			return state;
	}
};

const addIngredient = (state, action) => {
	return {
		...state,
		ingredients: {
			...state.ingredients,
			[action.ingredientName]:
				state.ingredients[action.ingredientName] + 1
		},
		totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
	};
};

const removeIngredient = (state, action) => {
	return {
		...state,
		ingredients: {
			...state.ingredients,
			[action.ingredientName]:
				state.ingredients[action.ingredientName] - 1
		},
		totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]
	};
};

const setIngredient = (state, action) => {
	return {
		...state,
		ingredients: {
			salad: action.ingredients.salad,
			bacon: action.ingredients.bacon,
			cheese: action.ingredients.cheese,
			meat: action.ingredients.meat
		},
		error: false,
		totalPrice: 4
	};
};

const fetchIngredientsFailed = state => {
	return {
		...state,
		error: true
	};
};

export default reducer;
