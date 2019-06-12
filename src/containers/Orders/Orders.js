import React, { useEffect } from "react";
import axios from "../../axios-orders";
import { connect } from "react-redux";

import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

const orders = props => {
	useEffect(() => {
		props.onOrdersFetch(props.token, props.userId);
	}, []);

	let orders = props.orders.map(order => {
		return (
			<Order
				key={order.id}
				ingredients={order.ingredients}
				price={+order.price}
			/>
		);
	});
	if (props.loading) orders = <Spinner />;
	if (props.error) orders = <p>Could not load orders</p>;
	return <div>{orders}</div>;
};

const mapStateToProps = state => {
	return {
		orders: state.order.fetchedOrders,
		loading: state.order.loading,
		error: state.order.error,
		token: state.auth.token,
		userId: state.auth.userId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onOrdersFetch: (token, userId) =>
			dispatch(actions.fetchOrders(token, userId))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(orders, axios));
