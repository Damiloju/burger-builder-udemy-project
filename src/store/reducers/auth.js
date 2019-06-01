import * as actionTypes from "../actions/actionsTypes";

const initialState = {
	token: null,
	userId: null,
	loading: false,
	error: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_FAIL:
			return authFail(state, action);
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state);
		default:
			return state;
	}
};

const authStart = state => {
	return {
		...state,
		loading: true
	};
};

const authSuccess = (state, action) => {
	return {
		...state,
		loading: false,
		error: null,
		token: action.token,
		userId: action.id
	};
};

const authFail = (state, action) => {
	return {
		...state,
		loading: false,
		error: action.error
	};
};

const authLogout = state => {
	return {
		...state,
		token: null,
		userId: null
	};
};

export default reducer;
