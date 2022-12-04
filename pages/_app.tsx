import "../styles/app.css";
import "../public/fonts/fontawesome/css/fontawesome.css";
import "../public/fonts/fontawesome/css/solid.css";
import "swiper/css";

import {AppProps} from "next/app";
import {wrapper} from "../core/store";
import {Provider} from "react-redux";
import {AuthModal, OrderModal} from "../components";

const MyApp = ({Component, ...rest}: AppProps) => {
	const {store, props} = wrapper.useWrappedStore(rest);

	return (
		<Provider store={store}>
			<AuthModal />
			<OrderModal />
			<Component {...props} />
		</Provider>
	);
};
export default MyApp;
