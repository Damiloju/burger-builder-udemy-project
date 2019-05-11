import React, { Component } from "react";

import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
	state = {
		name: "",
		email: "",
		address: {
			street: "",
			postalCode: ""
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
			price: this.props.totalPrice,
			customer: {
				name: "Yusuf Oluwadamiloju",
				address: {
					street: "test street",
					zipCode: "23432",
					country: "Nigeria"
				},
				email: "test@test.com"
			},
			deliveryMethod: "fatest"
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

	render() {
		let form = (
			<form onSubmit={this.orderHandler}>
				<input type="text" name="name" placeholder="Your Name" />
				<input type="email" name="name" placeholder="Your Mail" />
				<input type="text" name="street" placeholder="Street" />
				<input type="text" name="postal" placeholder="Postal Code" />

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
