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
				value: ""
			},
			street: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Street"
				},
				value: ""
			},
			zipCode: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "ZIP CODE"
				},
				value: ""
			},
			country: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Country"
				},
				value: ""
			},
			email: {
				elementType: "input",
				elementConfig: {
					type: "email",
					placeholder: "Your E-Mail"
				},
				value: ""
			},
			deliveryMethod: {
				elementType: "select",
				elementConfig: {
					options: [
						{ value: "fatest", displayValue: "Fastest" },
						{ value: "cheapest", displayValue: "Cheapest" }
					]
				},
				value: ""
			}
		},
		loading: false
	};

	orderHandler = event => {
		event.preventDefault();

		this.setState({
			loading: true
		});
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice
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

		updatedEl[id] = deepUpdate;

		this.setState({
			orderForm: updatedEl
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
						changed={event =>
							this.inputFormHandler(event, formElement.id)
						}
					/>
				))}
				<Button btnType="Success">Order</Button>
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
