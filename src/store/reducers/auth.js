import * as actionTypes from "../actions/actionsTypes";

const initialState = {
	token: null,
	userId: null,
	loading: false,
	error: false,
	redirectPath: "/"
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
		case actionTypes.SET_AUTH_REDIRECT_PATH:
			return setRedirectPath(state, action);
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

const setRedirectPath = (state, action) => {
	return {
		...state,
		redirectPath: action.path
	};
};

export default reducer;
