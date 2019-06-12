import React, { useState } from "react";
import { connect } from "react-redux";

import Aux from "../Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const layout = props => {
	const [showSideDrawer, setShowSideDrawer] = useState(false);

	const sideDrawerClosedHandler = () => {
		setShowSideDrawer(false);
	};

	const sideDrawerToggleHandler = () => {
		setShowSideDrawer(!showSideDrawer);
	};

	return (
		<Aux>
			<Toolbar
				isAuthenticated={props.isAuthenticated}
				drawerToggled={sideDrawerToggleHandler}
			/>
			<SideDrawer
				isAuthenticated={props.isAuthenticated}
				closed={sideDrawerClosedHandler}
				open={showSideDrawer}
			/>
			<main className={classes.Content}>{props.children}</main>
		</Aux>
	);
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

export default connect(mapStateToProps)(layout);
