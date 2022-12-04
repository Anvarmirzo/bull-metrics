import React from "react";
import {Modal, Tab, Tabs} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {useForm} from "react-hook-form";
import {ILogin} from "../../../../core/models";

export const AuthModal = () => {
	// redux hooks
	const modal = useAppSelector(({modal}) => modal);
	const dispatch = useAppDispatch();

	// react hook form
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<ILogin>();

	const onToggleModalVisibility = (payload: {name?: "login" | "register"; isVisible: boolean}) => {
		dispatch(setIsVisibleModalAction({...payload, name: "login"}));
		dispatch(setIsVisibleModalAction({...payload, name: "register"}));
		return undefined;
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
					<Tab
						eventKey="login"
						className="account-modal__tab__btn"
						title={
							<button style={{color: "inherit"}} type="button">
								Войти
							</button>
						}
					>
						<div className="account__body container">
							<div className="account__forms">
								<form className="account__form" data-gtag-submit="popup">
									<div className="account__input">
										<input className="form-control" type="email" name="email" placeholder="E-mail" required />
									</div>
									<div className="account__input">
										<input className="form-control" type="tel" name="phone" placeholder="Password" required />
									</div>
									<div className="account__input">
										<input type="checkbox" id="remember-me" checked={false} />
										<label htmlFor="remember-me">Remember me</label>
									</div>
									<input type="hidden" name="project" value="bull_etrics" />
									<input type="hidden" name="description" value="page_form" />
									<input type="hidden" name="duration" className="duration" value="" />
									<input type="hidden" name="pasted_fields" className="pasted_fields" value="" />
									<input type="hidden" name="language" value="russian" />
									<a href="account.html" className="account__btn">
										Войти
									</a>
								</form>
							</div>
						</div>
					</Tab>
					<Tab
						eventKey="register"
						className="account-modal__tab__btn"
						title={
							<button style={{color: "inherit"}} type="button">
								Регистрация
							</button>
						}
					>
						<div className="account__body container">
							<div className="account__forms">
								<form action="" method="post" className="account__form" data-gtag-submit="popup">
									<div className="account__input">
										<input className="form-control" type="text" name="text" placeholder="Login" required />
									</div>
									<div className="account__input">
										<input className="form-control" type="email" name="email" placeholder="E-mail" required />
									</div>
									<div className="account__input">
										<input className="form-control" type="tel" name="phone" placeholder="Password" required />
									</div>
									<div className="account__input">
										<input className="form-control" type="text" name="text" placeholder="Name" required />
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
									<a href="account.html" className="account__btn">
										Войти
									</a>
								</form>
							</div>
						</div>
					</Tab>
				</Tabs>
				{/*<ul className="account-modal__tab__list nav nav-tabs" id="sign-in-tabs" role="tablist">
					<li className="account-modal__tab__item nav-item" role="presentation">
						<button
							className="account-modal__tab__btn nav-link active"
							data-bs-toggle="tab"
							data-bs-target="#sign-in"
							type="button"
							role="tab"
							aria-controls="sign-in"
							aria-selected="true"
						>
							Войти
						</button>
					</li>
					<li className="account-modal__tab__item  nav-item" role="presentation">
						<button
							className="account-modal__tab__btn nav-link"
							data-bs-toggle="tab"
							data-bs-target="#sign-up"
							type="button"
							role="tab"
							aria-controls="sign-up"
							aria-selected="false"
						>
							Регистрация
						</button>
					</li>
				</ul>
				<div className="account-modal__tab__content tab-content">
					<div
						className="account-modal__tab__pane tab-pane fade show active"
						id="sign-in"
						role="tabpanel"
						aria-labelledby="modal-tabs-1"
					>
						<div className="account__body modal-body container">
							<div className="account__forms">
								<form action="" method="post" className="account__form" data-gtag-submit="popup">
									<div className="account__input">
										<input className="form-control" type="email" name="email" placeholder="E-mail" required />
									</div>
									<div className="account__input">
										<input className="form-control" type="tel" name="phone" placeholder="Password" required />
									</div>
									<div className="account__input">
										<input type="checkbox" id="remember-me" checked={false} />
										<label htmlFor="remember-me">Remember me</label>
									</div>
									<input type="hidden" name="project" value="bull_etrics" />
									<input type="hidden" name="description" value="page_form" />
									<input type="hidden" name="duration" className="duration" value="" />
									<input type="hidden" name="pasted_fields" className="pasted_fields" value="" />
									<input type="hidden" name="language" value="russian" />
									<a href="account.html" className="account__btn">
										Войти
									</a>
								</form>
							</div>
						</div>
					</div>
					<div
						className="account-modal__tab__pane tab-pane fade"
						id="sign-up"
						role="tabpanel"
						aria-labelledby="modal-tabs-2"
					>
						<div className="account__body modal-body container">
							<div className="account__forms">
								<form action="" method="post" className="account__form" data-gtag-submit="popup">
									<div className="account__input">
										<input className="form-control" type="text" name="text" placeholder="Login" required />
									</div>
									<div className="account__input">
										<input className="form-control" type="email" name="email" placeholder="E-mail" required />
									</div>
									<div className="account__input">
										<input className="form-control" type="tel" name="phone" placeholder="Password" required />
									</div>
									<div className="account__input">
										<input className="form-control" type="text" name="text" placeholder="Name" required />
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
									<a href="account.html" className="account__btn">
										Войти
									</a>
								</form>
							</div>
						</div>
					</div>
				</div>*/}
			</Modal.Body>
		</Modal>
	);
};
