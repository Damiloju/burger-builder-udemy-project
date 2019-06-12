import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";

const burgerBuilder = props => {
	const [purchasing, setPurchasing] = useState(false);

	useEffect(() => {
		props.onInitIngredients();
	}, []);

	const updatePurchaseState = ingredients => {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		return sum > 0;
	};

	const purchaseHandler = () => {
		if (props.isAuthenticated) {
			setPurchasing(true);
		} else {
			props.onSetAuthRedirectPath("/checkout");
			props.history.push("/auth");
		}
	};

	const purchaseCancelHandler = () => {
		setPurchasing(false);
	};

	const purchaseContinueHandler = () => {
		props.onInitPurchase();
		props.history.push("/checkout");
	};

	const disabledInfo = {
		...props.ingredients
	};

	for (let key in disabledInfo) {
		disabledInfo[key] = disabledInfo[key] <= 0;
	}

	let orderSummary = null;
	let burger = props.error ? (
		<p>Ingredients Can't be loaded!</p>
	) : (
		<Spinner />
	);

	if (props.ingredients) {
		burger = (
			<Aux>
				<Burger ingredients={props.ingredients} />
				<BuildControls
					isAuthenticated={props.isAuthenticated}
					ingredientAdded={props.onIngredientAdded}
					ingredientRemoved={props.onIngredientRemoved}
					disabled={disabledInfo}
					purchasable={updatePurchaseState(props.ingredients)}
					price={props.price}
					ordered={purchaseHandler}
				/>
			</Aux>
		);

		orderSummary = (
			<OrderSummary
				purchaseCanceled={purchaseCancelHandler}
				purchaseContinue={purchaseContinueHandler}
				price={props.price}
				ingredients={props.ingredients}
			/>
		);
	}

	return (
		<Aux>
			<Modal show={purchasing} modalClosed={purchaseCancelHandler}>
				{orderSummary}
			</Modal>
			{burger}
		</Aux>
	);
};

const mapStateToProps = state => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice,
		error: state.burgerBuilder.error,
		isAuthenticated: state.auth.token !== null
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: name => dispatch(actions.addIngredient(name)),
		onIngredientRemoved: name => dispatch(actions.removeIngredient(name)),
		onInitIngredients: () => dispatch(actions.fetchIngredient()),
		onInitPurchase: () => dispatch(actions.purchaseInit()),
		onSetAuthRedirectPath: path =>
			dispatch(actions.setAuthRedirectPath(path))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(burgerBuilder, axios));
