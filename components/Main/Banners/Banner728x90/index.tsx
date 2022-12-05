import React from "react";
import Image from "next/image";
import Banner728 from "../../../../public/images/banner-728-90.png";
import AddBanner from "../../../../public/images/AddBanner 1.png";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {eBannerSize} from "../../../../core/models";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {toast} from "react-toastify";
import Link from "next/link";

export const Banner728x90 = () => {
	// redux hooks
	const bannerTypes = useAppSelector(({banner}) => banner.types);
	const dispatch = useAppDispatch();

	const onToggleModalVisibility = (payload: {name: "order"; isVisible: boolean}) => () => {
		const currentType = bannerTypes.data.find((b) => b.size === eBannerSize.size_728x90);
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
		<div className="banner__content banner-stroke__color">
			<Link href="/">
				<Image src={Banner728} alt="" />
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
	);
};
