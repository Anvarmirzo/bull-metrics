import React from "react";
import Image from "next/image";
import AddBanner from "../../../../public/images/AddBanner 1.png";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {toast} from "react-toastify";

export const MainContexts = () => {
	// redux hooks
	const contextTypes = useAppSelector(({context}) => context.types);
	const dispatch = useAppDispatch();

	const onToggleModalVisibility = (payload: {name: "order"; isVisible: boolean}) => () => {
		const context = contextTypes.data[0];
		if (context) {
			dispatch(
				setIsVisibleModalAction({
					name: payload.name,
					data: {isVisible: payload.isVisible, price: context.price, currentType: "context"},
				}),
			);
		} else {
			toast.error("На данный момент нет места для текущего контекста.");
		}
	};

	return (
		<>
			<button
				onClick={onToggleModalVisibility({name: "order", isVisible: true})}
				type="button"
				className="d-block ms-auto mt-4 mb-2 banner__decor"
			>
				<Image src={AddBanner} alt="" />
				<span>Разместить рекламу</span>
			</button>
			<div className="banner-fourth__list">
				<div className="banner-fourth__list-link">
					<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
				</div>
				<div className="banner-fourth__list-text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, architecto est. Commodi, quis! Unde,
						nesciunt? Maiores atque debitis doloremque magnam placeat assumenda quam repudiandae ut suscipit. Quos sit
						officiis aspernatur.
					</p>
				</div>
			</div>
			<div className="banner-fourth__list">
				<div className="banner-fourth__list-link">
					<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
				</div>
				<div className="banner-fourth__list-text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, architecto est. Commodi, quis! Unde,
						nesciunt? Maiores atque debitis doloremque magnam placeat assumenda quam repudiandae ut suscipit. Quos sit
						officiis aspernatur.
					</p>
				</div>
			</div>
			<div className="banner-fourth__list">
				<div className="banner-fourth__list-link">
					<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
				</div>
				<div className="banner-fourth__list-text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, architecto est. Commodi, quis! Unde,
						nesciunt? Maiores atque debitis doloremque magnam placeat assumenda quam repudiandae ut suscipit. Quos sit
						officiis aspernatur.
					</p>
				</div>
			</div>
		</>
	);
};
