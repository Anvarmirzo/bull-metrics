import React from "react";

export const AuthModal = () => {
	return (
		<div
			className="account-modal modal fade"
			id="signInModal"
			tabIndex={-1}
			aria-labelledby="popupModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered modal-xs">
				<div className="modal-content">
					<button type="button" className="account__close-btn" data-bs-dismiss="modal">
						<svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.2832 31.9404L32.4964 10.7272" stroke="white" stroke-width="2" />
							<path d="M32.4971 31.9404L11.2839 10.7272" stroke="white" stroke-width="2" />
						</svg>
					</button>
					<ul className="account-modal__tab__list nav nav-tabs" id="sign-in-tabs" role="tablist">
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
					</div>
				</div>
			</div>
		</div>
	);
};
