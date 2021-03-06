import * as actionTypes from "./actionsTypes";
import axios from "../../axios-orders";

export const addIngredient = name => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: name
	};
};

export const removeIngredient = name => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: name
	};
};

export const setIngredient = ingredients => {
	return {
		type: actionTypes.SET_INGREDIENTS,
		ingredients: ingredients
	};
};

export const fetchIngredientsFalied = () => {
	return {
		type: actionTypes.FETCH_INGREDIENTS_FAILED
	};
};

export const fetchIngredient = () => {
	return dispatch => {
		axios
			.get(
				"https://react-my-burger-634e6.firebaseio.com/ingredients.json"
			)
			.then(res => {
				dispatch(setIngredient(res.data));
			})
			.catch(err => {
				dispatch(fetchIngredientsFalied());
			});
	};
};
