import React from "react";
import Image from "next/image";
import LargeBanner from "../../../../public/images/banner-1600-200.png";
import AddBanner from "../../../../public/images/AddBanner 1.png";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {eBannerSize, IBanner} from "../../../../core/models";
import {toast} from "react-toastify";
import {clickerPatchThunk} from "../../../../core/store/clicker/clicker.thunks";

interface IProps {
	banner?: IBanner;
}

export const Banner1600x200 = ({banner}: IProps) => {
	// redux hooks
	const bannerTypes = useAppSelector(({banner}) => banner.types);
	const dispatch = useAppDispatch();

	const onToggleModalVisibility = (payload: {name: "order"; isVisible: boolean}) => () => {
		const currentType = bannerTypes.data.find((b) => b.size === eBannerSize.size_1600x200);
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

	const onBannerClick = () => {
		if (banner) {
			dispatch(clickerPatchThunk({id: banner.id, ad: "banner"}));
		}
	};

	return (
		<div className="banner__content banner-stroke__color">
			<a onClick={onBannerClick} href={banner?.url ?? "/"} target="_blank" rel="noreferrer">
				<Image
					width={1600}
					height={200}
					src={banner?.poster?.url ?? LargeBanner}
					alt=""
					style={{width: "1600px", height: "200px", maxWidth: "100%", objectFit: "cover"}}
					crossOrigin="use-credentials"
					unoptimized
				/>
			</a>
			<button
				onClick={onToggleModalVisibility({name: "order", isVisible: true})}
				type="button"
				className="banner__decor"
			>
				<Image unoptimized src={AddBanner} alt="" />
				<span>Разместить рекламу</span>
			</button>
		</div>
	);
};
