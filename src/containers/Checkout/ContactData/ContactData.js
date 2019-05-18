import React, { Component } from "react";

import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
	state = {
		orderForm: {
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
		},
		formIsValid: false,
		loading: false
	};

	checkValidity(value, rules) {
		let isValid = true;

		if (rules.required) isValid = value.trim() !== "" && isValid;

		if (rules.minLength)
			isValid = value.length >= rules.minLength && isValid;

		return isValid;
	}

	orderHandler = event => {
		event.preventDefault();

		this.setState({
			loading: true
		});

		const formData = {};

		for (let formElId in this.state.orderForm) {
			formData[formElId] = this.state.orderForm[formElId].value;
		}

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice,
			orderData: formData
		};
		axios
			.post("/orders.json", order)
			.then(resp => {
				console.log(resp);
				this.setState({
					loading: false
				});
				this.props.history.push("/");
			})
			.catch(error => {
				console.log(error);
				this.setState({
					loading: false
				});
			});
	};

	inputFormHandler = (event, id) => {
		const updatedEl = {
			...this.state.orderForm
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
			orderForm: updatedEl,
			formIsValid: formIsValid
		});
	};

	render() {
		const formElements = [];

		for (let key in this.state.orderForm) {
			formElements.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}
		let form = (
			<form onSubmit={this.orderHandler}>
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
					Order
				</Button>
			</form>
		);
		if (this.state.loading) form = <Spinner />;
		return (
			<div className={classes.ContactData}>
				<h4>Enter yout Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
