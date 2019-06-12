import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout/Logout";
import Spinner from "./components/UI/Spinner/Spinner";
import * as actions from "./store/actions/index";

const Auth = lazy(() => import("./containers/Auth/Auth"));
const Checkout = lazy(() => import("./containers/Checkout/Checkout"));
const Orders = lazy(() => import("./containers/Orders/Orders"));

const app = props => {
	useEffect(() => {
		props.checkIfUserIsLoggedIn();
	}, []);

	let routes = (
		<Switch>
			<Route path="/auth" component={Auth} />
			<Route path="/" component={BurgerBuilder} />
			<Redirect to="/" />
		</Switch>
	);

	if (props.isAuthenticated) {
		routes = (
			<Switch>
				<Route path="/checkout" component={Checkout} />
				<Route path="/orders" component={Orders} />
				<Route path="/logout" component={Logout} />
				<Route path="/auth" component={Auth} />
				<Route path="/" component={BurgerBuilder} />
				<Redirect to="/" />
			</Switch>
		);
	}
	return (
		<div className="App">
			<Layout>
				<Suspense fallback={<Spinner />}>{routes}</Suspense>
			</Layout>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

const mapDispatchToProps = dispatch => {
	return {
		checkIfUserIsLoggedIn: () =>
			dispatch(actions.checkIfUserIsAuthenticatedOnPageReload())
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(app)
);
