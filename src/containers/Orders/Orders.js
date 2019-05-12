import React, { Component } from "react";
import axios from "../../axios-orders";

import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
	state = {
		orders: [],
		loading: true
	};

	componentDidMount() {
		axios
			.get("/orders.json")
			.then(res => {
				let fetchedData = [];
				for (let key in res.data) {
					fetchedData.push({
						...res.data[key],
						id: key
					});
				}
				this.setState({ loading: false, orders: fetchedData });
			})
			.catch(err => {
				console.log(err);
				this.setState({ loading: false });
			});
	}

	render() {
		const orders = this.state.orders.map(order => {
			return (
				<Order
					key={order.id}
					ingredients={order.ingredients}
					price={+order.price}
				/>
			);
		});
		return <div>{orders}</div>;
	}
}

export default withErrorHandler(Orders, axios);