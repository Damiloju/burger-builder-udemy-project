import * as actionTypes from "./actions";

const initialState = {
	ingredients: null,
	totalPrice: 4
};

const reducer = (state = initialState, actions) => {
	switch (actions.type) {
		case actionTypes.ADD_INGREDIENT:
			break;

		case actionTypes.REMOVE_INGREDIENT:
			break;

		default:
			break;
	}
};

export default reducer;
