import React from "react";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "../../../core/hooks";
import {setIsVisibleModalAction} from "../../../core/store/modal/modal.slices";
import {logoutThunk} from "../../../core/store/auth/auth.thunks";
import {useRouter} from "next/router";
import cn from "classnames";

export const Header = () => {
	// next hooks
	const router = useRouter();

	// redux hooks
	const dispatch = useAppDispatch();
	const auth = useAppSelector(({auth}) => auth);

	const onToggleModalVisibility = (payload: {name: "login" | "register"; isVisible: boolean}) => () => {
		dispatch(setIsVisibleModalAction(payload));
	};

	const onLogout = () => {
		dispatch(logoutThunk());
	};

	return (
		<header className="header-section">
			<div className="header-section__container container">
				<div className="header-section__menu">
					<ul className="header-section__list">
						<li className={cn({active: router.pathname === "/"})}>
							<Link className="d-flex gap-2" href="/">
								<span>
									<i className="fa fa-house-chimney"></i>
								</span>
								Главная
							</Link>
						</li>
						<li>
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
					{auth.user ? (
						<ul className="header-section__account">
							<li>
								<Link href="/account">{auth.user.name}</Link>
							</li>
							<li>
								<span>/</span>
							</li>
							<li>
								<button onClick={onLogout} type="button">
									Выход
								</button>
							</li>
						</ul>
					) : (
						<ul className="header-section__account">
							<li>
								<button type="button" onClick={onToggleModalVisibility({name: "login", isVisible: true})}>
									Вход
								</button>
							</li>
							<li>
								<span>/</span>
							</li>
							<li>
								<button onClick={onToggleModalVisibility({name: "register", isVisible: true})} type="button">
									Регистрация
								</button>
							</li>
						</ul>
					)}
				</div>
			</div>
		</header>
	);
};
