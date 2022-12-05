import "../styles/app.css";
import "../public/fonts/fontawesome/css/fontawesome.css";
import "../public/fonts/fontawesome/css/solid.css";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import {AppProps} from "next/app";
import NextNProgress from "nextjs-progressbar";
import {wrapper} from "../core/store";
import {Provider} from "react-redux";
import {AuthModal, OrderModal} from "../components";
import {ToastContainer} from "react-toastify";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../core/hooks";
import {autoLoginThunk} from "../core/store/auth/auth.thunks";
import {useRouter} from "next/router";
import {getBannersThunk, getBannerTypesThunk} from "../core/store/banner/banner.thunks";
import {setBannersAction, setBannerTypesAction} from "../core/store/banner/banner.slices";
import {getChainsThunk, getChainTypesThunk} from "../core/store/chain/chain.thunks";
import {getContextsThunk, getContextTypesThunk} from "../core/store/context/context.thunks";
import {setChainsAction, setChainTypesAction} from "../core/store/chain/chain.slices";
import {setContextsAction, setContextTypesAction} from "../core/store/context/context.slices";

const MyApp = ({Component, ...rest}: AppProps) => {
	// next hooks
	const router = useRouter();

	// redux hooks
	const dispatch = useAppDispatch();
	const user = useAppSelector(({auth}) => auth.user);

	// react hooks
	useEffect(() => {
		const promises = [
			dispatch(autoLoginThunk()),

			dispatch(getBannerTypesThunk()),
			dispatch(getChainTypesThunk()),
			dispatch(getContextTypesThunk()),

			dispatch(getBannersThunk()),
			dispatch(getChainsThunk()),
			dispatch(getContextsThunk()),
		];

		return () => {
			promises.forEach((p) => p.abort());

			dispatch(setBannerTypesAction({count: 0, data: []}));
			dispatch(setChainTypesAction({data: []}));
			dispatch(setContextTypesAction({count: 0, data: []}));

			dispatch(setBannersAction([]));
			dispatch(setChainsAction([]));
			dispatch(setContextsAction([]));
		};
	}, []);

	useEffect(() => {
		if (user && router.query["returnUrl"]) {
			void router.push(router.query["returnUrl"] as string);
		}
	}, [router.query, user]);

	return (
		<>
			<NextNProgress />
			<ToastContainer />
			<AuthModal />
			<OrderModal />
			<Component {...rest} />
		</>
	);
};

const MyAppContainer = ({...rest}: AppProps) => {
	const {store, props} = wrapper.useWrappedStore(rest);

	return (
		<Provider store={store}>
			<MyApp {...props} />
		</Provider>
	);
};

export default MyAppContainer;
