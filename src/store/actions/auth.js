import * as actionTypes from "./actionsTypes";

import axios from "axios";

export const authenticateSuccess = userDetails => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token: userDetails.idToken,
		id: userDetails.localId
	};
};

export const authenticatefail = error => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

export const authenticateStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const logout = () => {
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};
export const checkAuthTimeout = expirationTime => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000);
	};
};

export const authenticateUser = (userData, isSignUp) => {
	return dispatch => {
		dispatch(authenticateStart());
		let url =
			"https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBTBt_Plx-HsTDs5twRne_feOqhm7jhUBc";
		const authData = {
			email: userData.email,
			password: userData.password,
			returnSecureToken: true
		};
		if (!isSignUp)
			url =
				"https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBTBt_Plx-HsTDs5twRne_feOqhm7jhUBc";
		axios
			.post(url, authData)
			.then(res => {
				dispatch(authenticateSuccess(res.data));
				dispatch(checkAuthTimeout(res.data.expiresIn));
			})
			.catch(err => {
				dispatch(authenticatefail(err));
			});
	};
};
