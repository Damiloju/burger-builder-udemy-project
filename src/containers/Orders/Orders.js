import React, { Component } from "react";
import axios from "../../axios-orders";
import { connect } from "react-redux";

import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

class Orders extends Component {
	componentDidMount() {
		this.props.onOrdersFetch();
	}

	render() {
		let orders = this.props.orders.map(order => {
			return (
				<Order
					key={order.id}
					ingredients={order.ingredients}
					price={+order.price}
				/>
			);
		});
		if (this.props.loading) orders = <Spinner />;
		if (this.props.error) orders = <p>Could not load orders</p>;
		return <div>{orders}</div>;
	}
}

const mapStateToProps = state => {
	return {
		orders: state.order.fetchedOrders,
		loading: state.order.loading,
		error: state.order.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onOrdersFetch: () => dispatch(actions.fetchOrders())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(Orders, axios));
