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
	removeUserDataFromLocalStorage();
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
				saveUserDataToLocalStorage(res);
				dispatch(authenticateSuccess(res.data));
				dispatch(checkAuthTimeout(res.data.expiresIn));
			})
			.catch(err => {
				dispatch(authenticatefail(err));
			});
	};
};

export const setAuthRedirectPath = path => {
	return {
		type: actionTypes.SET_AUTH_REDIRECT_PATH,
		path: path
	};
};

export const checkIfUserIsAuthenticatedOnPageReload = () => {
	return dispatch => {
		const token = localStorage.getItem("token");
		if (!token) {
			dispatch(logout());
		} else {
			const expirationDate = new Date(
				localStorage.getItem("expirationDate")
			);
			const userId = localStorage.getItem("userId");
			if (expirationDate <= new Date()) {
				dispatch(logout());
			} else {
				const userDetails = {
					idToken: token,
					localId: userId
				};
				dispatch(authenticateSuccess(userDetails));
				dispatch(
					checkAuthTimeout(
						(expirationDate.getTime() - new Date().getTime()) / 1000
					)
				);
			}
		}
	};
};

const saveUserDataToLocalStorage = res => {
	const expirationDate = new Date(
		new Date().getTime() + res.data.expiresIn * 1000
	);
	localStorage.setItem("token", res.data.idToken);
	localStorage.setItem("userId", res.data.localId);
	localStorage.setItem("expirationDate", expirationDate);
};

const removeUserDataFromLocalStorage = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("expirationDate");
	localStorage.removeItem("userId");
};
