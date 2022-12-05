import React from "react";
import Image from "next/image";
import Banner1200 from "../../../../public/images/banner-1200-150.png";
import AddBanner from "../../../../public/images/AddBanner 1.png";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {eBannerSize} from "../../../../core/models";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {toast} from "react-toastify";
import Link from "next/link";

export const Banner1200x150 = () => {
	// redux hooks
	const bannerTypes = useAppSelector(({banner}) => banner.types);
	const dispatch = useAppDispatch();

	const onToggleModalVisibility = (payload: {name: "order"; isVisible: boolean}) => () => {
		const currentType = bannerTypes.data.find((b) => b.size === eBannerSize.size_1200x150);
		if (currentType) {
			dispatch(
				setIsVisibleModalAction({
					name: payload.name,
					data: {isVisible: payload.isVisible, price: currentType.price, typeId: currentType.id, currentType: "banner"},
				}),
			);
		} else {
			toast.error("На данный момент нет места для текущего баннера.");
		}
	};

	return (
		<div className="banner-third__container container">
			<div className="banner__content banner-stroke__color">
				<Link href="/">
					<Image src={Banner1200} alt="" />
				</Link>
				<button
					onClick={onToggleModalVisibility({name: "order", isVisible: true})}
					type="button"
					className="banner__decor"
				>
					<Image src={AddBanner} alt="" />
					<span>Разместить рекламу</span>
				</button>
			</div>
		</div>
	);
};
