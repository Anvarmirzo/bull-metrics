import React, {useCallback} from "react";
import Image from "next/image";
import AddBanner from "../../../../public/images/AddBanner 1.png";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {toast} from "react-toastify";
import Link from "next/link";
import {SwiperSlide} from "swiper/react";

export const MainContexts = () => {
	// redux hooks
	const [contextTypes, contexts] = useAppSelector(({context}) => [context.types, context.data]);
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

	const renderContexts = useCallback(() => {
		return contexts.map((c) => (
			<div className="banner-fourth__list" key={c.id}>
				<div className="banner-fourth__list-link">
					<Link href={c.url ?? "/"}>{c.title}</Link>
				</div>
				<div className="banner-fourth__list-text">
					<p>{c.description}</p>
				</div>
			</div>
		));
	}, [contexts]);

	const renderPlaceholders = () => {
		const placeholdersCount = 3 - contexts.length;

		if (placeholdersCount > 0) {
			return new Array(placeholdersCount).map((_, i) => (
				<div className="banner-fourth__list" key={i}>
					<div className="banner-fourth__list-link">
						<Link href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
					</div>
					<div className="banner-fourth__list-text">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, architecto est. Commodi, quis! Unde,
							nesciunt? Maiores atque debitis doloremque magnam placeat assumenda quam repudiandae ut suscipit. Quos sit
							officiis aspernatur.
						</p>
					</div>
				</div>
			));
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
			{renderContexts()}
			{renderPlaceholders()}
		</>
	);
};
