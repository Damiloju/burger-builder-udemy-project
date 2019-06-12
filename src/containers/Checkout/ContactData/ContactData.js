import React, { useState } from "react";
import { connect } from "react-redux";

import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../store/actions/index";

const contactData = props => {
	const [orderForm, setOrderForm] = useState({
		name: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placeholder: "Your name"
			},
			value: "",
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		street: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placeholder: "Street"
			},
			value: "",
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		zipCode: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placeholder: "ZIP CODE"
			},
			value: "",
			validation: {
				required: true,
				minLength: 5
			},
			valid: false,
			touched: false
		},
		country: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placeholder: "Country"
			},
			value: "",
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		email: {
			elementType: "input",
			elementConfig: {
				type: "email",
				placeholder: "Your E-Mail"
			},
			value: "",
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		deliveryMethod: {
			elementType: "select",
			elementConfig: {
				options: [
					{ value: "fastest", displayValue: "Fastest" },
					{ value: "cheapest", displayValue: "Cheapest" }
				]
			},
			value: "fastest",
			validation: {},
			valid: true
		}
	});

	const [formIsValid, setFormIsValid] = useState(false);

	const checkValidity = (value, rules) => {
		let isValid = true;

		if (rules.required) isValid = value.trim() !== "" && isValid;

		if (rules.minLength)
			isValid = value.length >= rules.minLength && isValid;

		return isValid;
	};

	const orderHandler = event => {
		event.preventDefault();

		const formData = {};

		for (let formElId in orderForm) {
			formData[formElId] = orderForm[formElId].value;
		}

		const order = {
			ingredients: props.ingredients,
			price: props.price,
			orderData: formData,
			userId: props.userId
		};

		props.onOrderBurger(order, props.token);
	};

	const inputFormHandler = (event, id) => {
		const updatedEl = {
			...orderForm
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

		setOrderForm(updatedEl);
		setFormIsValid(formIsValid);
	};

	const formElements = [];

	for (let key in orderForm) {
		formElements.push({
			id: key,
			config: orderForm[key]
		});
	}
	let form = (
		<form onSubmit={orderHandler}>
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
				Order
			</Button>
		</form>
	);
	if (props.loading) form = <Spinner />;
	return (
		<div className={classes.ContactData}>
			<h4>Enter yout Contact Data</h4>
			{form}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice,
		loading: state.order.loading,
		token: state.auth.token,
		userId: state.auth.userId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onOrderBurger: (order, token) =>
			dispatch(actions.purchaseBurger(order, token))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(contactData, axios));
