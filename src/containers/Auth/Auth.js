import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import classes from "./Auth.module.css";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

const auth = props => {
	const [controls, setControls] = useState({
		email: {
			elementType: "input",
			elementConfig: {
				type: "email",
				placeholder: "Your EMAIL"
			},
			value: "",
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		password: {
			elementType: "input",
			elementConfig: {
				type: "password",
				placeholder:
					"Your password (must be at least 6 characters long)"
			},
			value: "",
			validation: {
				required: true,
				minLength: 6
			},
			valid: false,
			touched: false
		}
	});
	const [formIsValid, setFormIsValid] = useState(false);
	const [isSignUp, setIsSignUp] = useState(true);

	useEffect(() => {
		if (!props.buildingBurger && props.authRedirectPath !== "/") {
			props.onSetAuthRedirectPath();
		}
	}, []);

	const authHandler = event => {
		event.preventDefault();

		const userData = {
			email: controls.email.value,
			password: controls.password.value
		};

		props.onFormSubmit(userData, isSignUp);
	};

	const checkValidity = (value, rules) => {
		let isValid = true;

		if (rules.required) isValid = value.trim() !== "" && isValid;

		if (rules.minLength)
			isValid = value.length >= rules.minLength && isValid;

		return isValid;
	};

	const inputFormHandler = (event, id) => {
		const updatedEl = {
			...controls
		};

		const deepUpdate = {
			...updatedEl[id]
		};

		deepUpdate.value = event.target.value;

		deepUpdate.valid = checkValidity(
			deepUpdate.value,
			deepUpdate.validation
		);

		deepUpdate.touched = true;

		let formIsValid = true;

		for (let id in updatedEl)
			formIsValid = updatedEl[id].valid && formIsValid;

		updatedEl[id] = deepUpdate;

		setControls(updatedEl);
		setFormIsValid(formIsValid);
	};

	const switchAuthMode = () => {
		setIsSignUp(!isSignUp);
	};

	const formElements = [];

	let redirect = null;

	if (props.isAuthenticated)
		redirect = <Redirect to={props.authRedirectPath} />;

	for (let key in controls) {
		formElements.push({
			id: key,
			config: controls[key]
		});
	}

	let form = (
		<form onSubmit={authHandler}>
			{formElements.map(formElement => (
				<Input
					key={formElement.id}
					elementType={formElement.config.elementType}
					elementConfig={formElement.config.elementConfig}
					value={formElement.config.value}
					invalid={!formElement.config.valid}
					shouldValidate={formElement.config.validation}
					touched={formElement.config.touched}
					changed={event => inputFormHandler(event, formElement.id)}
				/>
			))}
			<Button disabled={!formIsValid} btnType="Success">
				{isSignUp ? "Sign 	Up" : "Sign In"}
			</Button>
		</form>
	);

	if (props.loading) form = <Spinner />;

	return (
		<div className={classes.Auth}>
			{redirect}
			<h4>Enter yout Details below</h4>
			{form}
			<Button clicked={switchAuthMode} btnType="Danger">
				Switch To {isSignUp ? "Sign In" : "Sign Up"}
			</Button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		isAuthenticated: state.auth.token !== null,
		buildingBurger: state.burgerBuilder.building,
		authRedirectPath: state.auth.redirectPath
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFormSubmit: (userData, isSignUp) =>
			dispatch(actions.authenticateUser(userData, isSignUp)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(auth, axios));
