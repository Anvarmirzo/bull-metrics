import React from "react";

export const Header = () => {
	return (
		<header className="header-section">
			<div className="header-section__container container">
				<div className="header-section__menu">
					<ul className="header-section__list">
						<li>
							<span>
								<i className="fa fa-house-chimney"></i>
							</span>
							<a href="#">Главная</a>
						</li>
						<li className="active">
							<span>
								<i className="fa fa-cart-arrow-down"></i>
							</span>
							<a href="#">Разместить баннер</a>
						</li>
						<li>
							<span>
								<i className="fa fa-bar-chart"></i>
							</span>
							<a href="#">Статистика</a>
						</li>
						<li>
							<span>
								<i className="fa fa-address-card"></i>
							</span>
							<a href="#">Контакты</a>
						</li>
						<li>
							<span>
								<i className="fa fa-graduation-cap"></i>
							</span>
							<a href="#">Правила</a>
						</li>
						<li>
							<span>
								<i className="fa fa-file-text"></i>
							</span>
							<a href="#">Пользовательское соглашение</a>
						</li>
					</ul>
					<div className="main-header__burger">
						<input className="main-header__burger-menu-btn" type="checkbox" id="menu-btn" />
						<label className="main-header__burger-menu-icon" htmlFor="menu-btn">
							<span className="nav-icon"></span>
						</label>
						<ul className="header-section__list-mob">
							<li>
								<span>
									<i className="fa fa-house-chimney"></i>
								</span>
								<a href="#">Главная</a>
							</li>
							<li className="active">
								<span>
									<i className="fa fa-cart-arrow-down"></i>
								</span>
								<a href="#">Разместить баннер</a>
							</li>
							<li>
								<span>
									<i className="fa fa-bar-chart"></i>
								</span>
								<a href="#">Статистика</a>
							</li>
							<li>
								<span>
									<i className="fa fa-address-card"></i>
								</span>
								<a href="#">Контакты</a>
							</li>
							<li>
								<span>
									<i className="fa fa-graduation-cap"></i>
								</span>
								<a href="#">Правила</a>
							</li>
							<li>
								<span>
									<i className="fa fa-file-text"></i>
								</span>
								<a href="#">Пользовательское соглашение</a>
							</li>
						</ul>
					</div>
					<ul className="header-section__account">
						<li>
							<a href="#sign-in" data-modal-id="signInModal">
								Вход
							</a>
						</li>
						<li>
							<span>/</span>
						</li>
						<li>
							<a href="#sign-up" data-modal-id="signInModal">
								Регистрация
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
