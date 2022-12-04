import React, {FormEvent} from "react";
import {Modal, Tab, Tabs} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {useForm} from "react-hook-form";
import {ILogin, ISignup} from "../../../../core/models";
import {loginThunk, signupThunk} from "../../../../core/store/auth/auth.thunks";

export const AuthModal = () => {
	// redux hooks
	const modal = useAppSelector(({modal}) => modal);
	const dispatch = useAppDispatch();

	// react hook form
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<{login: ILogin; register: ISignup}>();

	const onToggleModalVisibility = (payload: {name?: "login" | "register"; isVisible: boolean}) => {
		dispatch(setIsVisibleModalAction({...payload, name: "login"}));
		dispatch(setIsVisibleModalAction({...payload, name: "register"}));
		return undefined;
	};

	const onSubmit = (type: "login" | "signup") => (e: FormEvent) => {
		e.preventDefault();

		handleSubmit(async (data) => {
			if (type === "login") {
				const result = await dispatch(loginThunk(data.login));

				if (result.payload) {
					dispatch(setIsVisibleModalAction({name: "login", isVisible: false}));
				}
			} else {
				const result = await dispatch(signupThunk(data.register));

				if (result.payload) {
					dispatch(setIsVisibleModalAction({name: "register", isVisible: false}));
				}
			}
		})();
	};

	return (
		<Modal
			onHide={() => onToggleModalVisibility({isVisible: false})}
			show={modal.login.isVisible || modal.register.isVisible}
			centered
		>
			<Modal.Body className="p-0">
				<button disabled type="button" className="account__close-btn " style={{cursor: "default"}}>
					<svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.2832 31.9404L32.4964 10.7272" stroke="white" stroke-width="2" />
						<path d="M32.4971 31.9404L11.2839 10.7272" stroke="white" stroke-width="2" />
					</svg>
				</button>
				<Tabs
					activeKey={modal.login.isVisible ? "login" : "register"}
					onSelect={(k) => {
						if (k) {
							dispatch(setIsVisibleModalAction({name: k === "login" ? "login" : "register", isVisible: true}));
							dispatch(setIsVisibleModalAction({name: k === "login" ? "register" : "login", isVisible: false}));
						}
					}}
				>
					<Tab eventKey="login" className="account-modal__tab__btn" title={<button type="button">Войти</button>}>
						<div className="account__body container">
							<div className="account__forms">
								<form onSubmit={onSubmit("login")} className="account__form" data-gtag-submit="popup">
									<div className="account__input">
										<input
											className="form-control"
											type="text"
											placeholder="Login"
											required
											{...register("login.login")}
										/>
									</div>
									<div className="account__input">
										<input
											className="form-control"
											type="password"
											placeholder="Password"
											required
											{...register("login.password")}
										/>
									</div>
									{/*									<input type="hidden" name="project" value="bull_etrics" />
									<input type="hidden" name="description" value="page_form" />
									<input type="hidden" name="duration" className="duration" value="" />
									<input type="hidden" name="pasted_fields" className="pasted_fields" value="" />
									<input type="hidden" name="language" value="russian" />*/}
									<button className="account__btn">Войти</button>
								</form>
							</div>
						</div>
					</Tab>
					<Tab
						eventKey="register"
						className="account-modal__tab__btn"
						title={<button type="button">Регистрация</button>}
					>
						<div className="account__body container">
							<div className="account__forms">
								<form onSubmit={onSubmit("signup")} className="account__form">
									<div className="account__input">
										<input
											className="form-control"
											type="text"
											placeholder="Name"
											required
											{...register("register.name")}
										/>
									</div>
									<div className="account__input">
										<input
											className="form-control"
											type="email"
											placeholder="E-mail"
											required
											{...register("register.email")}
										/>
									</div>
									<div className="account__input">
										<input
											className="form-control"
											type="tel"
											placeholder="Phone"
											required
											{...register("register.phone")}
										/>
									</div>
									<div className="account__input">
										<input
											className="form-control"
											type="password"
											placeholder="Password"
											required
											{...register("register.password")}
										/>
									</div>
									<div>
										<input type="checkbox" id="accept-terms" />
										<label htmlFor="accept-terms">I agree to the Terms</label>
									</div>
									<input type="hidden" name="project" value="bull_etrics" />
									<input type="hidden" name="description" value="page_form" />
									<input type="hidden" name="duration" className="duration" value="" />
									<input type="hidden" name="pasted_fields" className="pasted_fields" value="" />
									<input type="hidden" name="language" value="russian" />
									<button className="account__btn">Войти</button>
								</form>
							</div>
						</div>
					</Tab>
				</Tabs>
			</Modal.Body>
		</Modal>
	);
};
