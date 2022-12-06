import React from "react";
import Image from "next/image";
import Banner1200 from "../../../../public/images/banner-1200-150.png";
import AddBanner from "../../../../public/images/AddBanner 1.png";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {eBannerComponent, eBannerPosition, eBannerSize, IBanner} from "../../../../core/models";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {toast} from "react-toastify";
import {clickerPatchThunk} from "../../../../core/store/clicker/clicker.thunks";

interface IProps {
	banner?: IBanner;
	bannerInfo: {
		size: eBannerSize;
		component: eBannerComponent;
		position: eBannerPosition;
		index: number;
	};
}

export const Banner1200x150 = ({banner, bannerInfo}: IProps) => {
	// redux hooks
	const bannerTypes = useAppSelector(({banner}) => banner.types);
	const dispatch = useAppDispatch();

	const onToggleModalVisibility = (payload: {name: "order"; isVisible: boolean}) => () => {
		const currentType = bannerTypes.data.find(
			(b) =>
				b.size === bannerInfo.size &&
				b.component === bannerInfo.component &&
				b.position === bannerInfo.position &&
				b.index === bannerInfo.index,
		);

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
			dispatch(clickerPatchThunk({id: banner.id, type: "banner"}));
		}
	};

	return (
		<div className="banner-third__container container">
			<div className="banner__content banner-stroke__color">
				<a onClick={onBannerClick} href={banner?.url ?? "/"} target="_blank" rel="noreferrer">
					<Image
						width={1200}
						height={150}
						src={banner?.poster?.url ?? Banner1200}
						alt=""
						style={{width: "1200px", height: "150px", maxWidth: "100%", objectFit: "cover"}}
						crossOrigin="use-credentials"
						unoptimized
					/>
				</a>
				<button
					onClick={onToggleModalVisibility({name: "order", isVisible: true})}
					type="button"
					className="banner__decor"
				>
					<Image src={AddBanner} alt="" unoptimized />
					<span>Разместить рекламу</span>
				</button>
			</div>
		</div>
	);
};
