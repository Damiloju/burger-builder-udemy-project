import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary";
import useHttpErrorHandler from "../../hooks/http-error-handler";

const withErrorHandler = (WrappedComponenet, axios) => {
	return props => {
		const [error, clearError] = useHttpErrorHandler(axios);

		return (
			<Aux>
				<Modal show={error} modalClosed={clearError}>
					Something didn't work!
					<p>{error ? error.message : null}</p>
				</Modal>
				<WrappedComponenet {...props} />
			</Aux>
		);
	};
};

export default withErrorHandler;
