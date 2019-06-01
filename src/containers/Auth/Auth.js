import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import classes from "./Auth.module.css";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

class Auth extends Component {
	state = {
		controls: {
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
		},
		formIsValid: false,
		isSignUp: true
	};

	componentDidMount() {
		if (!this.props.buildingBurger && this.props.authRedirectPath !== "/") {
			this.props.onSetAuthRedirectPath();
		}
	}

	authHandler = event => {
		event.preventDefault();

		const userData = {
			email: this.state.controls.email.value,
			password: this.state.controls.password.value
		};

		this.props.onFormSubmit(userData, this.state.isSignUp);
	};

	checkValidity(value, rules) {
		let isValid = true;

		if (rules.required) isValid = value.trim() !== "" && isValid;

		if (rules.minLength)
			isValid = value.length >= rules.minLength && isValid;

		return isValid;
	}

	inputFormHandler = (event, id) => {
		const updatedEl = {
			...this.state.controls
		};

		const deepUpdate = {
			...updatedEl[id]
		};

		deepUpdate.value = event.target.value;

		deepUpdate.valid = this.checkValidity(
			deepUpdate.value,
			deepUpdate.validation
		);

		deepUpdate.touched = true;

		let formIsValid = true;

		for (let id in updatedEl)
			formIsValid = updatedEl[id].valid && formIsValid;

		updatedEl[id] = deepUpdate;

		this.setState({
			controls: updatedEl,
			formIsValid: formIsValid
		});
	};
	switchAuthMode = () => {
		this.setState(prevState => {
			return { isSignUp: !prevState.isSignUp };
		});
	};

	render() {
		const formElements = [];

		let redirect = null;

		if (this.props.isAuthenticated)
			redirect = <Redirect to={this.props.authRedirectPath} />;

		for (let key in this.state.controls) {
			formElements.push({
				id: key,
				config: this.state.controls[key]
			});
		}

		let form = (
			<form onSubmit={this.authHandler}>
				{formElements.map(formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						invalid={!formElement.config.valid}
						shouldValidate={formElement.config.validation}
						touched={formElement.config.touched}
						changed={event =>
							this.inputFormHandler(event, formElement.id)
						}
					/>
				))}
				<Button disabled={!this.state.formIsValid} btnType="Success">
					{this.state.isSignUp ? "Sign 	Up" : "Sign In"}
				</Button>
			</form>
		);

		if (this.props.loading) form = <Spinner />;

		return (
			<div className={classes.Auth}>
				{redirect}
				<h4>Enter yout Details below</h4>
				{form}
				<Button clicked={this.switchAuthMode} btnType="Danger">
					Switch To {this.state.isSignUp ? "Sign In" : "Sign Up"}
				</Button>
			</div>
		);
	}
}

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
)(withErrorHandler(Auth, axios));
